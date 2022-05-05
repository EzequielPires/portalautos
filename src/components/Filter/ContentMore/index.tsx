import {useContext, useRef, useState} from "react";
import {FilterContext} from "../../../contexts/FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss"
import {faArrowLeft, faSearch} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const brands = [
    {
        "id": 1,
        "id_string": "alfa-romeo",
        "name": "alfa romeo",
        "ico": {
            "id": 22021111127,
            "name": "c58c01277f30dcf95a06b31aa497f799.png",
            "path": "images/brands/c58c01277f30dcf95a06b31aa497f799.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 2,
        "id_string": "am-gen",
        "name": "am gen",
        "ico": {
            "id": 22021147604,
            "name": "881228850ddfb422a36f0da1bc89bfaa.png",
            "path": "images/brands/881228850ddfb422a36f0da1bc89bfaa.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 3,
        "id_string": "asia-motors",
        "name": "asia motors",
        "ico": {
            "id": 22021157349,
            "name": "72d1ddc84b994b4c3cad74dd1b70c3fd.png",
            "path": "images/brands/72d1ddc84b994b4c3cad74dd1b70c3fd.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 4,
        "id_string": "aston-martin",
        "name": "aston martin",
        "ico": {
            "id": 22021143752,
            "name": "dbf782247de1598d82d49f420291e2c5.png",
            "path": "images/brands/dbf782247de1598d82d49f420291e2c5.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 5,
        "id_string": "audi",
        "name": "audi",
        "ico": {
            "id": 22021172231,
            "name": "e3a99e9c62238955a0323a72bcd62262.png",
            "path": "images/brands/e3a99e9c62238955a0323a72bcd62262.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 6,
        "id_string": "bmw",
        "name": "bmw",
        "ico": {
            "id": 22021164626,
            "name": "fbc67a40f9761576b2b48d37c8c9dd64.png",
            "path": "images/brands/fbc67a40f9761576b2b48d37c8c9dd64.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 8,
        "id_string": "cadillac",
        "name": "cadillac",
        "ico": {
            "id": 22021145486,
            "name": "d73a2f5c02118a1d1af7666e2c7061b4.png",
            "path": "images/brands/d73a2f5c02118a1d1af7666e2c7061b4.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 85,
        "id_string": "caoa-chery",
        "name": "caoa chery",
        "ico": {
            "id": 22021121189,
            "name": "970c9294c233799362eaf16fc9bb5e16.png",
            "path": "images/brands/970c9294c233799362eaf16fc9bb5e16.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 10,
        "id_string": "chrysler",
        "name": "chrysler",
        "ico": {
            "id": 22021113411,
            "name": "38b847406b9ba255d1607e46d85b01ea.png",
            "path": "images/brands/38b847406b9ba255d1607e46d85b01ea.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 11,
        "id_string": "citroen",
        "name": "citroën",
        "ico": {
            "id": 22021176042,
            "name": "99347def8d18a47ea4a71f0be6d6273c.png",
            "path": "images/brands/99347def8d18a47ea4a71f0be6d6273c.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 12,
        "id_string": "cross-lander",
        "name": "cross lander",
        "ico": {
            "id": 22021138524,
            "name": "22c45b20323b6f034e48938151f2af1a.png",
            "path": "images/brands/22c45b20323b6f034e48938151f2af1a.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 13,
        "id_string": "dodge",
        "name": "dodge",
        "ico": {
            "id": 22021126034,
            "name": "ba7a6b43c3578e72eb9f0457bd2c219f.png",
            "path": "images/brands/ba7a6b43c3578e72eb9f0457bd2c219f.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 14,
        "id_string": "ferrari",
        "name": "ferrari",
        "ico": {
            "id": 22021172918,
            "name": "3f0ae23432ab9ff618895c5e1d82024b.png",
            "path": "images/brands/3f0ae23432ab9ff618895c5e1d82024b.png",
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
        "id": 16,
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
        "name": "gm - chevrolet",
        "ico": {
            "id": 22021143626,
            "name": "27228908ee3065e353245184d47810af.png",
            "path": "images/brands/27228908ee3065e353245184d47810af.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 18,
        "id_string": "gurgel",
        "name": "gurgel",
        "ico": {
            "id": 22021128410,
            "name": "7e69196b61192c74c002884e591635cf.png",
            "path": "images/brands/7e69196b61192c74c002884e591635cf.png",
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
        "id": 21,
        "id_string": "iveco",
        "name": "iveco",
        "ico": {
            "id": 22021132959,
            "name": "fb5bb60b72e3248444635fcf2baa0ded.png",
            "path": "images/brands/fb5bb60b72e3248444635fcf2baa0ded.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 22,
        "id_string": "jac",
        "name": "jac",
        "ico": {
            "id": 22021157709,
            "name": "773b4e891d7beb7e7f177687ee8c35f1.png",
            "path": "images/brands/773b4e891d7beb7e7f177687ee8c35f1.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 23,
        "id_string": "jaguar",
        "name": "jaguar",
        "ico": {
            "id": 22021140746,
            "name": "b95ad8e6cff4668e10499d0470970196.png",
            "path": "images/brands/b95ad8e6cff4668e10499d0470970196.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 24,
        "id_string": "jeep",
        "name": "jeep",
        "ico": {
            "id": 22021181895,
            "name": "c0420e54ee6fa70b41342ba82f05a2cc.png",
            "path": "images/brands/c0420e54ee6fa70b41342ba82f05a2cc.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 25,
        "id_string": "kia-motors",
        "name": "kia motors",
        "ico": {
            "id": 22021141501,
            "name": "1ab5c4f439df4d169833fc54ceab4357.png",
            "path": "images/brands/1ab5c4f439df4d169833fc54ceab4357.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 26,
        "id_string": "lamborghini",
        "name": "lamborghini",
        "ico": {
            "id": 22021148369,
            "name": "1b7cfd39e0b9dbf62a365f47078a28f1.png",
            "path": "images/brands/1b7cfd39e0b9dbf62a365f47078a28f1.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 27,
        "id_string": "land-rover",
        "name": "land rover",
        "ico": {
            "id": 22021199497,
            "name": "a52928a4e55b375be0b5f7b7937cf812.png",
            "path": "images/brands/a52928a4e55b375be0b5f7b7937cf812.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 28,
        "id_string": "lexus",
        "name": "lexus",
        "ico": {
            "id": 22021138326,
            "name": "473b08b66947b6385a835ab76d5e2332.png",
            "path": "images/brands/473b08b66947b6385a835ab76d5e2332.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 29,
        "id_string": "lotus",
        "name": "lotus",
        "ico": {
            "id": 22021140702,
            "name": "465385a1965310eabaeff6a7b6deb50b.png",
            "path": "images/brands/465385a1965310eabaeff6a7b6deb50b.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 30,
        "id_string": "maserati",
        "name": "maserati",
        "ico": {
            "id": 22021194160,
            "name": "bc32fc43fff29f97493d198e825a36ba.png",
            "path": "images/brands/bc32fc43fff29f97493d198e825a36ba.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 31,
        "id_string": "mazda",
        "name": "mazda",
        "ico": {
            "id": 22021196197,
            "name": "82d7072a06ae06e047433d435165666d.png",
            "path": "images/brands/82d7072a06ae06e047433d435165666d.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 32,
        "id_string": "mclaren",
        "name": "mclaren",
        "ico": {
            "id": 22021171032,
            "name": "99609d807379f0a17c865f5831361801.png",
            "path": "images/brands/99609d807379f0a17c865f5831361801.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 33,
        "id_string": "mercedes-benz",
        "name": "mercedes-benz",
        "ico": {
            "id": 22021161738,
            "name": "558e82ab293ecc9dca474ab6df82cb7b.png",
            "path": "images/brands/558e82ab293ecc9dca474ab6df82cb7b.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 35,
        "id_string": "mini",
        "name": "mini",
        "ico": {
            "id": 22021161053,
            "name": "f47c4ea1c6a2cb3a53f14627ac90bd5a.png",
            "path": "images/brands/f47c4ea1c6a2cb3a53f14627ac90bd5a.png",
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
        "id": 37,
        "id_string": "miura",
        "name": "miura",
        "ico": {
            "id": 22021115603,
            "name": "4b898672b4fc343c0e83028ef4ba1502.png",
            "path": "images/brands/4b898672b4fc343c0e83028ef4ba1502.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 38,
        "id_string": "nissan",
        "name": "nissan",
        "ico": {
            "id": 22021130527,
            "name": "325882ae9a8cd08d1663726aa38f6db8.png",
            "path": "images/brands/325882ae9a8cd08d1663726aa38f6db8.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 39,
        "id_string": "peugeot",
        "name": "peugeot",
        "ico": {
            "id": 22021166997,
            "name": "ff54955fb3e42709482d0c6b521e443b.png",
            "path": "images/brands/ff54955fb3e42709482d0c6b521e443b.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 40,
        "id_string": "porsche",
        "name": "porsche",
        "ico": {
            "id": 22021132129,
            "name": "b38ca89df18142c0416493fe0ca3ccd4.png",
            "path": "images/brands/b38ca89df18142c0416493fe0ca3ccd4.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 84,
        "id_string": "puma",
        "name": "puma",
        "ico": {
            "id": 22021157962,
            "name": "ea3baace448c70f453551870bf217374.png",
            "path": "images/brands/ea3baace448c70f453551870bf217374.png",
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
    {
        "id": 43,
        "id_string": "shineray",
        "name": "shineray",
        "ico": {
            "id": 22021138766,
            "name": "1b3ab6b85b841e283ca23a41931644df.png",
            "path": "images/brands/1b3ab6b85b841e283ca23a41931644df.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 44,
        "id_string": "smart",
        "name": "smart",
        "ico": {
            "id": 22021185533,
            "name": "7711040b8019363c96af643cf67d651a.png",
            "path": "images/brands/7711040b8019363c96af643cf67d651a.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 45,
        "id_string": "subaru",
        "name": "subaru",
        "ico": {
            "id": 22021149243,
            "name": "20e875b4fa8882095465decd37200b19.png",
            "path": "images/brands/20e875b4fa8882095465decd37200b19.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 46,
        "id_string": "suzuki",
        "name": "suzuki",
        "ico": {
            "id": 22021138842,
            "name": "544d5849d359671fd81e21a260d9642f.png",
            "path": "images/brands/544d5849d359671fd81e21a260d9642f.png",
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
        "id": 49,
        "id_string": "troller",
        "name": "troller",
        "ico": {
            "id": 22021147780,
            "name": "e38079a00357837314579ec7e4f7299a.png",
            "path": "images/brands/e38079a00357837314579ec7e4f7299a.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 50,
        "id_string": "volvo",
        "name": "volvo",
        "ico": {
            "id": 22021161522,
            "name": "351747a5b4e2675d929c78805f61eebb.png",
            "path": "images/brands/351747a5b4e2675d929c78805f61eebb.png",
            "extension": "png",
            "size": 0
        }
    },
    {
        "id": 51,
        "id_string": "vw-volkswagen",
        "name": "vw - volkswagen",
        "ico": {
            "id": 22021181759,
            "name": "cf82e8becdd07ebeded09c5f039f80ef.png",
            "path": "images/brands/cf82e8becdd07ebeded09c5f039f80ef.png",
            "extension": "png",
            "size": 0
        }
    }
]
export function ContentMore({options, type, title}) {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');
    const {active, setActive} = useContext(FilterContext);
    return (
        <div className={active ? styles.content_more + " " + styles.active: styles.content_more}>
            <div className="d-flex p-3 align-items-center">
                <button className={styles.prev} onClick={() => setActive(false)}>
                    <FontAwesomeIcon icon={faArrowLeft as IconProp}/>
                </button>
                <p className={styles.span}>Marcas</p>
            </div>
            <div className="d-flex p-3 pb-0">
                <form onSubmit={(e) => e.preventDefault()} className={styles.filter}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Digite uma marca"
                    />
                    <FontAwesomeIcon icon={faSearch as IconProp} />
                </form>
            </div>
            <div className={styles.content}>
                <span className={styles.title}>Todas as marcas</span>
                <ul>
                    {brands?.map(brand => (
                        <li key={brand.id}>
                            <button>
                                {brand.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}