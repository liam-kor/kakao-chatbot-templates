import { Component } from './common';

type ButtonAction = 'webLink' | 'message' | 'phone' | 'block';
type QuickReplyAction = 'message' | 'block';

export interface IButton {
  label: string;
  action: ButtonAction;
  webLinkUrl?: string;
  messageText?: string;
  phoneNumber?: string;
  blockId?: string;
  extra?: any;
}

export interface IQuickReply {
  label: string;
  action: QuickReplyAction;
  messageText?: string;
  blockId?: string;
  extra?: Record<string, any>;
}

class Direction extends Component {
  constructor(
    fields: IButton | IQuickReply,
    type: 'button' | 'quickReply',
    data?: Record<string, any> | undefined,
  ) {
    if (fields?.extra?.data) {
      throw new Error(
        'Can not use the field in extra : "data", this field is reserved. Plz read Basic card section in README.',
      );
    }
    super(fields, type, data);
  }
  insertData(data: Record<string, any>) {
    super.insertData(data);
    this.fields = {
      ...this.fields,
      extra: {
        ...this.fields?.extra,
        createdAt: new Date(),
        data: {
          ...data,
        },
      },
    };
  }
}

export class Button extends Direction {
  constructor(fields: IButton, data?: Record<string, any>) {
    super(fields, 'button', data);
  }
}

export class WebLinkButton extends Button {
  constructor(label: string, webLinkUrl: string, data?: Record<string, any>) {
    super(
      {
        label: label,
        action: 'webLink',
        webLinkUrl: webLinkUrl,
      },
      data,
    );
  }
}

export class QuickReply extends Direction {
  constructor(fields: IQuickReply, data?: Record<string, any>) {
    super(fields, 'quickReply', data);
  }
}
