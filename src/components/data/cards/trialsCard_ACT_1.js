import {hardData} from "../HardData";
import {prizeData} from "../PrizeData";
import {historyItem} from "../historyItem";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";

export const trialsCard_ACT_1 = [
    {
        id: 0,

        nameCard:'Магическое испытание',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/magical_tеst.png',
        ways:[
            {
                nameWayUp: "Склонность к светлой магии",
                prize: [
                    historyItem.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 5),
                ]
            },
            {
                nameWayDown: "Талант в темных искусствах",
                prize: [
                    prizeData.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 3),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 5),
            characteristicsData.find(c => c.id === 3),
        ],
        footer: {
            act: 1,
            author: "Шон робинсон",
            addition: addition.find(c => c.id === 0),
            cardNumber: "067",
            year: 2018,
        }
    }
]
