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
        nameCard:'Поступление в университет',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/trials_act_1/enter_University.png',
        ways:[
        {
            nameWayUp: "Стать э`лиром",
            additional: false,
            prize: [
                characteristicsData.find(c => c.id === 5),
            ]
        },
        {
            nameWayDown: "Договориться \n о стипендии",
            additional: true,
            prize: [
                prizeData.find(c => c.id === 7),
                characteristicsData.find(c => c.id === 3),
            ]
        }
    ],
        requirement: [
        characteristicsData.find(c => c.id === 5),
        characteristicsData.find(c => c.id === 3),
    ],
        footer: {
        act: 1,
            author: "Марта Данека",
            addition: addition.find(c => c.id === 1),
            cardNumber: "018",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Назойливый ухажер',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/annoying_boyfriend.png',
        ways:[
        {
            nameWayUp: "Охмурить богатого дворянина",
            additional: false,
            prize: [
                historyItems.find(c => c.id === 6),
                characteristicsData.find(c => c.id === 3),
            ]
        },
        {
            nameWayDown: "Увилнуть от брачных уз",
            additional: false,
            prize: [
                prizeData.find(c => c.id === 1),
                characteristicsData.find(c => c.id === 1),
            ]
        }
    ],
        requirement: [
        characteristicsData.find(c => c.id === 3),
        characteristicsData.find(c => c.id === 1),
    ],
        footer: {
        act: 1,
            author: "Марта Данека",
            addition: addition.find(c => c.id === 1),
            cardNumber: "019",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Шайка уличных мальчишек',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/gang_of_street_urchins.png',
        ways:[
        {
            nameWayUp: "Спасти невиновного",
            additional: false,
            prize: [
                historyItems.find(c => c.id === 0),
                characteristicsData.find(c => c.id === 4),
            ]
        },
        {
            nameWayDown: "Жить с сожалениями",
            additional: false,
            prize: [
                historyItems.find(c => c.id === 3),
                characteristicsData.find(c => c.id === 1),
            ]
        }
    ],
        requirement: [
        characteristicsData.find(c => c.id === 4),
        characteristicsData.find(c => c.id === 1),
    ],
        footer: {
        act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 1),
            cardNumber: "012",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Выучить песню',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/learn_a_song.png',
        ways:[
        {
            nameWayUp: "«Песня о сэре Савиене»",
            additional: false,
            prize: [
                historyItems.find(c => c.id === 6),
                characteristicsData.find(c => c.id === 0),
            ]
        },
        {
            nameWayDown: "«Ветер, играющий \n листком»",
            additional: false,
            prize: [
                namesData.find(c => c.id === 2),
                characteristicsData.find(c => c.id === 3),
            ]
        }
    ],
        requirement: [
        characteristicsData.find(c => c.id === 0),
        characteristicsData.find(c => c.id === 3),
    ],
        footer: {
        act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 1),
            cardNumber: "013",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Нападение чандрианов',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/Chandrian_attack.png',
        ways:[
        {
            nameWayUp: "С трудом спастись",
            additional: false,
            prize: [
                prizeData.find(c => c.id === 2),
                characteristicsData.find(c => c.id === 2),
            ]
        },
        {
            nameWayDown: "Найти уцелевших",
            additional: false,
            prize: [
                namesData.find(c => c.id === 1),
                characteristicsData.find(c => c.id === 5),
            ]
        }
    ],
        requirement: [
        characteristicsData.find(c => c.id === 2),
        characteristicsData.find(c => c.id === 5),
    ],
        footer: {
        act: 1,
            author: "Артем Демура",
            addition: addition.find(c => c.id === 1),
            cardNumber: "014",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Подсветье',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/trials_act_1/candlestick.png',
        ways:[
        {
            nameWayUp: "Сбежать от всего мира",
            additional: false,
            prize: [
                characteristicsData.find(c => c.id === 2),
            ]
        },
        {
            nameWayDown: "Преисполниться достоинством \n безмолвия",
            additional: true,
            prize: [
                namesData.find(c => c.id === 0),
                characteristicsData.find(c => c.id === 5),
            ]
        }
    ],
        requirement: [
        characteristicsData.find(c => c.id === 2),
        characteristicsData.find(c => c.id === 1),
    ],
        footer: {
        act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 1),
            cardNumber: "015",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Трущебы берега',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/coastal_slums.png',
        ways:[
        {
            nameWayUp: "Выжить под открытым небом",
            additional: false,
            prize: [
                namesData.find(c => c.id === 2),
                characteristicsData.find(c => c.id === 2),
            ]
        },
        {
            nameWayDown: "Отыскать убежище",
            additional: false,
            prize: [
                historyItems.find(c => c.id === 0),
                characteristicsData.find(c => c.id === 0),
            ]
        }
    ],
        requirement: [
        characteristicsData.find(c => c.id === 2),
        characteristicsData.find(c => c.id === 0),
    ],
        footer: {
        act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 1),
            cardNumber: "016",
            year: 2019,
    }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Уроки симпатии',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/lessons_of_sympathy.png',
        ways:[
        {
            nameWayUp: "Гениальная смекалка",
            additional: false,
            prize: [
                historyItems.find(c => c.id === 2),
                characteristicsData.find(c => c.id === 5),
            ]
        },
        {
            nameWayDown: "Необъяснимый дар",
            additional: false,
            prize: [
                historyItems.find(c => c.id === 0),
                characteristicsData.find(c => c.id === 1),
            ]
        }
    ],
        requirement: [
        characteristicsData.find(c => c.id === 5),
        characteristicsData.find(c => c.id === 1),
    ],
        footer: {
        act: 1,
            author: "Гал Ор",
            addition: addition.find(c => c.id === 1),
            cardNumber: "017",
            year: 2019,
        }
    },
]
