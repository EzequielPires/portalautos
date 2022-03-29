import router from "next/router"
import { ButtonMore } from "../../ButtonMore";
import { useContext } from "react";
import { FilterContext } from "../../../contexts/FilterContext";
import { Select } from "../Select";
import styles from "./style.module.scss";

const brands = [
    {
        "id": 51,
        "id_string": "vw-volkswagen",
        "name": "volkswagen",
        "ico": {
            "id": 22021181759,
            "name": "cf82e8becdd07ebeded09c5f039f80ef.png",
            "path": "images/brands/cf82e8becdd07ebeded09c5f039f80ef.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 15,
        "id_string": "fiat",
        "name": "fiat",
        "ico": {
            "id": 22021146921,
            "name": "44c23b303a5457e8296a1dadf5515f77.png",
            "path": "images/brands/44c23b303a5457e8296a1dadf5515f77.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 22,
        "id_string": "ford",
        "name": "ford",
        "ico": {
            "id": 22021184011,
            "name": "b9126b35d956daa88d22a7f595b03785.png",
            "path": "images/brands/b9126b35d956daa88d22a7f595b03785.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 17,
        "id_string": "gm-chevrolet",
        "name": "chevrolet",
        "ico": {
            "id": 22021143626,
            "name": "27228908ee3065e353245184d47810af.png",
            "path": "images/brands/27228908ee3065e353245184d47810af.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 20,
        "id_string": "hyundai",
        "name": "hyundai",
        "ico": {
            "id": 22021170452,
            "name": "4e8baf946f606a4bfe201f66fa9066e3.png",
            "path": "images/brands/4e8baf946f606a4bfe201f66fa9066e3.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 36,
        "id_string": "mitsubishi",
        "name": "mitsubishi",
        "ico": {
            "id": 22021116257,
            "name": "0a0bc53e8bdfa65d7cd1f6795ed78058.png",
            "path": "images/brands/0a0bc53e8bdfa65d7cd1f6795ed78058.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 19,
        "id_string": "honda",
        "name": "honda",
        "ico": {
            "id": 22021156254,
            "name": "7dcdd1ad1b2884e536f443bb592fa10e.png",
            "path": "images/brands/7dcdd1ad1b2884e536f443bb592fa10e.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 48,
        "id_string": "toyota",
        "name": "toyota",
        "ico": {
            "id": 22021167528,
            "name": "fe58d8879ca3916f067bc0fbd242f9ec.png",
            "path": "images/brands/fe58d8879ca3916f067bc0fbd242f9ec.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 42,
        "id_string": "renault",
        "name": "renault",
        "ico": {
            "id": 22021155824,
            "name": "ea3a321b46e8b42a1a2e6ca3b9c5e737.png",
            "path": "images/brands/ea3a321b46e8b42a1a2e6ca3b9c5e737.png",
            "extension": "png",
            "size": 0
        }
    },
]

export function BrandVehicle() {
    const { brand, filter, run } = useContext(FilterContext);

    return (
        <div className={styles.brand_vehicle}>
            <span className={styles.title}>Marca do veículo</span>
            {!(filter.brands.value != '0') ?
                <div className="d-flex flex-wrap gap-4">
                    {brands?.map(item => (
                        <button key={item.id} className={styles.card} onClick={() => {
                            router.replace(`${router.asPath}/${item.id_string.toLowerCase()}`);
                            filter.brands.onChange(item.id_string);
                        }}>
                            <div className={styles.image}>
                                <img src={`https://portalautos.com.br/${item.ico.path}`} alt="" />
                            </div>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </div>
                :
                <div className="d-flex align-items-center flex-column gap-2">
                    <div className="d-flex w-100 flex-column">
                        <Select placeholder={"Todas as marcas"} label={"Marcas"} filter={filter} index={1} {...filter.brands} />
                        <Select placeholder={"Todas os modelos"} label={"Modelos"} filter={filter} index={2} {...filter.models} />
                        <Select placeholder={"Todas as versões"} label={"Versões"} filter={filter} index={3} {...filter.versions} />
                    </div>
                </div>
            }
            {!brand ?
                <div className="d-flex justify-content-end mt-3">
                    <ButtonMore />
                </div>
                : null
            }


        </div>
    )
}