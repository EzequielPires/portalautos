import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { CarContext } from "../../contexts/CarContext";
import { GalleryContext } from "../../contexts/GalleryContext";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading";
import { Draggable } from "./Draggable";
import styles from "./styles.module.scss";

export function FormImages() {
    const { onChangeGallery, initialGallery, orderGallery, gallery, setGallery } = useContext(GalleryContext);
    const { announcement, loading, setLoading } = useContext(CarContext);
    const newRouter = useRouter();
    const { id } = newRouter.query;
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setImage(image);
        setShow(true)
    };

    return (
        <div className={styles.form_images}>
            <input
                className="d-none"
                id="multifile"
                name="multifile"
                type="file"
                multiple
                onChange={e => {
                    console.log(e.target.files);
                    onChangeGallery(e, id);
                }}
            />
            {loading ? <Loading /> : null}
            <p>Foto principal</p>
            <div className={styles.zone + " zone gap-3 justify-content-center"}>
                <Draggable
                    image={gallery[0] ?? null}
                    index={0}
                    id={id}
                    type={announcement && announcement.type ? announcement.type : null}
                    onClick={handleShow}
                />
                <Draggable
                    image={gallery[1] ?? null}
                    index={1}
                    id={id}
                    type={announcement && announcement.type ? announcement.type : null}
                    onClick={handleShow}
                />
                <Draggable
                    image={gallery[2] ?? null}
                    index={2}
                    id={id}
                    type={announcement && announcement.type ? announcement.type : null}
                    onClick={handleShow}
                />
                <Draggable
                    image={gallery[3] ?? null}
                    index={3}
                    id={id}
                    type={announcement && announcement.type ? announcement.type : null}
                    onClick={handleShow}
                />
                <Draggable
                    image={gallery[4] ?? null}
                    index={4}
                    id={id}
                    type={announcement && announcement.type ? announcement.type : null}
                    onClick={handleShow}
                />
                <Draggable
                    image={gallery[5] ?? null}
                    index={5}
                    id={id}
                    type={announcement && announcement.type ? announcement.type : null}
                    onClick={handleShow}
                />
                <Draggable
                    image={gallery[6] ?? null}
                    index={6}
                    id={id}
                    type={announcement && announcement.type ? announcement.type : null}
                    onClick={handleShow}
                />
                <Draggable
                    image={gallery[7] ?? null}
                    index={7}
                    id={id}
                    type={announcement && announcement.type ? announcement.type : null}
                    onClick={handleShow}
                />
                <div className={styles.draggable_mirror + " draggable-mirror"}></div>
                <div className={styles.draggable_copy + " draggable-copy"}></div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <button className="btn-close" onClick={handleClose}></button>
                    {image ?
                        <img src={image.path ? "https://classificados.portalcatalao.com.br/veiculos/" + image.path : ''} alt="" />
                        : null}
                </Modal.Body>
            </Modal>
        </div>
    )
}