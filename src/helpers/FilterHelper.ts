import { api } from "../services/api";

export class FilterHelper {
    brands: any;
    models: any;
    versions: any;
    colors: any;
    comfort: any;
    optional: any;
    safety: any;
    fuels: any;
    fuels_systems: any;
    gearshifts: any;
    characteristics: any;
    categories: any;
    styles: any;
    brakes: any;
    vehicles: any;
    page: any;
    itemsPerPage: any;
    total: any;
    logged: any;

    async run(id) {
        const res = await api.get(this.buildLink(id)).then((res: any) => res.data);
        return res.data;
    }
    buildLink(id): string {
        let link = "ad/filter?type=car&total=1";
        id[1] ? link = link + `&brand=${id[1]}` : null;
        id[2] ? link = link + `&model=${id[2]}` : null;
        id[3] ? link = link + `&version=${id[3]}` : null;
        return link;
    }
    verifyItemIdString(value, array) {
        let selected = "0";
        array.forEach(item => {
            item.id_string === value ? selected = item.id_string : null;
        });
        return selected;
    }
}