import { Component, Thumbnail } from './common';
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
}

export class BasicCard extends Component {
  constructor(fields: IBasicCard, data?: Record<string, any>) {
    super(fields, 'basicCard', data);
  }
}

export class CommerceCard extends Component {
  constructor(fields: ICommerceCard, data?: Record<string, any>) {
    super(fields, 'commerceCard', data);
  }
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

export class CarouselHeader extends Component {
  constructor(
    title: string,
    description: string,
    thumbnail: Thumbnail,
    data?: Record<string, any>,
  ) {
    const fields = {
      title: title,
      description: description,
      thumbnail: thumbnail,
    };
    super(fields, 'header', data);
  }
}

export class Carousel extends Component {
  constructor(items: CommerceCard[] | BasicCard[], header?: CarouselHeader) {
    const fields = {
      type: items[0].type,
      items: items,
      header: header,
    };
    super(fields, 'carousel');
  }
}
