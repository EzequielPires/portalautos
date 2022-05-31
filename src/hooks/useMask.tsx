import VMasker from "vanilla-masker/build/vanilla-masker.min";

export const maskCep = (v) => {
    v = v.replace(/\D/g, "");
    if (v.length >= 8) {
        v = v.replace(/^(\d{5})(\d{3}).*/, "$1-$2");
    } else {
        v = v.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    }
    return v;
}

export const maskCpf = (v) => {
    v = v.replace(/\D/g, "");
    if (v.length >= 11) {
        v = v.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/g, "$1.$2.$3-$4");
    } else {
        v = v.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$.*/g, "$1.$2.$3-$4");
    }
    return v;
}

export const maskPhone = (v) => {
    v = v.replace(/\D/g, "");
    if (v.length > 10) {
        v = v.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else {
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    }
    return v;
}

export const validateCpf = (v) => {
    let str = v.replace(/[^0-9]/g, '');
    var soma;
    var resto;
    soma = 0;
    if (str === "00000000000") return false;
    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(str.substring(i - 1, i)) * (11 - i);
    }
    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(str.substring(9, 10))) {
        return false;
    }
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(str.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(str.substring(10, 11))) {
        return false;
    }
    return true;
}

export const maskPrice = (v) => {
    VMasker(v).maskMoney({
        precision: 2,
        separator: ',',
        delimiter: '.',
        //unit: 'R$',
    });
}
export const maskLastDigitePlate = (v) => {
    v = v.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    if(v.length > 7) {
        v = v.replace(/(\w{7}).*/, "$1");
    }
    return v;
}
export const maskCylinder = (v) => {
    v = v.replace(/\D/g, "");
    if (v.length > 4) {
        v = v.replace(/^(\d{4}).*/, "$1");
    }
    return v;
}
export const mileageTraveled = (v) => {
    VMasker(v).maskMoney({
        precision: 0,
        delimiter: '.',
    });
}
export const search_id = (v) => {
    v = v.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    if(v.length > 11) {
        v = v.replace(/^(\w{11}).*/, "$1");
    }
    return v;
}