import useForm from "../hooks/useForm";
import {useSelect} from "../hooks/useSelect";

export class FilterAnnouncementsHelper {
    identifier: any;
    type: any;
    brand: any;
    model: any;
    results: any;

    constructor() {
        this.identifier = useForm('');
        this.type = useSelect();
        this.brand = useSelect();
        this.model = useSelect();
    }

    run() {
        console.log(this.brand);
    }
}