"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const cards_1 = require("../src/cards");
const common_1 = require("../src/common");
const directions_1 = require("../src/directions");
const simple_1 = require("../src/simple");
describe('Component test', () => {
    const testData = {
        imageUrl: 'https://naver.com',
        title: 'title sample',
        description: 'description sample',
        price: 10000,
        order_id: 1234,
    };
    const testDataList = [
        {
            title: 'title sample 1',
            description: 'description sample 1',
            imageUrl: 'https://naver.com/1',
            price: 10000,
            order_id: 1111,
        },
        {
            title: 'title sample 2',
            description: 'description sample 2',
            imageUrl: 'https://naver.com/2',
            price: 20000,
            order_id: 2222,
        },
    ];
    const imageUrlSample = 'https://naver.com/test.jpg';
    const dynamicImageUrlSample = '{imageUrl}';
    const thumbnailSample = new common_1.Thumbnail({
        imageUrl: imageUrlSample,
    });
    const dynamicThumbnailSample = new common_1.Thumbnail({
        imageUrl: dynamicImageUrlSample,
    });
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
        const altTextSample = 'Sample Image';
        const simpleImage = new simple_1.SimpleImage(imageUrlSample, altTextSample);
        expect(simpleImage).toBeDefined();
        expect(simpleImage.render()).toStrictEqual({
            simpleImage: {
                imageUrl: imageUrlSample,
                altText: altTextSample,
            },
        });
    });
    it('Basic card', () => {
        const basicCardSample = new cards_1.BasicCard({
            title: 'title',
            description: 'description',
            thumbnail: thumbnailSample,
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
    it('Create BasicCard with Data', () => {
        const basicCardFormat = new cards_1.BasicCard({
            title: '{title}',
            description: '{description}',
            thumbnail: dynamicThumbnailSample,
        });
        console.log(JSON.stringify(src_1.createCardWithData(basicCardFormat, testData).render(), null, 2));
    });
    it('Create Carousel with Data', () => {
        const basicCardFormat = new cards_1.BasicCard({
            title: '{title}',
            description: '{description}',
            thumbnail: dynamicThumbnailSample,
        });
        console.log(JSON.stringify(src_1.createCardWithData(basicCardFormat, testDataList).render(), null, 2));
    });
});
