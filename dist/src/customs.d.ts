import { BasicCard, Carousel, CarouselHeader, CommerceCard } from './cards';
export declare const createCarouselWithData: (cardFormat: CommerceCard | BasicCard, dataList: Record<string, any>[], header?: CarouselHeader | undefined) => Carousel;
export declare const createCardWithData: (card: CommerceCard | BasicCard, data: Record<string, any> | Record<string, any>[], header?: CarouselHeader | undefined) => Carousel | BasicCard | CommerceCard;
