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

export class Button extends Component {
  constructor(fields: IButton, data?: Record<string, any>) {
    super(fields, 'button', data);
  }

  insertData(data: any) {
    super.insertData(data);
    this.fields = {
      ...this.fields,
      extra: {
        ...this.fields?.extra,
        data: {
          ...data,
        },
      },
    };
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

export class QuickReply extends Component {
  constructor(fields: IQuickReply, data?: Record<string, any>) {
    super(fields, 'quickReply', data);
  }

  insertData(data: any) {
    super.insertData(data);
    this.fields = {
      ...this.fields,
      extra: {
        ...this.fields?.extra,
        data: {
          ...data,
        },
      },
    };
  }
}
