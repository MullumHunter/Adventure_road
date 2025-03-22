import {generateUniqueId} from "../../utils/GenerateId";
import {hardData} from "../HardData";
import {historyItems} from "../historyItems";
import {characteristicsData} from "../characteristicsData";
import {prizeData} from "../PrizeData";
import {addition} from "../Addition";
import {namesData} from "../NamesData";

export const trialsCard_ACT_2_NameWind = [
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Буря на море",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2_nameWind/storm_sea.png',
        ways:[
            {
                nameWayUp: "Уплыть от опасности",
                additional: false,
                prize: [
                    namesData["wind"],
                    characteristicsData["intelligence"],
                ]
            },
            {
                nameWayDown: "Пережить кораблекрушение",
                additional: true,
                prize: [
                    prizeData["dark_way2"],
                    characteristicsData["constitution"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["constitution"],
        ],
        footer: {
            act: 2,
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "028",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Выжить в лесу",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2_nameWind/eld.png',
        ways:[
            {
                nameWayUp: "Выжить в лесу",
                additional: false,
                prize: [
                    prizeData["light_way2"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Выследить разбойников",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
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
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "029",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Публичная порка",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2_nameWind/public_spanking.png',
        ways:[
            {
                nameWayUp: "Вытерпеть наказание",
                additional: false,
                prize: [
                    prizeData["dark_way1"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Скрыть боль",
                additional: true,
                prize: [
                    prizeData["light_way2"],
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
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "030",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Архивы",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2_nameWind/archives.png',
        ways:[
            {
                nameWayUp: "Стать хранистом",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    characteristicsData["intelligence"],
                ]
            },
            {
                nameWayDown: "Отыскать правду",
                additional: true,
                prize: [
                    prizeData["antihero_card"],
                    prizeData["light_way1"],
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
            author: "Адам Дж. Марин",
            addition: addition["wind"],
            cardNumber: "031",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Тайная служба",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2_nameWind/secret_service.png',
        ways:[
            {
                nameWayUp: "Сложить песню",
                additional: false,
                prize: [
                    historyItems["music"],
                    prizeData["light_way1"],
                    characteristicsData["intelligence"],
                ]
            },
            {
                nameWayDown: "Заручиться доверием маэра",
                additional: false,
                prize: [
                    prizeData["light_way2"],
                    characteristicsData["charisma"],
                ]
            }
        ],
        requirement: [
            characteristicsData["intelligence"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 2,
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "032",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Встреча украдкой",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2_nameWind/stealthy_meeting.png',
        ways:[
            {
                nameWayUp: "Встретить свою музу",
                additional: false,
                prize: [
                    historyItems["music"],
                    characteristicsData["charisma"],
                ]
            },
            {
                nameWayDown: "Произнести те самые \n семь слов",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    characteristicsData["wisdom"],
                ]
            }
        ],
        requirement: [
            characteristicsData["charisma"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 2,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "033",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Артефактная",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2_nameWind/artefact.png',
        ways:[
            {
                nameWayUp: "Починить \n поврежденную сигалдри",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    characteristicsData["dexterity"],
                ]
            },
            {
                nameWayDown: "Создать артефакт",
                additional: true,
                prize: [
                    namesData["fire"],
                    prizeData["light_way1"],
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
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "034",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Школа адемоа",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2_nameWind/аcademy_chool.png',
        ways:[
            {
                nameWayUp: "«Руки-ножи»",
                additional: false,
                prize: [
                    namesData["iron"],
                    prizeData["light_way1"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "«Укрощение льва»",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way1"],
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
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "021",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Наемные убийцы",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2_nameWind/hired_killers.png',
        ways:[
            {
                nameWayUp: "Отбиться от врагов",
                additional: false,
                prize: [
                    prizeData["light_way1"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Призвать огонь \n и молнию",
                additional: false,
                prize: [
                    namesData["fire"],
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
            addition: addition["wind"],
            cardNumber: "022",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Стычка",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2_nameWind/skirmish.png',
        ways:[
            {
                nameWayUp: "Осмеять соперника",
                additional: false,
                prize: [
                    historyItems["malefactor"],
                    prizeData["dark_way1"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Поразить врага",
                additional: false,
                prize: [
                    namesData["wind"],
                    prizeData["light_way2"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["wisdom"],
        ],
        footer: {
            act: 2,
            author: "Гал Ор",
            addition: addition["wind"],
            cardNumber: "023",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Геройский поступок",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2_nameWind/heroic_act.png',
        ways:[
            {
                nameWayUp: "Спасти друга",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    characteristicsData["strength"],
                ]
            },
            {
                nameWayDown: "Уцелеть в огне",
                additional: false,
                prize: [
                    namesData["fire"],
                    characteristicsData["charisma"],
                ]
            }
        ],
        requirement: [
            characteristicsData["strength"],
            characteristicsData["charisma"],
        ],
        footer: {
            act: 2,
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "024",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Пробудить спящий разум",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2_nameWind/awaken_sleeping_mind.png',
        ways:[
            {
                nameWayUp: "«Каменное сердце»",
                additional: false,
                prize: [
                    prizeData["antihero_card"],
                    prizeData["light_way1"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "«Листок на ветру»",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way1"],
                    characteristicsData["dexterity"],
                ]
            }
        ],
        requirement: [
            characteristicsData["constitution"],
            characteristicsData["dexterity"],
        ],
        footer: {
            act: 2,
            author: "Логан Феличиано",
            addition: addition["wind"],
            cardNumber: "025",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Железный закон",
        hard: hardData["4"],
        img: '/img/cards/trials_act_2_nameWind/iron_law.png',
        ways:[
            {
                nameWayUp: "Выскользнуть \n из кандалов",
                additional: false,
                prize: [
                    namesData["iron"],
                    characteristicsData["constitution"],
                ]
            },
            {
                nameWayDown: "Доказать свою \n невиновность",
                additional: false,
                prize: [
                    historyItems["magic"],
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
            author: "Артем Демура",
            addition: addition["wind"],
            cardNumber: "026",
            year: 2019,
        }
    },
    {
        id: generateUniqueId(),
        
        type: "challenge",
        nameCard:"Бар «Эолиан»",
        hard: hardData["5"],
        img: '/img/cards/trials_act_2_nameWind/eolian-bar.png',
        ways:[
            {
                nameWayUp: "Покорить богатого\n покровителя",
                additional: false,
                prize: [
                    prizeData["hero_card"],
                    prizeData["light_way1"],
                    characteristicsData["charisma"],
                ]
            },
            {
                nameWayDown: "Заслужить \n талантовые \n дудочки",
                additional: true,
                prize: [
                    historyItems["music"],
                    prizeData["light_way2"],
                    characteristicsData["dexterity"],
                ]
            }
        ],
        requirement: [
            characteristicsData["charisma"],
            characteristicsData["dexterity"],
        ],
        footer: {
            act: 2,
            author: "Адам Дж. Марин",
            addition: addition["wind"],
            cardNumber: "027",
            year: 2019,
        }
    },
]
