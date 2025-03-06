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
                additional_complexity: false,
                prize: [
                    historyItem.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 5),
                ]
            },
            {
                nameWayDown: "Талант в темных искусствах",
                additional_complexity: false,
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
            author: "Шон Робинсон",
            addition: addition.find(c => c.id === 0),
            cardNumber: "067",
            year: 2018,
        }
    },
    {
        id: 1,
        
        nameCard:'Кошелек или жизнь',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/trials_act_1/money_or_life.png',
        ways:[
            {
                nameWayUp: "Усмирить грабителя",
                additional_complexity: false,
                prize: [
                    characteristicsData.find(c => c.id === 3),
                ]
            },
            {
                nameWayDown: "Защитить свою семью",
                additional_complexity: true,
                prize: [
                    historyItem.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 2),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 2),
            characteristicsData.find(c => c.id === 3),
        ],
        footer: {
            act: 1,
            author: "Шон Турлоу",
            addition: addition.find(c => c.id === 0),
            cardNumber: "065",
            year: 2018,
        }
    },
    {
        id: 2,
        
        nameCard:'Академия',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/academy.png',
        ways:[
            {
                nameWayUp: "Преуспеть в учебе",
                additional_complexity: false,
                prize: [
                    historyItem.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 5),
                ]
            },
            {
                nameWayDown: "Усвоить важный урок",
                additional_complexity: false,
                prize: [
                    prizeData.find(c => c.id === 7),
                    characteristicsData.find(c => c.id === 1),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 5),
            characteristicsData.find(c => c.id === 1),
        ],
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "066",
            year: 2018,
        }
    }
]
