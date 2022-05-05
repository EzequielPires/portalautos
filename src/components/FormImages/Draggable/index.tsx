import Car from "../../../assets/ico/icon-carro-position-default.svg";
import Motorcycle from "../../../assets/ico/icon-moto-position-default.svg";
import { useContext, useRef } from 'react';
import { GalleryContext } from '../../../contexts/GalleryContext';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearchPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.scss';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type DraggableType = {
    image: any,
    index: any,
    onClick: any,
    id: any,
    type?: any
}

export function Draggable({ image, index, onClick, id, type }: DraggableType) {
    const refDrag = useRef(null);
    const { dropImageGallery, drag, dragOver } = useContext(GalleryContext);
    return (
        <>
            {
                image ?
                    <div
                        ref={refDrag}
                        className={styles.draggable + " draggable"}
                        data-index={index}
                        id-gallery={image.id ?? index}
                        style={{ background: `url(${image.path ? "https://portalautos.com.br/" + image.path : URL.createObjectURL(image)}) center center` }}
                        onMouseOver={(e) => dragOver(e)}
                        onMouseDown={(e) => drag(e, e.target, id)}
                    >
                        <button onClick={() => {
                            onClick(image);
                        }}>
                            <FontAwesomeIcon icon={faSearchPlus as IconProp}/>
                        </button>
                        <button onClick={() => {
                            dropImageGallery(index, image.id, id);
                        }}
                            onMouseDown={() => {
                                dropImageGallery(index, image.id, id);
                            }}>
                            <FontAwesomeIcon icon={faTrashAlt as IconProp}/>
                        </button>
                    </div>
                    :
                    <label htmlFor="multifile" className={type === 'car' ? styles.car + " " + styles.draggable + " disabled" : styles.motorcycle + " " + styles.draggable + " disabled"}>
                        {type === 'car' ? <img src={Car.src} alt="" /> : <img src={Motorcycle.src} alt="" />}
                        <span>Adicionar</span>
                    </label>
            }
        </>

    );
}