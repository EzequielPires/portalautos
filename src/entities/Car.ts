import VMasker from "vanilla-masker/build/vanilla-masker.min";
import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    doors?: any;
    fipe_price?: any;
    toFormDataFromUseFormCar() {
        const data: any = new FormData();
        data.append('car[version]', this.version.value);
        data.append('car[year_manufacture]', this.year_manufacture.value);
        data.append('car[color]', this.color.value);
        data.append('car[price]', this.price.value.replace(/(R\$) (([1-9])?(\d{2})?(.?\d{3})*?(,\d{2}))/, '$2'));
        data.append('car[mileage_traveled]', this.mileage_traveled.value);
        data.append('car[year_model]', this.year_model.value);
        !this.visible_price.value ? data.append('car[visible_price]', !this.visible_price.value) : null;
        !this.new.value ? data.append('car[new]', !this.new.value) : null;
        this.description.value ? data.append('car[description]', this.description.value) : null;
        this.categories.value != '0' ? data.append('car[category]', this.categories.value) : null;
        this.styles.value != '0' ? data.append('car[style]', this.styles.value) : null;
        this.fuels.value != '0' ? data.append('car[fuel]', this.fuels.value) : null;
        this.fuel_systems.value != '0' ? data.append('car[fuel_system]', this.fuel_systems.value) : null;
        this.gear_shifts.value != '0' ? data.append('car[gear_shift]', this.gear_shifts.value) : null;
        this.directions.value != '0' ? data.append('car[direction]', this.directions.value) : null;
        this.optional.value?.forEach(item => data.append('car[items][]', item.id));
        this.characteristic.value?.forEach(item => data.append('car[characteristics][]', item.id));
        this.safety.value?.forEach(item =>  data.append('car[items][]', item.id));
        this.confort.value?.forEach(item => data.append('car[items][]', item.id));
        this.plate.value != '' ? data.append('car[plate]', this.plate.value) : null;
        this.brakes.value != '0' ? data.append('car[brake]', this.brakes.value) : null;
        this.doors.value != '' ? data.append('car[number_doors]', this.doors.value) : null;
        this.gear_number.value != '' ? data.append('car[gear_number]', this.gear_number.value) : null;
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
        this.doors.setValue('0');
        this.gear_number.setValue('0');
        this.new.setValue(false);
        this.visible_price.setValue(false);
        return this;
    }
    fromObject(data: any): Car {
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
        this.doors.setValue(data.number_doors ?? '0');
        this.gear_number.setValue(data.gear_number ?? '0');
        this.new.setValue(!data.new);
        this.visible_price.setValue(!data.visible_price)
        return this;
    }
}