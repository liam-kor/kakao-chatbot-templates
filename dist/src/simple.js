"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleImage = exports.SimpleText = void 0;
const common_1 = require("./common");
class SimpleText extends common_1.Component {
    constructor(text) {
        const fields = {
            text: text,
        };
        super(fields, 'simpleText');
    }
}
exports.SimpleText = SimpleText;
class SimpleImage extends common_1.Component {
    constructor(imageUrl, altText) {
        const fields = {
            imageUrl: imageUrl,
            altText: altText,
        };
        super(fields, 'simpleImage');
    }
}
exports.SimpleImage = SimpleImage;
