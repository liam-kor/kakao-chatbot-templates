"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleImage = exports.SimpleText = void 0;
const common_1 = require("./common");
class SimpleText extends common_1.Component {
    constructor(text, data) {
        const fields = {
            text: text,
        };
        super(fields, 'simpleText', data);
    }
}
exports.SimpleText = SimpleText;
class SimpleImage extends common_1.Component {
    constructor(imageUrl, altText, data) {
        const fields = {
            imageUrl: imageUrl,
            altText: altText,
        };
        super(fields, 'simpleImage', data);
    }
}
exports.SimpleImage = SimpleImage;
