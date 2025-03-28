import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {prizeData} from "../PrizeData";
import {characteristicsData} from "../characteristicsData";
import {historyItems} from "../historyItems";
import {addition} from "../Addition";
import {namesData} from "../NamesData";

export const trialsCard_ACT_3_NameWind = [
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"На краю геогрефии",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3_nameWind/end_geography.png',
        ways:[
            {
                nameWayUp: "Отправиться \n за границу",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way2"],
                    characteristicsData["constitution"]
                ]
            },
            {
                nameWayDown: "Услышать забытые \n предания",
                additional: false,
                prize: [
                    historyItems["magic"],
                    prizeData["light_way3"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["intelligence"]
        ],
        footer: {
            act: 3,
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "035",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Разбойничий лагерь",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3_nameWind/bandit_camp.png',
        ways:[
            {
                nameWayUp: "Победить \n разбойников",
                additional: false,
                prize: [
                    historyItems["belief"],
                    prizeData["light_way3"],
                    characteristicsData["dexterity"]
                ]
            },
            {
                nameWayDown: "Сжечь лагерь дотла",
                additional: false,
                prize: [
                    namesData["fire"],
                    prizeData["dark_way4"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["constitution"]
        ],
        footer: {
            act: 3,
            author: "Адам Дж. Марин",
            addition: addition["wind"],
            cardNumber: "044",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Гениальное изобретение",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3_nameWind/ingenious_invention.png',
        ways:[
            {
                nameWayUp: "Создать новую схему",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way2"],
                    characteristicsData["intelligence"]
                ]
            },
            {
                nameWayDown: "Поделиться \n изобретением",
                additional: false,
                prize: [
                    historyItems["belief"],
                    prizeData["light_way3"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["dexterity"]
        ],
        footer: {
            act: 3,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "045",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Взбешенный фейе",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3_nameWind/enraged_feiye.png',
        ways:[
            {
                nameWayUp: "Заклясть словом",
                additional: false,
                prize: [
                    namesData["iron"],
                    prizeData["dark_way3"],
                ]
            },
            {
                nameWayDown: "Поддаться страху",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    prizeData["dark_way2"],
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
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "046",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Бездыханное тело",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3_nameWind/lifeless_body.png',
        ways:[
            {
                nameWayUp: "Тихо помянуть ветер",
                additional: false,
                prize: [
                    namesData["wind"],
                    prizeData["light_way4"],
                ]
            },
            {
                nameWayDown: "Спасти жизнь",
                additional: true,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way4"],
                    characteristicsData["wisdom"]
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["wisdom"]
        ],
        footer: {
            act: 3,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "047",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Дар фейе",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3_nameWind/gift_feiye.png',
        ways:[
            {
                nameWayUp: "Тихо помянуть ветер",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way3"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Спасти жизнь",
                additional: true,
                prize: [
                    historyItems["magic"],
                    prizeData["light_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
        ],
        footer: {
            act: 3,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "048",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Меч-дерево",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3_nameWind/sword_tree.png',
        ways:[
            {
                nameWayUp: "Следовать путем \n Латанты",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Успокоить ветер",
                additional: true,
                prize: [
                    namesData["wind"],
                    prizeData["light_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
        ],
        footer: {
            act: 3,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "048",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Рой скрели",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3_nameWind/skreli_swarm.png',
        ways:[
            {
                nameWayUp: "Принять неравный бой",
                additional: false,
                prize: [
                    prizeData["dark_way4"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Истребить скрель",
                additional: true,
                prize: [
                    namesData["iron"],
                    prizeData["light_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
        ],
        footer: {
            act: 3,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "050",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Баллада о Ланре",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3_nameWind/ballad_lanre.png',
        ways:[
            {
                nameWayUp: "Песня правды",
                additional: false,
                prize: [
                    historyItems["music"],
                    prizeData["light_way4"],
                ]
            },
            {
                nameWayDown: "Песня лжи",
                additional: false,
                prize: [
                    historyItems["malefactor"],
                    prizeData["dark_way4"],
                ]
            }
        ],
        requirement: [
            characteristicsData["charisma"],
        ],
        footer: {
            act: 3,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "051",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Утраченные знания",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3_nameWind/lost_knowledge.png',
        ways:[
            {
                nameWayUp: "Собрать сведения \n о чандрианах",
                additional: false,
                prize: [
                    prizeData["dark_way5"],
                ]
            },
            {
                nameWayDown: "Добраться до истины",
                additional: true,
                prize: [
                    historyItems["music"],
                    prizeData["light_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
        ],
        footer: {
            act: 3,
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "052",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Тайное имя",
        hard: hardData["5"],
        img: '/img/cards/trials_act_3_nameWind/secret_name.png',
        ways:[
            {
                nameWayUp: "Опутать \n переменчивым ветром",
                additional: false,
                prize: [
                    namesData["wind"],
                    prizeData["light_way4"],
                ]
            },
            {
                nameWayDown: "Произнести \n истинное имя",
                additional: true,
                prize: [
                    prizeData["light_way5"],
                    characteristicsData["wisdom"],
                ]
            }
        ],
        requirement: [
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 3,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "053",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Гнусный арканист",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3_nameWind/nefarious_arcanist.png',
        ways:[
            {
                nameWayUp: "Выявить обман",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["wisdom"],
                ]
            },
            {
                nameWayDown: "Раскрыть заговор",
                additional: true,
                prize: [
                    prizeData["light_way5"],
                    characteristicsData["charisma"],
                ]
            }
        ],
        requirement: [
            characteristicsData["wisdom"],
            characteristicsData["charisma"]
        ],
        footer: {
            act: 3,
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "036",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Прекрасня фейе",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3_nameWind/beautiful_fairy.png',
        ways:[
            {
                nameWayUp: "Покорить сердце \n Фелуриан",
                additional: false,
                prize: [
                    historyItems["music"],
                    prizeData["light_way3"],
                    characteristicsData["charisma"],
                ]
            },
            {
                nameWayDown: "Изучить искусства \n Фелуриан",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["constitution"],
                ]
            }
        ],
        requirement: [
            characteristicsData["charisma"],
            characteristicsData["constitution"]
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["wind"],
            cardNumber: "037",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Дуэль симпатии",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3_nameWind/duel_sympathy.png',
        ways:[
            {
                nameWayUp: "Алар как рамстонская сталь",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                ]
            },
            {
                nameWayDown: "Алар как океан",
                additional: true,
                prize: [
                    prizeData["dark_way5"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["wisdom"]
        ],
        footer: {
            act: 3,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "038",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Ночь безлунная настала",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3_nameWind/night_moonless.png',
        ways:[
            {
                nameWayUp: "Позволить фейе \n путать след",
                additional: false,
                prize: [
                    prizeData["dark_way4"],
                ]
            },
            {
                nameWayDown: "Бродить во тьме \n и ждать рассвет",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                ]
            }
        ],
        requirement: [
            characteristicsData["wisdom"],
            characteristicsData["charisma"]
        ],
        footer: {
            act: 3,
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "039",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Фальшивая труппа",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3_nameWind/fake_troupe.png',
        ways:[
            {
                nameWayUp: "Спасти пленниц",
                additional: false,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["dexterity"]
                ]
            },
            {
                nameWayDown: "Справедливость \n и кровь",
                additional: false,
                prize: [
                    historyItems["justice"],
                    prizeData["dark_way3"],
                    characteristicsData["strength"]
                ]
            }
        ],
        requirement: [
            characteristicsData["dexterity"],
            characteristicsData["strength"]
        ],
        footer: {
            act: 3,
            author: "Адам Дж. Марин",
            addition: addition["wind"],
            cardNumber: "040",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Кожанный плясун",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3_nameWind/leather_dancer.png',
        ways:[
            {
                nameWayUp: "Оборвать жизнь безумца",
                additional: false,
                prize: [
                    prizeData["dark_way4"],
                    characteristicsData["constitution"]
                ]
            },
            {
                nameWayDown: "Убит демона",
                additional: true,
                prize: [
                    namesData["iron"],
                    prizeData["light_way4"],
                    characteristicsData["strength"]
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["strength"]
        ],
        footer: {
            act: 3,
            author: "Адам Дж. Марин",
            addition: addition["wind"],
            cardNumber: "041",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Беснующийся дракус",
        hard: hardData["6"],
        img: '/img/cards/trials_act_3_nameWind/rampaging_dracus.png',
        ways:[
            {
                nameWayUp: "Оборвать жизнь безумца",
                additional: false,
                prize: [
                    namesData["fire"],
                    prizeData["light_way2"],
                    characteristicsData["intelligence"]
                ]
            },
            {
                nameWayDown: "Убить драккуса",
                additional: true,
                prize: [
                    prizeData["light_way4"],
                    characteristicsData["strength"]
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["strength"]
        ],
        footer: {
            act: 3,
            author: "Артем Демура",
            addition: addition["wind"],
            cardNumber: "042",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Ревностный амир",
        hard: hardData["7"],
        img: '/img/cards/trials_act_3_nameWind/zealous_amir.png',
        ways:[
            {
                nameWayUp: "Встать на сторону \n амир",
                additional: false,
                prize: [
                    historyItems["justice"],
                    prizeData["dark_way3"],
                    characteristicsData["strength"]
                ]
            },
            {
                nameWayDown: "Выступить \n против амир",
                additional: false,
                prize: [
                    namesData["fire"],
                    prizeData["light_way3"],
                    characteristicsData["wisdom"]
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["wisdom"]
        ],
        footer: {
            act: 3,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "043",
            year: 2019,
        }
    },
]
