import base64 from "base-64";

export class FilterHelper {
    type: any;
    brakes: any;
    brands: any;
    categories: any;
    colors: any;
    comfort: any;
    characteristics: any;
    fuels: any;
    fuels_systems: any;
    gearshifts: any;
    itemsPerPage: any;
    logged: any;
    mileage_traveled_min: any;
    mileage_traveled_max: any;
    models: any;
    optional: any;
    page: any;
    price_min: any;
    price_max: any;
    safety: any;
    styles: any;
    state: any;
    total: any;
    versions: any;
    vehicles: any;
    vehicleGet: any;

    async run(id, query) {
        const res:any = await this.vehicleGet.fetch(this.buildLink(id, query, null));
        return res.data;
    }
    buildLink(id, query, page): string {
        let obj = query ? this.decode(query) : null;
        let link = `ad/filter?type=${id[0] === 'motos' ? 'motorcycle' : 'car'}&total=1&limit=20&page=${page ?? '1'}`;
        id[1] ? link = link + `&brand=${id[1]}` : null;
        id[2] ? link = link + `&model=${id[2]}` : null;
        id[3] ? link = link + `&version=${id[3]}` : null;
        if(obj) {
            obj.category.length > 0 ? link = link + `&category=[${obj.category}]` : null;
            obj.color.length > 0 ? link = link + `&color=[${obj.color}]` : null;
            obj.characteristics.length > 0 ? link = link + `&characteristics=[${obj.characteristics}]` : null;
            obj.optional.length > 0 ? link = link + `&optional=[${obj.optional}]` : null;
            obj.price_max != "" ? link = link + `&price_max=${obj.price_max + '00'}` : null;
            obj.price_min != "" ? link = link + `&price_min=${obj.price_min + '00'}` : null;
            obj.mileage_traveled_max != "" ? link = link + `&mileage_traveled_max=${obj.mileage_traveled_max}` : null;
            obj.mileage_traveled_min != "" ? link = link + `&mileage_traveled_min=${obj.mileage_traveled_min}` : null;
        }
        return link;
    }
    async more(id, query, page) {
        const res:any = await this.vehicleGet.fetch(this.buildLink(id, query, page));
        return res.data;
    }
    verifyItemIdString(value, array) {
        let selected = "0";
        array.forEach(item => {
            item.id_string === value ? selected = item.id_string : null;
        });
        return selected;
    }
    buildQuery(type, value, link) {
        let query = {
            optional: [],
            category: [],
            color: [],
            characteristics: [],
            price_min: '',
            price_max: '',
            mileage_traveled_max: '',
            mileage_traveled_min: '',
            state: [],
        }
        link ? query = this.decode(link) : null;
        {type === "optional" ? query.optional.push(value) : null}
        {type === "category" ? query.category.push(value) : null}
        {type === "characteristics" ? query.characteristics.push(value) : null}
        {type === "color" ? query.color.push(value) : null}
        {type === "price" ? query.price_min = value[0] : null}
        {type === "price" ? query.price_max = value[1] : null}
        {type === "mileage_traveled" ? query.mileage_traveled_min = value[0] : null}
        {type === "mileage_traveled" ? query.mileage_traveled_max = value[1] : null}
        {type === "state" ? query.state.push(value) : null}
        return this.encode(query);
    }
    filterQuery(type, value, link) {
        let query = {
            optional: [],
            category: [],
            color: [],
            characteristics: [],
            state: [],
            price_min: '',
            price_max: '',
            mileage_traveled_max: '',
            mileage_traveled_min: ''
        }
        link ? query = this.decode(link) : null;
        {type === "optional" ? query.optional = query.optional.filter(item => item != value) : null}
        {type === "category" ? query.category = query.category.filter(item => item != value) : null}
        {type === "state" ? query.state = query.state.filter(item => item != value) : null}
        {type === "characteristics" ? query.characteristics = query.characteristics.filter(item => item != value) : null}
        {type === "color" ? query.color = query.color.filter(item => item != value) : null}
        return this.encode(query);
    }
    encode(query) {
        let link = '?filter='
        let obj_string = JSON.stringify(query);
        let encode = base64.encode(obj_string);
        return link+encode;
    }
    decode(string) {
        let decode = base64.decode(string);
        let obj = JSON.parse(decode);
        return obj;
    }
}