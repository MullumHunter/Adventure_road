import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {historyItems} from "../historyItems";
import {characteristicsData} from "../characteristicsData";
import {prizeData} from "../PrizeData";
import {addition} from "../Addition";

export const trialsCard_ACT_3_Original = [
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Покои королевы",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3/queen_room.png',
        ways:[
            {
                nameWayUp: "Снискать милость \n королевы",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way3"],
                    characteristicsData["charisma"],
                ]
            },
            {
                nameWayDown: "Свергнуть королеву",
                additional: true,
                prize: [
                    historyItems["noble"],
                    prizeData["dark_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 3,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "099",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Королевский совет",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3/royal_council.png',
        ways:[
            {
                nameWayUp: "Стать советником",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way3"],
                    characteristicsData["intelligence"],
                ]
            },
            {
                nameWayDown: "Захватить престол",
                additional: true,
                prize: [
                    historyItems["noble"],
                    prizeData["light_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 3,
            author: "Пол Скотт Канаван",
            addition: addition["original"],
            cardNumber: "101",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Колосс Тьмы",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3/colossus_darkness.png',
        ways:[
            {
                nameWayUp: "Взобраться \n на колосса",
                additional: false,
                prize: [
                    historyItems["nature"],
                    prizeData["light_way3"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Сокрушить гиганта",
                additional: true,
                prize: [
                    prizeData["light_way5"],
                    characteristicsData["strength"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["constitution"],
        ],
        footer: {
            act: 3,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "104",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Сокровищница дракона",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3/treasury.png',
        ways:[
            {
                nameWayUp: "Украсть сокровища",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way3"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Убить дракона",
                additional: true,
                prize: [
                    historyItems["noble"],
                    prizeData["light_way4"],
                    characteristicsData["strength"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["strength"],
        ],
        footer: {
            act: 3,
            author: "Пол Скотт Канаван",
            addition: addition["original"],
            cardNumber: "103",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Сила прроды",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3/natural_power.png',
        ways:[
            {
                nameWayUp: "Поработить дух леса",
                additional: false,
                prize: [
                    prizeData["dark_way4"],
                    characteristicsData["charisma"],
                ]
            },
            {
                nameWayDown: "Востановить баланс",
                additional: true,
                prize: [
                    historyItems["nature"],
                    prizeData["light_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["wisdom"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "102",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Решающая битва",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3/decisive_battle.png',
        ways:[
            {
                nameWayUp: "Вызвать генерала \n на дуэль",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Пожертвовать \n армией",
                additional: true,
                prize: [
                    historyItems["noble"],
                    prizeData["dark_way3"],
                    characteristicsData["intelligence"]
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 3,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "105",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Тюремное заключение",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3/imprisonment.png',
        ways:[
            {
                nameWayUp: "Спланировать \n месть",
                additional: false,
                prize: [
                    historyItems["justice"],
                    prizeData["dark_way2"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Выбраться \n на свободу",
                additional: true,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["dexterity"]
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["constitution"],
        ],
        footer: {
            act: 3,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "108",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Армия тирана",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3/tyrant_army.png',
        ways:[
            {
                nameWayUp: "Сражаться на передовой",
                additional: false,
                prize: [
                    prizeData["light_way3"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Возгловить \n повстанцев",
                additional: true,
                prize: [
                    historyItems["justice"],
                    prizeData["light_way3"],
                    characteristicsData["charisma"]
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 3,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "107",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Орда демонов",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3/horde_demons.png',
        ways:[
            {
                nameWayUp: "Оттеснить \n демоническую армию",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["wisdom"],
                ]
            },
            {
                nameWayDown: "Обрести оружие \n Света",
                additional: false,
                prize: [
                    historyItems["belief"],
                    prizeData["light_way3"],
                    characteristicsData["strength"]
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 3,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "106",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Логово ведьмы",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3/witch_house.png',
        ways:[
            {
                nameWayUp: "Поддаться темной магии",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    prizeData["dark_way3"],
                ]
            },
            {
                nameWayDown: "Победить\n ведьму",
                additional: true,
                prize: [
                    historyItems["magic"],
                    prizeData["light_way3"],
                    characteristicsData["intelligence"]
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["dexterity"],
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "109",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Клинок Тьмы",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3/blade_darkness.png',
        ways:[
            {
                nameWayUp: "Завладеть \n  черным мечом",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    prizeData["dark_way4"],
                ]
            },
            {
                nameWayDown: "Уничтожить меч",
                additional: true,
                prize: [
                    prizeData["light_way5"],
                    characteristicsData["strength"]
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "113",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Склеп ужасов",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3/crypt_horrors.png',
        ways:[
            {
                nameWayUp: "Обезвредить ловушку",
                additional: false,
                prize: [
                    prizeData["light_way3"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Уничтожить лича",
                additional: true,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["wisdom"]
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["wisdom"]
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "110",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Дорога в бездну",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3/road_abyss.png',
        ways:[
            {
                nameWayUp: "Путешествовать \n по преисподней",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Вызволить погибщую \n  возлюбленную",
                additional: true,
                prize: [
                    historyItems["justice"],
                    prizeData["light_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "111",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Гильдия убийц",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3/аssassins_guild.png',
        ways:[
            {
                nameWayUp: "Уничтожить гильдию",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Возглавить гильдию",
                additional: true,
                prize: [
                    prizeData["dark_way6"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
        ],
        footer: {
            act: 3,
            author: "Пол Скотт Канаван",
            addition: addition["original"],
            cardNumber: "112",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Мрачная тайна",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3/dark_secret.png',
        ways:[
            {
                nameWayUp: "Отпрыск Темного лорда",
                additional: false,
                prize: [
                    historyItems["malefactor"],
                    prizeData["dark_way4"]
                ]
            },
            {
                nameWayDown: "Отмеченный \n черной магией",
                additional: true,
                prize: [
                    historyItems["magic"],
                    prizeData["dark_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["charisma"],
        ],
        footer: {
            act: 3,
            author: "Пол Скотт Канаван",
            addition: addition["original"],
            cardNumber: "114",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Испытание чароде",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3/sorcerer_trial.png',
        ways:[
            {
                nameWayUp: "Сразить архимага",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    prizeData["dark_way3"],
                    characteristicsData["intelligence"]
                ]
            },
            {
                nameWayDown: "Стать архимагом",
                additional: true,
                prize: [
                    historyItems["magic"],
                    prizeData["light_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 3,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "115",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Божественное призвание",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3/divine_calling.png',
        ways:[
            {
                nameWayUp: "Защитник Света",
                additional: false,
                prize: [
                    historyItems["belief"],
                    prizeData["light_way4"]
                ]
            },
            {
                nameWayDown: "Приспешник \n Тьмы",
                additional: true,
                prize: [
                    historyItems["malefactor"],
                    prizeData["antihero_card"],
                    prizeData["dark_way4"]
                ]
            }
        ],
        requirement: [
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "116",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Буйствующий элементаль",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3/rampaging_elemental.png',
        ways:[
            {
                nameWayUp: "Потушить пламя",
                additional: false,
                prize: [
                    historyItems["nature"],
                    prizeData["light_way2"],
                    characteristicsData["intelligence"]
                ]
            },
            {
                nameWayDown: "Подчинить \n живой огонь",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    prizeData["dark_way3"]
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["intelligence"]
        ],
        footer: {
            act: 3,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "097",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Героическое освобождение",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3/hero_liberation.png',
        ways:[
            {
                nameWayUp: "Воззвать \n к милосердию",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way2"],
                    characteristicsData["charisma"]
                ]
            },
            {
                nameWayDown: "Спасти \n невиновного",
                additional: true,
                prize: [
                    historyItems["justice"],
                    prizeData["light_way3"],
                    characteristicsData["dexterity"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["charisma"]
        ],
        footer: {
            act: 3,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "096",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Древнее зло",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3/ancient_evil.png',
        ways:[
            {
                nameWayUp: "Изгнать исчадие ада",
                additional: false,
                prize: [
                    prizeData["light_way3"],
                    characteristicsData["wisdom"]
                ]
            },
            {
                nameWayDown: "Заключить договор",
                additional: false,
                prize: [
                    historyItems["malefactor"],
                    prizeData["dark_way2"],
                    characteristicsData["intelligence"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["wisdom"]
        ],
        footer: {
            act: 3,
            author: "Адам Дж. Мартин",
            addition: addition["original"],
            cardNumber: "100",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Армия мертвых",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3/army_dead.png',
        ways:[
            {
                nameWayUp: "Молиться о спасении",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way3"],
                    characteristicsData["wisdom"]
                ]
            },
            {
                nameWayDown: "Пережить нашествие",
                additional: false,
                prize: [
                    historyItems["nature"],
                    prizeData["light_way3"],
                    characteristicsData["constitution"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["wisdom"]
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "098",
            year: 2018,
        }
    },
]
