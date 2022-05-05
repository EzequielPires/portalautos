import router from "next/router";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import useForm from "../hooks/useForm";
import { useSelect } from "../hooks/useSelect";
import { api, vehicle } from "../services/api";
import { getListVehicle } from "../helpers/getListVehicle";
import { Motorcycle } from "../entities/Motorcycle";
import { VehicleFactory } from "../factory/VehicleFactory";
import { VehicleService } from "../services/VehicleService";

type MotorcycleType = {
    motorcycle: Motorcycle;
    getBrand: () => Promise<void>,
    getModel: (value) => Promise<void>,
    getVersion: (value) => Promise<void>,
    getYearModel: (value) => Promise<void>,
    getYearFabrication: (value) => Promise<void>,
    getColor: (value) => Promise<void>,
    setColorFinish: (value) => Promise<void>,

    mileage_traveled,

    description,

    price,
    statePrice,
    setStatePrice,

    category,
    listCategory,
    getCategory: () => Promise<void>,

    optionals,
    listOptionals,
    getOptionals: () => Promise<void>,

    characteristics,
    listCharacteristics,
    getCharacteristics: () => Promise<void>,

    safety: any,
    listSafety: any,
    getSafety: () => Promise<void>,

    style,
    listStyle,
    getStyle: () => Promise<void>,

    fuel,
    listFuel,
    getFuel: () => Promise<void>,

    systemFuel,
    listSystemFuel,
    getSystemFuel: () => Promise<void>

    gearshift,
    listGearshift,
    getGearshift: () => Promise<void>,

    starter,
    listStarter,
    getStarter: () => Promise<void>,

    brake,
    listBrake,
    getBrake: () => Promise<void>,

    type_motor,
    listTypeMotor,
    getTypeMotor: () => Promise<void>,

    gears,
    listGears

    cylinder,
    getGears: () => Promise<void>,

    last_digit_plate,

    stateNew,


    loading,
    setLoading,
    step,
    setStep,
    setStateNew,
    announcement,

    addCheck: (value, type) => Promise<void>,
    removeCheck: (value, type) => Promise<void>,
    getDetail: () => Promise<void>,
    activeVehicle: (id) => Promise<void>,
    viewVehicle: (id) => Promise<void>,
    buildVehicle: (data) => void,
    handleStore: () => Promise<void>,
    handleSubmit: (e) => Promise<void>,
    createMotorcycle: (e) => Promise<void>,
    editVehicle: (e, id) => Promise<void>,
    clearMotorcycle: () => void,
}

export const MotorcycleContext = createContext({} as MotorcycleType);

export function MotorcycleProvider({ children }) {
    let motorcycle = VehicleFactory.createForUseFormMotorcycle();
    const vehicleService = new VehicleService();

    const mileage_traveled = useForm('mileage_traveled');
    const description = useForm('description');
    const price = useForm('price');
    const [optionals, setOptionals] = useState([]);
    const [characteristics, setCharacteristics] = useState([]);
    const [safety, setSafety] = useState([]);
    const category = useSelect();
    const style = useSelect();
    const fuel = useSelect();
    const systemFuel = useSelect();
    const brake = useSelect();
    const starter = useSelect();
    const type_motor = useSelect();
    const gearshift = useSelect();
    const gears = useSelect();
    const cylinder = useForm('cylinder');
    const last_digit_plate = useForm('last_digit_plate');
    const [stateNew, setStateNew] = useState(false);
    const [statePrice, setStatePrice] = useState(false);

    const [listCategory, setListCategory] = useState([]);
    const [listOptionals, setListOptionals] = useState([]);
    const [listSafety, setListSafety] = useState([]);
    const [listCharacteristics, setListCharacteristics] = useState([]);
    const [listStyle, setListStyle] = useState([]);
    const [listFuel, setListFuel] = useState([]);
    const [listSystemFuel, setListSystemFuel] = useState([]);
    const [listGearshift, setListGearshift] = useState([]);
    const [listStarter, setListStarter] = useState([]);
    const [listBrake, setListBrake] = useState([]);
    const [listTypeMotor, setListTypeMotor] = useState([]);
    const [listGears, setListGears] = useState([]);

    const [loading, setLoading] = useState(null);
    const [step, setStep] = useState(1);
    const [announcement, setAnnouncement] = useState(null);

    const getBrand = async () => {
        motorcycle.model.setOptions([]);
        motorcycle.year_model.setOptions([]);
        motorcycle.year_manufacture.setOptions([]);
        motorcycle.version.setOptions([]);
        motorcycle.color.setOptions([]);
        const res = await getListVehicle.brand('motorcycle');
        res.success ? motorcycle.brand.setOptions(res.data) : console.log(res);
    }

    const getModel = async (value) => {
        motorcycle.brand.setValue(value);
        motorcycle.brand.validate(value);
        motorcycle.model.setOptions([]);
        motorcycle.year_model.setOptions([]);
        motorcycle.year_manufacture.setOptions([]);
        motorcycle.version.setOptions([]);
        motorcycle.color.setOptions([]);
        const res = await getListVehicle.model('motorcycle', value).then((res: any) => res);
        res.success && res.data.length > 0 ? motorcycle.model.setOptions(res.data) : motorcycle.brand.setError(`Nenhum modelo encontrado.`);
    }

    const getYearModel = async (value) => {
        motorcycle.model.setValue(value);
        motorcycle.model.validate(value);
        motorcycle.year_manufacture.setOptions([]);
        motorcycle.version.setOptions([]);
        motorcycle.color.setOptions([]);
        const res = await getListVehicle.yearModel('motorcycle', motorcycle.brand.value, value);
        res.success && res.data.length > 0 ? motorcycle.year_model.setOptions(res.data) : motorcycle.model.setError(`Nenhum ano encontrado.`);
    }

    const getYearFabrication = async (value) => {
        motorcycle.year_model.setValue(value);
        motorcycle.year_model.validate(value);
        motorcycle.year_manufacture.setOptions([]);
        motorcycle.version.setOptions([]);
        motorcycle.color.setOptions([]);
        motorcycle.year_manufacture.setOptions([parseInt(value), parseInt(value) - 1]);
    }

    const getVersion = async (value) => {
        motorcycle.version.setOptions([]);
        motorcycle.color.setOptions([]);
        const res = await getListVehicle.version('motorcycle', motorcycle.brand.value, motorcycle.model.value, motorcycle.year_model.value);
        let array = [];
        console.log(res)
        res.data?.forEach(item => {
            array.push({...item.version, price: item.price});
        });
        motorcycle.version.setOptions(array);
        motorcycle.year_manufacture.setValue(value);
        motorcycle.year_manufacture.validate(value);
    }

    const getColor = async (value) => {
        motorcycle.version.setValue(value);
        motorcycle.version.validate(value);
        motorcycle.version.options?.forEach(item => {
            if(item.id === value) {
                motorcycle.fipe_price.setValue(item.price);
            }
        });
        const res = await getListVehicle.details('motorcycle');
        res.success ? motorcycle.color.setOptions(res.data.colors) : console.log(res);
    }

    const setColorFinish = async (value) => {
        motorcycle.color.validate(value);
        motorcycle.color.setValue(value);
    }


    const getDetail = async () => {
        const res = await getListVehicle.details('motorcycle');
        if (res.success) {
            console.log(res)
            motorcycle.categories.setOptions(res.data.categories);
            motorcycle.styles.setOptions(res.data.styles);
            motorcycle.starters.setOptions(res.data.starters);
            motorcycle.motors.setOptions(res.data.motors);
            motorcycle.fuels.setOptions(res.data.fuels);
            motorcycle.fuel_systems.setOptions(res.data.fuel_systems);
            motorcycle.gear_shifts.setOptions(res.data.gear_shifts);
            motorcycle.directions.setOptions(res.data.directions);
            motorcycle.characteristic.setOptions(res.data.characteristics);
            motorcycle.optional.setOptions(res.data.items.optional);
            motorcycle.confort.setOptions(res.data.items.comfort);
            motorcycle.safety.setOptions(res.data.items.safety);
            motorcycle.brakes.setOptions(res.data.brakes);
        }
    } 

    const getCategory = async () => {
        const res = await getListVehicle.details('motorcycle');
        res.success ? setListCategory(res.data) : console.log(res);
    }

    const getStyle = async () => {
        const res = await getListVehicle.details('motorcycle');
        res.success ? setListStyle(res.data) : console.log(res);
    }

    const getFuel = async () => {
        const res = await getListVehicle.details('motorcycle');
        res.success ? setListFuel(res.data) : console.log(res);
    }

    const getSystemFuel = async () => {
        const res = await getListVehicle.details('motorcycle');
        res.success ? setListSystemFuel(res.data) : console.log(res);
    }

    const getGearshift = async () => {
        const res = await getListVehicle.details('motorcycle');
        res.success ? setListGearshift(res.data) : console.log(res);
    }

    const getCharacteristics = async () => {
        setLoading(true);
        const res = await getListVehicle.details('motorcycle').then((res: any) => {
            setLoading(false);
            return res;
        })
        res.success ? setListCharacteristics(res.data) : console.log(res);
    }

    const getOptionals = async () => {
        setLoading(true);
        const res = await getListVehicle.details('motorcycle').then((res: any) => {
            setLoading(false);
            return res;
        })
        res.success ? setListOptionals(res.data) : console.log(res);
    }

    const getSafety = async () => {
        setLoading(true);
        const res = await getListVehicle.details('motorcycle').then((res: any) => {
            setLoading(false);
            return res;
        })
        console.log(res);
        res.success ? setListSafety(res.data) : console.log(res);
    }

    const addCheck = async (value, type) => {
        if (type === "optional") {
            setOptionals([...optionals, value]);
        } else {
            if (type === "characteristics") {
                setCharacteristics([...characteristics, value])
            } else {
                if (type === "safety") {
                    setSafety([...safety, value]);
                }
            }
        }
    }


    const removeCheck = async (value, type) => {
        if (type === "optional") {
            let filteredArray = optionals.filter(item => item.id !== value.id);
            setOptionals(filteredArray);
        } else {
            if (type === "characteristics") {
                let filteredArray = characteristics.filter(item => item.id !== value.id);
                setCharacteristics(filteredArray);
            } else {
                if (type === "safety") {
                    let filteredArray = safety.filter(item => item.id !== value.id);
                    setSafety(filteredArray);
                }
            }
        }

    }

    const getBrake = async () => {
        const res = await getListVehicle.details('motorcycle');
        res.success ? setListBrake(res.data) : console.log(res);
    }

    const getTypeMotor = async () => {
        const res = await getListVehicle.details('motorcycle');
        res.success ? setListTypeMotor(res.data) : console.log(res);
    }

    const getGears = async () => {
        setListGears(getListVehicle.gears);
        setLoading(false);
    }

    const getStarter = async () => {
        const res = await getListVehicle.details('motorcycle');
        res.success ? setListStarter(res.data) : console.log(res);
    }


    const activeVehicle = async () => {

    }

    const buildVehicle = (data) => {
        setAnnouncement(data);
        motorcycle = motorcycle.fromObject(data);
    }

    const viewVehicle = async (id) => {
        setLoading(true);
        const res = await api.get(`/vehicle/${id}/view`).then((res: any) => res.data).catch(() => router.push('/error'));
        if (res.success === true) {
            motorcycle = motorcycle.fromObject(res.data);
            setLoading(null);
        } else {
            setLoading(null);
        }
    }

    const clearMotorcycle = () => {
        motorcycle = motorcycle.fromObjectClean();
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { 'nextauth.token': token } = parseCookies();
        if (
            motorcycle.brand.validate(motorcycle.brand.value) &&
            motorcycle.model.validate(motorcycle.model.value) &&
            motorcycle.year_model.validate(motorcycle.year_model.value) &&
            motorcycle.year_manufacture.validate(motorcycle.year_manufacture.value) &&
            motorcycle.version.validate(motorcycle.version.value) &&
            motorcycle.color.validate(motorcycle.color.value) &&
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
                router.push('/admin/anunciar/store');
            }
        }
    }

    const createMotorcycle = async (e) => {
        e.preventDefault();
        const { 'nextauth.token': token } = parseCookies();
        if (token && motorcycle.mileage_traveled.validate() && motorcycle.price.validate()) {
            const res = await vehicleService.create(motorcycle.toFormDataFromUseFormCar(), 'motorcycle');
            { res && res.success === true ? router.push(`/cadastrar-anuncio/carro/${res.data.id}`).then(() => setStep(3)) : null }
        }
    }

    const editVehicle = async (e, id) => {
        e.preventDefault();
        if (motorcycle.mileage_traveled.validate() && motorcycle.price.validate()) {
            const data = motorcycle.toFormDataFromUseFormCar();
            await vehicleService.update(data, 'motorcycle', id);
        }
    }



    return (
        <MotorcycleContext.Provider value={{
            motorcycle,
            mileage_traveled,
            description,
            price,
            optionals,
            category,
            characteristics,
            style,
            fuel,
            systemFuel,
            gearshift,
            starter,
            brake,
            type_motor,
            gears,
            cylinder,
            last_digit_plate,
            stateNew,
            statePrice,
            setStatePrice,

            safety,
            listSafety,
            getSafety,

            listOptionals,
            listCategory,
            listCharacteristics,
            listStyle,
            listFuel,
            listSystemFuel,
            listGearshift,
            listStarter,
            listBrake,
            listTypeMotor,
            listGears,

            loading,
            setLoading,
            step,
            setStep,
            setStateNew,
            announcement,

            getDetail,
            getBrand,
            getModel,
            getVersion,
            getYearModel,
            getYearFabrication,
            getColor,
            getOptionals,
            getCharacteristics,
            getCategory,
            setColorFinish,
            getStyle,
            getFuel,
            getSystemFuel,
            getGearshift,
            getStarter,
            getBrake,
            getTypeMotor,
            getGears,
            addCheck,
            removeCheck,

            activeVehicle,
            viewVehicle,
            buildVehicle,
            handleStore,
            handleSubmit,
            createMotorcycle,
            editVehicle,
            clearMotorcycle
        }}>
            {children}
        </MotorcycleContext.Provider>
    )
}