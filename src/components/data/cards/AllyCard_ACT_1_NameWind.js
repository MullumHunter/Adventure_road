import {generateUniqueId} from "../../utils/GenerateId";
import {prizeData, prizeDataMap} from "../PrizeData";
import {addition} from "../Addition";

export const allyCard_ACT_1_NameWind =[
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_1_nameWind/tinker.png',
        way:
            {
                nameWayUp: "Лудильщик",
                prize: [
                    prizeData["light_way1"],
                ]
            }
        ,
        text: "Получив этого союзника, \n возьмите (card_hero)(card_hero)(card_hero), \n а затем сбросьте (card_hero)(card_hero).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "055",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_1_nameWind/mother_father.png',
        way:
            {
                nameWayUp: "Мать и отец",
                prize: [
                    prizeData["light_way2"],
                ]
            }
        ,
        text: "Провалив испытание, \n требующее (strength) или (constitution), \n пожертвуйте этим союзником \n и получите (month) и (experience)(experience)(experience)",
        
        footer: {
            act: 1,
            author: "Марта Данека",
            addition: addition["original"],
            cardNumber: "054",
            year: 2019,
        }
    },
]
