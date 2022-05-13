import { createContext, useState } from "react";

type ModalActionType = {
    show: boolean;
    id: string;
    action: string;
    setAction: any;
    message: string;
    handleClose: () => void;
    handleShow: any;
    length: any;
    setLength: any;
}

export const ModalActionContext = createContext({} as ModalActionType);

export function ModalActionProvider({ children }) {
    const [show, setShow] = useState(false);
    const [length, setLength] = useState(null);
    const [id, setId] = useState(null);
    const [action, setAction] = useState('');
    const [message, setMessage] = useState('Text default');

    const handleClose = () => setShow(false);
    const handleShow = (message, action, id, length) => {
        setMessage(message);
        setShow(true);
        setAction(action);
        setId(id);
        setLength(length);
    };

    return (
        <ModalActionContext.Provider value={{
            show,
            id,
            message,
            action,
            length,
            setLength,
            setAction,
            handleClose,
            handleShow,
        }}>
            {children}
        </ModalActionContext.Provider>
    );
}

