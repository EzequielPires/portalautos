import router from "next/router";
import { createContext, useEffect, useState } from "react";
import { api, vehicle } from "../services/api";

type GalleryContextType = {
    gallery: Array<File>,
    setGallery: any,
    loading: any,
    onChangeGallery: (e, id) => Promise<void>,
    initialGallery: (id) => Promise<void>,
    dropImageGallery: (index, id, idGallery) => Promise<void>,
    orderGallery: (id) => Promise<void>,
    drag: (e, dragMe, id) => void,
    dragOver: (e) => void,
}

export const GalleryContext = createContext({} as GalleryContextType);

export function GalleryProvider({ children }) {
    const [loading, setLoading] = useState(null);
    const [gallery, setGallery] = useState<Array<File> | any>([]);

    function drag(e, dragMe, id) {
        let draggable = document.querySelector<HTMLElement>('.draggable-mirror');
        let draggable_copy = document.querySelector<HTMLElement>('.draggable-copy');
        var dragOfX = 0;
        var dragOfY = 0;

        function draggableSetStyle(elCoordenadas) {
            let index = dragMe.getAttribute('data-index');
            let image: any = gallery[index];
            if (image) {
                draggable_copy.style.top = elCoordenadas.y + 'px';
                draggable_copy.style.left = elCoordenadas.x + 'px';
                draggable_copy.style.display = "flex";
                draggable.style.top = elCoordenadas.y + 'px';
                draggable.style.left = elCoordenadas.x + 'px';
                draggable.style.display = "flex";
                draggable.style.background = `url(${image && image.path ? "https://portalautos.com.br/" + image.path : URL.createObjectURL(image)}) center center`;
            }
        }

        function dragStart(e, dragMe) {
            let index = dragMe.getAttribute('data-index');
            let image: any = gallery[index];
            if (image) {
                let elCoordenadas = dragMe.getBoundingClientRect();
                dragMe.classList.add('drag');
                draggableSetStyle(elCoordenadas);
                dragMe.style.display = "none";
                dragMe.insertAdjacentElement("afterend", draggable_copy);
                dragOfX = e.pageX - (elCoordenadas.x - draggable_copy.offsetLeft);
                dragOfY = e.pageY - (elCoordenadas.y - draggable_copy.offsetTop);
                addEventListener("mousemove", dragMove);
                addEventListener("mouseup", dragEnd);
            }
        }
        function dragMove(e) {
            draggable.style.transform = `translate3d(${(e.pageX - dragOfX)}px, ${(e.pageY - dragOfY + document.documentElement.scrollTop)}px, 0)`;
        }
        function dragEnd() {
            dragMe.classList.remove('drag');
            dragMe.style.display = "flex";
            draggable.style.display = "none";
            draggable_copy.style.display = "none";
            draggable.style.transform = `translate3d(0, 0, 0)`;
            orderGallery(id);
            removeEventListener("mousemove", dragMove);
            removeEventListener("mousemove", dragOver);
            removeEventListener("mouseup", dragEnd);
        }
        dragStart(e, dragMe);
    }

    function dragOver(e) {
        let zone = document.querySelector('.zone');
        let draggable_copy = document.querySelector('.draggable-copy');
        const item_drag = document.querySelector('.drag');

        const item_over = e.target;
        const targetSize = item_over.getBoundingClientRect();
        const targetCenter = (targetSize.bottom - targetSize.top) / 2;

        const draggedOffsetY = e.clientY - targetSize.top;
        const draggedOffsetX = e.clientX - targetSize.left;
        let origin;
        if (draggable_copy) {
            origin = draggable_copy.getBoundingClientRect();
        }
        if ((
            item_drag &&
            draggedOffsetX < targetCenter &&
            draggedOffsetY < targetCenter &&
            e.pageY - document.documentElement.scrollTop < origin.top
        ) || (
                item_drag &&
                draggedOffsetX > targetCenter &&
                draggedOffsetY < targetCenter &&
                e.pageY - document.documentElement.scrollTop < origin.top
            ) || (
                item_drag &&
                draggedOffsetX < targetCenter &&
                draggedOffsetY > targetCenter &&
                e.pageY - document.documentElement.scrollTop < origin.top
            ) || (
                item_drag &&
                draggedOffsetX > targetCenter &&
                draggedOffsetY > targetCenter &&
                e.pageY - document.documentElement.scrollTop < origin.top
            ) || (item_drag && draggedOffsetX > targetCenter && e.pageY - document.documentElement.scrollTop > origin.top && e.pageY - document.documentElement.scrollTop < origin.bottom)) {
            zone.insertBefore(item_drag, item_over);
            zone.insertBefore(draggable_copy, item_drag);
        }

        else if ((
            item_drag &&
            draggedOffsetX < targetCenter &&
            draggedOffsetY < targetCenter &&
            e.pageY > origin.bottom
        ) || (
                item_drag &&
                draggedOffsetX > targetCenter &&
                draggedOffsetY < targetCenter &&
                e.pageY > origin.bottom
            ) || (
                item_drag &&
                draggedOffsetX < targetCenter &&
                draggedOffsetY > targetCenter &&
                e.pageY > origin.top
            ) || (
                item_drag &&
                draggedOffsetX > targetCenter &&
                draggedOffsetY > targetCenter &&
                e.pageY > origin.top
            ) || (item_drag && draggedOffsetX < targetCenter && e.pageY > origin.top && e.pageY < origin.bottom)) {
            item_over.insertAdjacentElement("afterend", item_drag);
            item_drag.insertAdjacentElement("afterend", draggable_copy);
        }
    }

    const checkVehicle = async (id) => {
        await api.put(`/vehicle/${id}/check`)
            .then((res: any) => res.data)
            .catch(() => router.push('/error'));
    }

    const initialGallery = async (id) => {
        setLoading(true);
        const res = await api.get(`/gallery/${id}/view`)
            .then((res): any => {
                checkVehicle(id).then(() => setLoading(false));
                return res.data;
            })
            .catch(() => router.push('/error'));
        if (res && res.success === true) {
            { res.data ? setGallery(res.data.images) : null }
        } else {
            setGallery([]);
            setLoading(false)
        }
    }

    const uploadServer = async (id, filelist, pos, length) => {
        let data = new FormData();
        let draggable = document.querySelectorAll('.styles_draggable__Kw4W0');
        draggable.forEach((item, index) => {
            if (index > length && index < length + filelist.length && index > pos + length) {
                item.classList.add('waiting');
            } else {
                if (index === pos) {
                    item.classList.remove('waiting');
                }
            }
        })
        if (length + pos < 8) {
            draggable[length + pos].classList.add('uploading');
            draggable[length + pos].classList.remove('waiting');
            data.append('file', filelist[pos]);
            await api.post(`/gallery/${id}/upload`, data).then(() => {
                draggable[gallery.length + pos].classList.remove('uploading');
                if (pos + 1 < filelist.length && pos < 7) {
                    uploadServer(id, filelist, pos + 1, length);
                } else {
                    initialGallery(id);
                }
            })
                .catch(() => router.push('/error'));
        }
    }

    const setGalleryImages = async (fileList) => {
        if (gallery.length <= 0) {
            setGallery(fileList)
        } else {
            setGallery([...gallery, ...fileList])
        }
    }

    const onChangeGallery = async (e, id) => {
        let fileList = [];
        let input = document.querySelector('#multifile');
        input.setAttribute('disabled', 'disabled');

        for (let i = 0; i < e.target.files.length; i++) {
            fileList.push(e.target.files[i]);
        }

        await setGalleryImages(fileList).then(() => {
            uploadServer(id, fileList, 0, gallery.length).then(() => {
                input.removeAttribute('disabled');
                checkVehicle(id);
            });
        })

    }

    const orderGallery = async (id) => {
        const draggables = document.querySelectorAll('.draggable')
        const newArray = [];
        draggables.forEach(item => {
            newArray.push(item.getAttribute("id-gallery"));
        });
        const data = new FormData();
        newArray.forEach(item => {
            data.append('order[]', item);
        });
        await api.post(`/gallery/${id}/order`, data)
            .then()
            .catch(() => router.push('/error'));
    }

    const dropImageGallery = async (index, id, idVehicle) => {
        setLoading(true);
        const res = await api.delete(`/gallery/${idVehicle}/delete/${id}`)
            .then((res): any => {
                setLoading(false);
                return res.data;
            })
            .catch(() => router.push('/error'));

        res.success ? checkVehicle(idVehicle) : null;
        setGallery(gallery.filter(item => {
            return item !== gallery[index]
        }));
    }

    return (
        <GalleryContext.Provider value={{
            gallery,
            setGallery,
            loading,
            initialGallery,
            onChangeGallery,
            orderGallery,
            dropImageGallery,
            drag,
            dragOver
        }}>
            {children}
        </GalleryContext.Provider>
    )
}   