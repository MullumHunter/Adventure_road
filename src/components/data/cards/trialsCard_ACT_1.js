import {hardData} from "../HardData";
import {prizeData} from "../PrizeData";
import {historyItem} from "../historyItem";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";
import {namesData} from "../NamesData";

export const trialsCard_ACT_1 = [
    {
        id: 0,
        
        nameCard:'Магическое испытание',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/magical_tеst.png',
        ways:[
            {
                nameWayUp: "Склонность к светлой магии",
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
        id: 1,
        
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
        id: 2,
        
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
        id: 3,
        
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
        id: 4,
        
        nameCard:'Призыв к оружию',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/call_to_arms.png',
        ways:[
            {
                nameWayUp: "вступить в королевскую армию",
                additional: false,
                prize: [
                    prizeData.find(c => c.id === 8),
                    characteristicsData.find(c => c.id === 4),
                ]
            },
            {
                nameWayDown: "Защищать родной дом",
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
        id: 5,
        
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
            cardNumber: "054",
            year: 2018,
        }
    },
    {
        id: 6,
        
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
        id: 7,
        
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
        id: 8,
        
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
                nameWayDown: "Выучиться \n на убийцу",
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
        id: 9,
        
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
        id: 10,
        
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
        id: 11,
        
        nameCard:'Неупокоенный душ',
        hard: hardData.find(hard => hard.name === 4),
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
        id: 12,
        
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
        id: 13,
        
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
        id: 14,
        
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
    {
        id: 15,
        
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
        id: 16,
        
        nameCard:'Назойливый ухажер',
        hard: hardData.find(hard => hard.name === 3),
        img: '/img/cards/trials_act_1/annoying_boyfriend.png',
        ways:[
            {
                nameWayUp: "Охмурить богатого дворянина",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 6),
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
        id: 17,
        
        nameCard:'Шайка уличных мальчишек',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/gang_of_street_urchins.png',
        ways:[
            {
                nameWayUp: "Спасти невиновного",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 0),
                    characteristicsData.find(c => c.id === 4),
                ]
            },
            {
                nameWayDown: "Жить с сожалениями",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 3),
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
        id: 18,
        
        nameCard:'Шайка уличных мальчишек',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/learn_a_song.png',
        ways:[
            {
                nameWayUp: "<<Песня о сэре Савиене>>",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 6),
                    characteristicsData.find(c => c.id === 0),
                ]
            },
            {
                nameWayDown: "<<Ветер, играющий листком>>",
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
            cardNumber: "012",
            year: 2019,
        }
    },
    {
        id: 19,
        
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
        id: 20,
        
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
                nameWayDown: "Преисполниться \n достоинством \n безмолвия",
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
        id: 21,
        
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
                    historyItem.find(c => c.id === 0),
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
        id: 22,
        
        nameCard:'Уроки симпатии',
        hard: hardData.find(hard => hard.name === 4),
        img: '/img/cards/trials_act_1/lessons_of_sympathy.png',
        ways:[
            {
                nameWayUp: "Гениальная смекалка",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 2),
                    characteristicsData.find(c => c.id === 5),
                ]
            },
            {
                nameWayDown: "Необъяснимый дар",
                additional: false,
                prize: [
                    historyItem.find(c => c.id === 0),
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
