import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {historyItems} from "../historyItems";
import {characteristicsData} from "../characteristicsData";
import {prizeData} from "../PrizeData";
import {addition} from "../Addition";

export const trialsCard_ACT_2_Original = [
    {
        id: generateUniqueId(),

        type: "challenge",
        nameCard:"Свирепый зверь",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2/Tier.png',
        ways:[
            {
                nameWayUp: "Понять законы \n природы",
                additional: false,
                prize: [
                    historyItems["nature"],
                    characteristicsData["wisdom"],
                ]
            },
            {
                nameWayDown: "Успокоить дикого зверя",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    characteristicsData["charisma"],
                ]
            }
        ],
        requirement: [
            characteristicsData["wisdom"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 2,
            author: "Шон Робинсон",
            addition: addition["original"],
            cardNumber: "090",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),

        type: "challenge",
        nameCard:"Дозор",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2/patrouille.png',
        ways:[
            {
                nameWayUp: "Охранять город",
                additional: false,
                prize: [
                    historyItems["noble"],
                    characteristicsData["wisdom"],
                ]
            },
            {
                nameWayDown: "Поймать \n преступника",
                additional: true,
                prize: [
                    historyItems["justice"],
                    prizeData["light_way1"],
                    characteristicsData["dexterity"],
                ]
            }
        ],
        requirement: [
            characteristicsData["wisdom"],
            characteristicsData["dexterity"],
        ],
        footer: {
            act: 2,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "091",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),

        type: "challenge",
        nameCard:"Опасное подземелье",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2/dangerous_dungeon.png',
        ways:[
            {
                nameWayUp: "Исследовать глубины",
                additional: false,
                prize: [
                    prizeData["dark_way1"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Уйти с сокровищами",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    characteristicsData["dexterity"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["constitution"],
        ],
        footer: {
            act: 2,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "082",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),

        type: "challenge",
        nameCard:"Битва в траншее",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2/battle_trench.png',
        ways:[
            {
                nameWayUp: "Возглавить атаку",
                additional: false,
                prize: [
                    historyItems["noble"],
                    prizeData["hero_card"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Ухаживать \n за ранеными",
                additional: false,
                prize: [
                    historyItems["belief"],
                    prizeData["light_way1"],
                    characteristicsData["wisdom"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 2,
            author: "Адам Дж. Марин",
            addition: addition["original"],
            cardNumber: "080",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),

        type: "challenge",
        nameCard:"Налет разбойников",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2/robber_raid.png',
        ways:[
            {
                nameWayUp: "Отразить \n атаку бандитов",
                additional: false,
                prize: [
                    prizeData["light_way2"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Сбежать и скрыться",
                additional: false,
                prize: [
                    prizeData["dark_way2"],
                    characteristicsData["dexterity"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["dexterity"],
        ],
        footer: {
            act: 2,
            author: "Адам Дж. Марин",
            addition: addition["original"],
            cardNumber: "077",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),

        type: "challenge",
        nameCard:"Морское сражение",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2/sea_battle.png',
        ways:[
            {
                nameWayUp: "Возглавить абордаж",
                additional: false,
                prize: [
                    prizeData["light_way2"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Потопить \n вражеское судно",
                additional: true,
                prize: [
                    prizeData["dark_way3"],
                    characteristicsData["intelligence"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 2,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "079",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Просто хороший День",
        hard: hardData["3"],
        img: '/img/cards/Kolya2.png',
        ways:[
            {
                nameWayUp: "Встретиться с друзьями",
                additional: false,
                prize: [
                    prizeData["light_way3"],
                    characteristicsData["wisdom"],
                ]
            },
            {
                nameWayDown: "Сидеть молча на кухне",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    historyItems["malefactor"]
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
        ],
        footer: {
            act: 1,
            author: "Жизненный Случай",
            addition: addition["original"],
            cardNumber: "18 марта",
            year: 2025,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Дерзкое ограбление",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2/robbery.png',
        ways:[
            {
                nameWayUp: "Украсть у богатых",
                additional: false,
                prize: [
                    historyItems["justice"],
                    prizeData["antihero_card"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Раздать бедным",
                additional: true,
                prize: [
                    historyItems["belief"],
                    prizeData["light_way2"],
                    characteristicsData["charisma"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 2,
            author: "Адам Дж. Марин",
            addition: addition["original"],
            cardNumber: "084",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Продажный чиновник",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2/corrupt_official.png',
        ways:[
            {
                nameWayUp: "Дать взятку",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    characteristicsData["charisma"],
                ]
            },
            {
                nameWayDown: "Оказать \n сопротивление",
                additional: true,
                prize: [
                    prizeData["light_way2"],
                    characteristicsData["strength"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 2,
            author: "Адам Дж. Марин",
            addition: addition["original"],
            cardNumber: "081",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Караван в пустыне",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2/desert_caravan.png',
        ways:[
            {
                nameWayUp: "Пережить суровое странствие",
                additional: false,
                prize: [
                    historyItems["nature"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Заработать состояние",
                additional: false,
                prize: [
                    historyItems["noble"],
                    characteristicsData["charisma"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 2,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "087",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Далекие земли",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2/distant_lands.png',
        ways:[
            {
                nameWayUp: "Возглавить \n экспедицию",
                additional: false,
                prize: [
                    historyItems["nature"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Самому изучать \n неизвестное",
                additional: false,
                prize: [
                    historyItems["magic"],
                    characteristicsData["intelligence"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 2,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "085",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Заснеженная гора",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2/snowy_mountain.png',
        ways:[
            {
                nameWayUp: "Взобраться \n на вершину",
                additional: false,
                prize: [
                    prizeData["light_way2"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Обрести \n вековую мудрость",
                additional: false,
                prize: [
                    historyItems["belief"],
                    prizeData["hero_card"],
                    characteristicsData["wisdom"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 2,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "086",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Таинственное убийство",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2/mysterious_murder.png',
        ways:[
            {
                nameWayUp: "Раскрыть \n преступление",
                additional: false,
                prize: [
                    historyItems["justice"],
                    prizeData["light_way1"],
                    characteristicsData["wisdom"],
                ]
            },
            {
                nameWayDown: "Уйти и избежать \n подозрений",
                additional: true,
                prize: [
                    historyItems["malefactor"],
                    prizeData["dark_way2"],
                    characteristicsData["intelligence"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 2,
            author: "Макс Бедуленко",
            addition: addition["original"],
            cardNumber: "088",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Уличная банда",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2/street_gang.png',
        ways:[
            {
                nameWayUp: "Перехитрить \n главаря",
                additional: false,
                prize: [
                    historyItems["justice"],
                    prizeData["light_way2"],
                    characteristicsData["intelligence"],
                ]
            },
            {
                nameWayDown: "Стать главарем",
                additional: false,
                prize: [
                    historyItems["malefactor"],
                    prizeData["dark_way1"],
                    characteristicsData["wisdom"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 2,
            author: "Кристиан Бискап",
            addition: addition["original"],
            cardNumber: "089",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Хранилище секретов",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2/repository_secrets.png',
        ways:[
            {
                nameWayUp: "Отыскать легендарную \n сокровищницу",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Узнать древние тайны",
                additional: false,
                prize: [
                    historyItems["magic"],
                    characteristicsData["intelligence"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 2,
            author: "Шон Робинсон",
            addition: addition["original"],
            cardNumber: "083",
            year: 2018,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Хранилище секретов",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2/captured.png',
        ways:[
            {
                nameWayUp: "Служить \n поработителям",
                additional: false,
                prize: [
                    prizeData["dark_way2"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Вырваться из плена",
                additional: true,
                prize: [
                    prizeData["light_way3"],
                    characteristicsData["strength"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["constitution"],
        ],
        footer: {
            act: 2,
            author: "Артем Демура",
            addition: addition["original"],
            cardNumber: "078",
            year: 2018,
        }
    },
]
