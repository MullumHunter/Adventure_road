import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {prizeData} from "../PrizeData";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";
import {historyItems} from "../historyItems";

export const villianCard_ACT_2_Original = [
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["6"],
        img: '/img/cards/villian_act_2/fierce_wolf.png',
        way:
            {
                nameWayUp:"Лютый волк",
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["constitution"],
                ]
            }
        ,
        
        text: "Преодолев это испытание, \n получите (sun).",
        
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 2,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "175",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["6"],
        img: '/img/cards/villian_act_2/black_horseman.png',
        way:
            {
                nameWayUp:"Черный всадник",
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["dexterity"],
                ]
            }
        ,
        
        text: "Вы можете потратить (experience), \n чтобы получить +1 к результату \n броска при столкновении с этим \n испытанием.",
        
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["constitution"],
        ],
        footer: {
            act: 2,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "172",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["6"],
        img: '/img/cards/villian_act_2/crazed_sectarian.png',
        way:
            {
                nameWayUp:"Обезумевший сектант",
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["wisdom"],
                ]
            }
        ,
        
        text: "Вы можете сбросить (card_hero), \n чтобы получить +1 к результату \n броска при столкновении с этим \n испытанием.",
        
        requirement: [
            characteristicsData["strength"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 2,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "173",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["6"],
        img: '/img/cards/villian_act_2/warlock.png',
        way:
            {
                nameWayUp:"Чернокнижник",
                prize: [
                    historyItems["music"],
                    prizeData["light_way3"],
                    characteristicsData["intelligence"],
                ]
            }
        ,
        
        text: "Вы можете сбросить (antihero_card), \n чтобы получить +1 к результату \n броска при столкновении \n с этим испытанием.",
        
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 2,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "174",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["6"],
        img: '/img/cards/villian_act_2/king_criminals.png',
        way:
            {
                nameWayUp:"Король преступного мира",
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["charisma"],
                ]
            }
        ,
        
        text: "Если ваш маркер героя \n на уровне (month)или ниже, получите\n +1 к результату броска при \n столкновении с этим испытанием.",
        
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 2,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "171",
            year: 2018,
        }
    },
]
