import { Vehicle } from "./Vehicle";
import VMasker from "vanilla-masker/build/vanilla-masker.min";

export class Motorcycle extends Vehicle {
    fipe_price?: any;
    motors?: any;
    starters?: any;
    cylinder?: any;
    toFormDataFromUseFormCar() {
        const data: any = new FormData();
        data.append('motorcycle[version]', this.version.value);
        data.append('motorcycle[year_manufacture]', this.year_manufacture.value);
        data.append('motorcycle[color]', this.color.value);
        data.append('motorcycle[price]', this.price.value.replace(/(R\$) (([1-9])?(\d{2})?(.?\d{3})*?(,\d{2}))/, '$2'));
        data.append('motorcycle[mileage_traveled]', this.mileage_traveled.value);
        data.append('motorcycle[year_model]', this.year_model.value);
        !this.visible_price.value ? data.append('motorcycle[visible_price]', !this.visible_price.value) : null;
        !this.new.value ? data.append('motorcycle[new]', !this.new.value) : null;
        this.description.value ? data.append('motorcycle[description]', this.description.value) : null;
        this.categories.value != '0' ? data.append('motorcycle[category]', this.categories.value) : null;
        this.styles.value != '0' ? data.append('motorcycle[style]', this.styles.value) : null;
        this.motors.value != '0' ? data.append('motorcycle[motor_type]', this.motors.value) : null;
        this.starters.value != '0' ? data.append('motorcycle[starter]', this.starters.value) : null;
        this.fuels.value != '0' ? data.append('motorcycle[fuel]', this.fuels.value) : null;
        this.fuel_systems.value != '0' ? data.append('motorcycle[fuel_system]', this.fuel_systems.value) : null;
        this.gear_shifts.value != '0' ? data.append('motorcycle[gear_shift]', this.gear_shifts.value) : null;
        this.optional.value?.forEach(item => data.append('motorcycle[items][]', item.id));
        this.characteristic.value?.forEach(item => data.append('motorcycle[characteristics][]', item.id));
        this.safety.value?.forEach(item =>  data.append('motorcycle[items][]', item.id));
        this.confort.value?.forEach(item => data.append('motorcycle[items][]', item.id));
        this.plate.value != '' ? data.append('motorcycle[plate]', this.plate.value) : null;
        this.cylinder.value != '' ? data.append('motorcycle[cylinder]', this.cylinder.value) : null;
        this.brakes.value != '0' ? data.append('motorcycle[brake]', this.brakes.value) : null;
        this.gear_number.value != '' ? data.append('motorcycle[gear_number]', this.gear_number.value) : null;
        return data;
    }
    fromObjectClean() {
        this.brand.setValue('0');
        this.model.setValue('0');
        this.version.setValue('0');
        this.year_manufacture.setValue('0');
        this.year_model.setValue('0');
        this.mileage_traveled.setValue('');
        this.price.setValue('');
        this.color.setValue('0');
        this.description.setValue('');
        this.categories.setValue('0');
        this.styles.setValue('0');
        this.fuels.setValue('0');
        this.fuel_systems.setValue('0');
        this.gear_shifts.setValue('0');
        this.directions.setValue('0');
        this.characteristic.onChange([]);
        this.safety.onChange([]);
        this.optional.onChange([]);
        this.confort.onChange([]);
        this.brakes.setValue('0');
        this.plate.setValue('');
        this.gear_number.setValue('0');
        this.new.setValue(false);
        this.visible_price.setValue(false);
        return this;
    }
    fromObject(data: any): Motorcycle {
        this.brand.setValue(data.version.model.brand.id ?? '0');
        this.model.setValue(data.version.model.id ?? '0');
        this.version.setValue(data.version?.id ?? '0');
        this.year_manufacture.setValue(data.year_manufacture ?? '');
        this.year_model.setValue(data.year_model ?? '');
        this.mileage_traveled.setValue(data.mileage_traveled ?? '');
        this.price.setValue(VMasker.toMoney(data.price ?? ''));
        this.color.setValue(data.color?.id ?? '');
        this.description.setValue(data.description ?? '');
        this.categories.setValue(data.category?.id ?? '0');
        this.styles.setValue(data.style?.id ?? '0');
        this.motors.setValue(data.motor_type?.id ?? '0');
        this.starters.setValue(data.starter?.id ?? '0');
        this.fuels.setValue(data.fuel?.id ?? '0');
        this.fuel_systems.setValue(data.fuel_system?.id ?? '0');
        this.gear_shifts.setValue(data.gear_shift?.id ?? '0');
        this.directions.setValue(data.direction?.id ?? '0');
        this.characteristic.onChange(data.characteristics ?? []);
        this.safety.onChange(data.items.safety ?? []);
        this.optional.onChange(data.items.optional ?? []);
        this.confort.onChange(data.items.comfort ?? []);
        this.brakes.setValue(data.brake?.id ?? '0');
        this.plate.setValue(data.plate ?? '');
        this.cylinder.setValue(data.cylinder ?? '');
        this.gear_number.setValue(data.gear_number ?? '0');
        this.new.setValue(!data.new);
        this.visible_price.setValue(!data.visible_price)
        return this;
    }
}