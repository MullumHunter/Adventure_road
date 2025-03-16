import {generateUniqueId} from "../../utils/GenerateId";
import {prizeData} from "../PrizeData";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";
import {historyItems} from "../historyItems";

export const characterCard_ACT_1_NameWind = [
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1_nameWind/broken.png',
        way:
            {
                nameWayUp: "Надломленный",
                prize: [
                    prizeData.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 2),
                ]
            }
        ,
        text: "Вы можете взять эту черту, если в этот ход провалили испытание или пожертвовали союзником. \n Вы получаете (month)",
        
        footer: {
            act: 1,
            author: "Артем Демура",
            addition: addition.find(c => c.id === 1),
            cardNumber: "010",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "character",
        img: '/img/cards/haracter_act_1_nameWind/musician.png',
        way:
            {
                nameWayUp: "Музыкант",
                prize: [
                    prizeData.find(c => c.id === 9),
                    historyItems.find(c => c.id === 6),
                ]
            }
        ,
        text: "Приобретя эту черту, получите (card_hero) за каждый (wisdom) в вашей истории.",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 1),
            cardNumber: "011",
            year: 2019,
        }
    },
]
