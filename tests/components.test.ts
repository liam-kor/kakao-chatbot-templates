import { BasicCard } from '../src/cards';
import { Thumbnail } from '../src/common';
import { Button } from '../src/directions';
import { SimpleImage, SimpleText } from '../src/simple';

describe('Component test', () => {
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
    const imageSample = 'https://www.naver.com/test.jpg';
    const altTextSample = 'Sample Image';
    const simpleImage = new SimpleImage(imageSample, altTextSample);
    expect(simpleImage).toBeDefined();
    expect(simpleImage.render()).toStrictEqual({
      simpleImage: {
        imageUrl: imageSample,
        altText: altTextSample,
      },
    });
  });
  it('Basic card', () => {
    const imageUrlSample = 'https://naver.com/test.jpg';
    const basicCardSample = new BasicCard({
      title: 'title',
      description: 'description',
      thumbnail: new Thumbnail({
        imageUrl: imageUrlSample,
      }),
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
});
