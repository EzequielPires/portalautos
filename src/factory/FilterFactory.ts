import { FilterHelper } from "../helpers/FilterHelper";
import { useFetchDefault } from "../hooks/useFetchDefault";
import useForm from "../hooks/useForm";
import { useMultiCheckbox } from "../hooks/useMultiCheckbox";
import { useSelect } from "../hooks/useSelect";

export class FilterFactory {
    public static initialize(): FilterHelper {
        const filter = new FilterHelper();
        filter.total = useForm('text');
        filter.price_max = useForm('text');
        filter.price_min = useForm('text');
        filter.mileage_traveled_max = useForm('text');
        filter.mileage_traveled_min = useForm('text');
        filter.brands = useSelect();
        filter.models = useSelect();
        filter.versions = useSelect();
        filter.categories = useMultiCheckbox();
        filter.optional = useMultiCheckbox();
        filter.colors = useMultiCheckbox();
        filter.fuels = useMultiCheckbox();
        filter.gearshifts = useMultiCheckbox();
        filter.characteristics = useMultiCheckbox();
        filter.state = useMultiCheckbox();
        filter.vehicles = useMultiCheckbox();
        filter.vehicleGet = useFetchDefault();
        return filter;
    }
}