import useForm from "../hooks/useForm";
import {useSelect} from "../hooks/useSelect";
import {api} from "../services/api";

export class FilterAnnouncementsHelper {
    state: any;
    identifier: any;
    type: any;
    brand: any;
    model: any;

    constructor() {
        this.state = useSelect();
        this.identifier = useForm('');
        this.type = useSelect();
        this.brand = useSelect();
        this.model = useSelect();
    }

    async run(query) {
        const res = await api.get(this.buildRoute(query)).then(res => res.data.data);
        this.brand.setOptions(res.vehicles.brands);
        this.model.setOptions(res.vehicles.models);
        return res.vehicles.result;
    }

    buildRoute(query) {
        let link = `/vehicle/list?limit=${query.limit ?? 20}`
        query.size ? link = link + `&page=${query.size / 20 + 1}` : null;
        query.state ? link = link + this.setStateLink(query.state) : null;
        query.type ? link = link + `&type=${query.type}` : null;
        query.brand ? link = link + `&brand=${query.brand}` : null;
        query.model ? link = link + `&model=${query.model}` : null;
        return link;
    }

    setStateLink(state) {
        let currentState = '';
        state === 'active' ? currentState = '&active=1' : null;
        state === 'sold' ? currentState = '&sold=1' : null;
        state === 'removed' ? currentState = '&active=0' : null;
        state === 'incomplete' ? currentState = '&complete=0' : null;
        return currentState;
    }
}