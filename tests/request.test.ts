import { ChatbotRequest } from '../src/request';

const chatbotRequestJSONSample = `
{
  "bot": {
    "id": "5ae9b76d7409b11ec845b746!",
    "name": "루루챗봇개발2"
  },
  "intent": {
    "id": "5d300e788192ac000132b8a4",
    "name": "폴백 블록",
    "extra": {
      "reason": {
        "code": 1,
        "message": "OK"
      }
    }
  },
  "action": {
    "id": "5ffe572d7292584dbda1dc64",
    "name": "기본 스킬",
    "params": {
      "skillIntentCode": "testIntent"
    },
    "detailParams": {
      "intent_code": {
        "groupName": "",
        "origin": "test_intent",
        "value": "test_intent"
      }
    },
    "clientExtra": {}
  },
  "userRequest": {
    "block": {
      "id": "5d300e788192ac000132b8a4",
      "name": "폴백 블록"
    },
    "user": {
      "id": "226f81aef15e8f5890425bbeaa5978d54dfc98fadcaa076ed1f635eda11204ba30",
      "type": "botUserKey",
      "properties": {
        "botUserKey": "226f81aef15e8f5890425bbeaa5978d54dfc98fadcaa076ed1f635eda11204ba30",
        "isFriend": true,
        "accountId": "6689190",
        "plusfriendUserKey": "T8x9DhjAiBrv",
        "appUserId": "1234567",
        "talkUserId": "2374607",
        "bot_user_key": "226f81aef15e8f5890425bbeaa5978d54dfc98fadcaa076ed1f635eda11204ba30",
        "plusfriend_user_key": "T8x9DhjAiBrv"
      }
    },
    "utterance": "aaa",
    "params": {
      "surface": "Kakaotalk.plusfriend"
    },
    "callbackUrl": "https://bot-api.kakao.com/v1/bots/5ae9b76d7409b11ec845b746!/callback/-damddEwVMRHufi6uUr63Ir7veOUGTFaiVhcOWTOhijyBuCT-v4vu6V32YmyF8ZNqI8K7kn_tKY0",
    "lang": "ko",
    "timezone": "Asia/Seoul"
  },
  "contexts": []
}`;

const chatbotRequestSample = JSON.parse(chatbotRequestJSONSample);

describe('Chatbot request', () => {
  const chatbotRequest = new ChatbotRequest(chatbotRequestSample);
  describe('Bot Info', () => {
    it('get Bot Id', () => {
      expect(chatbotRequest.botId).toBe(chatbotRequestSample.bot.id);
    });
  });
  describe('Action Info', () => {
    it('get skillIntentCode', () => {
      expect(chatbotRequest.skillIntentCode).toBe(
        chatbotRequestSample.action.params.skillIntentCode,
      );
    });
  });
  describe('User Request Info', () => {
    it('get block id', () => {
      expect(chatbotRequest.blockId).toBe(
        chatbotRequestSample.userRequest.block.id,
      );
    });
    it('get plusfriendUserKey', () => {
      expect(chatbotRequest.plusfriendUserKey).toBe(
        chatbotRequestSample.userRequest.user.properties.plusfriendUserKey,
      );
    });
    it('get appUserId', () => {
      expect(chatbotRequest.appUserId).toBe(
        chatbotRequestSample.userRequest.user.properties.appUserId,
      );
    });

    it('get callbackUrl', () => {
      expect(chatbotRequest.callbackUrl).toBe(
        chatbotRequestSample.userRequest.callbackUrl,
      );
    });
  });
});
