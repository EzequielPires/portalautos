import axios from "axios"
import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import {api} from "../../services/api";
import {parseCookies, setCookie} from "nookies";
import {Session} from "../../entities/Session";
import jwt from 'jsonwebtoken';

export default function Teste({res}) {
    const [data, setData] = useState(null);
    const router = useRouter();
    const {id} = router.query
    const handleTeste = async () => {
        setData(res);

    }
    useEffect(() => {
        res && handleTeste();
    }, [res]);
    return (
        <div>
            <span>{data && JSON.stringify(data)}</span>
        </div>
    )
}

export async function getServerSideProps(context) {
    let res = await api.get('https://api.portalautos.com.br/ad/22030710085/view-teset', {
        headers: {
            'X-Requested-Uri': `${context.resolvedUrl}`,
        }
    }).then(res => res.data);
    console.log(res);
    return {
        props: {res}, // will be passed to the page component as props
    }
}