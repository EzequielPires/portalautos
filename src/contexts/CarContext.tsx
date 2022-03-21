import router from "next/router";
import { parseCookies } from "nookies";
import { createContext, useEffect, useState } from "react";
import { Car } from "../entities/Car";
import { VehicleFactory } from "../factory/VehicleFactory";
import { getListVehicle } from "../helpers/getListVehicle";
import { api, vehicle } from "../services/api";
import { VehicleService } from "../services/VehicleService";

type CarContextType = {
    announcement: any,
    getBrand: () => void,
    getModel: (value) => Promise<void>,
    getYearModel: (value) => Promise<void>,
    getYearFabrication: (value) => Promise<void>,
    getVersion: (value) => Promise<void>,
    getColor: (value) => Promise<void>,
    setColorFinish: (value) => Promise<void>,
    loading: any,
    setLoading: any,
    car: Car,
    getDetail: () => Promise<void>,
    getUser: () => void,
    handleSubmit: (e) => Promise<void>,
    handleStore: () => Promise<void>,
    createCar: (e) => Promise<void>,
    editVehicle: (e, id) => Promise<void>,
    viewVehicle: (id) => Promise<void>,
    buildVehicle: (data) => void,
    checkVehicle: (id) => Promise<void>,
    addCheck: (value, type) => Promise<void>,
    removeCheck: (value, type) => Promise<void>,
    clearCar: () => void;
    step,
    setStep
}

export const CarContext = createContext({} as CarContextType);

export function CarProvider({ children }) {
    const [announcement, setAnnouncement] = useState(null);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(null);
    const vehicleService = new VehicleService();
    let car = VehicleFactory.createForUseFormCar();

    const clearCar = () => {
        car = car.fromObjectClean();
    }

    const getUser = async () => {
        setLoading(true);
        const { 'nextauth.token': token } = parseCookies();
        if (!token) {
            setLoading(false);
            router.push('/error');
        } else {
            setLoading(false);
        }
    }

    const getBrand = async () => {
        car.model.setOptions([]);
        car.year_model.setOptions([]);
        car.year_manufacture.setOptions([]);
        car.version.setOptions([]);
        car.color.setOptions([]);
        const res = await getListVehicle.brand('car').then((res: any) => {
            return res;
        });
        res.success ? car.brand.setOptions(res.data) : console.log(res);
    }

    const getModel = async (value) => {
        car.brand.setValue(value);
        car.brand.validate(value);
        car.model.setOptions([]);
        car.year_model.setOptions([]);
        car.year_manufacture.setOptions([]);
        car.version.setOptions([]);
        car.color.setOptions([]);
        const res = await getListVehicle.model('car', value).then((res: any) => res);
        res.success && res.data.length > 0 ? car.model.setOptions(res.data) : car.brand.setError(`Nenhum modelo encontrado.`);
    }

    const getYearModel = async (value) => {
        car.model.setValue(value);
        car.model.validate(value);
        car.year_manufacture.setOptions([]);
        car.version.setOptions([]);
        car.color.setOptions([]);
        const res = await getListVehicle.yearModel('car', car.brand.value, value).then((res: any) => res);
        res.success && res.data.length > 0 ? car.year_model.setOptions(res.data) : car.model.setError(`Nenhum ano encontrado.`);
    }

    const getYearFabrication = async (value) => {
        car.year_model.setValue(value);
        car.year_model.validate(value);
        car.year_manufacture.setOptions([]);
        car.version.setOptions([]);
        car.color.setOptions([]);
        car.year_manufacture.setOptions([parseInt(value), parseInt(value) - 1]);
    }

    const getVersion = async (value) => {
        car.version.setOptions([]);
        car.color.setOptions([]);
        const res = await getListVehicle.version('car', car.brand.value, car.model.value, car.year_model.value).then((res: any) => res);
        res.success && res.data.length > 0 ? car.version.setOptions(res.data) : car.year_manufacture.setError(`Nenhuma versão encontrada.`);
        car.year_manufacture.setValue(value);
        car.year_manufacture.validate(value);
    }

    const getColor = async (value) => {
        car.version.setValue(value);
        car.version.validate(value);
        const res = await getListVehicle.details('car');
        res.success ? car.color.setOptions(res.data.colors) : console.log(res);
    }

    const setColorFinish = async (value) => {
        car.color.setValue(value);
        car.color.validate(value);
    }

    const getDetail = async () => {
        const res = await getListVehicle.details('car');
        if (res.success) {
            console.log(res.data);
            car.categories.setOptions(res.data.categories);
            car.styles.setOptions(res.data.styles);
            car.fuels.setOptions(res.data.fuels);
            car.fuel_systems.setOptions(res.data.fuel_systems);
            car.gear_shifts.setOptions(res.data.gear_shifts);
            car.directions.setOptions(res.data.directions);
            car.characteristic.setOptions(res.data.characteristics);
            car.optional.setOptions(res.data.items.optional);
            car.confort.setOptions(res.data.items.comfort);
            car.safety.setOptions(res.data.items.safety);
            car.brakes.setOptions(res.data.brakes);
        }
    }

    /*  */
    const buildVehicle = (data) => {
        setAnnouncement(data);
        car = car.fromObject(data);
    }

    const viewVehicle = async (id) => {
        setLoading(true);
        const res = await api.get(`/vehicle/${id}/view`).then((res: any) => res.data).catch(() => router.push('/error'));
        if (res.success === true) {
            car = car.fromObject(res.data);
            setLoading(null);
        } else {
            setLoading(null);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { 'nextauth.token': token } = parseCookies();
        if (
            car.brand.validate(car.brand.value) &&
            car.model.validate(car.model.value) &&
            car.year_model.validate(car.year_model.value) &&
            car.year_manufacture.validate(car.year_manufacture.value) &&
            car.version.validate(car.version.value) &&
            car.color.validate(car.color.value) &&
            token
        ) {
            setStep(step + 1);
        }
    }

    const handleStore = async () => {
        const { 'nextauth.token': token } = parseCookies();
        if (token) {
            const res = await vehicle.get('admin/store/view')
                .then((res): any => res.data)
                .catch(() => router.push('/error'));
            if (res.success === false) {
                router.push('/criar-loja');
            }
        }
    }

    const createCar = async (e) => {
        e.preventDefault();
        const { 'nextauth.token': token } = parseCookies();
        if (token && car.mileage_traveled.validate() && car.price.validate()) {
            const res = await vehicleService.create(car.toFormDataFromUseFormCar(), 'car');
            { res && res.success === true ? router.push(`/cadastrar-anuncio/carro/${res.data.id}`).then(() => setStep(3)) : null }
        }
    }


    const editVehicle = async (e, id) => {
        e.preventDefault();
        if (car.mileage_traveled.validate() && car.price.validate()) {
            const data = car.toFormDataFromUseFormCar();
            await vehicleService.update(data, 'car', id);
        }
    }

    const checkVehicle = async (id) => {
        await api.put(`/vehicle/${id}/check`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
    }

    const addCheck = async (value, type) => {
        if (type === "optional") {
            car.optional.onChange([...car.optional.value, value]);
        } else {
            if (type === "characteristics") {
                car.characteristic.onChange([...car.characteristic.value, value]);
            } else {
                if (type === "safety") {
                    car.safety.onChange([...car.safety.value, value]);
                } else {
                    if (type === "comfort") {
                        car.confort.onChange([...car.confort.value, value]);
                    }
                }
            }
        }
    }

    const removeCheck = async (value, type) => {
        if (type === "optional") {
            let filteredArray = car.optional.value.filter(item => item.id !== value.id);
            car.optional.onChange(filteredArray);
        } else {
            if (type === "characteristics") {
                let filteredArray = car.characteristic.value.filter(item => item.id !== value.id);
                car.characteristic.onChange(filteredArray);
            } else {
                if (type === "safety") {
                    let filteredArray = car.safety.value.filter(item => item.id !== value.id);
                    car.safety.onChange(filteredArray);
                } else {
                    if (type === "comfort") {
                        let filteredArray = car.confort.value.filter(item => item.id !== value.id);
                        car.confort.onChange(filteredArray);
                    }
                }
            }
        }

    }

    return (
        <CarContext.Provider value={{
            announcement,
            getBrand,
            getModel,
            getYearModel,
            getYearFabrication,
            getVersion,
            getColor,
            setColorFinish,
            loading,
            setLoading,
            getUser,
            handleSubmit,
            handleStore,
            createCar,
            editVehicle,
            viewVehicle,
            buildVehicle,
            checkVehicle,
            addCheck,
            removeCheck,
            clearCar,
            step,
            setStep,
            car,
            getDetail,
        }}
        >
            {children}
        </CarContext.Provider>
    );
}