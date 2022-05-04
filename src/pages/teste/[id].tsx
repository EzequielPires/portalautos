import axios from "axios"
import { useEffect, useState } from "react";
import {useRouter} from "next/router";

export default function Teste() {
    const [data, setData] = useState(null);
    const router = useRouter();
    const {id} = router.query
    const handleTeste = async () => {
        console.log(router.asPath)
        await axios.get('https://api.portalautos.com.br/ad/22030710085/view-teset', {
            headers: {
                'X-Requested-Uri': `${router.asPath}`
            }
        }).then(res => setData(res.data));
    }
    useEffect(() => {
        id && handleTeste();
    }, [id]);
    return (
        <div>
            <span>{data && JSON.stringify(data)}</span>
        </div>
    )
}