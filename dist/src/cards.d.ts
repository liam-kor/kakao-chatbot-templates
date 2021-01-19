import { Component, Profile, Thumbnail } from './common';
import { Button } from './directions';
export interface IBasicCard {
    title?: string;
    description?: string;
    thumbnail: Thumbnail;
    buttons?: Button[];
}
export interface ICommerceCard {
    thumbnails: Thumbnail[];
    description: string;
    price: number | string;
    currency: string;
    buttons?: Button[];
    discount?: number;
    discountRate?: number;
    discountPrice?: number;
    profile?: Profile;
}
export declare class BasicCard extends Component {
    constructor(fields: IBasicCard, data?: Record<string, any>);
}
export declare class CommerceCard extends Component {
    constructor(fields: ICommerceCard, data?: Record<string, any>);
}
export interface CommerceCarouselData {
    thumbnails: Thumbnail[];
    description: string;
    price: number;
    currency: string;
    buttons?: Button[];
}
export interface BasicCarouselData {
    thumbnail: Thumbnail;
    title: string;
    description: string;
    buttons?: Button[];
}
export declare class CarouselHeader extends Component {
    constructor(title: string, description: string, thumbnail: Thumbnail, data?: Record<string, any>);
}
export declare class Carousel extends Component {
    constructor(items: CommerceCard[] | BasicCard[], header?: CarouselHeader);
}
