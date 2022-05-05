import axios from "axios";
import router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import { User } from "../Models/User";
import { UserRepository } from "../repositories/UserRepository";
import { api } from "../services/api";
import { recoverUserInformation, signInRequest, signInRequestFacebook } from "../services/auth";

type Auth = {
    user: User;
    email: any;
    password: any;
    favorites: any;
    signIn: () => Promise<void | boolean>;
    signInFacebook: ({ accessToken }) => Promise<void | boolean>;
    addFavorite: (id) => Promise<void | boolean>;
    removeFavorite: (id) => Promise<void | boolean>;
    signOut: () => void;
    verify: () => void;
    old_password: any;
    password_repeat: any;
    forgotPassword: (email) => Promise<void | boolean>;
    alterPassword: () => Promise<void | boolean>;
    resetPassword: (password_first, password_second, tokenResponse) => Promise<void | boolean>;
}

export const AuthContext = createContext({} as Auth);

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null);
    const email = useForm('email');
    const password = useForm('email');
    const old_password = useForm('password');
    const password_repeat = useForm('password_repeat');
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies();
        if (token) {
            recoverUserInformation().then((response: any) => {
                setUser(response.user);
                getFavorites();
            })
        }
    }, [])

    const getFavorites = async () => {
        const res = await api.get('favorite/list').then(res => res.data);
        let array = [];
        res.data.forEach(item => {
            array.push(item.id);
        });
        setFavorites(array);
    }

    const verify = () => {
        const { 'nextauth.token': token } = parseCookies();
        const { 'user': user } = parseCookies();
        if (token && user) {
            setUser(null);
            destroyCookie(null, 'nextauth.token', { path: '/', });
            destroyCookie(null, 'user', { path: '/', });
        }
    }

    const setTokenCookies = (token) => setCookie(undefined, 'nextauth.token', token, { maxAge: 60 * 60 * 1, path: '/', })
    const setUserCookies = (user) => setCookie(undefined, 'user', user, { maxAge: 60 * 60 * 1, path: '/', });

    const addFavorite = async (id) => {
        const data = new FormData();
        data.append('vehicle', id.toString());
        const res = await api.post('favorite/add', data).then(res => res.data);
        console.log(res.data.favorites);
        let array = [];
        for (let key in res.data.favorites) {
            array.push(res.data.favorites[key]);
        }
        setFavorites(array);
    }

    const removeFavorite = async (id) => {
        const res = await api.delete(`favorite/${id}/remove`).then(res => res.data);
        let array = [];
        console.log(Array.isArray(res.data.favorites));
        if(Array.isArray(res.data.favorites)) {
            setFavorites(res.data.favorites);
        } else {
            for (let key in res.data.favorites) {
                array.push(res.data.favorites[key]);
            }
            setFavorites(array);
        }
    }

    const signIn = async () => {
        const { token } = await signInRequest(email.value, password.value);
        if (!token) {
            return false;
        } else {
            const userRepository = new UserRepository();
            setTokenCookies(token);
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            const user = await userRepository.findOne();
            setUserCookies(JSON.stringify(user));
            { user ? setUser(user) : setUser(null) }
            let { r, f } = router.query;
            f ? addFavorite(f) : null;
            r ? router.push(`${r}`) : router.push('/meus-anuncios');
            return true;
        }
    }

    async function signInFacebook({ accessToken }) {
        const { token, user } = await signInRequestFacebook({
            accessToken
        })
        if (token === null) {
            return false;
        } else {
            verify();
            setUser(user);
            setTokenCookies(token);
            setUserCookies(JSON.stringify(user));
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            router.push('/meus-anuncios');
            return true;
        }
    }

    const signOut = () => {
        verify();
        router.push('/login');
    }

    async function forgotPassword(email) {
        const data = new FormData();
        data.append('email', email);
        let dataRecovery = await api.post('/credentials/forgot-password', data)
            .then(function (response: any) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        if (dataRecovery.success === true) {
            await axios.post('/api/password', {
                email: email,
                token: dataRecovery.data.token
            });
            return true;
        } else {
            return false;
        }
    }

    async function alterPassword() {
        const data = new FormData();
        data.append('old_password', old_password.value);
        data.append('password[first]', password.value);
        data.append('password[second]', password_repeat.value);

        const res = await api.post('/user/change-password', data)
            .then((res): any => res.data)
            .catch(() => router.push('/error'));
        if (res.success === true) {
            old_password.setValue('');
            password.setValue('');
            password_repeat.setValue('');
            return true;
        } else {
            return false;
        }
    }

    async function resetPassword(password_first, password_second, tokenResponse) {
        const primaryToken = new FormData();
        console.log(tokenResponse);
        primaryToken.append('token', tokenResponse);
        let token = await api.post('/credentials/reset-password-token-info', primaryToken)
            .then(function (response: any) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        const data = new FormData();
        data.append('token', token.data.token);
        data.append('password[first]', password_first);
        data.append('password[second]', password_second);

        let dataResetPassword = await api.post('/credentials/reset-password', data)
            .then(function (response: any) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        if (dataResetPassword.success === true) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            email,
            password,
            favorites,
            signIn,
            addFavorite,
            removeFavorite,
            signInFacebook,
            signOut,
            verify,
            old_password,
            password_repeat,
            forgotPassword,
            resetPassword,
            alterPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}