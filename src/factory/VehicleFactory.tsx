import { Car } from "../entities/Car";
import { Motorcycle } from "../entities/Motorcycle";
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
    public static createForUseFormMotorcycle(): Motorcycle {
        const motorcycle = new Motorcycle();
        motorcycle.price = useForm('price');
        motorcycle.mileage_traveled = useForm('mileage_traveled');
        motorcycle.description = useForm('description');
        motorcycle.plate = useForm('plate');
        motorcycle.fipe_price = useForm('price');
        
        motorcycle.brand = useSelect();
        motorcycle.model = useSelect();
        motorcycle.version = useSelect();
        motorcycle.year_manufacture = useSelect();
        motorcycle.year_model = useSelect();
        motorcycle.color = useSelect();
        motorcycle.categories = useSelect();
        motorcycle.directions = useSelect();
        motorcycle.fuel_systems = useSelect();
        motorcycle.fuels = useSelect();
        motorcycle.gear_shifts = useSelect();
        motorcycle.styles = useSelect();
        motorcycle.gear_number = useSelect();
        motorcycle.brakes = useSelect();

        motorcycle.characteristic = useMultiCheckbox();
        motorcycle.confort = useMultiCheckbox();
        motorcycle.optional = useMultiCheckbox();
        motorcycle.safety = useMultiCheckbox();

        motorcycle.visible_price = useCheckbox();
        motorcycle.new = useCheckbox();
        return motorcycle;
    }
}