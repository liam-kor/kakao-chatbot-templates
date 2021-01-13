import { Component } from './common';

export class SimpleText extends Component {
  constructor(text: string, data?: Record<string, any>) {
    const fields = {
      text: text,
    };
    super(fields, 'simpleText', data);
  }
}

export class SimpleImage extends Component {
  constructor(imageUrl: string, altText: string, data?: Record<string, any>) {
    const fields = {
      imageUrl: imageUrl,
      altText: altText,
    };
    super(fields, 'simpleImage', data);
  }
}
