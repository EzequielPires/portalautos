import router from "next/router";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import useSWR from "swr";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import { getListVehicle } from "../helpers/getListVehicle";
import { useFetch } from "../hooks/useFetch";
import useForm from "../hooks/useForm";
import { useSelect } from "../hooks/useSelect";
import { vehicle } from "../services/api";

type CarContextType = {
    announcement: any,

    price: any,
    mileage_traveled: any,
    description: any,
    last_digit_plate: any,

    brand: any,
    listBrand: any,
    getBrand: () => void,

    model: any,
    listModel: any,
    getModel: (value) => Promise<void>,

    yearModel: any,
    listYearModel: any,
    getYearModel: (value) => Promise<void>,

    yearFabrication: any,
    listYearFabrication: any,
    getYearFabrication: (value) => Promise<void>,

    version: any,
    listVersion: any,
    getVersion: (value) => Promise<void>,

    color: any,
    listColor: any,
    getColor: (value) => Promise<void>,
    setColorFinish: (value) => Promise<void>,

    category: any,
    listCategory: any,
    getCategoriesCar: () => Promise<void>,

    fuel: any,
    listFuel: any,
    getFuel: () => Promise<void>,

    systemFuel: any,
    listSystemFuel: any,
    getSystemFuel: () => Promise<void>,

    style: any,
    listStyle: any,
    getStyle: () => Promise<void>,

    characteristics: any,
    listCharacteristics: any,
    getCharacteristics: () => Promise<void>,

    safety: any,
    listSafety: any,
    getSafety: () => Promise<void>,

    gearshift: any,
    listGearshift: any,
    getGearshift: () => Promise<void>,

    direction: any,
    listDirection: any,
    getDirection: () => Promise<void>,

    statePrice,
    setStatePrice,

    doors: any,

    stateNew,
    setStateNew,

    optional: any,
    listOptional: any,
    listOptionalVehicle: () => Promise<void>,

    loading: any,
    setLoading: any,

    getUser: () => void,
    handleSubmit: (e) => Promise<void>,
    handleStore: () => Promise<void>,
    performFirstStep: (e) => Promise<void>,
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

    const price = useForm('price');
    const mileage_traveled = useForm('mileage_traveled');
    const description = useForm('description');
    const last_digit_plate = useForm('last_digit_plate');

    const brand = useSelect();
    const model = useSelect();
    const yearModel = useSelect();
    const yearFabrication = useSelect();
    const version = useSelect();
    const color = useSelect();
    const category = useSelect();
    const fuel = useSelect();
    const systemFuel = useSelect();
    const style = useSelect();
    const gearshift = useSelect();
    const direction = useSelect();
    const doors = useSelect();
    const [stateNew, setStateNew] = useState(false);
    const [statePrice, setStatePrice] = useState(true);
    const [optional, setOptional] = useState([]);
    const [characteristics, setCharacteristics] = useState([]);
    const [safety, setSafety] = useState([]);

    const [listOptional, setListOptional] = useState([]);
    const [listBrand, setListBrand] = useState([]);
    const [listModel, setListModel] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [listCharacteristics, setListCharacteristics] = useState([]);
    const [listSafety, setListSafety] = useState([]);
    const [listYearModel, setListYearModel] = useState([]);
    const [listYearFabrication, setListYearFabrication] = useState([]);
    const [listVersion, setListVersion] = useState([]);
    const [listColor, setListColor] = useState([]);
    const [listStyle, setListStyle] = useState([]);
    const [listFuel, setListFuel] = useState([]);
    const [listSystemFuel, setListSystemFuel] = useState([]);
    const [listGearshift, setListGearshift] = useState([]);
    const [listDirection, setListDirection] = useState([]);


    const clearCar = () => {
        brand.setValue('0');
        model.setValue('0');
        yearModel.setValue('0');
        yearFabrication.setValue('0');
        version.setValue('0');
        color.setValue('0');
        category.setValue('0');
        fuel.setValue('0');
        systemFuel.setValue('0');
        style.setValue('0');
        gearshift.setValue('0');
        direction.setValue('0');
        doors.setValue('0');
        setStateNew(false);
        setStatePrice(true);
        setOptional([]);
        setCharacteristics([]);
        setSafety([]);
        price.setValue('');
        description.setValue('');
        mileage_traveled.setValue('');
        last_digit_plate.setValue('');
        setListModel([]);
        setListYearModel([]);
        setListVersion([]);
        setListYearFabrication([]);
        setListColor([]);
        setListDirection([]);
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

    /* Buscar listas */

    const getBrand = async () => {
        setListModel([]);
        setListYearModel([]);
        setListVersion([]);
        setListYearFabrication([]);
        setListColor([]);
        const res = await getListVehicle.brand('car').then((res: any) => {
            return res;
        });
        res.success ? setListBrand(res.data) : console.log(res);
    }

    const getModel = async (value) => {
        brand.setValue(value);
        brand.validate(value);
        setListModel([]);
        setListYearModel([]);
        setListVersion([]);
        setListYearFabrication([]);
        setListColor([]);
        const res = await getListVehicle.model('car', value).then((res: any) => {
            return res;
        });
        res.success && res.data.length > 0 ? setListModel(res.data) : brand.setError(`Nenhum modelo encontrado.`);
    }

    const getYearModel = async (value) => {
        model.setValue(value);
        model.validate(value);
        setListVersion([]);
        setListColor([]);
        setListYearFabrication([]);
        const res = await getListVehicle.yearModel('car', value).then((res: any) => {
            return res;
        });
        res.success && res.data.length > 0 ? setListYearModel(res.data) : model.setError(`Nenhum ano encontrado.`);
    }

    const getYearFabrication = async (value) => {
        yearModel.setValue(value);
        yearModel.validate(value);
        setListYearFabrication([]);
        setListVersion([]);
        setListColor([]);
        setListYearFabrication([parseInt(value), parseInt(value) - 1]);
    }

    const getVersion = async (value) => {
        setListColor([]);
        const res = await getListVehicle.version('car', model.value, yearModel.value).then((res: any) => {
            return res;
        });
        res.success && res.data.length > 0 ? setListVersion(res.data) : yearFabrication.setError(`Nenhuma versão encontrada.`);
        yearFabrication.setValue(value);
        yearFabrication.validate(value);
    }

    const getColor = async (value) => {
        version.setValue(value);
        version.validate(value);
        const res = await getListVehicle.color().then((res: any) => {
            return res;
        });
        res.success ? setListColor(res.data) : console.log(res);
    }

    const setColorFinish = async (value) => {
        color.validate(value);
        color.setValue(value)
    }

    const getCategoriesCar = async () => {
        const res = await getListVehicle.category('car');
        res.success ? setListCategory(res.data) : console.log(res);
    }

    const getStyle = async () => {
        const res = await getListVehicle.style('car');
        res.success ? setListStyle(res.data) : console.log(res);
    }

    const getFuel = async () => {
        const res = await getListVehicle.fuel();
        res.success ? setListFuel(res.data) : console.log(res);
    }

    const getSystemFuel = async () => {
        const res = await getListVehicle.systemFuel();
        res.success ? setListSystemFuel(res.data) : console.log(res);
    }

    const getGearshift = async () => {
        const res = await getListVehicle.gearshift();
        res.success ? setListGearshift(res.data) : console.log(res);
    }

    const getDirection = async () => {
        const res = await getListVehicle.direction();
        res.success ? setListDirection(res.data) : console.log(res);
    }

    const getCharacteristics = async () => {
        setLoading(true);
        const res = await getListVehicle.characteristics().then((res: any) => {
            setLoading(false);
            return res;
        })
        res.success ? setListCharacteristics(res.data) : console.log(res);
    }

    const getSafety = async () => {
        setLoading(true);
        const res = await getListVehicle.safety('car').then((res: any) => {
            setLoading(false);
            return res;
        })
        res.success ? setListSafety(res.data) : console.log(res);
    }

    const listOptionalVehicle = async () => {
        setLoading(true);
        const res = await getListVehicle.optionals('car').then((res: any) => {
            setLoading(false);
            return res;
        })
        res.success ? setListOptional(res.data) : console.log(res);
    }

    /*  */
    const buildVehicle = (data) => {
        setAnnouncement(data);
        console.log(data);
        brand.setValue(data.fipe_vehicle.model.brand.id);
        model.setValue(data.fipe_vehicle.model.id);
        yearModel.setValue(data.fipe_vehicle.year_model);
        yearFabrication.setValue(data.year_manufacture);
        version.setValue(data.fipe_vehicle.id);
        color.setValue(data.color.id);
        price.setValue(VMasker.toMoney(data.price));
        data.description ? description.setValue(data.description) : null;
        data.visible_price ? setStatePrice(false) : setStatePrice(true);
        mileage_traveled.setValue(VMasker.toMoney(data.mileage_traveled, {
            precision: 0,
            delimiter: '.',
        }));
        data.category ? category.setValue(data.category.id) : null;
        data.style ? style.setValue(data.style.id) : null;
        data.fuel ? fuel.setValue(data.fuel.id) : null;
        data.fuel_system ? systemFuel.setValue(data.fuel_system.id) : null;
        data.quant_doors ? doors.setValue(data.quant_doors) : null;
        data.gearshift ? gearshift.setValue(data.gearshift.id) : null;
        data.direction ? direction.setValue(data.direction.id) : null;
        data.plate ? last_digit_plate.setValue(data.plate) : null;
        setStateNew(!data.new);
        setOptional(data.optionals);
        setCharacteristics(data.characteristics);
        data.safety ? setSafety(data.safety) : null;
    }

    const viewVehicle = async (id) => {
        setLoading(true);
        setOptional([]);
        const res = await vehicle.get(`admin/vehicle/${id}/view`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
        if (res.success === true) {
            buildVehicle(res.data);
            setLoading(null);
        } else {
            setLoading(null);
        }
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
                router.push('/criar-loja');
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
            data.append('car[fipe]', version.value);
            data.append('car[year_manufacture]', yearFabrication.value);
            data.append('car[color]', color.value);
            data.append('car[price]', price.value.replace(/(R\$) (([1-9])?(\d{2})?(.?\d{3})*?(,\d{2}))/, '$2'));
            data.append('car[mileage_traveled]', mileage_traveled.value);
            data.append('car[visible_price]', statePrice);
            !stateNew ? data.append('car[new]', !stateNew) : null;
            description.value ? data.append('car[description]', description.value) : null;
            const res = await vehicle.post(`/admin/vehicle/car/new`, data)
                .then((res): any => {
                    return res.data;
                })
                .catch(() => router.push('/error'));
            if (res.success === true) {
                router.push(`/cadastrar-anuncio/carro/${res.data.id}`).then(() => setStep(3));
            }
        }
    }


    const editVehicle = async (e, id) => {
        e.preventDefault();
        const { 'nextauth.token': token } = parseCookies();
        if (
            token &&
            mileage_traveled.validate() &&
            price.validate()
        ) {
            const data: any = new FormData();
            setLoading(true);
            data.append('car[fipe]', version.value);
            data.append('car[year_manufacture]', yearFabrication.value);
            data.append('car[color]', color.value);
            data.append('car[price]', price.value.replace(/(R\$) (([1-9])?(\d{2})?(.?\d{3})*?(,\d{2}))/, '$2'));
            data.append('car[mileage_traveled]', mileage_traveled.value.replace(/[^0-9]/g, ''));
            data.append('car[description]', description.value);
            !stateNew ? data.append('car[new]', !stateNew) : null;
            data.append('car[plate]', last_digit_plate.value);
            fuel.value != '0' ? data.append('car[fuel]', fuel.value) : null;
            systemFuel.value != '0' ? data.append('car[fuel_system]', systemFuel.value) : null;
            style.value != '0' ? data.append('car[style]', style.value) : null;
            category.value != '0' ? data.append('car[category]', category.value) : null;
            doors.value != '0' ? data.append('car[quant_doors]', doors.value) : null;
            gearshift.value != '0' ? data.append('car[gearshift]', gearshift.value) : null;
            direction.value != '0' ? data.append('car[direction]', direction.value) : null;
            !statePrice ? data.append('car[visible_price]', !statePrice) : null;
            optional.forEach(item => {
                data.append('car[optional][]', item.id);
            })
            characteristics.forEach(item => {
                data.append('car[characteristics][]', item.id);
            })
            safety.forEach(item => {
                data.append('car[safety][]', item.id);
            })
            await vehicle.post(`admin/vehicle/car/${id}/edit`, data)
                .then((res): any => {
                    setLoading(false);
                    console.log(res);
                    return res.data;
                })
                .catch(() => router.push('/error'));
        }
    }

    const checkVehicle = async (id) => {
        await vehicle.put(`/admin/vehicle/${id}/check`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
    }

    const addCheck = async (value, type) => {
        if (type === "optional") {
            setOptional([...optional, value]);
        } else {
            if (type === "characteristics") {
                setCharacteristics([...characteristics, value]);
            } else {
                if (type === "safety") {
                    setSafety([...safety, value]);
                }
            }
        }
    }

    const removeCheck = async (value, type) => {
        if (type === "optional") {
            let filteredArray = optional.filter(item => item.id !== value.id);
            setOptional(filteredArray);
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

    return (
        <CarContext.Provider value={{
            announcement,

            price,
            mileage_traveled,
            description,
            last_digit_plate,

            brand,
            listBrand,
            getBrand,

            model,
            listModel,
            getModel,

            yearModel,
            listYearModel,
            getYearModel,

            yearFabrication,
            listYearFabrication,
            getYearFabrication,

            version,
            listVersion,
            getVersion,

            color,
            listColor,
            getColor,
            setColorFinish,

            category,
            listCategory,
            getCategoriesCar,

            fuel,
            listFuel,
            getFuel,

            systemFuel,
            listSystemFuel,
            getSystemFuel,

            style,
            listStyle,
            getStyle,

            characteristics,
            listCharacteristics,
            getCharacteristics,

            safety,
            listSafety,
            getSafety,

            gearshift,
            listGearshift,
            getGearshift,

            direction,
            listDirection,
            getDirection,

            doors,

            stateNew,
            setStateNew,

            optional,
            listOptional,
            listOptionalVehicle,

            loading,
            setLoading,

            statePrice,
            setStatePrice,

            getUser,
            handleSubmit,
            handleStore,
            performFirstStep,
            editVehicle,
            viewVehicle,
            buildVehicle,
            checkVehicle,
            addCheck,
            removeCheck,
            clearCar,

            step,
            setStep,
        }}
        >
            {children}
        </CarContext.Provider>
    );
}