import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";
import {prizeData} from "../PrizeData";

export const characterCard_ACT_1_Original = [
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1/scoundrel.png',
        way:
            {
                nameWayUp: "Прохвост",
                prize: [
                    historyItems.find(c => c.id === 3),
                    characteristicsData.find(c => c.id === 0),
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
        img: '/img/cards/haracter_act_1/blood_royal.png',
        way:
            {
                nameWayUp: "Королевская кровь",
                prize: [
                    historyItems.find(c => c.id === 5),
                    characteristicsData.find(c => c.id === 3),
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
        img: '/img/cards/haracter_act_1/diligent_student.png',
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
        img: '/img/cards/haracter_act_1/foundling.png',
        way:
            {
                nameWayUp: "Найденыш",
                prize: [
                    prizeData.find(c => c.id === 7),
                    prizeData.find(c => c.id === 10),
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
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1/orphan.png',
        way:
            {
                nameWayUp: "Сирота",
                prize: [
                    prizeData.find(c => c.id === 1),
                    prizeData.find(c => c.id === 3),
                ]
            }
        ,
        text: "Взяв эту карту \n  получите (month) и (experience) (experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "053",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1/adventurer.png',
        way:
            {
                nameWayUp: "Искатель приключений",
                prize: [
                    historyItems.find(c => c.id === 4),
                    characteristicsData.find(c => c.id === 2),
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (constitution) или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Артем Демура",
            addition: addition.find(c => c.id === 0),
            cardNumber: "046",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1/brave_man.png',
        way:
            {
                nameWayUp: "Храбрец",
                prize: [
                    historyItems.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 4),
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (strength) или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "047",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1/believer.png',
        way:
            {
                nameWayUp: "Верующий",
                prize: [
                    historyItems.find(c => c.id === 0),
                    characteristicsData.find(c => c.id === 1),
                ]
            }
        ,
        text: "Вы не можете взять \n эту карту, если у вас есть хотя бы один (dark_way).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "051",
            year: 2018,
        }
    },
]
