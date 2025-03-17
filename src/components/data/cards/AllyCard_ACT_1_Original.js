import {generateUniqueId} from "../../utils/GenerateId";
import {historyItems} from "../historyItems";
import {addition} from "../Addition";
import {prizeData} from "../PrizeData";

export  const allyCard_ACT_1_Original = [
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_1/master_sword.png',
        way:
            {
                nameWayUp: "Мастер меча",
                prize: [
                    historyItems["noble"],
                ]
            }
        ,
        text: "Вы можете взять (experience) \n или пожертвовать этим \n союзником, чтобы получить \n руну (strength) до конца хода.",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "161",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_1/pet.png',
        way:
            {
                nameWayUp: "Питомец",
                prize: [
                    historyItems["nature"],
                ]
            }
        ,
        text: "Вы можете взять (experience) \n или пожертвовать этим \n союзником, чтобы получить \n руну (constitution) до конца хода.",
        
        footer: {
            act: 1,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "165",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_1/cruel_lord.png',
        way:
            {
                nameWayUp: "Жестокий господин",
                prize: [
                    historyItems["malefactor"],
                    prizeData["dark_way1"]
                ]
            }
        ,
        text: "Вы можете пожертвовать \n этим союзником, \n чтобы получить (sun).",
        
        footer: {
            act: 1,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "162",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_1/mentor.png',
        way:
            {
                nameWayUp: "Наставник",
                prize: [
                    historyItems["magic"],
                ]
            }
        ,
        text: "Вы можете потратить (experience) \n или пожертвовать этим \n  союзником, чтобы получить \n  руну (wisdom) до конца хода.",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "166",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_1/first_love.png',
        way:
            {
                nameWayUp: "Первая любовь",
                prize: [
                    historyItems["belief"],
                ]
            }
        ,
        text: "Вы можете пожертвовать \n этим союзником, чтобы \n  получить (month) и (experience)(experience).",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "164",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "ally",
        img: '/img/cards/allay_act_1/childhood_friend.png',
        way:
            {
                nameWayUp: "Друг детства",
                prize: [
                    historyItems["justice"],
                ]
            }
        ,
        text: "Вы можете потратить (experience) или \n пожертвовать этим союзником, \n чтобы получить руну (charisma) \n до конца хода.",
        
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "163",
            year: 2018,
        }
    },
]
