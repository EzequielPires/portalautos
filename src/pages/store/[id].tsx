import styles from "./styles.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavbarFixed} from "../../components/NavbarFixed";
import BannerGiovanni from "../../assets/giovanni-banner.png";
import LogoGiovanni from "../../assets/giovanni-logo.svg";
import {useState} from "react";
import {faArrowRight, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {CardAnnouncement} from "../../components/CardAnnouncement";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const data = {
    "vehicles": [
        {
            "id": 243,
            "identifier": "22021092863",
            "active": true,
            "sold": false,
            "price": "20690000",
            "visible_price": false,
            "year_manufacture": 2021,
            "year_model": 2022,
            "mileage_traveled": 0,
            "new": true,
            "last_digit_plate": 9,
            "created_at": {
                "date": "2022-02-10 17:09:20.000000",
                "timezone_type": 3,
                "timezone": "America/Sao_Paulo"
            },
            "gallery": {
                "images": [
                    {
                        "id": 22021071409,
                        "name": "e67feb4c3ca4993e2bb16f588a21a9c2.jpg",
                        "path": "images/vehicles/e67feb4c3ca4993e2bb16f588a21a9c2.jpg",
                        "extension": "jpg",
                        "size": 381033
                    },
                    {
                        "id": 22021093102,
                        "name": "f7b4da5b1fb47afee0e4ddf94e357ac3.jpg",
                        "path": "images/vehicles/f7b4da5b1fb47afee0e4ddf94e357ac3.jpg",
                        "extension": "jpg",
                        "size": 305057
                    },
                    {
                        "id": 22021047947,
                        "name": "42753d843197f1cc5df3cadaa4b03172.jpg",
                        "path": "images/vehicles/42753d843197f1cc5df3cadaa4b03172.jpg",
                        "extension": "jpg",
                        "size": 439130
                    },
                    {
                        "id": 22021053027,
                        "name": "4c9ab460b0b4928cb805e92b98864d57.jpg",
                        "path": "images/vehicles/4c9ab460b0b4928cb805e92b98864d57.jpg",
                        "extension": "jpg",
                        "size": 364446
                    },
                    {
                        "id": 22021073635,
                        "name": "0ca013c37b6ec012ec8a95e8fdf80cc5.jpg",
                        "path": "images/vehicles/0ca013c37b6ec012ec8a95e8fdf80cc5.jpg",
                        "extension": "jpg",
                        "size": 280009
                    },
                    {
                        "id": 22021083426,
                        "name": "1c80b7aed28ce6cac6c2858b5b564154.jpg",
                        "path": "images/vehicles/1c80b7aed28ce6cac6c2858b5b564154.jpg",
                        "extension": "jpg",
                        "size": 239890
                    },
                    {
                        "id": 22021035683,
                        "name": "e8b8bdb5b74373eb4f7642f373f2683c.jpg",
                        "path": "images/vehicles/e8b8bdb5b74373eb4f7642f373f2683c.jpg",
                        "extension": "jpg",
                        "size": 314568
                    },
                    {
                        "id": 22021062125,
                        "name": "cf20745e857c9cf75196e3aceb8e3b77.jpg",
                        "path": "images/vehicles/cf20745e857c9cf75196e3aceb8e3b77.jpg",
                        "extension": "jpg",
                        "size": 259870
                    }
                ]
            },
            "version": {
                "id": 4892,
                "id_string": "txs-16-16v-tgdi-aut",
                "name": "TXS 1.6 16V TGDi Aut.",
                "fipe_code": "073029-7",
                "price": "18012600",
                "year_model": 2022,
                "model": {
                    "id": 288,
                    "id_string": "tiggo-8",
                    "name": "tiggo 8",
                    "ico": null,
                    "brand": {
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
                    }
                }
            },
            "quant_doors": 5,
            "type": "car"
        },
        {
            "id": 242,
            "identifier": "22021011072",
            "active": true,
            "sold": false,
            "price": "19990000",
            "visible_price": false,
            "year_manufacture": 2019,
            "year_model": 2022,
            "mileage_traveled": 53900,
            "new": false,
            "last_digit_plate": 0,
            "created_at": {
                "date": "2022-02-10 17:02:38.000000",
                "timezone_type": 3,
                "timezone": "America/Sao_Paulo"
            },
            "gallery": {
                "images": [
                    {
                        "id": 22021033272,
                        "name": "b13ba6d0a433842127ec58535716fbe9.jpg",
                        "path": "images/vehicles/b13ba6d0a433842127ec58535716fbe9.jpg",
                        "extension": "jpg",
                        "size": 323847
                    },
                    {
                        "id": 22021091660,
                        "name": "d46aa67f08bb11273c90b4dbddcbf358.jpg",
                        "path": "images/vehicles/d46aa67f08bb11273c90b4dbddcbf358.jpg",
                        "extension": "jpg",
                        "size": 287399
                    },
                    {
                        "id": 22021079792,
                        "name": "f424a2721abb0d183c3c38e9624a1715.jpg",
                        "path": "images/vehicles/f424a2721abb0d183c3c38e9624a1715.jpg",
                        "extension": "jpg",
                        "size": 280341
                    },
                    {
                        "id": 22021017721,
                        "name": "372864ac68f2f97a346fec8578bf1fd1.jpg",
                        "path": "images/vehicles/372864ac68f2f97a346fec8578bf1fd1.jpg",
                        "extension": "jpg",
                        "size": 239396
                    },
                    {
                        "id": 22021096210,
                        "name": "7ff6368f81cc48c4312a6d66ff72ee37.jpg",
                        "path": "images/vehicles/7ff6368f81cc48c4312a6d66ff72ee37.jpg",
                        "extension": "jpg",
                        "size": 312245
                    },
                    {
                        "id": 22021066260,
                        "name": "145639c9eabba49249c4b4d0629d01c7.jpg",
                        "path": "images/vehicles/145639c9eabba49249c4b4d0629d01c7.jpg",
                        "extension": "jpg",
                        "size": 302013
                    },
                    {
                        "id": 22021066571,
                        "name": "2c9ce571359aa03de3ef92d8be4a0a44.jpg",
                        "path": "images/vehicles/2c9ce571359aa03de3ef92d8be4a0a44.jpg",
                        "extension": "jpg",
                        "size": 318802
                    },
                    {
                        "id": 22021046786,
                        "name": "18c32b00345e75c5841c2d3a61c14d1f.jpg",
                        "path": "images/vehicles/18c32b00345e75c5841c2d3a61c14d1f.jpg",
                        "extension": "jpg",
                        "size": 311395
                    }
                ]
            },
            "version": {
                "id": 64,
                "id_string": "highcd-20-16v-tdi-4x4-dies-aut",
                "name": "High.CD 2.0 16V TDI 4x4 Dies. Aut",
                "fipe_code": "005340-6",
                "price": "19569600",
                "year_model": 2019,
                "model": {
                    "id": 54,
                    "id_string": "amarok",
                    "name": "amarok",
                    "ico": {
                        "id": 22021167109,
                        "name": "8df84b2d3755f54b65878d61895d81c4.png",
                        "path": "images/models/8df84b2d3755f54b65878d61895d81c4.png",
                        "extension": "png",
                        "size": 0
                    },
                    "brand": {
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
                }
            },
            "quant_doors": 4,
            "type": "car"
        },
        {
            "id": 241,
            "identifier": "22021056058",
            "active": true,
            "sold": false,
            "price": "17999000",
            "visible_price": false,
            "year_manufacture": 2017,
            "year_model": 2022,
            "mileage_traveled": 118000,
            "new": false,
            "last_digit_plate": 0,
            "created_at": {
                "date": "2022-02-10 16:38:29.000000",
                "timezone_type": 3,
                "timezone": "America/Sao_Paulo"
            },
            "gallery": {
                "images": [
                    {
                        "id": 22021030099,
                        "name": "0432af138345ad376c32c1001f31a73a.jpg",
                        "path": "images/vehicles/0432af138345ad376c32c1001f31a73a.jpg",
                        "extension": "jpg",
                        "size": 356184
                    },
                    {
                        "id": 22021080261,
                        "name": "b82a46856ae5ecec8eb3b540d5dd26b9.jpg",
                        "path": "images/vehicles/b82a46856ae5ecec8eb3b540d5dd26b9.jpg",
                        "extension": "jpg",
                        "size": 285730
                    },
                    {
                        "id": 22021033627,
                        "name": "5226aaaf7f056473ac5f371d78c2373b.jpg",
                        "path": "images/vehicles/5226aaaf7f056473ac5f371d78c2373b.jpg",
                        "extension": "jpg",
                        "size": 309554
                    },
                    {
                        "id": 22021075057,
                        "name": "dfbd414e892dc9691898e08a48862a1a.jpg",
                        "path": "images/vehicles/dfbd414e892dc9691898e08a48862a1a.jpg",
                        "extension": "jpg",
                        "size": 263554
                    },
                    {
                        "id": 22021077306,
                        "name": "d9051b52065bc7733235c4137275bea0.jpg",
                        "path": "images/vehicles/d9051b52065bc7733235c4137275bea0.jpg",
                        "extension": "jpg",
                        "size": 315437
                    },
                    {
                        "id": 22021020329,
                        "name": "b615507842d148de806481254f916335.jpg",
                        "path": "images/vehicles/b615507842d148de806481254f916335.jpg",
                        "extension": "jpg",
                        "size": 267203
                    },
                    {
                        "id": 22021092296,
                        "name": "a59973efa396cacf5ee87ba82628764b.jpg",
                        "path": "images/vehicles/a59973efa396cacf5ee87ba82628764b.jpg",
                        "extension": "jpg",
                        "size": 245343
                    },
                    {
                        "id": 22021018659,
                        "name": "d08d486277df7251c645db59accf6655.jpg",
                        "path": "images/vehicles/d08d486277df7251c645db59accf6655.jpg",
                        "extension": "jpg",
                        "size": 294489
                    }
                ]
            },
            "version": {
                "id": 4182,
                "id_string": "limited-32-20v-4x4-cd-aut-dies",
                "name": "Limited 3.2 20V 4x4 CD Aut. Dies.",
                "fipe_code": "003364-2",
                "price": "17923400",
                "year_model": 2017,
                "model": {
                    "id": 44,
                    "id_string": "ranger",
                    "name": "ranger",
                    "ico": {
                        "id": 22021131982,
                        "name": "6266b5eb62ce65dca0d8dd25d2128413.png",
                        "path": "images/models/6266b5eb62ce65dca0d8dd25d2128413.png",
                        "extension": "png",
                        "size": 0
                    },
                    "brand": {
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
                    }
                }
            },
            "quant_doors": 4,
            "type": "car"
        },
        {
            "id": 240,
            "identifier": "22021095752",
            "active": true,
            "sold": false,
            "price": "17399000",
            "visible_price": false,
            "year_manufacture": 2017,
            "year_model": 2022,
            "mileage_traveled": 182238,
            "new": false,
            "last_digit_plate": 0,
            "created_at": {
                "date": "2022-02-10 16:32:38.000000",
                "timezone_type": 3,
                "timezone": "America/Sao_Paulo"
            },
            "gallery": {
                "images": [
                    {
                        "id": 22021083595,
                        "name": "b3480ca4afc3b1f14b377404b2422f1e.jpg",
                        "path": "images/vehicles/b3480ca4afc3b1f14b377404b2422f1e.jpg",
                        "extension": "jpg",
                        "size": 341855
                    },
                    {
                        "id": 22021064407,
                        "name": "cd89c3f5203a71b6cc72d689eeca5bec.jpg",
                        "path": "images/vehicles/cd89c3f5203a71b6cc72d689eeca5bec.jpg",
                        "extension": "jpg",
                        "size": 334098
                    },
                    {
                        "id": 22021085535,
                        "name": "44f80715f94e7a96c4e1411d77fba2c5.jpg",
                        "path": "images/vehicles/44f80715f94e7a96c4e1411d77fba2c5.jpg",
                        "extension": "jpg",
                        "size": 382903
                    },
                    {
                        "id": 22021048767,
                        "name": "c49e4f5a111d703dd431afab51947df5.jpg",
                        "path": "images/vehicles/c49e4f5a111d703dd431afab51947df5.jpg",
                        "extension": "jpg",
                        "size": 326110
                    },
                    {
                        "id": 22021034178,
                        "name": "a007b3b899f2d321dafdb53cfc4b88ee.jpg",
                        "path": "images/vehicles/a007b3b899f2d321dafdb53cfc4b88ee.jpg",
                        "extension": "jpg",
                        "size": 245098
                    },
                    {
                        "id": 22021059362,
                        "name": "b82cea269dc06da18a3ce00fe59d7280.jpg",
                        "path": "images/vehicles/b82cea269dc06da18a3ce00fe59d7280.jpg",
                        "extension": "jpg",
                        "size": 571807
                    },
                    {
                        "id": 22021075368,
                        "name": "9faaff0887709b3200bb0f07cf415b61.jpg",
                        "path": "images/vehicles/9faaff0887709b3200bb0f07cf415b61.jpg",
                        "extension": "jpg",
                        "size": 342936
                    },
                    {
                        "id": 22021068690,
                        "name": "c2ecac692073b29141f394d3a70f073e.jpg",
                        "path": "images/vehicles/c2ecac692073b29141f394d3a70f073e.jpg",
                        "extension": "jpg",
                        "size": 329610
                    }
                ]
            },
            "version": {
                "id": 4182,
                "id_string": "limited-32-20v-4x4-cd-aut-dies",
                "name": "Limited 3.2 20V 4x4 CD Aut. Dies.",
                "fipe_code": "003364-2",
                "price": "17923400",
                "year_model": 2017,
                "model": {
                    "id": 44,
                    "id_string": "ranger",
                    "name": "ranger",
                    "ico": {
                        "id": 22021131982,
                        "name": "6266b5eb62ce65dca0d8dd25d2128413.png",
                        "path": "images/models/6266b5eb62ce65dca0d8dd25d2128413.png",
                        "extension": "png",
                        "size": 0
                    },
                    "brand": {
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
                    }
                }
            },
            "quant_doors": 4,
            "type": "car"
        },
        {
            "id": 239,
            "identifier": "22021038863",
            "active": true,
            "sold": false,
            "price": "16999000",
            "visible_price": false,
            "year_manufacture": 2018,
            "year_model": 2022,
            "mileage_traveled": 117000,
            "new": false,
            "last_digit_plate": null,
            "created_at": {
                "date": "2022-02-10 16:27:21.000000",
                "timezone_type": 3,
                "timezone": "America/Sao_Paulo"
            },
            "gallery": {
                "images": [
                    {
                        "id": 22021054792,
                        "name": "ae4c81adb8795e1245ab3f4df9f6f469.jpg",
                        "path": "images/vehicles/ae4c81adb8795e1245ab3f4df9f6f469.jpg",
                        "extension": "jpg",
                        "size": 325547
                    },
                    {
                        "id": 22021042460,
                        "name": "2c7fc6a24eae4b0a1bd81030bf7e0a86.jpg",
                        "path": "images/vehicles/2c7fc6a24eae4b0a1bd81030bf7e0a86.jpg",
                        "extension": "jpg",
                        "size": 370992
                    },
                    {
                        "id": 22021018403,
                        "name": "32b9286e0d68dba789812549087e41e7.jpg",
                        "path": "images/vehicles/32b9286e0d68dba789812549087e41e7.jpg",
                        "extension": "jpg",
                        "size": 298497
                    },
                    {
                        "id": 22021064440,
                        "name": "0b211d9fd9adf4841c42ec576fb1fbed.jpg",
                        "path": "images/vehicles/0b211d9fd9adf4841c42ec576fb1fbed.jpg",
                        "extension": "jpg",
                        "size": 274780
                    },
                    {
                        "id": 22021031387,
                        "name": "564740b1f5379e8950facb3a937ea187.jpg",
                        "path": "images/vehicles/564740b1f5379e8950facb3a937ea187.jpg",
                        "extension": "jpg",
                        "size": 283000
                    }
                ]
            },
            "version": {
                "id": 4356,
                "id_string": "xls-22-4x4-cd-diesel-aut",
                "name": "XLS 2.2 4x4 CD Diesel Aut.",
                "fipe_code": "003421-5",
                "price": "17184300",
                "year_model": 2019,
                "model": {
                    "id": 44,
                    "id_string": "ranger",
                    "name": "ranger",
                    "ico": {
                        "id": 22021131982,
                        "name": "6266b5eb62ce65dca0d8dd25d2128413.png",
                        "path": "images/models/6266b5eb62ce65dca0d8dd25d2128413.png",
                        "extension": "png",
                        "size": 0
                    },
                    "brand": {
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
                    }
                }
            },
            "quant_doors": 4,
            "type": "car"
        },
        {
            "id": 238,
            "identifier": "22021032190",
            "active": true,
            "sold": false,
            "price": "16490000",
            "visible_price": false,
            "year_manufacture": 2018,
            "year_model": 2022,
            "mileage_traveled": 78000,
            "new": false,
            "last_digit_plate": 4,
            "created_at": {
                "date": "2022-02-10 16:23:11.000000",
                "timezone_type": 3,
                "timezone": "America/Sao_Paulo"
            },
            "gallery": {
                "images": [
                    {
                        "id": 22021016084,
                        "name": "e7460cbfb3ba7bf27cb74ea1e738e53a.jpg",
                        "path": "images/vehicles/e7460cbfb3ba7bf27cb74ea1e738e53a.jpg",
                        "extension": "jpg",
                        "size": 276939
                    },
                    {
                        "id": 22021098890,
                        "name": "0720861cdf68302d0df1fe62af2c1cc8.jpg",
                        "path": "images/vehicles/0720861cdf68302d0df1fe62af2c1cc8.jpg",
                        "extension": "jpg",
                        "size": 269421
                    },
                    {
                        "id": 22021026373,
                        "name": "ef0b3f2c2a1e363aa7600b159b7c1eb2.jpg",
                        "path": "images/vehicles/ef0b3f2c2a1e363aa7600b159b7c1eb2.jpg",
                        "extension": "jpg",
                        "size": 239192
                    },
                    {
                        "id": 22021022244,
                        "name": "1232b9a94c943284f7274537edbf3a0a.jpg",
                        "path": "images/vehicles/1232b9a94c943284f7274537edbf3a0a.jpg",
                        "extension": "jpg",
                        "size": 316719
                    },
                    {
                        "id": 22021084579,
                        "name": "b586f402499673a0ec5ef031379b8f9d.jpg",
                        "path": "images/vehicles/b586f402499673a0ec5ef031379b8f9d.jpg",
                        "extension": "jpg",
                        "size": 251010
                    },
                    {
                        "id": 22021080023,
                        "name": "6274bda01e92aadde05d33a4f88dc291.jpg",
                        "path": "images/vehicles/6274bda01e92aadde05d33a4f88dc291.jpg",
                        "extension": "jpg",
                        "size": 184263
                    },
                    {
                        "id": 22021011170,
                        "name": "c9bd411f4a4bf57e2be4754189edadf5.jpg",
                        "path": "images/vehicles/c9bd411f4a4bf57e2be4754189edadf5.jpg",
                        "extension": "jpg",
                        "size": 302958
                    },
                    {
                        "id": 22021034908,
                        "name": "e4e29cce98f15adf6a0a3837f6a33107.jpg",
                        "path": "images/vehicles/e4e29cce98f15adf6a0a3837f6a33107.jpg",
                        "extension": "jpg",
                        "size": 265171
                    }
                ]
            },
            "version": {
                "id": 4197,
                "id_string": "sportrac-22-16v-4x4-cd-dies-aut",
                "name": "SPORTRAC 2.2 16V 4x4 CD Dies Aut.",
                "fipe_code": "003445-2",
                "price": "16232600",
                "year_model": 2018,
                "model": {
                    "id": 44,
                    "id_string": "ranger",
                    "name": "ranger",
                    "ico": {
                        "id": 22021131982,
                        "name": "6266b5eb62ce65dca0d8dd25d2128413.png",
                        "path": "images/models/6266b5eb62ce65dca0d8dd25d2128413.png",
                        "extension": "png",
                        "size": 0
                    },
                    "brand": {
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
                    }
                }
            },
            "quant_doors": 4,
            "type": "car"
        },
    ],
}
export default function Store() {
    const [store, setStory] = useState({
        id: 2,
        name: "Giovanni Veículos",
        logo: LogoGiovanni,
        banner: BannerGiovanni
    })
    return (
        <div className={styles.store}>
            <NavbarFixed />
            <div className={styles.banner}>
                <img src={BannerGiovanni.src} alt=""/>
            </div>
            <div className={styles.content}>
                <nav className={styles.aside_bar}>
                    <div className={styles.avatar}>
                        <img src={LogoGiovanni.src} alt="" />
                    </div>
                    <h4 className={styles.name}>{store.name}</h4>
                    <div className={styles.address + " d-flex align-items-center gap-2"}>
                        <FontAwesomeIcon icon={faMapMarkerAlt as IconProp} />
                        <span>Catalão - GO</span>
                    </div>
                    <hr />
                </nav>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between px-4 mt-4">
                        <p className={styles.text_results}><span>10 veículos</span> em estoque</p>
                        <Link href="/">
                            <a className={styles.filter_results + " d-flex align-items-center gap-2"}>
                                <span>Filtrar resultados</span><FontAwesomeIcon icon={faArrowRight as IconProp} />
                            </a>
                        </Link>

                    </div>
                    <div className={styles.list + " d-flex flex-wrap justify-content-center gap-4"}>
                        {data.vehicles?.map((vehicle, idx) => (
                            <CardAnnouncement key={idx} data={vehicle}/>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}