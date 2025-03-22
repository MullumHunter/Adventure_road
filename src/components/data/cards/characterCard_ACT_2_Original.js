import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {prizeData} from "../PrizeData";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";

export const characterCard_ACT_2_Original = [
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/allay_act_2/enlightened.png',
        way:
            {
                nameWayUp: "Просвещенный",
                prize: [
                    historyItems["nature"],
                    prizeData["hero_card"],
                    characteristicsData["wisdom"],
                ]
            }
        ,
        text: "Вы можете взять \n  эту карту, если у вас (wisdom) (strength) \n или потратив (experience)(experience).",
        
        footer: {
            act: 2,
            author: "Пол Скотт Канаван",
            addition: addition["original"],
            cardNumber: "072",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/allay_act_2/enlightened.png',
        way:
            {
                nameWayUp: "Мстительный",
                prize: [
                    historyItems["justice"],
                    characteristicsData["constitution"],
                ]
            }
        ,
        text: "Вы можете взять эту карту,\n  если вас маркер героя \n на (month)(month) или ниже.",
        
        footer: {
            act: 2,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "070",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/allay_act_2/enlightened.png',
        way:
            {
                nameWayUp: "Благородный",
                prize: [
                    historyItems["noble"],
                    characteristicsData["strength"],
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (noble) \n  или потратив (experience).",
        
        footer: {
            act: 2,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "069",
            year: 2018,
        }
    },
]
