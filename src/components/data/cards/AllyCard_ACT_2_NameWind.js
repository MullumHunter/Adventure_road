import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {prizeData} from "../PrizeData";
import {addition} from "../Addition";

export const AllyCard_ACT_2_NameWind = [
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_2_nameWind/loyal_friend.png',
        way:
            {
                nameWayUp: "Верные друзья",
                prize: [
                    historyItems["belief"],
                    prizeData["light_way1"]
                ]
            }
        ,
        text: "Этот союзник может \n отменить получение (month) \n один раз за ход.",
        
        footer: {
            act: 2,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "057",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_2_nameWind/patron.png',
        way:
            {
                nameWayUp: "Покровитель",
                prize: [
                    historyItems["music"],
                    prizeData["light_way1"]
                ]
            }
        ,
        text: "Когда вы сталкиваетесь \n с испытанием, получите (hero_card), \n если хотя бы на двух рунах \n вы выбросили (charisma).",
        
        footer: {
            act: 2,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "056",
            year: 2019,
        }
    }
]
