import router from "next/router";
import { parseCookies } from "nookies";
import { createContext, useState } from "react";
import useForm from "../../hooks/useForm";
import { maskCep } from "../../hooks/useMask";
import { apiUser, vehicle } from "../../services/api";

type AnnouncementType = {
    loading: any,
    id: any,
    announcement,
    setLoading: any,
    vehiclesSold: any,
    setVehiclesSold: any,
    cep: any,
    city: any,
    state:any,

    activeVehicles: any,
    setActiveVehicles: any,

    inactiveVehicles: any,
    setInactiveVehicles: any,

    incompleteVehicles: any,
    setIncompleteVehicles: any,

    setIdAnnouncement: (value) => void,
    getUser: () => void,

    identifiedVehicle: any,
    setIdentifiedVehicle: any,
    searchVehiclesIdentified: (params) => Promise<void>,

    searchVehicles: (params) => Promise<any>

    viewVehicle: (id) => Promise<void>,
    searchForAds: () => Promise<void>,
    checkVehicle: (id) => Promise<void>,
    activeVehicle: (id) => Promise<void>,
    soldVehicle: (id) => Promise<void>,
    getZipcode: (str, id) => Promise<void>,
    report_vehicle: (type, description) => Promise<void | boolean>
}

export const AnnouncementContext = createContext({} as AnnouncementType);

export function AnnouncementProvider({ children }) {
    const [announcement, setAnnouncement] = useState(null);

    const cep = useForm('cep');
    const city = useForm('city');
    const state = useForm('state');

    const [activeVehicles, setActiveVehicles] = useState([]);
    const [inactiveVehicles, setInactiveVehicles] = useState([]);
    const [incompleteVehicles, setIncompleteVehicles] = useState([]);
    const [vehiclesSold, setVehiclesSold] = useState([]);
    const [identifiedVehicle, setIdentifiedVehicle] = useState([])
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(null);

    const [active, setActive] = useState(true);


    const viewVehicle = async (id) => {
        const res = await vehicle.get(`admin/vehicle/${id}/view`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
        if (res.success === true) {
            setAnnouncement(res.data);
            res.data.address && res.data.address.zipcode ? cep.setValue(maskCep(res.data.address.zipcode)) : null;
            res.data.address && res.data.address.city ? city.setValue(res.data.address.city) : null;
            res.data.address && res.data.address.state ? state.setValue(res.data.address.state) : null;
        }
    }

    const checkVehicle = async (id) => {
        await vehicle.put(`/admin/vehicle/${id}/check`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
    }

    const searchVehicles = async (params) => {
        setLoading(true);
        const res = await vehicle.get(`/admin/vehicle/list?limit=12&${params}`)
            .then((res: any) => {
                setLoading(false);
                return res.data;
            })
            .catch(() => router.push('/error'));
        if (res.success) {
            return res.data.vehicles;
        }
    }

    const searchVehiclesIdentified = async (params) => {
        setLoading(true);
        searchVehicles(params).then(res => {
            setIdentifiedVehicle(res);
            setLoading(false);
        });
    }

    const searchForAds = async () => {
        setLoading(true);
        searchVehicles('complete=0').then(res => {
            setIncompleteVehicles(res);
            searchVehicles('active=0').then(res => {
                setInactiveVehicles(res);
                searchVehicles('active=1').then(res => {
                    setActiveVehicles(res);
                    searchVehicles('sold=1').then(res => {
                        setVehiclesSold(res);
                        setLoading(false);
                    })
                })
            })
        });
    }

    const activeVehicle = async (id) => {
        const res = await vehicle.put(`/admin/vehicle/${id}/active`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
        if (res.success === true) {
            setActive(res.data);
            searchVehicles(`active=1`).then(res => {
                setActiveVehicles(res);
                searchVehicles(`active=0`).then(res => {
                    setInactiveVehicles(res);
                })
            })
        }
    }

    const soldVehicle = async (id) => {
        const res = await vehicle.put(`/admin/vehicle/${id}/sold`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
        if (res.success === true) {
            setActive(res.data);
            searchVehicles(`sold=1`).then(res => {
                setVehiclesSold(res);
                searchVehicles(`active=1`).then(res => {
                    setActiveVehicles(res);
                    searchVehicles(`active=0`).then(res => {
                        setInactiveVehicles(res);
                        searchVehicles(`complete=0`).then(res => {
                            setIncompleteVehicles(res);
                        })
                    })
                })
            })

        }
    }

    const setIdAnnouncement = (value) => {
        setId(value);
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

    async function getZipcode(str, id) {
        cep.setValue(maskCep(str));
        if (str.replace(/[^0-9]/g, '').length >= 8) {
            const response = await vehicle.get(`/admin/address/cep/${str.replace(/[^0-9]/g, '')}`)
                .then((res): any => res.data)
                .catch(error => console.error(error));
            addressCheck(response.data, id);
        } else {
            cep.setError(null);
            city.setValue('');
            state.setValue('');
        }
    }

    const editAdress = async (cep, id) => {
        const data = new FormData();
        data.append('zipcode', cep);
        const res = await vehicle.post(`admin/address/${id}/vehicle`, data)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
    }

    function addressCheck(address, id) {
        address.zipcode ? cep.setValue(maskCep(address.zipcode)) : null;
        address.zipcode ? editAdress(address.zipcode, id) : null;
        address.cep === 'Not Found' ? cep.setError('Cep não encontrado') : null;
        address.city ? city.setValue(address.city) : null;
        address.state ? state.setValue(address.state) : null;
    }

    const report_vehicle = async (type, description) => {
        const data = new FormData();

        data.append('report_vehicle[description]', description);
        //data.append('report_vehicle[type]', type);

        const res = await vehicle.post('admin/vehicle/report/new', data).then((res: any) => res.data);
        console.log(res);
        return res.success
    }


    return (
        <AnnouncementContext.Provider
            value={{
                id,
                loading,
                cep,
                city,
                state,
                
                vehiclesSold,
                setVehiclesSold,

                activeVehicles,
                setActiveVehicles,

                inactiveVehicles,
                setInactiveVehicles,

                incompleteVehicles,
                setIncompleteVehicles,

                setLoading,
                getUser,
                setIdAnnouncement,
                searchForAds,
                checkVehicle,
                activeVehicle,
                soldVehicle,
                identifiedVehicle,
                setIdentifiedVehicle,
                searchVehiclesIdentified,
                searchVehicles,
                viewVehicle,
                announcement,
                getZipcode,
                report_vehicle
            }}
        >
            {children}
        </AnnouncementContext.Provider>
    )
}