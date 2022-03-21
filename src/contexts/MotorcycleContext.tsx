import router from "next/router";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import useForm from "../hooks/useForm";
import { useSelect } from "../hooks/useSelect";
import { vehicle } from "../services/api";
import { getListVehicle } from "../helpers/getListVehicle";

type MotorcycleType = {
    brand,
    listBrand,
    getBrand: () => Promise<void>,

    model,
    listModel,
    getModel: (value) => Promise<void>,

    version,
    listVersion,
    getVersion: (value) => Promise<void>,

    yearModel,
    listYearModel,
    getYearModel: (value) => Promise<void>,

    yearFabrication,
    listYearFabrication,
    getYearFabrication: (value) => Promise<void>,

    color,
    listColor,
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

    activeVehicle: (id) => Promise<void>,
    viewVehicle: (id) => Promise<void>,
    buildVehicle: (data) => void,
    handleStore: () => Promise<void>,
    handleSubmit: (e) => Promise<void>,
    performFirstStep: (e) => Promise<void>,
    editVehicle: (e, id) => Promise<void>,
    clearMotorcycle: () => void,
}

export const MotorcycleContext = createContext({} as MotorcycleType);

export function MotorcycleProvider({ children }) {

    const brand = useSelect();
    const model = useSelect();
    const version = useSelect();
    const yearModel = useSelect();
    const yearFabrication = useSelect();
    const color = useSelect();
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


    const [listBrand, setListBrand] = useState([]);
    const [listModel, setListModel] = useState([]);
    const [listVersion, setListVersion] = useState([]);
    const [listYearModel, setListYearModel] = useState([]);
    const [listYearFabrication, setListYearFabrication] = useState([]);
    const [listColor, setListColor] = useState([]);
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
        setListModel([]);
        setListYearModel([]);
        setListVersion([]);
        setListColor([]);
        const res = await getListVehicle.brand('motorcycle');
        res.success ? setListBrand(res.data) : console.log(res);
    }

    const getModel = async (value) => {
        brand.validate(value);
        brand.setValue(value);
        setListYearModel([]);
        setListVersion([]);
        setListColor([]);
        const res = await getListVehicle.model('motorcycle', value);
        res.success ? setListModel(res.data) : console.log(res);
    }

    const getYearModel = async (value) => {
        /* model.setValue(value);
        model.validate(value);
        const res = await getListVehicle.yearModel('motorcycle', value);
        res.success ? setListYearModel(res.data) : console.log(res); */
    }

    const getYearFabrication = async (value) => {
        /* yearModel.setValue(value);
        yearModel.validate(value);
        setListYearFabrication([]);
        setListVersion([]);
        setListColor([]);
        setListYearFabrication([parseInt(value), parseInt(value) - 1]); */
    }

    const getVersion = async (value) => {
        /* const res = await getListVehicle.version('motorcycle', model.value, yearModel.value);
        res.success ? setListVersion(res.data) : console.log(res);
        yearFabrication.setValue(value);
        yearFabrication.validate(value); */
    }

    const getColor = async (value) => {
        version.validate(value);
        version.setValue(value);
        const res = await getListVehicle.details('motorcycle');
        res.success ? setListColor(res.data) : console.log(res);
    }

    const setColorFinish = async (value) => {
        color.validate(value);
        color.setValue(value)
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
                if(type === "safety") {
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
                if(type === "safety") {
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
        console.log(data);
        setAnnouncement(data);
        brand.setValue(data.fipe_vehicle.model.brand.id);
        model.setValue(data.fipe_vehicle.model.id);
        yearModel.setValue(data.fipe_vehicle.year_model);
        yearFabrication.setValue(data.year_manufacture);
        version.setValue(data.fipe_vehicle.id);
        color.setValue(data.color.id);
        price.setValue(VMasker.toMoney(data.price));
        description.setValue(data.description);
        console.log(data.mileage_traveled);
        mileage_traveled.setValue(VMasker.toMoney(data.mileage_traveled, {
            precision: 0,
            delimiter: '.',
        }));

        setOptionals(data.optionals);
        setCharacteristics(data.characteristics);

        data.last_digit_plate ? last_digit_plate.setValue(data.last_digit_plate) : null;
        setStateNew(!data.new);

        data.style ? style.setValue(data.style.id) : null;
        data.fuel ? fuel.setValue(data.fuel.id) : null;
        data.fuel_system ? systemFuel.setValue(data.fuel_system.id) : null;
        data.gearshift ? gearshift.setValue(data.gearshift.id) : null;
        data.starter ? starter.setValue(data.starter.id) : null;
        data.brake ? brake.setValue(data.brake.id) : null;
        data.type_motor ? type_motor.setValue(data.type_motor.id) : null;
        data.number_gears ? gears.setValue(data.number_gears) : null;
        data.cylinder ? cylinder.setValue(data.cylinder) : null;
    }

    const viewVehicle = async (id) => {
        setOptionals([]);
        const res = await vehicle.get(`admin/vehicle/${id}/view`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
        if (res.success === true) {
            buildVehicle(res.data);
        }
    }

    const clearMotorcycle = () => {
        brand.setValue('0');
        model.setValue('0');
        version.setValue('0');
        yearModel.setValue('0');
        yearFabrication.setValue('0');
        color.setValue('0');
        mileage_traveled.setValue('');
        description.setValue('');
        price.setValue('');
        setOptionals([]);
        setCharacteristics([]);
        category.setValue('0');
        style.setValue('0');
        fuel.setValue('0');
        systemFuel.setValue('0');
        brake.setValue('0');
        starter.setValue('0');
        type_motor.setValue('0');
        gearshift.setValue('0');
        gears.setValue('0');
        cylinder.setValue('');
        last_digit_plate.setValue('');
        setStateNew(false);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { 'nextauth.token': token } = parseCookies();
        if (
            brand.validate(brand.value) &&
            model.validate(model.value) &&
            yearModel.validate(yearModel.value) &&
            yearFabrication.validate(yearFabrication.value) &&
            version.validate(version.value) &&
            color.validate(color.value) &&
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

    const performFirstStep = async (e) => {
        e.preventDefault();
        const { 'nextauth.token': token } = parseCookies();
        if (
            token &&
            mileage_traveled.validate() &&
            price.validate()
        ) {
            const data: any = new FormData();
            data.append('motorcycle[fipe]', version.value);
            data.append('motorcycle[year_manufacture]', yearFabrication.value);
            data.append('motorcycle[color]', color.value);
            data.append('motorcycle[price]', price.value.replace(/(R\$) (([1-9])?(\d{2})?(.?\d{3})*?(,\d{2}))/, '$2'));
            data.append('motorcycle[mileage_traveled]', mileage_traveled.value);
            data.append('motorcycle[visible_price]', statePrice);
            description.value ? data.append('motorcycle[description]', description.value) : null;
            const res = await vehicle.post(`/admin/vehicle/motorcycle/new`, data)
                .then((res): any => {
                    return res.data;
                })
                .catch(() => router.push('/error'));
            if (res.success === true) {
                router.push(`/cadastrar-anuncio/moto/${res.data.id}`).then(() => setStep(3));
            }
        }
    }

    const editVehicle = async (e, id) => {
        e.preventDefault();
        const { 'nextauth.token': token } = parseCookies();
        if (
            token
        ) {
            const data: any = new FormData();
            setLoading(true);
            data.append('motorcycle[fipe]', version.value);
            data.append('motorcycle[year_manufacture]', yearFabrication.value);
            data.append('motorcycle[color]', color.value);
            data.append('motorcycle[price]', price.value.replace(/(R\$) (([1-9])?(\d{2})?(.?\d{3})*?(,\d{2}))/, '$2'));
            console.log(mileage_traveled.value);
            data.append('motorcycle[mileage_traveled]', mileage_traveled.value.replace(/[^0-9]/g, ''));
            data.append('motorcycle[description]', description.value);
            !stateNew ? data.append('motorcycle[new]', true) : null;
            data.append('motorcycle[last_digit_plate]', last_digit_plate.value);
            fuel.value != '0' ? data.append('motorcycle[fuel]', fuel.value) : null;
            systemFuel.value != '0' ? data.append('motorcycle[fuel_system]', systemFuel.value) : null;
            style.value != '0' ? data.append('motorcycle[style]', style.value) : null;
            category.value != '0' ? data.append('motorcycle[category]', category.value) : null;
            gearshift.value != '0' ? data.append('motorcycle[gearshift]', gearshift.value) : null;
            starter.value != '0' ? data.append('motorcycle[starter]', starter.value) : null;
            brake.value != '0' ? data.append('motorcycle[brake]', brake.value) : null;
            type_motor.value != '0' ? data.append('motorcycle[type_motor]', type_motor.value) : null;
            gears.value != '0' ? data.append('motorcycle[number_gears]', gears.value) : null;
            cylinder.value != '0' ? data.append('motorcycle[cylinder]', cylinder.value) : null;

            optionals.forEach(item => {
                data.append('motorcycle[optional][]', item.id);
            })
            characteristics.forEach(item => {
                data.append('motorcycle[characteristics][]', item.id);
            })

            const res = await vehicle.post(`admin/vehicle/motorcycle/${id}/edit`, data)
                .then((res): any => {
                    setLoading(false);
                    return res.data;
                })
                .catch(() => router.push('/error'));
        }
    }



    return (
        <MotorcycleContext.Provider value={{
            brand,
            model,
            version,
            yearModel,
            yearFabrication,
            color,
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

            listBrand,
            listModel,
            listVersion,
            listYearModel,
            listYearFabrication,
            listColor,
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
            performFirstStep,
            editVehicle,
            clearMotorcycle
        }}>
            {children}
        </MotorcycleContext.Provider>
    )
}