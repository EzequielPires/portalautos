import { useContext, useEffect, useState } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import { AlertContext } from '../../contexts/AlertContext';
import { AuthContext } from '../../contexts/AuthContext';
import { Input } from '../Form/Input';
import styles from './styles.module.scss';

export function ModalAlterPassword({ modal }) {
    const {
        old_password,
        password,
        password_repeat,
        alterPassword
    } = useContext(AuthContext);
    const { alertShow } = useContext(AlertContext);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(null);

    const alterPasswordUser = async () => {
        setLoading(true);
        let res = await alterPassword().then((res) => {
            setLoading(false);
            return res;
        });
        if (res) {
            alertShow("success", "Senha alterada com sucesso.");
        } else {
            alertShow("danger", "Erro ao alterar senha, tente novamente.");
        }
        setResponse(res);
    }

    useEffect(() => {
        old_password.setValue('');
        password.setValue('');
        password_repeat.setValue('');
    }, [modal.show]);

    return (
        <Modal id={styles.modal} show={modal.show} onHide={modal.handleClose}>
            <Modal.Header>
                <h4>Alterar senha</h4>
            </Modal.Header>
            <Modal.Body id={styles.modal_body} className="px-4">
                <Input
                    id="before_password"
                    label="Senha anterior:"
                    type="password"
                    placeholder=''
                    {...old_password}
                />
                <Input
                    id="new_password"
                    label="Nova senha:"
                    type="password"
                    placeholder=''
                    {...password}
                />
                <Input
                    id="repeat_password"
                    label="Digite novamente sua nova senha:"
                    type="password"
                    placeholder=''
                    {...password_repeat}
                />
            </Modal.Body>
            <Modal.Footer id={styles.modal_footer}>
                <button onClick={modal.handleClose}>
                    Cancelar
                </button>
                <button onClick={alterPasswordUser}>
                    {loading ?
                        <Spinner
                            className="mx-2"
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        : null
                    }
                    Continuar
                </button>
            </Modal.Footer>
        </Modal>
    );
}