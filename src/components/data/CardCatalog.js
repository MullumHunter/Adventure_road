import {characteristicsData} from "./characteristicsData";
import {prizeData} from "./PrizeData";
import {hardData} from "./HardData.js";

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
                    prizeData.find(c => c.id === 2),
                ]
            },
            {
                nameWayDown: "Убить драккуса",
                prize: [
                    prizeData.find(c => c.id === 3),
                    prizeData.find(c => c.id === 7),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 0),
            characteristicsData.find(c => c.id === 2),
        ],
        act: 3,
        author: "Артем Демура",
        addition: "",
        cardNumber: "042",
        year: 2019
    },
    {
        id: 0,
        
        nameCard:'Ловчий беглец',
        hard: hardData.find(hard => hard.name === 5),
        img: '/img/cards/1.jpg',
        ways:[
            {
                nameWayUp: "Увидеть мир пока жив",
                prize: [
                    prizeData.find(c => c.id === 0),
                    prizeData.find(c => c.id === 6),
                ]
            },
            {
                nameWayDown: "Принять себя",
                prize: [
                    prizeData.find(c => c.id === 2),
                    prizeData.find(c => c.id === 1),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 2),
            characteristicsData.find(c => c.id === 1),
        ],
        act: 3,
        author: "Артем Демура",
        addition: "",
        cardNumber: "042",
        year: 2019
    }
];
