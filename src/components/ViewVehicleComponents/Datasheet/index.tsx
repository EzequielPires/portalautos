import styles from "./styles.module.scss";
import {Accordion} from "react-bootstrap";
import {FaCheck} from "react-icons/fa";
import { useEffect } from "react";
import { Item } from "./Item";

export function Datasheet({vehicle}) {
    useEffect(() => {
        console.log(vehicle);
    }, [vehicle])
    const verifyExist = (name) => {
        let exist = false;
        vehicle?.characteristics.forEach(item => {
            if(name === item.id_string || name === item.name) {
                exist = true;
            }
        });
        return exist;
    }
    return (
        <Accordion.Item eventKey="1" className={styles.datasheet}>
            <Accordion.Header>
                <span className={styles.title_section}>Ficha Técnica</span>
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-wrap gap-3">
                <div className="d-flex flex-wrap gap-3">
                    {vehicle?.category && <Item title="Categoria" name={vehicle.category.name}/>}
                    {vehicle?.style && <Item title="Estilo" name={vehicle.style.name}/>}
                    {vehicle?.fuel && <Item title="Combustível" name={vehicle.fuel.name}/>}
                    {vehicle?.fuel_system && <Item title="Sistema de combustível" name={vehicle.fuel_system.name}/>}
                    {vehicle?.gear_shift && <Item title="Câmbio de marchas" name={vehicle.gear_shift.name}/>}
                    {vehicle?.number_doors && <Item title="Quant. de portas" name={vehicle.number_doors}/>}
                    {vehicle?.plate && <Item title="Final de placa" name={vehicle.plate}/>}
                    {vehicle?.color && <Item title="Cor" name={vehicle.color.name}/>}
                    {vehicle && <Item title="Condição" name={vehicle.new ? 'Novo' : 'Usado'}/>}
                    {verifyExist('alienado') && <Item title="Alienado" name={'Sim'}/>}
                    {verifyExist('unico-dono') && <Item title="Único dono" name={'Sim'}/>}
                    {verifyExist('ipva-pago') && <Item title="IPVA pago" name={'Sim'}/>}
                    {verifyExist('licenciado') && <Item title="Licenciado" name={'Sim'}/>}
                    {verifyExist('Aceita Troca') && <Item title="Aceita Troca" name={'Sim'}/>}
                    {verifyExist('garantia-de-fabrica') && <Item title="Garantia de fábrica" name={'Sim'}/>}
                    {verifyExist('todas-as-revisoes-feitas-pela-agenda-do-veiculo') && <Item title="Revisões pela agenda" name={'Sim'}/>}
                    {verifyExist('todas-as-revisoes-feitas-pela-concessionaria') && <Item title="Revisões pela concessionária" name={'Sim'}/>}
                </div>
            </Accordion.Body>
        </Accordion.Item>
    )
}