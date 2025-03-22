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
        img: '/img/cards/allay_act_2/vindictive.png',
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
        img: '/img/cards/allay_act_2/noble.png',
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
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/allay_act_2/criminal.png',
        way:
            {
                nameWayUp: "Преступник",
                prize: [
                    historyItems["malefactor"],
                    characteristicsData["dexterity"],
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (malefactor) \n  или потратив (experience).",
        
        footer: {
            act: 2,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "071",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/allay_act_2/dirt_to_princes.png',
        way:
            {
                nameWayUp: "Из грязи в князи",
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way2"],
                ]
            }
        ,
        text: "Провалив испытание, \n вы можете потрптить (experience), \n что бы взять эту карту \n в тот же ход",
        
        footer: {
            act: 2,
            author: "Адам Дж. Марин",
            addition: addition["original"],
            cardNumber: "076",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/allay_act_2/inventor.png',
        way:
            {
                nameWayUp: "Изобретатель",
                prize: [
                    historyItems["magic"],
                    prizeData["antihero_card"],
                    characteristicsData["intelligence"],
                ]
            }
        ,
        text: "Вы можете взять эту карту, \n  если у вас есть (intelligence) (dexterity) \n или потратив (experience)(experience)",
        
        footer: {
            act: 2,
            author: "Пол Скотт Канаван",
            addition: addition["original"],
            cardNumber: "074",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/allay_act_2/prophet.png',
        way:
            {
                nameWayUp: "Пророк",
                prize: [
                    historyItems["belief"],
                    prizeData["hero_card"],
                    characteristicsData["charisma"],
                ]
            }
        ,
        text: "Вы можете взять эту карту, \n  если у вас есть (wisdom) (charisma) \n или потратив (experience)(experience)",
        
        footer: {
            act: 2,
            author: "Адам Дж. Марин",
            addition: addition["original"],
            cardNumber: "073",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/allay_act_2/bitter_loss.png',
        way:
            {
                nameWayUp: "Горькая утрата",
                prize: [
                    prizeData["antihero_card"],
                    prizeData["dark_way2"],
                ]
            }
        ,
        text: "Провалив испытание, \n вы можете потратить (experience), \n чтобы взять эту карту \n в тот же ход.",
        
        footer: {
            act: 2,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "075",
            year: 2018,
        }
    },
]
