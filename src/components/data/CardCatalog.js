import {characteristicsData} from "./characteristicsData";
import {prizeData} from "./PrizeData";

export  const cardCatalog =[
    {
        id: 0,
        
        nameCard:'Бандит',
        hard: 6,
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
                nameWayDown: "Убить драккуса"
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 6),
            characteristicsData.find(c => c.id === 6),
        ],
        act: 3,
        author: "Артем Демура",
        addition: "",
        cardNumber: "042",
        year: 2019
    },
    {
        id: 1,
        
        nameCard:'Бандит',
        hard: 6,
        img: '/img/cards/1.jpg',
        ways:[
            {
                nameWayUp: "Предотвратить пожар",
                prize: [
                    prizeData.find(c => c.id === 7),
                    prizeData.find(c => c.id === 8),
                ]
            },
            {
                nameWayDown: "Убить драккуса"
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 1),
            characteristicsData.find(c => c.id === 3),
        ],
        act: 3,
        author: "Артем Демура",
        addition: "",
        cardNumber: "042",
        year: 2019
    },
    {
        id: 2,
        
        nameCard:'Бандит',
        hard: 6,
        img: '/img/cards/3.jpg',
        ways:[
            {
                nameWayUp: "Предотвратить пожар",
                prize: [
                    characteristicsData.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 1),
                ]
            },
            {
                nameWayDown: "Убить драккуса"
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 1),
            characteristicsData.find(c => c.id === 3),
        ],
        act: 3,
        author: "Артем Демура",
        addition: "",
        cardNumber: "042",
        year: 2019
    },
];
