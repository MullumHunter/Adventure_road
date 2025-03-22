import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {addition} from "../Addition";
import {characteristicsData} from "../characteristicsData";
import {prizeData} from "../PrizeData";

export const AllyCard_ACT_2_Original = [
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_2/Informant.png',
        way:
            {
                nameWayUp: "Осведамитель",
                prize: [
                    historyItems["malefactor"],
                    prizeData["light_way1"]
                ]
            }
        ,
        text: "Вы можете потратить (experience) или \n пожертвовать этим союзником, \n чтобы получить \n руну (intelligence) до конца хода.",
        
        footer: {
            act: 2,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "170",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_2/love_life.png',
        way:
            {
                nameWayUp: "Любовь всей жизни",
                prize: [
                    historyItems["belief"],
                    prizeData["light_way2"]
                ]
            }
        ,
        text: "Вы можете пожертвовать \n этим союзником, чтобы \n получить (month) и (experience)(experience).",
        
        footer: {
            act: 2,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "167",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_2/princess.png',
        way:
            {
                nameWayUp: "Принцесса",
                prize: [
                    historyItems["noble"],
                    prizeData["light_way3"]
                ]
            }
        ,
        text: "Если в конце игры на полке \n остались непобежденные злодеи, \n пожертвуйте этим союзником.",
        
        footer: {
            act: 2,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "168",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_2/partner.png',
        way:
            {
                nameWayUp: "Напарник",
                prize: [
                    historyItems["justice"],
                    prizeData["light_way1"]
                ]
            }
        ,
        text: "Вы можете потратить (experience) \n или пожертвовать этим \n союзником, чтобы получить \n руну (dexterity) до конца хода.",
        
        footer: {
            act: 2,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "169",
            year: 2018,
        }
    },
]
