import {characteristicsData} from "./characteristicsData";
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
                    characteristicsData.find(c => c.id === 6),
                    characteristicsData.find(c => c.id === 6),
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
        id: 0,
        
        nameCard:'Бандит',
        hard: 6,
        img: '/img/cards/3.jpg',
        ways:[
            {
                nameWayUp: "Предотвратить пожар",
                prize: [
                    characteristicsData.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 3),
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
        id: 0,
        
        nameCard:'Бандит',
        hard: 6,
        img: '/img/cards/3.jpg',
        ways:[
            {
                nameWayUp: "Предотвратить пожар",
                prize: [
                    characteristicsData.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 3),
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
