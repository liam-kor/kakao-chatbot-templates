"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCarouselWithData = void 0;
const cards_1 = require("./cards");
exports.createCarouselWithData = (card, dataList, header) => {
    const items = [];
    for (const data of dataList) {
        card.insertData(data);
        items.push(card);
    }
    return new cards_1.Carousel(items, header);
};
