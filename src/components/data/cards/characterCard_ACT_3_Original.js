import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {prizeData} from "../PrizeData";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";

export const characterCard_ACT_3_Original = [
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_3/enlightened.png',
        way:
            {
                nameWayUp: "Умудренный",
                prize: [
                    historyItems["magic"],
                    prizeData["light_way3"],
                ]
            }
        ,
        text: "Вы можете взять эту карту, \n  если у вас есть (intelligence) (wisdom) \n или вы разыграли \n (hero_card)(hero_card)(hero_card).",
        
        footer: {
            act: 3,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "092",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_3/supernatural.png',
        way:
            {
                nameWayUp: "Сверхъестественный",
                prize: [
                    historyItems["nature"],
                    prizeData["dark_way3"],
                ]
            }
        ,
        text: "Вы можете взять эту карту, \n  если у вас есть (constitution) (charisma) \n или вы разыграли \n (antihero_card)(antihero_card)(antihero_card).",
        
        footer: {
            act: 3,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "093",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_3/cursed.png',
        way:
            {
                nameWayUp: "Проклятый",
                prize: [
                    historyItems["malefactor"],
                    prizeData["antihero_card"],
                    prizeData["antihero_card"],
                ]
            }
        ,
        text: "Вы можете взять эту карту, \n  если в вашей истории \n больше (dark_way), чем (light_way).",
        
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "094",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_3/blessed.png',
        way:
            {
                nameWayUp: "Благословленный",
                prize: [
                    historyItems["belief"],
                    prizeData["hero_card"],
                    prizeData["hero_card"],
                ]
            }
        ,
        text: "Вы можете взять эту карту, \n  если в вашей истории \n больше (light_way), чем (dark_way).",
        
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "095",
            year: 2018,
        }
    },
]
