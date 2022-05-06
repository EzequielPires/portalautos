import {parseCookies, setCookie} from "nookies";
import {Session} from "../entities/Session";
import jwt from 'jsonwebtoken';

export function generateSession (api, ctx?: any) {
    const { 'session_token': session_user } = parseCookies(ctx);
    if(!session_user) {
        let session = new Session();
        var token = jwt.sign({ session }, "46c0bcee534b4eb05cd3291c777f3229", { algorithm: 'HS256'});
        api.defaults.headers['X-Requested-session'] = `${token}`;
        setCookie(undefined, 'session_token', token, { maxAge: 60 * 60 * 12, path: '/', })
    } else {
        api.defaults.headers['X-Requested-Session'] = `${session_user}`;
    }
};