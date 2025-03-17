import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {characteristicsData} from "../characteristicsData";
import {prizeData} from "../PrizeData";
import {addition} from "../Addition";
import {historyItems} from "../historyItems";
import {namesData} from "../NamesData";


export const trialsCard_ACT_1_NameWind = [
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Поступление в  Университет",
        hard: hardData["3"],
        img: '/img/cards/trials_act_1_nameWind/enter_University.png',
        ways:[
        {
            nameWayUp: "Стать э`лиром",
            additional: false,
            prize: [
                characteristicsData["intelligence"],
            ]
        },
        {
            nameWayDown: "Договориться \n о стипендии",
            additional: true,
            prize: [
                prizeData["hero_card"],
                characteristicsData["charisma"],
            ]
        }
    ],
        requirement: [
        characteristicsData["intelligence"],
        characteristicsData["charisma"],
    ],
        footer: {
        act: 1,
            author: "Марта Данека",
            addition: addition["wind"],
            cardNumber: "018",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Назойливый ухажер",
        hard: hardData["4"],
        img: '/img/cards/trials_act_1_nameWind/annoying_boyfriend.png',
        ways:[
        {
            nameWayUp: "Охмурить богатого дворянина",
            additional: false,
            prize: [
                historyItems["music"],
                characteristicsData["charisma"],
            ]
        },
        {
            nameWayDown: "Увилнуть от брачных уз",
            additional: false,
            prize: [
                prizeData["antihero_card"],
                characteristicsData["wisdom"],
            ]
        }
    ],
        requirement: [
        characteristicsData["charisma"],
        characteristicsData["wisdom"],
    ],
        footer: {
        act: 1,
            author: "Марта Данека",
            addition: addition["wind"],
            cardNumber: "019",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Шайка уличных мальчишек",
        hard: hardData["4"],
        img: '/img/cards/trials_act_1_nameWind/gang_of_street_urchins.png',
        ways:[
        {
            nameWayUp: "Спасти невиновного",
            additional: false,
            prize: [
                historyItems["belief"],
                characteristicsData["strength"],
            ]
        },
        {
            nameWayDown: "Жить с сожалениями",
            additional: false,
            prize: [
                historyItems["malefactor"],
                characteristicsData["wisdom"],
            ]
        }
    ],
        requirement: [
        characteristicsData["strength"],
        characteristicsData["wisdom"],
    ],
        footer: {
        act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["wind"],
            cardNumber: "012",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Выучить песню",
        hard: hardData["4"],
        img: '/img/cards/trials_act_1_nameWind/learn_a_song.png',
        ways:[
        {
            nameWayUp: "«Песня о сэре Савиене»",
            additional: false,
            prize: [
                historyItems["magic"],
                characteristicsData["dexterity"],
            ]
        },
        {
            nameWayDown: "«Ветер, играющий \n листком»",
            additional: false,
            prize: [
                namesData["wind"],
                characteristicsData["charisma"],
            ]
        }
    ],
        requirement: [
        characteristicsData["dexterity"],
        characteristicsData["charisma"],
    ],
        footer: {
        act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["wind"],
            cardNumber: "013",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Нападение чандрианов",
        hard: hardData["4"],
        img: '/img/cards/trials_act_1_nameWind/Chandrian_attack.png',
        ways:[
        {
            nameWayUp: "С трудом спастись",
            additional: false,
            prize: [
                prizeData["dark_way1"],
                characteristicsData["constitution"],
            ]
        },
        {
            nameWayDown: "Найти уцелевших",
            additional: false,
            prize: [
                namesData["fire"],
                characteristicsData["intelligence"],
            ]
        }
    ],
        requirement: [
        characteristicsData["constitution"],
        characteristicsData["intelligence"],
    ],
        footer: {
        act: 1,
            author: "Артем Демура",
            addition: addition["wind"],
            cardNumber: "014",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Подсветье",
        hard: hardData["3"],
        img: '/img/cards/trials_act_1_nameWind/candlestick.png',
        ways:[
        {
            nameWayUp: "Сбежать от всего мира",
            additional: false,
            prize: [
                characteristicsData["constitution"],
            ]
        },
        {
            nameWayDown: "Преисполниться достоинством \n безмолвия",
            additional: true,
            prize: [
                namesData["iron"],
                characteristicsData["intelligence"],
            ]
        }
    ],
        requirement: [
        characteristicsData["constitution"],
        characteristicsData["wisdom"],
    ],
        footer: {
        act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["wind"],
            cardNumber: "015",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Трущебы берега",
        hard: hardData["4"],
        img: '/img/cards/trials_act_1_nameWind/coastal_slums.png',
        ways:[
        {
            nameWayUp: "Выжить под открытым небом",
            additional: false,
            prize: [
                namesData["wind"],
                characteristicsData["constitution"],
            ]
        },
        {
            nameWayDown: "Отыскать убежище",
            additional: false,
            prize: [
                historyItems["belief"],
                characteristicsData["dexterity"],
            ]
        }
    ],
        requirement: [
        characteristicsData["constitution"],
        characteristicsData["dexterity"],
    ],
        footer: {
        act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["wind"],
            cardNumber: "016",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
       
        type: "challenge",
        nameCard:"Уроки симпатии",
        hard: hardData["4"],
        img: '/img/cards/trials_act_1_nameWind/lessons_of_sympathy.png',
        ways:[
        {
            nameWayUp: "Гениальная смекалка",
            additional: false,
            prize: [
                historyItems["magic"],
                characteristicsData["intelligence"],
            ]
        },
        {
            nameWayDown: "Необъяснимый дар",
            additional: false,
            prize: [
                namesData["iron"],
                characteristicsData["wisdom"],
            ]
        }
    ],
        requirement: [
        characteristicsData["intelligence"],
        characteristicsData["wisdom"],
    ],
        footer: {
        act: 1,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "017",
            year: 2019,
        }
    },
]
