import { useContext, useEffect, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';
import { Input } from '../Form/Input';
import styles from './styles.module.scss';

export function ModalAlterPassword({ modal }) {
    const {
        old_password,
        password,
        password_repeat,
        alterPassword
    } = useContext(AuthContext);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(null);
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
                {response === true ? <div className="alert alert-success mt-4">Senha alterada com sucesso!</div> : null}
                {response === false ? <div className="alert alert-danger mt-4">Erro ao alterar a senha!</div> : null}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modal.handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={async () => {
                    setLoading(true);
                    let res = await alterPassword().then((res) => {
                        setLoading(false);
                        return res;
                    });
                    setResponse(res);
                }}>
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
                </Button>
            </Modal.Footer>
        </Modal>
    );
}