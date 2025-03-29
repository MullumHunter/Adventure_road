import {trialsCard_ACT_1_Original} from "./trialsCard_ACT_1_Original";
import {trialsCard_ACT_1_NameWind} from "./trialsCard_ACT_1_NameWind";
import {characterCard_ACT_1_Original} from "./characterCard_ACT_1_Original";
import {allyCard_ACT_1_Original} from "./AllyCard_ACT_1_Original";
import {allyCard_ACT_1_NameWind} from "./AllyCard_ACT_1_NameWind";
import {characterCard_ACT_1_NameWind} from "./characterCard_ACT_1_NameWind";
import {trialsCard_ACT_2_Original} from "./trialsCard_ACT_2_Original";
import {trialsCard_ACT_2_NameWind} from "./trialsCard_ACT_2_NameWind";
import {characterCard_ACT_2_NameWind} from "./characterCard_ACT_2_NameWind";
import {characterCard_ACT_2_Original} from "./characterCard_ACT_2_Original";
import {AllyCard_ACT_2_Original} from "./AllyCard_ACT_2_Original";
import {AllyCard_ACT_2_NameWind} from "./AllyCard_ACT_2_NameWind";
import {villianCard_ACT_2_Original} from "./VillianCard_ACT_2_Original";
import {villianCard_ACT_2_NameWind} from "./VillianCard_ACT_2_NameWind";
import {trialsCard_ACT_3_Original} from "./trialsCard_ACT_3_Original";
import {trialsCard_ACT_3_NameWind} from "./trialsCard_ACT_3_NameWind";
import {characterCard_ACT_3_Original} from "./characterCard_ACT_3_Original";
import {villianCard_ACT_3_Original} from "./VillianCard_ACT_3_Original";
import {villianCard_ACT_3_NameWind} from "./VillianCard_ACT_3_NameWind";


export const aggregatorCard = {
    "Базовая колода": {
        1: {
            challenge:[
                ...trialsCard_ACT_1_Original
            ],
            character: [
                ...characterCard_ACT_1_Original
            ],
            ally: [
                ...allyCard_ACT_1_Original
            ],
        },
        2: {
            challenge:[
                ...trialsCard_ACT_2_Original
            ],
            character: [
                ...characterCard_ACT_2_Original
            ],
            ally: [
                ...AllyCard_ACT_2_Original
            ],
            villian: [
                ...villianCard_ACT_2_Original
            ]
        },
        3: {
            challenge:[
                ...trialsCard_ACT_3_Original
            ],
            character: [
                ...characterCard_ACT_3_Original
            ],
            villian: [
                ...villianCard_ACT_3_NameWind
            ]
        },
    },
    "Имя ветра": {
        1:{
            challenge:[
                ...trialsCard_ACT_1_NameWind
            ],
            character: [
                ...characterCard_ACT_1_NameWind
            ],
            ally: [
                ...allyCard_ACT_1_NameWind
            ],
        },
        2:{
            challenge:[
                ...trialsCard_ACT_2_NameWind
            ],
            character: [
                ...characterCard_ACT_2_NameWind
            ],
            ally: [
                ...AllyCard_ACT_2_NameWind
            ],
            villian: [
                ...villianCard_ACT_2_NameWind
            ]
        },
        3:{
            challenge:[
                ...trialsCard_ACT_3_NameWind
            ],
            character: [
                ...characterCard_ACT_3_Original
            ],
            villian: [
                ...villianCard_ACT_3_NameWind
            ]
        },
    },
}
    // ...trialsCard_ACT_1_Original,
    // ...trialsCard_ACT_1_NameWind,
    // ...characterCard_ACT_1_Original,
    // ...characterCard_ACT_1_NameWind,
    // ...allyCard_ACT_1_Original,
    // ...allyCard_ACT_1_NameWind,
    //
    // ...trialsCard_ACT_2_Original,
    // ...trialsCard_ACT_2_NameWind,
    // ...characterCard_ACT_2_Original,
    // ...characterCard_ACT_2_NameWind,
    // ...AllyCard_ACT_2_Original,
    // ...AllyCard_ACT_2_NameWind,
    // ...villianCard_ACT_2_Original,
    // ...villianCard_ACT_2_NameWind,
    //
    // ...trialsCard_ACT_3_Original,
    // ...trialsCard_ACT_3_NameWind,
    // ...characterCard_ACT_3_Original,
    // ...villianCard_ACT_3_Original,
    // ...villianCard_ACT_3_NameWind,
