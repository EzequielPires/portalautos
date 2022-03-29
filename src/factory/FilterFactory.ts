import { FilterHelper } from "../helpers/FilterHelper";
import useForm from "../hooks/useForm";
import { useMultiCheckbox } from "../hooks/useMultiCheckbox";
import { useSelect } from "../hooks/useSelect";

export class FilterFactory {
    public static initialize(): FilterHelper {
        const filter = new FilterHelper();
        filter.total = useForm('text');
        filter.brands = useSelect();
        filter.models = useSelect();
        filter.versions = useSelect();
        filter.categories = useMultiCheckbox();
        filter.optional = useMultiCheckbox();
        filter.colors = useMultiCheckbox();
        filter.fuels = useMultiCheckbox();
        filter.gearshifts = useMultiCheckbox();
        filter.characteristics = useMultiCheckbox();
        filter.vehicles = useMultiCheckbox();
        return filter;
    }
}