import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";

export const characterCard_ACT_1_Original = [
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/trials_act_1/lessons_of_sympathy.png',
        way:
            {
                nameWayUp: "Прохвост",
                prize: [
                    historyItems.find(c => c.id === 3),
                    characteristicsData.find(c => c.id === 0),
                ]
            }
        ,
        text: "Вы можете взять \n эту карту, если у вас есть (month) или потратив (experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "048",
            year: 2018,
        }
    },
]
