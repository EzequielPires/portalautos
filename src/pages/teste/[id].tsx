import { useState } from "react";
import {useRouter} from "next/router";

export default function Teste() {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <span>Id teste: {id}</span>
        </div>
    )
}
