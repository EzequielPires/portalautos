import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
    const { 'nextauth.token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'https://credentials.classificados.portalcatalao.com.br'
    })

    
    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    return api;
}
export function getAPIUser(ctx?: any) {
    const { 'nextauth.token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'https://credentials.classificados.portalcatalao.com.br/user'
    })

    
    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    return api;
}
export function getAPIVehicle(ctx?: any) {
    const { 'nextauth.token': token } = parseCookies(ctx);

    const vehicle = axios.create({
        baseURL: 'https://api.classificados.portalcatalao.com.br/'
    })

    
    if (token) {
        vehicle.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    return vehicle;
}