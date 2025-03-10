import {hardData} from "../HardData";
import {prizeData} from "../PrizeData";
import {historyItem} from "../historyItem";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";
import {generateUniqueId} from "../../utils/GenerateId";

export const trialsCard_ACT_1_Original = [
    {
        id: generateUniqueId(),
        
        nameCard:'Магическое испытание',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/magical_tеst.png',
        ways:[
            {
                nameWayUp: "Склонность \n к светлой магии",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 5),
                ]
            },
            {
                nameWayDown: "Талант в темных искусствах",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 1),
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
            author: "Шон Робинсон",
            addition: addition.find(c => c.id === 0),
            cardNumber: "067",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Кошелек или жизнь',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/trials_act_1/money_or_life.png',
        ways:[
            {
                nameWayUp: "Усмирить грабителя",
                additional: false,
                prize: [
                    characteristicsData.find(c => c.id === 3),
                ]
            },
            {
                nameWayDown: "Защитить \n свою семью",
                additional: true,
                prize: [
                    historyItem.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 2),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 2),
            characteristicsData.find(c => c.id === 3),
        ],
        footer: {
            act: 1,
            author: "Шон Турлоу",
            addition: addition.find(c => c.id === 0),
            cardNumber: "065",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Академия',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/academy.png',
        ways:[
            {
                nameWayUp: "Преуспеть в учебе",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 5),
                ]
            },
            {
                nameWayDown: "Усвоить важный урок",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 7),
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
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "066",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Уличная драка',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/street_fight.png',
        ways:[
            {
                nameWayUp: "Научиться \n подлым уловкам",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 3),
                    characteristicsData.find(c => c.id === 0),
                ]
            },
            {
                nameWayDown: "Стать завзятым \n бойцом",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 4),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 4),
            characteristicsData.find(c => c.id === 0),
        ],
        footer: {
            act: 1,
            author: "Кристиан Бискап",
            addition: addition.find(c => c.id === 0),
            cardNumber: "054",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Призыв к оружию',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/call_to_arms.png',
        ways:[
            {
                nameWayUp: "Вступить \n в королевскую армию",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 8),
                    characteristicsData.find(c => c.id === 4),
                ]
            },
            {
                nameWayDown: "Защищать \n  родной дом",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 2),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 4),
            characteristicsData.find(c => c.id === 2),
        ],
        footer: {
            act: 1,
            author: "Пол Скотт Канаван",
            addition: addition.find(c => c.id === 0),
            cardNumber: "055",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Опасный артефакт',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/dangerous_artifact.png',
        ways:[
            {
                nameWayUp: "Подчинить силу Тьмы",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 5),
                ]
            },
            {
                nameWayDown: "Устоять перед \n искушением",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 0),
                    characteristicsData.find(c => c.id === 2),
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
            addition: addition.find(c => c.id === 0),
            cardNumber: "063",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Суровая зима',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/harsh_winter.png',
        ways:[
            {
                nameWayUp: "Украсть, чтобы выжить",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 0),
                ]
            },
            {
                nameWayDown: "Отправиться \n на поиска еды",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 4),
                    characteristicsData.find(c => c.id === 2),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 0),
            characteristicsData.find(c => c.id === 2),
        ],
        footer: {
            act: 1,
            author: "Шон Робинсон",
            addition: addition.find(c => c.id === 0),
            cardNumber: "059",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Гильдия воров',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/trials_act_1/guild_of_pilferers.png',
        ways:[
            {
                nameWayUp: "Выучиться на шпиона",
                additional: false,
                prize: [
                    characteristicsData.find(c => c.id === 3),
                ]
            },
            {
                nameWayDown: "Выучиться \n на убийцу",
                additional: true,
                prize: [
                    historyItem.find(c => c.id === 3),
                    characteristicsData.find(c => c.id === 0),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 0),
            characteristicsData.find(c => c.id === 3),
        ],
        footer: {
            act: 1,
            author: "Макс Бедуленко",
            addition: addition.find(c => c.id === 0),
            cardNumber: "062",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Пропавший без вести',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/missing.png',
        ways:[
            {
                nameWayUp: "Найти пропавшее дитя",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 4),
                    characteristicsData.find(c => c.id === 1),
                ]
            },
            {
                nameWayDown: "Выбираться самому",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 7),
                    characteristicsData.find(c => c.id === 4),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 4),
            characteristicsData.find(c => c.id === 1),
        ],
        footer: {
            act: 1,
            author: "Артем Демура",
            addition: addition.find(c => c.id === 0),
            cardNumber: "056",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Подготовка к войне',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/war_preparations.png',
        ways:[
            {
                nameWayUp: "Продумать оборону города",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 5),
                    characteristicsData.find(c => c.id === 5),
                ]
            },
            {
                nameWayDown: "Возвести укрепления",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 7),
                    characteristicsData.find(c => c.id === 4),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 4),
            characteristicsData.find(c => c.id === 5),
        ],
        footer: {
            act: 1,
            author: "Макс Бедуленко",
            addition: addition.find(c => c.id === 0),
            cardNumber: "057",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Детская вражда',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/childish_feud.png',
        ways:[
            {
                nameWayUp: "Подружиться с врагом",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 5),
                    characteristicsData.find(c => c.id === 3),
                ]
            },
            {
                nameWayDown: "Сокрушить соперника",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 3),
                    characteristicsData.find(c => c.id === 4),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 4),
            characteristicsData.find(c => c.id === 3),
        ],
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition.find(c => c.id === 0),
            cardNumber: "058",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Неупокоенный дух',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/trials_act_1/restless_spirit.png',
        ways:[
            {
                nameWayUp: "Изгнать призрака",
                additional: false,
                prize: [
                    characteristicsData.find(c => c.id === 1),
                ]
            },
            {
                nameWayDown: "Заручиться \n защитой духа",
                additional: true,
                prize: [
                    historyItem.find(c => c.id === 0),
                    characteristicsData.find(c => c.id === 3),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 1),
            characteristicsData.find(c => c.id === 3),
        ],
        footer: {
            act: 1,
            author: "Спенсер Идальго",
            addition: addition.find(c => c.id === 0),
            cardNumber: "068",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Лесная чаща',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/trials_act_1/forest_thicket.png',
        ways:[
            {
                nameWayUp: "Скрыться от преследователей",
                additional: false,
                prize: [
                    characteristicsData.find(c => c.id === 0),
                ]
            },
            {
                nameWayDown: "Отыскать место силы",
                additional: true,
                prize: [
                    prizeData.find(c => c.id === 7),
                    characteristicsData.find(c => c.id === 0),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 0),
            characteristicsData.find(c => c.id === 1),
        ],
        footer: {
            act: 1,
            author: "Спенсер Идальго",
            addition: addition.find(c => c.id === 0),
            cardNumber: "061",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Запретные знания',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/forbidden_knowledge.png',
        ways:[
            {
                nameWayUp: "Найти забытые \n предания",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 0),
                ]
            },
            {
                nameWayDown: "Познать темные тайны",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 1),
                    characteristicsData.find(c => c.id === 5),
                ]
            }
        ],
        requirement: [
            characteristicsData.find(c => c.id === 0),
            characteristicsData.find(c => c.id === 5),
        ],
        footer: {
            act: 1,
            author: "Крис Колд",
            addition: addition.find(c => c.id === 0),
            cardNumber: "060",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        nameCard:'Бушующее пламя>',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/trials_act_1/raging_flames.png',
        ways:[
            {
                nameWayUp: "Выжить в огне",
                additional: false,
                prize: [
                    characteristicsData.find(c => c.id === 2),
                ]
            },
            {
                nameWayDown: "Позаботиться \n о раненый",
                additional: true,
                prize: [
                    prizeData.find(c => c.id === 8),
                    characteristicsData.find(c => c.id === 1),
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
            addition: addition.find(c => c.id === 0),
            cardNumber: "064",
            year: 2018,
        }
    },
]
