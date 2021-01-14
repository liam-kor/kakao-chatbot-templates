"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickReply = exports.WebLinkButton = exports.Button = void 0;
const common_1 = require("./common");
class Button extends common_1.Component {
    constructor(fields, data) {
        super(fields, 'button', data);
    }
    insertData(data) {
        super.insertData(data);
        this.fields = Object.assign(Object.assign({}, this.fields), { extra: {
                data: data,
            } });
    }
}
exports.Button = Button;
class WebLinkButton extends Button {
    constructor(label, webLinkUrl, data) {
        super({
            label: label,
            action: 'webLink',
            webLinkUrl: webLinkUrl,
        }, data);
    }
}
exports.WebLinkButton = WebLinkButton;
class QuickReply extends common_1.Component {
    constructor(fields, data) {
        super(fields, 'quickReply', data);
    }
    insertData(data) {
        super.insertData(data);
        this.fields = Object.assign(Object.assign({}, this.fields), { extra: {
                data: data,
            } });
    }
}
exports.QuickReply = QuickReply;
