import {cardCatalog} from "./CardCatalog";
export const listData = [
    {
        id: 0,
        nameLibrary: "Первая",
        cards: [
            cardCatalog[0],
            cardCatalog[1],
            cardCatalog[2],
        ]
    },
    {
        id: 1,
        nameLibrary: "Вторая",
        cards: [
            cardCatalog[0],
            cardCatalog[0],
            cardCatalog[1],
            cardCatalog[2],
            cardCatalog[0],
            cardCatalog[1],
            cardCatalog[2],
        ]
    },
];

