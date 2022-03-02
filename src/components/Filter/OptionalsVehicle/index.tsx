import styles from "./styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useCheckbox} from "../../../hooks/useCheckbox";
import {Checkbox} from "../../Checkbox";
import {ButtonMore} from "../../ButtonMore";

export function OptionalsVehicle() {
    const airbag = useCheckbox();
    const alarme = useCheckbox();
    const arCondicionado = useCheckbox();
    const arQuente = useCheckbox();
    return (
      <div className={styles.optionals_vehicle}>
            <span className={styles.title}>Opcionais</span>
          <div className="d-flex gap-2 flex-column">
              <Checkbox id="airbag" label="Airbag" {...airbag}/>
              <Checkbox id="alarme" label="Alarme" {...alarme}/>
              <Checkbox id="arCondicionado" label="Ar Condicionado" {...arCondicionado}/>
              <Checkbox id="arQuente" label="Ar Quente" {...arQuente}/>
          </div>
          <div className="d-flex justify-content-end mt-3">
              <ButtonMore />
          </div>
      </div>
    );
}