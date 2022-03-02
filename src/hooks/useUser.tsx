import { useCallback, useState } from "react"

type Nation = {
    name: string;
    id_string: string;
}

type State = {
    name: string;
    id_string: string;
    uf: string;
    nation: Nation;
}

type City = {
    name: string;
    id_string: string;
    state: State;
}

type Address = {
    zipcode: string;
    city: City;
}

type User = {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    cell_phone: string;
    cep: string;
    city: string;
    state: string;
}

export function useUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [cell, setCell] = useState('');
    const [telefone, setTelefone] = useState('');
    
    function create_user({name, email, cpf, cep, city, state, cell, telefone}) {
        
    }

    return {
        create_user
    }
}