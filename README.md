## Install

```
$ yarn add kakao-chatbot-templates
```

## Usage

###### SimpleText

```js
import { SimpleText, SkillResponse, Template } from 'kakao-chatbot-templates';
const template = new Template([
  new SimpleText('Hello world!')
]);
const skillResponse = new SkillResponse(template)).render();
console.log(template);
```
```bash
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "simpleText": {
          "text": "Hello world!"
        }
      }
    ]
  }
}
```

###### SimpleImage

```js
import { SimpleImage, SkillResponse, Template } from 'kakao-chatbot-templates';
const template = new Template([
  new SimpleImage('https://www.example.com/image.jpg', 'altText'),
]);
const skillResponse = new SkillResponse(template)).render();
console.log(template);
```
```bash
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "simpleImage": {
          "imageUrl": "https://www.example.com/image.jpg",
          "altText": "altText"
        }
      }
    ]
  }
}
```

###### BasicCard

```js
import { BasicCard, SimpleThumbnail, Button, WebLinkButton, QuickReply, SkillResponse, Template } from 'kakao-chatbot-templates';
const template = new Template([
  new BasicCard(
    {
      description: '상품명 : {productName}',
      thumbnail: new SimpleThumbnail('{productImageUrl}'),
      buttons: [
        new WebLinkButton('구매하러 가기', '{productUrl}'),
        new Button({
          label: '상담원 연결',
          action: 'block',
          messageText: '상담원 연결',
          blockId: 'KakaoOpenbuilderBlockId',
        }),
      ],
    },
    {
      productName: '샘플 상품',
      productUrl: 'https://www.example.com/image.jpg',
      productImageUrl: 'https://www.example.com/image.jpg',
    },
  ),
],
[
  new QuickReply()
]);
const skillResponse = new SkillResponse(template)).render();
console.log(template);
```
```bash
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "basicCard": {
          "description": "상품명 : 샘플 상품",
          "thumbnail": {
            "imageUrl": "https://www.example.com/image.jpg"
          },
          "buttons": [
            {
              "label": "구매하러 가기",
              "action": "webLink",
              "webLinkUrl": "https://www.example.com/image.jpg",
              "extra": {
                "data": {
                  "productName": "샘플 상품",
                  "productUrl": "https://www.example.com/image.jpg",
                  "productImageUrl": "https://www.example.com/image.jpg"
                }
              }
            },
            {
              "label": "상담원 연결",
              "action": "block",
              "messageText": "상담원 연결",
              "blockId": "KakaoOpenbuilderBlockId",
              "extra": {
                "data": {
                  "productName": "샘플 상품",
                  "productUrl": "https://www.example.com/image.jpg",
                  "productImageUrl": "https://www.example.com/image.jpg"
                }
              }
            }
          ]
        }
      }
    ],
    "quickReplies": [
      {
        "label": "처음으로",
        "action": "block",
        "blockId": "KakaoOpenbuilderBlockId",
        "extra": {}
      }
    ]
  }
}
```


###### Carousel

```js
import { CarouselWithData, BasicCard, SimpleThumbnail, Button, WebLinkButton, QuickReply, SkillResponse, Template } from 'kakao-chatbot-templates';

const cardFormat = new BasicCard({
  description: '상품명 : {productName}',
  thumbnail: new SimpleThumbnail('{productImageUrl}'),
  buttons: [
    new WebLinkButton('구매하러 가기', '{productUrl}'),
    new Button({
      label: '상담원 연결',
      action: 'block',
      messageText: '상담원 연결',
      blockId: 'KakaoOpenbuilderBlockId',
    }),
  ],
});

const products = [
  {
    productName: '샘플상품1',
    productImageUrl: '샘플이미지1',
    productUrl: '샘플링크1',
  },
  {
    productName: '샘플상품2',
    productImageUrl: '샘플이미지2',
    productUrl: '샘플링크2',
  },
];

const template = new Template([new CarouselWithData(cardFormat, products)]);
const skillResponse = new SkillResponse(template)).render();
console.log(template);
```
```bash
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "carousel": {
          "type": "basicCard",
          "items": [
            {
              "description": "상품명 : 샘플상품1",
              "thumbnail": {
                "imageUrl": "샘플이미지1"
              },
              "buttons": [
                {
                  "label": "구매하러 가기",
                  "action": "webLink",
                  "webLinkUrl": "샘플링크1",
                  "extra": {
                    "data": {
                      "productName": "샘플상품1",
                      "productImageUrl": "샘플이미지1",
                      "productUrl": "샘플링크1"
                    }
                  }
                },
                {
                  "label": "상담원 연결",
                  "action": "block",
                  "messageText": "상담원 연결",
                  "blockId": "KakaoOpenbuilderBlockId",
                  "extra": {
                    "data": {
                      "productName": "샘플상품1",
                      "productImageUrl": "샘플이미지1",
                      "productUrl": "샘플링크1"
                    }
                  }
                }
              ]
            },
            {
              "description": "상품명 : 샘플상품2",
              "thumbnail": {
                "imageUrl": "샘플이미지2"
              },
              "buttons": [
                {
                  "label": "구매하러 가기",
                  "action": "webLink",
                  "webLinkUrl": "샘플링크2",
                  "extra": {
                    "data": {
                      "productName": "샘플상품2",
                      "productImageUrl": "샘플이미지2",
                      "productUrl": "샘플링크2"
                    }
                  }
                },
                {
                  "label": "상담원 연결",
                  "action": "block",
                  "messageText": "상담원 연결",
                  "blockId": "KakaoOpenbuilderBlockId",
                  "extra": {
                    "data": {
                      "productName": "샘플상품2",
                      "productImageUrl": "샘플이미지2",
                      "productUrl": "샘플링크2"
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
```