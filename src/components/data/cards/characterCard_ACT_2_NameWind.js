import {generateUniqueId} from "../../utils/GenerateId";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";
import {prizeData} from "../PrizeData";
import {historyItems} from "../historyItems";

export const characterCard_ACT_2_NameWind = [
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_2_nameWind/relar.png',
        way:
            {
                nameWayUp: "Ре`лар",
                prize: [
                    prizeData["hero_card"],
                    characteristicsData["wisdom"],
                ]
            }
        ,
        text: "Получив эту черту, вы можете \n потратить (experience), чтобы попытаться \n узнать имя.",
        
        footer: {
            act: 2,
            author: "Анастасия Григорьева",
            addition: addition["wind"],
            cardNumber: "020",
            year: 2018,
        }
    },
]
