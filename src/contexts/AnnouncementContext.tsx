import router from "next/router";
import { createContext, useEffect, useState } from "react";
import { Vehicle } from "../entities/Vehicle";
import { api } from "../services/api";

export type AnnouncementType = {
    active,
    setActive,

    activeVehicles,
    setActiveVehicles,

    inactiveVehicles,
    setInactiveVehicles,

    incompleteVehicles,
    setIncompleteVehicles,

    vehiclesSold,
    setVehiclesSold,

    identifiedVehicle,
    setIdentifiedVehicle,


    id,
    setId,

    loading,
    setLoading,

    searchVehicles,
    activeVehicle,
    soldVehicle
}

export const AnnouncementContext = createContext({} as AnnouncementType);

export function AnnouncementProvider({ children }) {
    const [active, setActive] = useState([]);
    const [activeVehicles, setActiveVehicles] = useState([]);
    const [inactiveVehicles, setInactiveVehicles] = useState([]);
    const [incompleteVehicles, setIncompleteVehicles] = useState([]);
    const [vehiclesSold, setVehiclesSold] = useState([]);
    const [identifiedVehicle, setIdentifiedVehicle] = useState([])
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(null);

    const searchVehicles = async (params) => {
        setLoading(true);
        const res = await api.get(`/vehicle/list?${params}`)
            .then((res: any) => {
                setLoading(false);
                return res.data;
            })
            .catch(() => router.push('/error'));
        if (res.success) {
            return res.data.vehicles;
        }
    }

    const activeVehicle = async (id, length) => {
        const res = await api.put(`/vehicle/${id}/active`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
        if (res.success === true) {
            setActive(res.data);
            searchVehicles(`active=1&limit=${length}`).then(res => {
                setActiveVehicles(res);
                searchVehicles(`active=0&limit=${length}`).then(res => {
                    setInactiveVehicles(res);
                })
            })
        }
    }

    const soldVehicle = async (id, length) => {
        const res = await api.put(`/vehicle/${id}/sold`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
        if (res.success === true) {
            setActive(res.data);
            searchVehicles(`sold=1&limit=${length}`).then(res => {
                setVehiclesSold(res);
                searchVehicles(`active=1&limit=${length}`).then(res => {
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

    return (
        <AnnouncementContext.Provider value={{
            active,
            setActive,
        
            activeVehicles,
            setActiveVehicles,
        
            inactiveVehicles,
            setInactiveVehicles,
        
            incompleteVehicles,
            setIncompleteVehicles,
        
            vehiclesSold,
            setVehiclesSold,
        
            identifiedVehicle,
            setIdentifiedVehicle,
        
        
            id,
            setId,
        
            loading,
            setLoading,

            searchVehicles,
            activeVehicle,
            soldVehicle
        }}>
            {children}
        </AnnouncementContext.Provider>
    )
}