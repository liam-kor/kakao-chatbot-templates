import { Component } from './common';

export class SimpleText extends Component {
  constructor(text: string) {
    const fields = {
      text: text,
    };
    super(fields, 'simpleText');
  }
}

export class SimpleImage extends Component {
  constructor(imageUrl: string, altText: string) {
    const fields = {
      imageUrl: imageUrl,
      altText: altText,
    };
    super(fields, 'simpleImage');
  }
}
