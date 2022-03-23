import { Car } from "../entities/Car";
import { Vehicle } from "../entities/Vehicle";
import { useCheckbox } from "../hooks/useCheckbox";
import useForm from "../hooks/useForm";
import { useMultiCheckbox } from "../hooks/useMultiCheckbox";
import { useSelect } from "../hooks/useSelect";

export class VehicleFactory {
    public static createForUseFormCar(): Car {
        const car = new Car();
        car.price = useForm('price');
        car.mileage_traveled = useForm('mileage_traveled');
        car.description = useForm('description');
        car.plate = useForm('plate');
        car.fipe_price = useForm('price');
        
        car.brand = useSelect();
        car.model = useSelect();
        car.version = useSelect();
        car.year_manufacture = useSelect();
        car.year_model = useSelect();
        car.color = useSelect();
        car.categories = useSelect();
        car.directions = useSelect();
        car.fuel_systems = useSelect();
        car.fuels = useSelect();
        car.gear_shifts = useSelect();
        car.styles = useSelect();
        car.doors = useSelect();
        car.gear_number = useSelect();
        car.brakes = useSelect();

        car.characteristic = useMultiCheckbox();
        car.confort = useMultiCheckbox();
        car.optional = useMultiCheckbox();
        car.safety = useMultiCheckbox();

        car.visible_price = useCheckbox();
        car.new = useCheckbox();
        return car;
    }
}