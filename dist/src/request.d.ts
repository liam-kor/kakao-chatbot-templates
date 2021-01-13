export declare class ChatbotRequest {
    requestBody: Record<string, any>;
    constructor(requestBody: any);
    get bot(): any;
    get botId(): any;
    get userRequest(): any;
    get callbackUrl(): any;
    get utterance(): any;
    get intent(): any;
    get action(): any;
    get params(): any;
    getParamByKey(key: string): any;
    get skillIntentCode(): any;
    get clientExtra(): any;
    get contexts(): any;
    get block(): any;
    get blockId(): any;
    get blockName(): any;
    get user(): any;
    get userProperties(): any;
    get botUserKey(): any;
    get isFriend(): any;
    get accountId(): any;
    get plusfriendUserKey(): any;
    get talkUserId(): any;
    get appUserId(): any;
}
