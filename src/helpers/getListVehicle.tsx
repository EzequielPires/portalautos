import router from "next/router";
import { api, vehicle } from "../services/api";

export const getListVehicle = {
    brand,
    model,
    yearModel,
    version,
    details,
    gears,
}

function gears() {
    let array = [
        {
            id: '1',
            name: '1',
        },
        {
            id: '2',
            name: '2',
        },
        {
            id: '3',
            name: '3',
        },
        {
            id: '4',
            name: '4',
        },
        {
            id: '5',
            name: '5',
        },
        {
            id: '6',
            name: '6',
        }
    ]
    return array;
} 

async function brand(type) {
    const res = await api.get(`fipe/${type}/brand/list`)
        .then((res: any) => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function model(type, value) {
    const res = await api.get(`/fipe/${type}/${value}/list`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function yearModel(type, brand, model) {
    const res = await api.get(`/fipe/${type}/${brand}/${model}/years`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function version(type, brand, model, year) {
    const res = await api.get(`/fipe/${type}/${brand}/${model}/years/${year}`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function details(type) {
    const res = await api.get(`/details/${type}/list`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

