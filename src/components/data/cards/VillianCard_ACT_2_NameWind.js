import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {prizeData} from "../PrizeData";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";
import {historyItems} from "../historyItems";

export const villianCard_ACT_2_NameWind = [
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["6"],
        img: '/img/cards/villian_act_2_nameWind/noble_boy.png',
        way:
            {
                nameWayUp:"Дворянчик",
                prize: [
                    historyItems["noble"],
                    prizeData["light_way3"],
                    characteristicsData["charisma"],
                ]
            }
        ,
        
        text: "Провалив это испытание, один\n раз в ход вы можете заплатить (experience),\n чтобы пройти его снова,\n уменьшив результат броска на 2." ,
        
        requirement: [
            characteristicsData["strength"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 2,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "058",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["6"],
        img: '/img/cards/villian_act_2_nameWind/pawnbroker.png',
        way:
            {
                nameWayUp:"Ростовщик",
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["wisdom"],
                ]
            }
        ,
        
        text: "Пока это испытание не будет\n преодолено, один раз в ход \n любой игрок может \n заплатить (experience), чтобы взять (antihero_card) ." ,
        
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 2,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "059",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["6"],
        img: '/img/cards/villian_act_2_nameWind/rector_university.png',
        way:
            {
                nameWayUp:"Ректор университета",
                prize: [
                    historyItems["magic"],
                    prizeData["light_way3"],
                    characteristicsData["intelligence"],
                ]
            }
        ,
        
        text: "Когда вы сталкиваетесь с этим \n испытанием, получите +1 \n к резульату броска, если \n в вашей истории нет (magic) ." ,
        
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 2,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "056",
            year: 2019,
        }
    },
]
