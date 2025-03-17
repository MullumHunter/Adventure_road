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
                    historyItems["malefactor"],
                    characteristicsData["dexterity"],
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (month) \n или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
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
                    historyItems["noble"],
                    characteristicsData["charisma"],
                ]
            }
        ,
        text: "Вы можете взять эту карту, \n  сбросив (card_hero) или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
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
                    historyItems["magic"],
                    characteristicsData["intelligence"],
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (intelligence) \n или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Джордан Жардин",
            addition: addition["original"],
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
                    prizeData["hero_card"],
                    prizeData["light_way3"],
                ]
            }
        ,
        text: "Взяв эту карту получите (sun).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
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
                    prizeData["antihero_card"],
                    prizeData["dark_way2"],
                ]
            }
        ,
        text: "Взяв эту карту \n  получите (month) и (experience) (experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
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
                    historyItems["nature"],
                    characteristicsData["constitution"],
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (constitution) или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Артем Демура",
            addition: addition["original"],
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
                    historyItems["justice"],
                    characteristicsData["strength"],
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (strength) или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
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
                    historyItems["belief"],
                    characteristicsData["wisdom"],
                ]
            }
        ,
        text: "Вы не можете взять \n эту карту, если у вас есть хотя бы один (dark_way).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "051",
            year: 2018,
        }
    },
]
