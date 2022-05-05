import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from "next/router";
import { recoverUserInformation, signInRequest, signInRequestFacebook } from "../../services/auth";
import { api, apiAuth, apiUser, vehicle } from "../../services/api";
import axios from "axios";
import router from "next/router";
import useForm from "../../hooks/useForm";


type User = {
    id?: string,
    name: string,
    email: string,
    email_status?: boolean,
    description?: string,
    type_login?: string,
    social_network_id?: string,
    cpf?: string;
    cep?: string;
    city?: string;
    state?: string;
    cell?: string;
    telefone?: string;
}

type AlterPassword = {
    old_password: string,
    new_password: string,
    repeat_password: string,
}

type ResetPassword = {
    password_first: string;
    password_second: string;
    tokenResponse: string;
}

type ActiveEmail = {
    token: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    name: any;
    telefone: any;
    email: any;
    cpf: any;
    cep: any;
    city: any;
    state: any;
    password: any;
    password_repeat: any;
    old_password: any;
    code_verification: any;
    signIn: () => Promise<void | boolean>;
    signOut: () => void;
    signInFacebook: (data: SignInFacebookData) => Promise<void | boolean>;
    forgotPassword: (email) => Promise<void | boolean>
    resetPassword: (password_first, password_second, tokenResponse) => Promise<void | boolean>
    emailVerification: (e) => Promise<void>;
    activeEmail: ({ token }: ActiveEmail) => Promise<void | boolean>;
    verify: () => void;
    alterPassword: () => Promise<void | boolean>;
    cls: () => void;
}

type SignInData = {
    email: string;
    password: string;
}
type SignInFacebookData = {
    accessToken: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null);
    const name = useForm('name');
    const telefone = useForm('tel');
    const email = useForm('email');
    const cpf = useForm('cpf');
    const password = useForm('password');
    const old_password = useForm('password');
    const password_repeat = useForm('password_repeat');
    const code_verification = useForm('code_verification');
    const cep = useForm('cep');
    const city = useForm('city');
    const state = useForm('state');
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies();
        if (token) {
            recoverUserInformation().then((response: any) => {
                setUser(response.user)
            })
        }
    }, [])

    function cls() {
        name.setValue('');
        telefone.setValue('');
        email.setValue('');
        cpf.setValue('');
        password.setValue('');
        password_repeat.setValue('');
        old_password.setValue('');
        code_verification.setValue('');
        cep.setValue('');
        city.setValue('');
        state.setValue('');
    }

    async function forgotPassword(email) {
        const data = new FormData();
        data.append('email', email);
        let dataRecovery = await apiAuth.post('/user/forgot-password', data)
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
        primaryToken.append('token', tokenResponse);
        let token = await apiAuth.post('/user/reset-password-token-info', primaryToken)
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

        let dataResetPassword = await apiAuth.post('/user/reset-password', data)
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


    function verify() {
        const { 'nextauth.token': token } = parseCookies();
        const { 'user': user } = parseCookies();
        if (token && user) {
            destroyCookie(null, 'nextauth.token', {
                path: '/',
            });
            destroyCookie(null, 'user', {
                path: '/',
            });
        }
    }

    async function signIn() {
        const { token } = await signInRequest(
            email.value,
            password.value
        )
        if (token === null) {
            return false;
        } else {
            verify();
            setUser(user);
            setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 1,
                path: '/',
            })
            let json = JSON.stringify(user);
            setCookie(undefined, 'user', json, {
                maxAge: 60 * 60 * 1,
                path: '/',
            });
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            apiUser.defaults.headers['Authorization'] = `Bearer ${token}`;
            vehicle.defaults.headers['Authorization'] = `Bearer ${token}`;
            Router.push('/meus-anuncios');
            return true;
        }
    }

    async function signInFacebook({ accessToken }: SignInFacebookData) {
        const { token, user } = await signInRequestFacebook({
            accessToken
        })
        if (token === null) {
            return false;
        } else {
            verify();
            setUser(user);
            setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 1,
                path: '/',
            })
            let json = JSON.stringify(user);
            setCookie(undefined, 'user', json, {
                maxAge: 60 * 60 * 1,
                path: '/',
            });
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            apiUser.defaults.headers['Authorization'] = `Bearer ${token}`;
            vehicle.defaults.headers['Authorization'] = `Bearer ${token}`;
            Router.push('/meus-anuncios');
            return true;
        }
    }

    async function emailVerification(e) {
        e.preventDefault();
        let response = await api.put('/user/email/verification')
            .then((res: any) => {
                return res.data
            })
            .catch((error) => console.error(error));
        if (response && response.success === true) {
            await axios.post('/api/email', {
                email: response.data.user.email,
                token: response.data.token
            })
        }
    }

    async function activeEmail({ token }: ActiveEmail) {
        const data = new FormData();
        data.append('token', token);
        let response = await api.post('/user/email/active', data)
            .then(function (response: any) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        if (response && response.success === true) {
            destroyCookie(null, 'user', {
                path: '/',
            });
            setUser(response.data);
            let json = JSON.stringify(response.data);
            setCookie(undefined, 'user', json, {
                maxAge: 60 * 60 * 1,
                path: '/',
            });
            return true;
        } else {
            return false;
        }
    }

    function signOut() {
        setUser(null);
        name.setValue('');
        cpf.setValue('');
        email.setValue('');
        password.setValue('');
        telefone.setValue('');
        destroyCookie(null, 'nextauth.token', {
            path: '/',
        });
        destroyCookie(null, 'user', {
            path: '/',
        });
        Router.push('/login');
    }

    return (
        <AuthContext.Provider value={{
            user,
            name,
            telefone,
            cpf,
            code_verification,
            email,
            cep,
            city,
            state,
            password,
            password_repeat,
            old_password,
            isAuthenticated,
            signIn,
            signInFacebook,
            signOut,
            forgotPassword,
            resetPassword,
            emailVerification,
            activeEmail,
            verify,
            alterPassword,
            cls
        }}>
            {children}
        </AuthContext.Provider>
    )
}