"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotRequest = void 0;
class ChatbotRequest {
    constructor(requestBody) {
        this.requestBody = {};
        this.requestBody = requestBody;
    }
    get bot() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.requestBody) === null || _a === void 0 ? void 0 : _a.bot;
    }
    get botId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.bot) === null || _a === void 0 ? void 0 : _a.id;
    }
    get userRequest() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.requestBody) === null || _a === void 0 ? void 0 : _a.userRequest;
    }
    get callbackUrl() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.userRequest) === null || _a === void 0 ? void 0 : _a.callbackUrl;
    }
    get utterance() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.userRequest) === null || _a === void 0 ? void 0 : _a.utterance;
    }
    get intent() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.requestBody) === null || _a === void 0 ? void 0 : _a.intent;
    }
    get action() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.requestBody) === null || _a === void 0 ? void 0 : _a.action;
    }
    get params() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.action) === null || _a === void 0 ? void 0 : _a.params;
    }
    getParamByKey(key) {
        return this.params[key];
    }
    get skillIntentCode() {
        return this.getParamByKey('skillIntentCode');
    }
    get clientExtra() {
        return this.action.clientExtra;
    }
    getClientExtraDataByKey(key) {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.clientExtra) === null || _a === void 0 ? void 0 : _a.data[key];
    }
    get contexts() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.requestBody) === null || _a === void 0 ? void 0 : _a.contexts;
    }
    get block() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.userRequest) === null || _a === void 0 ? void 0 : _a.block;
    }
    get blockId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.block) === null || _a === void 0 ? void 0 : _a.id;
    }
    get blockName() {
        return this === null || this === void 0 ? void 0 : this.block.name;
    }
    /*
      User Info
    */
    get user() {
        return this === null || this === void 0 ? void 0 : this.userRequest.user;
    }
    get userProperties() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.user) === null || _a === void 0 ? void 0 : _a.properties;
    }
    get botUserKey() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.userProperties) === null || _a === void 0 ? void 0 : _a.botUserKey;
    }
    get isFriend() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.userProperties) === null || _a === void 0 ? void 0 : _a.isFriend;
    }
    get accountId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.userProperties) === null || _a === void 0 ? void 0 : _a.accountId;
    }
    get plusfriendUserKey() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.userProperties) === null || _a === void 0 ? void 0 : _a.plusfriendUserKey;
    }
    get talkUserId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.userProperties) === null || _a === void 0 ? void 0 : _a.talkUserId;
    }
    get appUserId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.userProperties) === null || _a === void 0 ? void 0 : _a.appUserId;
    }
}
exports.ChatbotRequest = ChatbotRequest;
