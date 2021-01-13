"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCardWithData = exports.createCarouselWithData = void 0;
const cards_1 = require("./cards");
const _ = __importStar(require("lodash"));
exports.createCarouselWithData = (cardFormat, dataList, header) => {
    const items = [];
    for (const data of dataList) {
        const card = _.cloneDeep(cardFormat);
        card.insertData(data);
        items.push(card);
    }
    return new cards_1.Carousel(items, header);
};
exports.createCardWithData = (card, data, header) => {
    if (Array.isArray(data)) {
        return exports.createCarouselWithData(card, data, header);
    }
    else {
        card.insertData(data);
        return card;
    }
};
