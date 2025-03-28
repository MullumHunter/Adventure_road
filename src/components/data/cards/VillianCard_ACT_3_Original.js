import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {prizeData} from "../PrizeData";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";
import {historyItems} from "../historyItems";

export  const villianCard_ACT_3_Original = [
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["8"],
        img: '/img/cards/villian_act_3/tyrant.png',
        way:
            {
                nameWayUp:"Тиран",
                prize: [
                    historyItems["justice"],
                    prizeData["light_way6"],
                    characteristicsData["dexterity"],
                ]
            }
        ,
        
        text: "Пока это испытание \n не будет преодолено, герои \n выбирают путь (dark_way).",
        
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "176",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["8"],
        img: '/img/cards/villian_act_3/demon.png',
        way:
            {
                nameWayUp:"Демон",
                prize: [
                    historyItems["belief"],
                    prizeData["light_way6"],
                    characteristicsData["intelligence"],
                ]
            }
        ,
        
        text: " Вы не можете разыгрывать (hero_card) \n или (antihero_card) в ход, в котором \n вы сталкиваетесь с этим \n испытанием.",
        
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 3,
            author: "Адам Дж. Марин",
            addition: addition["original"],
            cardNumber: "180",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["8"],
        img: '/img/cards/villian_act_3/commander.png',
        way:
            {
                nameWayUp:"Полководец",
                prize: [
                    historyItems["noble"],
                    prizeData["light_way6"],
                    characteristicsData["strength"],
                ]
            }
        ,
        
        text: "Это испытание имеет (additiona) \n против героев, у которых \n нет союзников.",
        
        requirement: [
            characteristicsData["strength"],
            characteristicsData["constitution"],
        ],
        footer: {
            act: 3,
            author: "Крис Колд",
            addition: addition["original"],
            cardNumber: "177",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["8"],
        img: '/img/cards/villian_act_3/enchantress.png',
        way:
            {
                nameWayUp:"Чародейка",
                prize: [
                    historyItems["magic"],
                    prizeData["dark_way6"],
                    characteristicsData["charisma"],
                ]
            }
        ,
        
        text: "Пока это испытание не будет \n преодолено, один раз в ход любой \n герой может потратить (experience), \n чтобы взять (antihero_card).",
        
        requirement: [
            characteristicsData["wisdom"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "179",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["8"],
        img: '/img/cards/villian_act_3/high_priest.png',
        way:
            {
                nameWayUp:"Верховный жрец",
                prize: [
                    historyItems["malefactor"],
                    prizeData["dark_way6"],
                    characteristicsData["wisdom"],
                ]
            }
        ,
        
        text: "Это испытание имеет (additiona) \n против героев, маркер героя \n которых на уровне (month) (month) \n или ниже.",
        
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 3,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "178",
            year: 2018,
        }
    },
]
