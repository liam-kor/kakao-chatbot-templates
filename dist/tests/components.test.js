"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cards_1 = require("../src/cards");
const common_1 = require("../src/common");
const directions_1 = require("../src/directions");
const simple_1 = require("../src/simple");
describe('Component test', () => {
    it('Simple Text', () => {
        const textSample = 'simple text';
        const simpleText = new simple_1.SimpleText(textSample);
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
        const simpleImage = new simple_1.SimpleImage(imageSample, altTextSample);
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
        const basicCardSample = new cards_1.BasicCard({
            title: 'title',
            description: 'description',
            thumbnail: new common_1.Thumbnail({
                imageUrl: imageUrlSample,
            }),
            buttons: [
                new directions_1.Button({
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
