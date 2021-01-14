import { QuickReply } from './directions';
export interface ContextValue {
    name: string;
    lifeSpan: number;
    params: Record<string, any>;
}
export interface Context {
    values: ContextValue[];
}
export declare class Component {
    fields: {};
    type: string;
    constructor(fields: Record<string, any>, type: string, data?: Record<string, any>);
    insertData(data: Record<string, any> | undefined): void;
    render(): {
        [x: string]: {};
    };
    toJSON(): {};
}
export declare class Template extends Component {
    constructor(outputs: Record<string, any>[], quickReplies?: QuickReply[]);
}
export declare class SkillResponse extends Component {
    constructor(template: Template, context?: Context, data?: Record<string, any>);
    render(): {};
}
export interface IThumbnail {
    imageUrl: string;
    link?: ILink;
    fixedRatio?: boolean;
    width?: number;
    height?: number;
}
export interface ILink {
    pc?: string;
    mobile?: string;
    web?: string;
}
export declare class Thumbnail extends Component {
    constructor(fields: IThumbnail, data?: Record<string, any>);
}
export declare class SimpleThumbnail extends Thumbnail {
    constructor(imageUrl: string, data?: Record<string, any>);
}
