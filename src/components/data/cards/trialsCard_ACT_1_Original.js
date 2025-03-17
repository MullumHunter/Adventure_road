import {hardData} from "../HardData";
import {prizeData} from "../PrizeData";
import {historyItems} from "../historyItems";
import {characteristicsData} from "../characteristicsData";
import {addition} from "../Addition";
import {generateUniqueId} from "../../utils/GenerateId";

export const trialsCard_ACT_1_Original = [
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Магическое испытание',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/magical_tеst.png',
        ways:[
            {
                nameWayUp: "Склонность \n к светлой магии",
                additional: false,
                prize: [
                    historyItems["magic"],
                    characteristicsData["intelligence"],
                ]
            },
            {
                nameWayDown: "Талант в темных искусствах",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
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
            author: "Шон Робинсон",
            addition: addition["wind"],
            cardNumber: "067",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Кошелек или жизнь',
        hard: hardData["3"],
        img: '/img/cards/trials_act_1/money_or_life.png',
        ways:[
            {
                nameWayUp: "Усмирить грабителя",
                additional: false,
                prize: [
                    characteristicsData["charisma"],
                ]
            },
            {
                nameWayDown: "Защитить \n свою семью",
                additional: true,
                prize: [
                    historyItems["justice"],
                    characteristicsData["constitution"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 1,
            author: "Шон Турлоу",
            addition: addition['original'],
            cardNumber: "065",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Академия',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/academy.png',
        ways:[
            {
                nameWayUp: "Преуспеть в учебе",
                additional: false,
                prize: [
                    historyItems["magic"],
                    characteristicsData["intelligence"],
                ]
            },
            {
                nameWayDown: "Усвоить важный урок",
                additional: false,
                prize: [
                    prizeData["hero_card"],
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
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "066",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Уличная драка',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/street_fight.png',
        ways:[
            {
                nameWayUp: "Научиться \n подлым уловкам",
                additional: false,
                prize: [
                    historyItems["malefactor"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Стать завзятым \n бойцом",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    characteristicsData["strength"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["dexterity"],
        ],
        footer: {
            act: 1,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "054",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Призыв к оружию',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/call_to_arms.png',
        ways:[
            {
                nameWayUp: "Вступить \n в королевскую армию",
                additional: false,
                prize: [
                    prizeData["light_way1"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Защищать \n  родной дом",
                additional: false,
                prize: [
                    historyItems["justice"],
                    characteristicsData["constitution"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["constitution"],
        ],
        footer: {
            act: 1,
            author: "Пол Скотт Канаван",
            addition: addition["original"],
            cardNumber: "055",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Опасный артефакт',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/dangerous_artifact.png',
        ways:[
            {
                nameWayUp: "Подчинить силу Тьмы",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    characteristicsData["intelligence"],
                ]
            },
            {
                nameWayDown: "Устоять перед \n искушением",
                additional: false,
                prize: [
                    historyItems["belief"],
                    characteristicsData["constitution"],
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
            addition: addition["original"],
            cardNumber: "063",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Суровая зима',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/harsh_winter.png',
        ways:[
            {
                nameWayUp: "Украсть, чтобы выжить",
                additional: false,
                prize: [
                    prizeData["dark_way1"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Отправиться \n на поиска еды",
                additional: false,
                prize: [
                    historyItems["nature"],
                    characteristicsData["constitution"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["constitution"],
        ],
        footer: {
            act: 1,
            author: "Шон Робинсон",
            addition: addition["original"],
            cardNumber: "059",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Гильдия воров',
        hard: hardData["3"],
        img: '/img/cards/trials_act_1/guild_of_pilferers.png',
        ways:[
            {
                nameWayUp: "Выучиться на шпиона",
                additional: false,
                prize: [
                    characteristicsData["charisma"],
                ]
            },
            {
                nameWayDown: "Выучиться \n на убийцу",
                additional: true,
                prize: [
                    historyItems["malefactor"],
                    characteristicsData["dexterity"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 1,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "062",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Пропавший без вести',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/missing.png',
        ways:[
            {
                nameWayUp: "Найти пропавшее дитя",
                additional: false,
                prize: [
                    historyItems["nature"],
                    characteristicsData["wisdom"],
                ]
            },
            {
                nameWayDown: "Выбираться самому",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    characteristicsData["strength"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 1,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "056",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Подготовка к войне',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/war_preparations.png',
        ways:[
            {
                nameWayUp: "Продумать оборону \n города",
                additional: false,
                prize: [
                    historyItems["noble"],
                    characteristicsData["intelligence"],
                ]
            },
            {
                nameWayDown: "Возвести укрепления",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    characteristicsData["strength"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 1,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "057",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Детская вражда',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/childish_feud.png',
        ways:[
            {
                nameWayUp: "Подружиться с врагом",
                additional: false,
                prize: [
                    historyItems["noble"],
                    characteristicsData["charisma"],
                ]
            },
            {
                nameWayDown: "Сокрушить соперника",
                additional: false,
                prize: [
                    historyItems["malefactor"],
                    characteristicsData["strength"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 1,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "058",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Неупокоенный дух',
        hard: hardData["3"],
        img: '/img/cards/trials_act_1/restless_spirit.png',
        ways:[
            {
                nameWayUp: "Изгнать призрака",
                additional: false,
                prize: [
                    characteristicsData["wisdom"],
                ]
            },
            {
                nameWayDown: "Заручиться \n защитой духа",
                additional: true,
                prize: [
                    historyItems["belief"],
                    characteristicsData["charisma"],
                ]
            }
        ],
        requirement: [
            characteristicsData["wisdom"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 1,
            author: "Спенсер Идальго",
            addition: addition["original"],
            cardNumber: "068",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Лесная чаща',
        hard: hardData["3"],
        img: '/img/cards/trials_act_1/forest_thicket.png',
        ways:[
            {
                nameWayUp: "Скрыться от преследователей",
                additional: false,
                prize: [
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Отыскать место силы",
                additional: true,
                prize: [
                    prizeData["hero_card"],
                    characteristicsData["dexterity"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 1,
            author: "Спенсер Идальго",
            addition: addition["original"],
            cardNumber: "061",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Запретные знания',
        hard: hardData["4"],
        img: '/img/cards/trials_act_1/forbidden_knowledge.png',
        ways:[
            {
                nameWayUp: "Найти забытые \n предания",
                additional: false,
                prize: [
                    historyItems["magic"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Познать темные тайны",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    characteristicsData["intelligence"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 1,
            author: "Крис Колд",
            addition: addition["original"],
            cardNumber: "060",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:'Бушующее пламя>',
        hard: hardData["3"],
        img: '/img/cards/trials_act_1/raging_flames.png',
        ways:[
            {
                nameWayUp: "Выжить в огне",
                additional: false,
                prize: [
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Позаботиться \n о раненых",
                additional: true,
                prize: [
                    prizeData["light_way1"],
                    characteristicsData["wisdom"],
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
            addition: addition["original"],
            cardNumber: "064",
            year: 2018,
        }
    },
]
