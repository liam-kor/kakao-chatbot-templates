import { createCardWithData } from '../src';
import { BasicCard } from '../src/cards';
import { SkillResponse, Template, Thumbnail } from '../src/common';
import { Button, QuickReply, WebLinkButton } from '../src/directions';
import { SimpleImage, SimpleText } from '../src/simple';

describe('Component test', () => {
  const testData = {
    imageUrl: 'https://naver.com',
    title: 'title sample',
    description: 'description sample',
    price: 10000,
    order_id: 1234,
    webLinkUrl: 'https://abc.com/webLinkUrl',
  };
  const testDataList = [
    {
      title: 'title sample 1',
      description: 'description sample 1',
      imageUrl: 'https://naver.com/1',
      price: 10000,
      order_id: 1111,
      webLinkUrl: 'https://abc.com/webLinkUrl',
    },
    {
      title: 'title sample 2',
      description: 'description sample 2',
      imageUrl: 'https://naver.com/2',
      price: 20000,
      order_id: 2222,
      webLinkUrl: 'https://abc.com/webLinkUrl',
    },
  ];
  const imageUrlSample = 'https://naver.com/test.jpg';
  const dynamicImageUrlSample = '{imageUrl}';
  const thumbnailSample = new Thumbnail({
    imageUrl: imageUrlSample,
  });
  const dynamicThumbnailSample = new Thumbnail({
    imageUrl: dynamicImageUrlSample,
  });
  it('Simple Text', () => {
    const textSample = 'simple text';
    const simpleText = new SimpleText(textSample);
    expect(simpleText).toBeDefined();
    expect(simpleText.render()).toStrictEqual({
      simpleText: {
        text: textSample,
      },
    });
  });
  it('Simple Image', () => {
    const altTextSample = 'Sample Image';
    const simpleImage = new SimpleImage(imageUrlSample, altTextSample);
    expect(simpleImage).toBeDefined();
    expect(simpleImage.render()).toStrictEqual({
      simpleImage: {
        imageUrl: imageUrlSample,
        altText: altTextSample,
      },
    });
  });
  it('Basic card', () => {
    const basicCardSample = new BasicCard({
      title: 'title',
      description: 'description',
      thumbnail: thumbnailSample,
      buttons: [
        new Button({
          label: 'label',
          action: 'message',
        }),
      ],
    });
    expect(basicCardSample).toBeDefined();
    console.log(JSON.stringify(basicCardSample.render(), null, 2));
  });
  it.todo('Commerce card');
  it.todo('Carousel created by BasicCard');
  it.todo('Carousel created by CommerceCard');
  it.todo('Cards with buttons');
  it('Create BasicCard with Data', () => {
    const basicCardFormat = new BasicCard({
      title: '{title}',
      description: '{description}',
      thumbnail: dynamicThumbnailSample,
      buttons: [new WebLinkButton('label', '{webLinkUrl}')],
    });
    console.log(
      JSON.stringify(
        createCardWithData(basicCardFormat, testData).render(),
        null,
        2,
      ),
    );
  });
  it('Create Carousel with Data', () => {
    const basicCardFormat = new BasicCard({
      title: '{title}',
      description: '{description}',
      thumbnail: dynamicThumbnailSample,
      buttons: [new WebLinkButton('label', '{webLinkUrl}')],
    });
    console.log(
      JSON.stringify(
        createCardWithData(basicCardFormat, testDataList).render(),
        null,
        2,
      ),
    );
  });
  it('Create Skill Response', () => {
    const basicCardFormat = new BasicCard({
      title: '{title}',
      description: '{description}',
      thumbnail: dynamicThumbnailSample,
      buttons: [new WebLinkButton('label', '{webLinkUrl}')],
    });
    const carousel = createCardWithData(basicCardFormat, testDataList);
    console.log(
      JSON.stringify(
        new SkillResponse(
          new Template(
            [carousel],
            [
              new QuickReply({
                label: 'label',
                action: 'message',
                messageText: 'messageText',
              }),
            ],
          ),
        ),
        null,
        2,
      ),
    );
  });
});
