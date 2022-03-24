import { useFetch } from "../hooks/useFetch";
import { useSelect } from "../hooks/useSelect";

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
    
    public static run() {
        const {data} = useFetch(``);
    }
    initialize(): FilterHelper {
        this.brands = useSelect();
        this.models = useSelect();
        this.versions = useSelect();
        return this;
    }
}