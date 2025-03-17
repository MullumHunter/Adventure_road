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
                    prizeData["dark_way1"],
                    characteristicsData["constitution"],
                ]
            }
        ,
        text: "Вы можете взять эту черту, если в этот ход провалили испытание или пожертвовали союзником. \n Вы получаете (month)",
        
        footer: {
            act: 1,
            author: "Артем Демура",
            addition: addition["wind"],
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
                    prizeData["light_way2"],
                    historyItems["music"],
                ]
            }
        ,
        text: "Приобретя эту черту, получите (card_hero) за каждый (wisdom) в вашей истории.",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["wind"],
            cardNumber: "011",
            year: 2019,
        }
    },
]
