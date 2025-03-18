import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {historyItems} from "../historyItems";
import {characteristicsData} from "../characteristicsData";
import {prizeData} from "../PrizeData";
import {addition} from "../Addition";

export const trialsCard_ACT_2_NameWind = [
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Свирепый зверь",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2/Tier.png',
        ways:[
            {
                nameWayUp: "Понять законы \n природы",
                additional: false,
                prize: [
                    historyItems["nature"],
                    characteristicsData["wisdom"],
                ]
            },
            {
                nameWayDown: "Успокоить дикого зверя",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    characteristicsData["charisma"],
                ]
            }
        ],
        requirement: [
            characteristicsData["wisdom"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 2,
            author: "Шон Робинсон",
            addition: addition["original"],
            cardNumber: "090",
            year: 2018,
        }
    },
]
