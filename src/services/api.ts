import axios from "axios";
import { getAPIClient, getAPIUser, getAPIVehicle } from "./axios";

export const api = getAPIClient();
export const apiUser = getAPIUser();
export const vehicle = getAPIVehicle();
export const apiAuth = axios.create({
    baseURL: 'https://credentials.classificados.portalcatalao.com.br'
})
