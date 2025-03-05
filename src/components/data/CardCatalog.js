import {characteristicsData} from "./characteristicsData";
import {prizeData} from "./PrizeData";
import {hardData} from "./HardData.js";
import {historyItem} from "./historyItem";
import {addition} from "./Addition";


export  const cardCatalog =[
    {
        id: 0,
        
        nameCard:'Бандит',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/3.jpg',
        ways:[
            {
                nameWayUp: "Предотвратить пожар",
                prize: [
                    prizeData.find(c => c.id === 1),
                    historyItem.find(c => c.id === 4),
                ]
            },
            {
                nameWayDown: "Убить драккуса",
                prize: [
                    characteristicsData.find(c => c.id === 0),
                    prizeData.find(c => c.id === 3),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 0),
            characteristicsData.find(c => c.id === 2),
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition.find(c => c.id === 0),
            cardNumber: "042",
            year: 2019,
        }
    },
    {
        id: 0,
        
        nameCard:'Ловчий беглец',
        hard: hardData.find(hard => hard.name === 5),
        img: '/img/cards/1.jpg',
        ways:[
            {
                nameWayUp: "Увидеть мир пока жив, и жить пока не увидишь мир",
                prize: [
                    prizeData.find(c => c.id === 2),
                    prizeData.find(c => c.id === 7),
                ]
            },
            {
                nameWayDown: "Принять себя",
                prize: [
                    prizeData.find(c => c.id === 8),
                    characteristicsData.find(c => c.id === 2),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 4),
            characteristicsData.find(c => c.id === 1),
        ],
        footer: {
            act: 1,
            author: "Артем Демура",
            addition: addition.find(c => c.id === 1),
            cardNumber: "042",
            year: 2019
        }
    }
];
