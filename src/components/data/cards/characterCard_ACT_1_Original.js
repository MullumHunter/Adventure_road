import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";

export const characterCard_ACT_1_Original = [
    {
        id: generateUniqueId(),
        
        type: "character",
        way:
            {
                nameWayUp: "Прохвост",
                prize: [
                    historyItems.find(c => c.id === 3),
                    characteristicsData.find(c => c.id === 0),
                ]
            }
        ,
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "048",
            year: 2018,
        }
    },
]
