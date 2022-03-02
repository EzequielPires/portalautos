import {NavbarFixed} from "../../components/NavbarFixed";
import {Gallery} from "../../components/Gallery";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import VMasker from "vanilla-masker/build/vanilla-masker.min";
import styles from "./styles.module.scss";
import {SectionOffers} from "../../components/SectionOffers";
import {SectionFinancing} from "../../components/SectionFinancing";
import {Aside} from "../../components/ViewVehicleComponents/Aside";
import {Footer} from "../../components/Footer";
import {BsWhatsapp, BsEnvelope} from "react-icons/bs";
import {FaRegHeart} from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyBillWave} from "@fortawesome/free-solid-svg-icons";
import {IoShieldCheckmark} from "react-icons/io5";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export default function Comprar() {
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
                "fipe_vehicle": {
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
                "fipe_vehicle": {
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
                "fipe_vehicle": {
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
                "fipe_vehicle": {
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
                "fipe_vehicle": {
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
                "fipe_vehicle": {
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
            {
                "id": 237,
                "identifier": "22021082467",
                "active": true,
                "sold": false,
                "price": "15490000",
                "visible_price": false,
                "year_manufacture": 2021,
                "mileage_traveled": 0,
                "new": true,
                "last_digit_plate": 6,
                "created_at": {
                    "date": "2022-02-10 16:18:42.000000",
                    "timezone_type": 3,
                    "timezone": "America/Sao_Paulo"
                },
                "gallery": {
                    "images": [
                        {
                            "id": 22021086172,
                            "name": "fc12bfe43dc935997f2fc43590f21d94.jpg",
                            "path": "images/vehicles/fc12bfe43dc935997f2fc43590f21d94.jpg",
                            "extension": "jpg",
                            "size": 373542
                        },
                        {
                            "id": 22021095871,
                            "name": "116b3e0c3c49cef394781a1ade439393.jpg",
                            "path": "images/vehicles/116b3e0c3c49cef394781a1ade439393.jpg",
                            "extension": "jpg",
                            "size": 422262
                        },
                        {
                            "id": 22021058605,
                            "name": "ee4e527e220ce3d80d451ed6782efce1.jpg",
                            "path": "images/vehicles/ee4e527e220ce3d80d451ed6782efce1.jpg",
                            "extension": "jpg",
                            "size": 328833
                        },
                        {
                            "id": 22021018391,
                            "name": "473b5045f4304b6354a413ece733d126.jpg",
                            "path": "images/vehicles/473b5045f4304b6354a413ece733d126.jpg",
                            "extension": "jpg",
                            "size": 266824
                        },
                        {
                            "id": 22021090148,
                            "name": "7458f8f414f881527c4badca0dfaf040.jpg",
                            "path": "images/vehicles/7458f8f414f881527c4badca0dfaf040.jpg",
                            "extension": "jpg",
                            "size": 289208
                        },
                        {
                            "id": 22021084776,
                            "name": "ca2de0a9d8c7b06b24cd4058cc3c9097.jpg",
                            "path": "images/vehicles/ca2de0a9d8c7b06b24cd4058cc3c9097.jpg",
                            "extension": "jpg",
                            "size": 296566
                        },
                        {
                            "id": 22021077878,
                            "name": "5c51724bb4fd94e97603367dbe591967.jpg",
                            "path": "images/vehicles/5c51724bb4fd94e97603367dbe591967.jpg",
                            "extension": "jpg",
                            "size": 336828
                        },
                        {
                            "id": 22021079474,
                            "name": "95ca3c8abb2838dd5069b5dc25663183.jpg",
                            "path": "images/vehicles/95ca3c8abb2838dd5069b5dc25663183.jpg",
                            "extension": "jpg",
                            "size": 312759
                        }
                    ]
                },
                "fipe_vehicle": {
                    "id": 4897,
                    "id_string": "txs-15-16v-turbo-flex-aut",
                    "name": "TXS 1.5 16V Turbo Flex Aut.",
                    "fipe_code": "073025-4",
                    "price": "13433100",
                    "year_model": 2022,
                    "model": {
                        "id": 290,
                        "id_string": "tiggo-7",
                        "name": "tiggo 7",
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
                "id": 236,
                "identifier": "22021059368",
                "active": true,
                "sold": false,
                "price": "13390000",
                "visible_price": false,
                "year_manufacture": 2021,
                "mileage_traveled": 0,
                "new": true,
                "last_digit_plate": 6,
                "created_at": {
                    "date": "2022-02-10 16:12:08.000000",
                    "timezone_type": 3,
                    "timezone": "America/Sao_Paulo"
                },
                "gallery": {
                    "images": [
                        {
                            "id": 22021033959,
                            "name": "da0af36b34c19c7d9ee6c58311158698.jpg",
                            "path": "images/vehicles/da0af36b34c19c7d9ee6c58311158698.jpg",
                            "extension": "jpg",
                            "size": 334777
                        },
                        {
                            "id": 22021032226,
                            "name": "1277ad52ff0684c589d5fcbd67b00329.jpg",
                            "path": "images/vehicles/1277ad52ff0684c589d5fcbd67b00329.jpg",
                            "extension": "jpg",
                            "size": 324152
                        },
                        {
                            "id": 22021028037,
                            "name": "311aecfb090c095e5b9d5ee3c6d79090.jpg",
                            "path": "images/vehicles/311aecfb090c095e5b9d5ee3c6d79090.jpg",
                            "extension": "jpg",
                            "size": 342929
                        },
                        {
                            "id": 22021011295,
                            "name": "73647b6654a178b1ab1d1610b4b34141.jpg",
                            "path": "images/vehicles/73647b6654a178b1ab1d1610b4b34141.jpg",
                            "extension": "jpg",
                            "size": 277957
                        },
                        {
                            "id": 22021035507,
                            "name": "7f33c382ddddc06498c25ee9452003e0.jpg",
                            "path": "images/vehicles/7f33c382ddddc06498c25ee9452003e0.jpg",
                            "extension": "jpg",
                            "size": 303014
                        },
                        {
                            "id": 22021049974,
                            "name": "daaae417d60045837495191907c2776b.jpg",
                            "path": "images/vehicles/daaae417d60045837495191907c2776b.jpg",
                            "extension": "jpg",
                            "size": 332909
                        },
                        {
                            "id": 22021079438,
                            "name": "2a6e95c74a70197124c3bd67e0c9add2.jpg",
                            "path": "images/vehicles/2a6e95c74a70197124c3bd67e0c9add2.jpg",
                            "extension": "jpg",
                            "size": 370047
                        },
                        {
                            "id": 22021050942,
                            "name": "052bb9efb4b1f5b675893514039f3a8f.jpg",
                            "path": "images/vehicles/052bb9efb4b1f5b675893514039f3a8f.jpg",
                            "extension": "jpg",
                            "size": 342841
                        }
                    ]
                },
                "fipe_vehicle": {
                    "id": 4901,
                    "id_string": "zen-13-tb-16v-flex-5p-aut",
                    "name": "Zen 1.3 TB 16V Flex 5p Aut.",
                    "fipe_code": "025308-1",
                    "price": "12035900",
                    "year_model": 2022,
                    "model": {
                        "id": 150,
                        "id_string": "captur",
                        "name": "captur",
                        "ico": {
                            "id": 22021154470,
                            "name": "f09d3cd9a9cdede462549cac3b052f36.png",
                            "path": "images/models/f09d3cd9a9cdede462549cac3b052f36.png",
                            "extension": "png",
                            "size": 0
                        },
                        "brand": {
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
                        }
                    }
                },
                "quant_doors": 5,
                "type": "car"
            },
            {
                "id": 235,
                "identifier": "22021033174",
                "active": true,
                "sold": false,
                "price": "11490000",
                "visible_price": false,
                "year_manufacture": 2021,
                "mileage_traveled": 0,
                "new": true,
                "last_digit_plate": null,
                "created_at": {
                    "date": "2022-02-10 15:44:01.000000",
                    "timezone_type": 3,
                    "timezone": "America/Sao_Paulo"
                },
                "gallery": {
                    "images": [
                        {
                            "id": 22021092968,
                            "name": "1ea382771522942ba219d4c0297ecc44.jpg",
                            "path": "images/vehicles/1ea382771522942ba219d4c0297ecc44.jpg",
                            "extension": "jpg",
                            "size": 267604
                        },
                        {
                            "id": 22021084323,
                            "name": "eaaf0f06ea7a54216ea351a9d4481ed8.jpg",
                            "path": "images/vehicles/eaaf0f06ea7a54216ea351a9d4481ed8.jpg",
                            "extension": "jpg",
                            "size": 252989
                        },
                        {
                            "id": 22021090154,
                            "name": "75bb67b7fd8470dbfa07734c162636a9.jpg",
                            "path": "images/vehicles/75bb67b7fd8470dbfa07734c162636a9.jpg",
                            "extension": "jpg",
                            "size": 179995
                        },
                        {
                            "id": 22021021663,
                            "name": "622aef9a4a65adfa2d166b2461bdaa32.jpg",
                            "path": "images/vehicles/622aef9a4a65adfa2d166b2461bdaa32.jpg",
                            "extension": "jpg",
                            "size": 168189
                        },
                        {
                            "id": 22021083870,
                            "name": "341390a579bf80d3c68c4e16f4066c38.jpg",
                            "path": "images/vehicles/341390a579bf80d3c68c4e16f4066c38.jpg",
                            "extension": "jpg",
                            "size": 196247
                        },
                        {
                            "id": 22021011086,
                            "name": "d31c1afabdde20681114c13bb8a92b1e.jpg",
                            "path": "images/vehicles/d31c1afabdde20681114c13bb8a92b1e.jpg",
                            "extension": "jpg",
                            "size": 230587
                        },
                        {
                            "id": 22021011833,
                            "name": "5e5dcda1648be93ae4e2a9bfa8de24b7.jpg",
                            "path": "images/vehicles/5e5dcda1648be93ae4e2a9bfa8de24b7.jpg",
                            "extension": "jpg",
                            "size": 212078
                        },
                        {
                            "id": 22021050353,
                            "name": "1f58d95755d2e2aad85e4dbdfebbe447.jpg",
                            "path": "images/vehicles/1f58d95755d2e2aad85e4dbdfebbe447.jpg",
                            "extension": "jpg",
                            "size": 166485
                        }
                    ]
                },
                "fipe_vehicle": {
                    "id": 4906,
                    "id_string": "intense-16-16v-flex-aut",
                    "name": "Intense 1.6 16V Flex Aut.",
                    "fipe_code": "025301-4",
                    "price": "10781900",
                    "year_model": 2022,
                    "model": {
                        "id": 152,
                        "id_string": "duster",
                        "name": "duster",
                        "ico": {
                            "id": 22021140013,
                            "name": "93fb6227d792081bc13059b790b05c9d.png",
                            "path": "images/models/93fb6227d792081bc13059b790b05c9d.png",
                            "extension": "png",
                            "size": 0
                        },
                        "brand": {
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
                        }
                    }
                },
                "quant_doors": 5,
                "type": "car"
            },
            {
                "id": 233,
                "identifier": "22021032568",
                "active": true,
                "sold": false,
                "price": "10290000",
                "visible_price": false,
                "year_manufacture": 2021,
                "mileage_traveled": 0,
                "new": true,
                "last_digit_plate": 5,
                "created_at": {
                    "date": "2022-02-10 15:22:53.000000",
                    "timezone_type": 3,
                    "timezone": "America/Sao_Paulo"
                },
                "gallery": {
                    "images": [
                        {
                            "id": 22021091771,
                            "name": "288bfe4ffa242d0e846fd965730426ab.jpg",
                            "path": "images/vehicles/288bfe4ffa242d0e846fd965730426ab.jpg",
                            "extension": "jpg",
                            "size": 297640
                        },
                        {
                            "id": 22021073174,
                            "name": "4a63f577023e3502552999907642995d.jpg",
                            "path": "images/vehicles/4a63f577023e3502552999907642995d.jpg",
                            "extension": "jpg",
                            "size": 278025
                        },
                        {
                            "id": 22021076111,
                            "name": "28147a8c78012c45a57360749d2a696e.jpg",
                            "path": "images/vehicles/28147a8c78012c45a57360749d2a696e.jpg",
                            "extension": "jpg",
                            "size": 313571
                        },
                        {
                            "id": 22021083139,
                            "name": "c9f93b02564e754a5eb1e8daf455123b.jpg",
                            "path": "images/vehicles/c9f93b02564e754a5eb1e8daf455123b.jpg",
                            "extension": "jpg",
                            "size": 308231
                        },
                        {
                            "id": 22021049954,
                            "name": "7c2d8979bdb429ff30738423da26fb6b.jpg",
                            "path": "images/vehicles/7c2d8979bdb429ff30738423da26fb6b.jpg",
                            "extension": "jpg",
                            "size": 234913
                        },
                        {
                            "id": 22021077928,
                            "name": "e5ad96e8428e11d77b4aca708aeb0c1d.jpg",
                            "path": "images/vehicles/e5ad96e8428e11d77b4aca708aeb0c1d.jpg",
                            "extension": "jpg",
                            "size": 224216
                        },
                        {
                            "id": 22021092595,
                            "name": "5c850090dd848ede260cc020d12f2689.jpg",
                            "path": "images/vehicles/5c850090dd848ede260cc020d12f2689.jpg",
                            "extension": "jpg",
                            "size": 255799
                        },
                        {
                            "id": 22021043511,
                            "name": "087d988f5842d9a2eaa2a4b78dc644ca.jpg",
                            "path": "images/vehicles/087d988f5842d9a2eaa2a4b78dc644ca.jpg",
                            "extension": "jpg",
                            "size": 245748
                        }
                    ]
                },
                "fipe_vehicle": {
                    "id": 3324,
                    "id_string": "std-18-4x2-flex-16v-aut",
                    "name": "STD 1.8 4x2 Flex 16v Aut.",
                    "fipe_code": "017067-4",
                    "price": "9767500",
                    "year_model": 2021,
                    "model": {
                        "id": 278,
                        "id_string": "renegade",
                        "name": "renegade",
                        "ico": {
                            "id": 22021152770,
                            "name": "f01c5f118a34fee51bfb5d5c61c9af6a.png",
                            "path": "images/models/f01c5f118a34fee51bfb5d5c61c9af6a.png",
                            "extension": "png",
                            "size": 0
                        },
                        "brand": {
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
                        }
                    }
                },
                "quant_doors": 5,
                "type": "car"
            },
            {
                "id": 232,
                "identifier": "22021066226",
                "active": true,
                "sold": false,
                "price": "9990000",
                "visible_price": false,
                "year_manufacture": 2016,
                "mileage_traveled": 92000,
                "new": false,
                "last_digit_plate": 3,
                "created_at": {
                    "date": "2022-02-10 15:16:30.000000",
                    "timezone_type": 3,
                    "timezone": "America/Sao_Paulo"
                },
                "gallery": {
                    "images": [
                        {
                            "id": 22021038099,
                            "name": "18874b8faa117507bf3b9c3c1085829a.jpg",
                            "path": "images/vehicles/18874b8faa117507bf3b9c3c1085829a.jpg",
                            "extension": "jpg",
                            "size": 360126
                        },
                        {
                            "id": 22021089430,
                            "name": "0906ee9c5cd1a6d89b38dcba2c3334d5.jpg",
                            "path": "images/vehicles/0906ee9c5cd1a6d89b38dcba2c3334d5.jpg",
                            "extension": "jpg",
                            "size": 339681
                        },
                        {
                            "id": 22021096236,
                            "name": "2e85831f5bee9e5775dedc498d7d30dd.jpg",
                            "path": "images/vehicles/2e85831f5bee9e5775dedc498d7d30dd.jpg",
                            "extension": "jpg",
                            "size": 274224
                        },
                        {
                            "id": 22021027453,
                            "name": "bc7be223e6176cf7749bc0e77e5a4b04.jpg",
                            "path": "images/vehicles/bc7be223e6176cf7749bc0e77e5a4b04.jpg",
                            "extension": "jpg",
                            "size": 258476
                        },
                        {
                            "id": 22021071142,
                            "name": "4446888371decbdb47e5d782534a4da9.jpg",
                            "path": "images/vehicles/4446888371decbdb47e5d782534a4da9.jpg",
                            "extension": "jpg",
                            "size": 327296
                        },
                        {
                            "id": 22021055682,
                            "name": "e083d92b333f30ff79345c3ed61256bd.jpg",
                            "path": "images/vehicles/e083d92b333f30ff79345c3ed61256bd.jpg",
                            "extension": "jpg",
                            "size": 322470
                        },
                        {
                            "id": 22021034952,
                            "name": "7915a3c3a34af87fd1e153c7462eadff.jpg",
                            "path": "images/vehicles/7915a3c3a34af87fd1e153c7462eadff.jpg",
                            "extension": "jpg",
                            "size": 325819
                        },
                        {
                            "id": 22021012804,
                            "name": "90db7b5d31c6d324546f66c2738803d9.jpg",
                            "path": "images/vehicles/90db7b5d31c6d324546f66c2738803d9.jpg",
                            "extension": "jpg",
                            "size": 366978
                        }
                    ]
                },
                "fipe_vehicle": {
                    "id": 4908,
                    "id_string": "freedom-18-16v-flex-aut",
                    "name": "Freedom 1.8 16V Flex Aut.",
                    "fipe_code": "001449-4",
                    "price": "9159100",
                    "year_model": 2017,
                    "model": {
                        "id": 28,
                        "id_string": "toro",
                        "name": "toro",
                        "ico": {
                            "id": 22021181348,
                            "name": "2215bd8266b5af450c807516244ecb4c.png",
                            "path": "images/models/2215bd8266b5af450c807516244ecb4c.png",
                            "extension": "png",
                            "size": 0
                        },
                        "brand": {
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
                        }
                    }
                },
                "quant_doors": 4,
                "type": "car"
            },
            {
                "id": 231,
                "identifier": "22021078780",
                "active": true,
                "sold": false,
                "price": "7790000",
                "visible_price": false,
                "year_manufacture": 2019,
                "mileage_traveled": 3500,
                "new": false,
                "last_digit_plate": 1,
                "created_at": {
                    "date": "2022-02-10 15:11:49.000000",
                    "timezone_type": 3,
                    "timezone": "America/Sao_Paulo"
                },
                "gallery": {
                    "images": [
                        {
                            "id": 22021011432,
                            "name": "d2c9edb2f2e61a82c9c4561e8c5129ff.jpg",
                            "path": "images/vehicles/d2c9edb2f2e61a82c9c4561e8c5129ff.jpg",
                            "extension": "jpg",
                            "size": 314350
                        },
                        {
                            "id": 22021025400,
                            "name": "b3b1f525b924c95e4facd5ec5e95fb26.jpg",
                            "path": "images/vehicles/b3b1f525b924c95e4facd5ec5e95fb26.jpg",
                            "extension": "jpg",
                            "size": 284831
                        },
                        {
                            "id": 22021053413,
                            "name": "7fe3191004eb699d6539b0015a39e3de.jpg",
                            "path": "images/vehicles/7fe3191004eb699d6539b0015a39e3de.jpg",
                            "extension": "jpg",
                            "size": 257671
                        },
                        {
                            "id": 22021060254,
                            "name": "f2289240985493a3117c9404c799eed2.jpg",
                            "path": "images/vehicles/f2289240985493a3117c9404c799eed2.jpg",
                            "extension": "jpg",
                            "size": 267306
                        },
                        {
                            "id": 22021080499,
                            "name": "4fe5ff34cceac5614dbd255abeed517a.jpg",
                            "path": "images/vehicles/4fe5ff34cceac5614dbd255abeed517a.jpg",
                            "extension": "jpg",
                            "size": 120839
                        },
                        {
                            "id": 22021055964,
                            "name": "9a9f062e0a7f0a2ab3d5f085cc4ecddf.jpg",
                            "path": "images/vehicles/9a9f062e0a7f0a2ab3d5f085cc4ecddf.jpg",
                            "extension": "jpg",
                            "size": 256898
                        },
                        {
                            "id": 22021082489,
                            "name": "e4207ef861fdf791df70b017ff5beeed.jpg",
                            "path": "images/vehicles/e4207ef861fdf791df70b017ff5beeed.jpg",
                            "extension": "jpg",
                            "size": 204272
                        },
                        {
                            "id": 22021041408,
                            "name": "cbe1ef506d7ee8eb97608c2bcd6a5fc2.jpg",
                            "path": "images/vehicles/cbe1ef506d7ee8eb97608c2bcd6a5fc2.jpg",
                            "extension": "jpg",
                            "size": 257918
                        }
                    ]
                },
                "fipe_vehicle": {
                    "id": 4045,
                    "id_string": "15-titanium-12v-flex-5p-aut",
                    "name": "1.5 TITANIUM 12V Flex 5p Aut.",
                    "fipe_code": "003467-3",
                    "price": "7409500",
                    "year_model": 2020,
                    "model": {
                        "id": 7,
                        "id_string": "ka",
                        "name": "ka",
                        "ico": {
                            "id": 22021165194,
                            "name": "973c26120eb6889a4f0e2d0938ec0521.png",
                            "path": "images/models/973c26120eb6889a4f0e2d0938ec0521.png",
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
                "quant_doors": 5,
                "type": "car"
            },
            {
                "id": 230,
                "identifier": "22021039508",
                "active": true,
                "sold": false,
                "price": "6990000",
                "visible_price": false,
                "year_manufacture": 2019,
                "mileage_traveled": 67000,
                "new": false,
                "last_digit_plate": 9,
                "created_at": {
                    "date": "2022-02-10 14:38:49.000000",
                    "timezone_type": 3,
                    "timezone": "America/Sao_Paulo"
                },
                "gallery": {
                    "images": [
                        {
                            "id": 22021084365,
                            "name": "94baa32e34b099d4990e4a67330787dd.jpg",
                            "path": "images/vehicles/94baa32e34b099d4990e4a67330787dd.jpg",
                            "extension": "jpg",
                            "size": 338225
                        },
                        {
                            "id": 22021075679,
                            "name": "e67e2959118f0cf0394803ea6a8cc8ce.jpg",
                            "path": "images/vehicles/e67e2959118f0cf0394803ea6a8cc8ce.jpg",
                            "extension": "jpg",
                            "size": 331374
                        },
                        {
                            "id": 22021021220,
                            "name": "2ec7646a7a7778ac648ff1eafbe7cc6f.jpg",
                            "path": "images/vehicles/2ec7646a7a7778ac648ff1eafbe7cc6f.jpg",
                            "extension": "jpg",
                            "size": 332824
                        },
                        {
                            "id": 22021047052,
                            "name": "ecb462cfa788e8bed7c7a79a71c56d7c.jpg",
                            "path": "images/vehicles/ecb462cfa788e8bed7c7a79a71c56d7c.jpg",
                            "extension": "jpg",
                            "size": 208811
                        },
                        {
                            "id": 22021091150,
                            "name": "b1b4f5182f807c00ee5e05e49e545b4d.jpg",
                            "path": "images/vehicles/b1b4f5182f807c00ee5e05e49e545b4d.jpg",
                            "extension": "jpg",
                            "size": 228218
                        },
                        {
                            "id": 22021068318,
                            "name": "8170cdaebe8fc169bd19012f63ee640e.jpg",
                            "path": "images/vehicles/8170cdaebe8fc169bd19012f63ee640e.jpg",
                            "extension": "jpg",
                            "size": 279168
                        }
                    ]
                },
                "fipe_vehicle": {
                    "id": 4910,
                    "id_string": "freedom-14-flex-8v-cs",
                    "name": "Freedom 1.4 Flex 8V CS",
                    "fipe_code": "001518-0",
                    "price": "6981100",
                    "year_model": 2020,
                    "model": {
                        "id": 27,
                        "id_string": "strada",
                        "name": "strada",
                        "ico": {
                            "id": 22021141559,
                            "name": "1660786fe8987efa5df47ea85db0fa3e.png",
                            "path": "images/models/1660786fe8987efa5df47ea85db0fa3e.png",
                            "extension": "png",
                            "size": 0
                        },
                        "brand": {
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
                        }
                    }
                },
                "quant_doors": 2,
                "type": "car"
            },
            {
                "id": 229,
                "identifier": "22021031301",
                "active": true,
                "sold": false,
                "price": "30990000",
                "visible_price": false,
                "year_manufacture": 2018,
                "mileage_traveled": 137500,
                "new": false,
                "last_digit_plate": 9,
                "created_at": {
                    "date": "2022-02-10 14:29:57.000000",
                    "timezone_type": 3,
                    "timezone": "America/Sao_Paulo"
                },
                "gallery": {
                    "images": [
                        {
                            "id": 22021033122,
                            "name": "bba64312be1483f58bc4c0cbcdbeb2cd.jpg",
                            "path": "images/vehicles/bba64312be1483f58bc4c0cbcdbeb2cd.jpg",
                            "extension": "jpg",
                            "size": 922375
                        },
                        {
                            "id": 22021043923,
                            "name": "9e69df88f95c8e848fa1ed21f7dddd79.jpg",
                            "path": "images/vehicles/9e69df88f95c8e848fa1ed21f7dddd79.jpg",
                            "extension": "jpg",
                            "size": 907013
                        },
                        {
                            "id": 22021085183,
                            "name": "fff8517700a60ea2cec73b27b80ac76f.jpg",
                            "path": "images/vehicles/fff8517700a60ea2cec73b27b80ac76f.jpg",
                            "extension": "jpg",
                            "size": 1088533
                        },
                        {
                            "id": 22021076352,
                            "name": "c0c415b4c472adc67fe7f8480d002525.jpg",
                            "path": "images/vehicles/c0c415b4c472adc67fe7f8480d002525.jpg",
                            "extension": "jpg",
                            "size": 924019
                        },
                        {
                            "id": 22021074304,
                            "name": "523f6a79a4fcb95d72bd429b3a7b739e.jpg",
                            "path": "images/vehicles/523f6a79a4fcb95d72bd429b3a7b739e.jpg",
                            "extension": "jpg",
                            "size": 1108073
                        },
                        {
                            "id": 22021088230,
                            "name": "6d6fad5a19cbfb049c89a8a42ab268a1.jpg",
                            "path": "images/vehicles/6d6fad5a19cbfb049c89a8a42ab268a1.jpg",
                            "extension": "jpg",
                            "size": 1002525
                        },
                        {
                            "id": 22021033167,
                            "name": "338e975f97dfbc10f1278bed35e23766.jpg",
                            "path": "images/vehicles/338e975f97dfbc10f1278bed35e23766.jpg",
                            "extension": "jpg",
                            "size": 880933
                        },
                        {
                            "id": 22021041683,
                            "name": "903a7e176fd114ccda27f46d05eec5b1.jpg",
                            "path": "images/vehicles/903a7e176fd114ccda27f46d05eec5b1.jpg",
                            "extension": "jpg",
                            "size": 939813
                        }
                    ]
                },
                "fipe_vehicle": {
                    "id": 6151,
                    "id_string": "sw4-srx-4x4-28-tdi-16v-dies-aut",
                    "name": "SW4 SRX 4x4 2.8 TDI 16V Dies. Aut.",
                    "fipe_code": "002146-6",
                    "price": "31247000",
                    "year_model": 2019,
                    "model": {
                        "id": 167,
                        "id_string": "hilux-sw4",
                        "name": "hilux sw4",
                        "ico": {
                            "id": 22021131926,
                            "name": "88ee3b1e7e0990075809a1a78062faeb.png",
                            "path": "images/models/88ee3b1e7e0990075809a1a78062faeb.png",
                            "extension": "png",
                            "size": 0
                        },
                        "brand": {
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
                        }
                    }
                },
                "quant_doors": 5,
                "type": "car"
            },
            {
                "id": 228,
                "identifier": "22021062066",
                "active": true,
                "sold": false,
                "price": "18990000",
                "visible_price": false,
                "year_manufacture": 2015,
                "mileage_traveled": 143000,
                "new": false,
                "last_digit_plate": 8,
                "created_at": {
                    "date": "2022-02-10 13:46:44.000000",
                    "timezone_type": 3,
                    "timezone": "America/Sao_Paulo"
                },
                "gallery": {
                    "images": [
                        {
                            "id": 22021075265,
                            "name": "3cf9c14fb0c0005139aec8b507bb4481.jpg",
                            "path": "images/vehicles/3cf9c14fb0c0005139aec8b507bb4481.jpg",
                            "extension": "jpg",
                            "size": 385074
                        },
                        {
                            "id": 22021017386,
                            "name": "c00751c45fbaa1e42f409a86ee2a40cf.jpg",
                            "path": "images/vehicles/c00751c45fbaa1e42f409a86ee2a40cf.jpg",
                            "extension": "jpg",
                            "size": 321948
                        },
                        {
                            "id": 22021080752,
                            "name": "a08cd1b761059454a41bb24b3cfd6d2f.jpg",
                            "path": "images/vehicles/a08cd1b761059454a41bb24b3cfd6d2f.jpg",
                            "extension": "jpg",
                            "size": 337493
                        },
                        {
                            "id": 22021099583,
                            "name": "14d2c9dd2a874b3fdda5ccc8a7c8d2d7.jpg",
                            "path": "images/vehicles/14d2c9dd2a874b3fdda5ccc8a7c8d2d7.jpg",
                            "extension": "jpg",
                            "size": 308730
                        },
                        {
                            "id": 22021051574,
                            "name": "080403f278d1eaabe0445d82ca6ed299.jpg",
                            "path": "images/vehicles/080403f278d1eaabe0445d82ca6ed299.jpg",
                            "extension": "jpg",
                            "size": 269903
                        },
                        {
                            "id": 22021074279,
                            "name": "498ca3764bbba09f1ee0d92d7c226be7.jpg",
                            "path": "images/vehicles/498ca3764bbba09f1ee0d92d7c226be7.jpg",
                            "extension": "jpg",
                            "size": 301966
                        },
                        {
                            "id": 22021095205,
                            "name": "4dc09f60cb44fd6195a6d10e6dbe5c1a.jpg",
                            "path": "images/vehicles/4dc09f60cb44fd6195a6d10e6dbe5c1a.jpg",
                            "extension": "jpg",
                            "size": 349103
                        },
                        {
                            "id": 22021017842,
                            "name": "a6d034f3ca0d759f9e9bb9afe5b17fda.jpg",
                            "path": "images/vehicles/a6d034f3ca0d759f9e9bb9afe5b17fda.jpg",
                            "extension": "jpg",
                            "size": 275871
                        }
                    ]
                },
                "fipe_vehicle": {
                    "id": 6122,
                    "id_string": "sw4-sr-d4-d-4x4-30-tdi-dies-aut",
                    "name": "SW4 SR D4-D 4x4 3.0 TDI Dies. Aut",
                    "fipe_code": "002120-2",
                    "price": "18158200",
                    "year_model": 2015,
                    "model": {
                        "id": 167,
                        "id_string": "hilux-sw4",
                        "name": "hilux sw4",
                        "ico": {
                            "id": 22021131926,
                            "name": "88ee3b1e7e0990075809a1a78062faeb.png",
                            "path": "images/models/88ee3b1e7e0990075809a1a78062faeb.png",
                            "extension": "png",
                            "size": 0
                        },
                        "brand": {
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
                        }
                    }
                },
                "quant_doors": 5,
                "type": "car"
            }
        ],
    }
    const [vehicle, setVehicle] = useState(null);
    const router = useRouter();
    const id = router.query.id || [];

    useEffect(() => {
        if (id.length > 0) {
            data.vehicles.forEach(item => {
                if (item.identifier === id[0]) {
                    setVehicle(item);
                }
            })
        }

    }, [id]);

    return (
        <div className={styles.comprar + " comprar"}>
            <NavbarFixed/>
            {vehicle ?
                <>
                    <Gallery images={vehicle.gallery.images}/>
                    <div className="d-flex justify-content-center">
                        <div className={styles.content}>
                            <div className="d-flex flex-column">
                                <div className={styles.main}>
                                    <div className="d-flex w-100 flex-column">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex flex-column">
                                                <h2 className={styles.title}>
                                                    {
                                                        `${vehicle.fipe_vehicle.model.brand.name} `
                                                    }
                                                    <span>{vehicle.fipe_vehicle.model.name}</span>
                                                </h2>
                                                <h4 className={styles.version}>{vehicle.fipe_vehicle.name}</h4>
                                                <p className={styles.price}>
                                                    <span>R$ </span>{VMasker.toMoney(vehicle.price)}
                                                </p>
                                                <div className={"d-flex gap-2 my-4"}>
                                                    <a href="#financing" className={styles.btn_santander}>
                                                        <FontAwesomeIcon icon={faMoneyBillWave as IconProp}/>
                                                        Simular Financiamento
                                                    </a>
                                                </div>
                                            </div>
                                            <button className={styles.icon_heart}>
                                                <FaRegHeart/>
                                            </button>
                                        </div>
                                        <div className="d-flex">
                                            <div className={styles.item}>
                                                <span>Cidade</span>
                                                <strong>Catalão - GO</strong>
                                            </div>
                                            <div className={styles.item}>
                                                <span>Ano</span>
                                                <strong>{vehicle.year_manufacture + "/" + vehicle.fipe_vehicle.year_model}</strong>
                                            </div>
                                            <div className={styles.item}>
                                                <span>Km</span>
                                                <strong>{VMasker.toMoney(vehicle.mileage_traveled, {
                                                    precision: 0,
                                                    delimiter: '.',
                                                })}</strong>
                                            </div>
                                        </div>

                                    </div>
                                    <hr/>
                                    <div className="d-flex flex-column">
                                        <span className={styles.title_section}>Ficha técnica</span>
                                        <div className="d-flex flex-wrap gap-4">
                                            <div className="d-flex flex-wrap gap-2">
                                                <div className={styles.item}>
                                                    <span>Carroceria</span>
                                                    <strong>Picape</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Estilo</span>
                                                    <strong>Picape</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Combustível</span>
                                                    <strong>Diesel</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Sistema de combustível</span>
                                                    <strong>Injeção eletrônica</strong>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap gap-2">
                                                <div className={styles.item}>
                                                    <span>Câmbio de marchas</span>
                                                    <strong>Manual</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Quant. de portas</span>
                                                    <strong>4</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Final de placa</span>
                                                    <strong>0</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Cor</span>
                                                    <strong>Preto</strong>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap gap-2">
                                                <div className={styles.item}>
                                                    <span>Único dono</span>
                                                    <strong>Sim</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Aceita troca</span>
                                                    <strong>Sim</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Condição</span>
                                                    <strong>Novo</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Alienado</span>
                                                    <strong>Sim</strong>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap gap-2">
                                                <div className={styles.item}>
                                                    <span>IPVA pago</span>
                                                    <strong>Sim</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Licenciado</span>
                                                    <strong>Sim</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Garantia de fábrica</span>
                                                    <strong>Sim</strong>
                                                </div>
                                                <div className={styles.item}>
                                                    <span>Revisões feitas</span>
                                                    <strong>Sim</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="d-flex flex-column">
                                        <span className={styles.title_section}>Sobre o veículo</span>
                                        <p className={styles.description}>A Volkswagen Amarok 2022 tem direção leve e
                                            precisa, além de suspensão com ajuste bem mesclado entre conforto e
                                            estabilidade. O câmbio automático de oito marchas – da Aisin – continua com
                                            mudanças suaves e em dia com as prestações apresentadas pelo 2.0 TDI.</p>
                                    </div>
                                    <hr/>
                                    <div className="d-flex flex-column">
                                        <span className={styles.title_section}>Itens de veículo</span>
                                        <div className="d-flex flex-wrap gap-4">
                                            <div className="d-flex flex-wrap gap-2">
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Trava elétrica</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Airbag motorista</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Alarme</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Freios ABS</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Ar condicionado</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Direção hidráulica</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Ajuste de altura para bancos</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Ajuste de altura para volante</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Computador de bordo</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Retrovisores elétricos</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Vidros elétricos</strong>
                                                </div>
                                                <div className={styles.item + " mb-3"}>
                                                    <strong>Computador de bordo</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <SectionFinancing/>
                            </div>
                            <Aside vehicle={vehicle}/>
                        </div>
                    </div>
                    <SectionOffers/>
                    <div className={styles.contact}>
                        <button className={styles.btn_whatsapp}>
                            <BsWhatsapp/>
                            Whatsapp
                        </button>
                        <button className={styles.btn_message}>
                            <BsEnvelope/>
                            Mensagem
                        </button>
                    </div>
                </>
                : null}
            <Footer/>
        </div>
    );
}