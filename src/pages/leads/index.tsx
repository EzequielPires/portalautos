import styles from "./styles.module.scss";
import Head from "next/head";
import { MenuAside } from "../../components/MenuAside";
import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Row } from "../../components/Table/Row";
import { Table } from "../../components/Table";
import { Column } from "../../components/Table/Column";
import { useFetch } from "../../hooks/useFetch";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function Leads() {
    const { data } = useFetch('/vehicle/list?limit=20&active=1');
    const headerTable = [
        { title: 'Anúncio', size: 4 },
        { title: 'Identificador', size: 1 },
        { title: 'Data', size: 1 },
        { title: 'Nome', size: 2 },
        { title: 'Telefone', size: 2 },
        { title: 'Ação', size: 2 }
    ]
    useEffect(() => {
        console.log(data);
    }, [data])
    return (
        <div>
            <Head>
                <title>Meus anúncios</title>
                <meta name="robots" content="noindex" />
                <meta name="author" content="Portal Catalão Internet Service" />
            </Head>
            <header className="d-flex">
                <Navbar />
                <MenuAside />
            </header>
            <div className={styles.content}>
                <div className="d-flex gap-5">
                    <div className={styles.card}>
                        <h4>Total de Leads</h4>
                        <p>20</p>
                        <button>Gerar relatório</button>
                    </div>
                    <div className={`${styles.card} ${styles.warning}`}>
                        <h4>Total de Anúncios</h4>
                        <p>20</p>
                        <button>Gerar relatório</button>
                    </div>
                    <div className={`${styles.card} ${styles.danger}`}>
                        <h4>Fatura atual</h4>
                        <p>R$ 40,00</p>
                        <button>Pagar fatura</button>
                    </div>
                    <div className={`${styles.card} ${styles.success }`}>
                        <h4>Crédito em conta</h4>
                        <p>R$ 40,00</p>
                        <button>Solicitar crédito</button>
                    </div>
                </div>
                <Table header={headerTable}>
                    {data?.data?.vehicles.map((item, index) => (
                        <Row key={index}>
                            <Column
                                image={"https://portalautos.com.br/" + item.gallery.images[0].path}
                                title={`${item.version.model.brand.name} ${item.version.model.name}`}
                                subtitle={`${item.version.name} ${item.version.model.name}`}
                                size={headerTable[0].size}
                            />
                            <Column
                                title={item.identifier}
                                size={headerTable[1].size}
                            />
                            <Column
                                title={'27/04/2022'}
                                size={headerTable[2].size}
                            />
                            <Column
                                title={'Ezequiel Pires e SIlva'}
                                size={headerTable[3].size}
                            />
                            <Column
                                title={'(64) 99969-8100'}
                                size={headerTable[4].size}
                            />
                            <Column
                                button={'Contato'}
                                action={null}
                                size={headerTable[5].size}
                            />
                        </Row>
                    ))}
                </Table>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['nextauth.token']: token } = parseCookies(ctx);
    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
    return {
        props: {
        }
    }
}