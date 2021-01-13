"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carousel = exports.CarouselHeader = exports.CommerceCard = exports.BasicCard = void 0;
const common_1 = require("./common");
class BasicCard extends common_1.Component {
    constructor(fields, data) {
        super(fields, 'basicCard', data);
    }
}
exports.BasicCard = BasicCard;
class CommerceCard extends common_1.Component {
    constructor(fields, data) {
        super(fields, 'commerceCard', data);
    }
}
exports.CommerceCard = CommerceCard;
class CarouselHeader extends common_1.Component {
    constructor(title, description, thumbnail, data) {
        const fields = {
            title: title,
            description: description,
            thumbnail: thumbnail,
        };
        super(fields, 'header', data);
    }
}
exports.CarouselHeader = CarouselHeader;
class Carousel extends common_1.Component {
    constructor(items, header) {
        const fields = {
            type: items[0].type,
            items: items,
            header: header,
        };
        super(fields, 'carousel');
    }
}
exports.Carousel = Carousel;
