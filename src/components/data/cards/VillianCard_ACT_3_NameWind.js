import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {historyItems} from "../historyItems";
import {prizeData} from "../PrizeData";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";

export const villianCard_ACT_3_NameWind = [
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["8"],
        img: '/img/cards/villian_act_3_nameWind/chandrian.png',
        way:
            {
                nameWayUp:"Чандриан",
                prize: [
                    historyItems["belief"],
                    prizeData["light_way6"],
                    characteristicsData["strength"],
                ]
            }
        ,
        
        text: "Пока это испытание не будет \n преодолено, все пути \n испытаний, дающие \n (music) или (belief), имеют (additiona).",
        
        requirement: [
            characteristicsData["strength"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["wind"],
            cardNumber: "061",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["8"],
        img: '/img/cards/villian_act_3_nameWind/ctah.png',
        way:
            {
                nameWayUp:"Ктаэх",
                prize: [
                    prizeData["dark_way9"],
                    characteristicsData["constitution"],
                ]
            }
        ,
        
        text: "Провалив это испытание, \n не сбрасывайте его. Если это \n  испытание не будет преодолено \n до конца игры, сталкивавшиеся \n с ним герои потеряют \n все очки (light_way) .",
        
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 3,
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "062",
            year: 2018,
        }
    },
]
