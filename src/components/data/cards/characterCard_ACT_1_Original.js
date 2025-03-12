import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";

export const characterCard_ACT_1_Original = [
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1/scoundrel.png',
        way:
            {
                nameWayUp: "Прохвост",
                prize: [
                    historyItems.find(c => c.id === 5),
                    characteristicsData.find(c => c.id === 1),
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (month) \n или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "048",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1/scoundrel.png',
        way:
            {
                nameWayUp: "Королевская кровь",
                prize: [
                    historyItems.find(c => c.id === 5),
                    characteristicsData.find(c => c.id === 1),
                ]
            }
        ,
        text: "Вы можете взять эту карту, \n  сбросив (card_hero) или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "049",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1/scoundrel.png',
        way:
            {
                nameWayUp: "Прилежный ученик",
                prize: [
                    historyItems.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 5),
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (intelligence) \n или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Джордан Жардин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "050",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1/scoundrel.png',
        way:
            {
                nameWayUp: "Найденыш",
                prize: [
                    historyItems.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 5),
                ]
            }
        ,
        text: "Взяв эту карту получите (sun).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "052",
            year: 2018,
        }
    },
]
