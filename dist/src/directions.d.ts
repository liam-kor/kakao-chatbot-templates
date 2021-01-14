import { Component } from './common';
declare type ButtonAction = 'webLink' | 'message' | 'phone' | 'block';
declare type QuickReplyAction = 'message' | 'block';
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
    extra?: any;
}
export declare class Button extends Component {
    constructor(fields: IButton, data?: Record<string, any>);
    insertData(data: any): void;
}
export declare class WebLinkButton extends Button {
    constructor(label: string, webLinkUrl: string, data?: Record<string, any>);
}
export declare class QuickReply extends Component {
    constructor(fields: IQuickReply, data?: Record<string, any>);
    insertData(data: any): void;
}
export {};
