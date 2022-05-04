import axios from "axios"
import { useEffect, useState } from "react";

export default function Teste() {
    const [data, setData] = useState(null)
    const handleTeste = async () => {
        await axios.get('https://api.portalautos.com.br/ad/22030710085/view-teset').then(res => setData(res.data));
    }
    useEffect(() => {
        handleTeste();
    }, []);
    return (
        <div>
            <span>{data && JSON.stringify(data)}</span>
        </div>
    )
}