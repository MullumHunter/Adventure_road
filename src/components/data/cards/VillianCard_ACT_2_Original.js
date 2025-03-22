import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {prizeData} from "../PrizeData";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";

export const villianCard_ACT_2_Original = [
    {
        id: generateUniqueId(),
        
        type: "villian",
        hard: hardData["6"],
        img: "",
        // img: '/img/cards/trials_act_1_nameWind/lessons_of_sympathy.png',
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
            characteristicsData["constitution"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 1,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "175",
            year: 2018,
        }
    },
]
