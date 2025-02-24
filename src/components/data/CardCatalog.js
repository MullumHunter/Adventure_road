import {characteristicsData} from "./characteristicsData";
export  const cardCatalog =[
    {
        id: 0,
        img: '/img/cards/2.jpg',
        skills:[
            characteristicsData.find(c => c.id === 1),
            characteristicsData.find(c => c.id === 3),
        ],
        nameCard:'Бандит',
        title:'Не перед чем не отступится но получит желаемое или умрет'
    },
    {
        id: 1,
        img: '/img/cards/1.jpg',
        skills:[
            characteristicsData.find(c => c.id === 0),
            characteristicsData.find(c => c.id === 5),
        ],
        nameCard:'Странник',
        title:'Берется за любое дело что бы узнать что будет'
    },
    {
        id: 2,
        img: '/img/cards/3.jpg',
        skills:[
            characteristicsData.find(c => c.id === 4),
            characteristicsData.find(c => c.id === 2),
        ],
        nameCard:'Потеряшка',
        title:'Ищет свой дом и готов защищать его изо всех сил'
    },
];
