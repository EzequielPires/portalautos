import router from "next/router";
import { vehicle } from "../services/api";

export const getListVehicle = {
    brand,
    model,
    yearModel,
    version,
    color,
    category,
    style,
    fuel,
    systemFuel,
    gearshift,
    direction,
    optionals,
    characteristics,
    brake,
    typeMotor,
    starter,
    gears,
    safety
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
    const res = await vehicle.get(`admin/vehicle/brands/${type}`)
        .then((res: any) => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function model(type, value) {
    const res = await vehicle.get(`/admin/vehicle/model/${type}/${value}`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function yearModel(type, value) {
    const res = await vehicle.get(`/admin/vehicle/fipe/${type}/${value}/year`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function version(type, model, year) {
    const res = await vehicle.get(`admin/vehicle/fipe/${type}/${model}/${year}`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function color() {
    const res = await vehicle.get(`/admin/vehicle/color`)
        .then((res): any => {
            return res.data;
        })
    return res;
}

async function category(type) {
    const res = await vehicle.get(`/admin/vehicle/category/${type}`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function style(type) {
    const res = await vehicle.get(`/admin/vehicle/style/${type}`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function fuel() {
    const res = await vehicle.get(`/admin/vehicle/fuel`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function systemFuel() {
    const res = await vehicle.get(`/admin/vehicle/fuelsystem`)
        .then((res): any => {
            return res.data;
        })
        .catch(() => router.push('/error'));
    return res;
}

async function gearshift() {
    const res = await vehicle.get(`/admin/vehicle/gearshift`)
        .then((res): any => res.data)
        .catch(() => router.push('/error'));
    return res;
}

async function direction() {
    const res = await vehicle.get(`/admin/vehicle/direction`)
        .then((res): any => res.data)
        .catch(() => router.push('/error'));
    return res;
}

async function characteristics() {
    const res = await vehicle.get(`/admin/vehicle/characteristics`)
        .then((res): any => res.data)
        .catch(() => router.push('/error'));
    return res;
}

async function optionals(type) {
    const res = await vehicle.get(`admin/vehicle/optional/${type}`)
        .then((res: any) => res.data)
        .catch(() => router.push('/error'));
    return res;
}

async function safety(type) {
    const res = await vehicle.get(`admin/vehicle/safety/${type}`)
        .then((res: any) => res.data)
        .catch(() => router.push('/error'));
    return res;
}

async function brake(type) {
    const res = await vehicle.get(`/admin/vehicle/${type}/brake`)
        .then((res): any => res.data)
        .catch(() => router.push('/error'));
    return res;
}

async function typeMotor(type) {
    const res = await vehicle.get(`/admin/vehicle/${type}/motor`)
        .then((res): any => res.data)
        .catch(() => router.push('/error'));
    return res;
}
async function starter(type) {
    const res = await vehicle.get(`/admin/vehicle/${type}/starter`)
        .then((res): any => res.data)
        .catch(() => router.push('/error'));
    return res;
}