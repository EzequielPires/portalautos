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
    const { data } = useFetch('/lead/report');
    const [leads, setLeads] = useState([]);
    const headerTable = [
        { title: 'Anúncio', size: 4 },
        { title: 'Identificador', size: 1 },
        { title: 'Data', size: 1 },
        { title: 'Nome', size: 2 },
        { title: 'Telefone', size: 2 },
        { title: 'Ação', size: 2 }
    ]
    useEffect(() => {
        {
            data && setLeads(data.data.leads.whatsapp)
        }
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
                <h4 className={styles.title}>Leads por Whatsapp</h4>
                <Table header={headerTable}>
                    {leads.map((item, index) => (
                        <Row key={index}>
                            <Column
                                image={"https://portalautos.com.br/" + item.vehicle.gallery.images[0].path}
                                title={`${item.vehicle.version.model.brand.name} ${item.vehicle.version.model.name}`}
                                subtitle={`${item.vehicle.version.name} ${item.vehicle.version.model.name}`}
                                size={headerTable[0].size}
                            />
                            <Column
                                title={item.vehicle.identifier}
                                size={headerTable[1].size}
                            />
                            <Column
                                title={'27/04/2022'}
                                size={headerTable[2].size}
                            />
                            <Column
                                title={item.name}
                                size={headerTable[3].size}
                            />
                            <Column
                                title={item.wpp_number}
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