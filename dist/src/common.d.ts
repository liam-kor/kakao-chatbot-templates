import { QuickReply } from './directions';
export declare class Component {
    fields: {};
    type: string;
    constructor(fields: any, type: string, data?: any);
    insertData(data: any): void;
    render(): {
        [x: string]: {};
    };
    toJSON(): {};
}
export declare class Template extends Component {
    constructor(outputs: any[], quickReplies?: QuickReply[]);
}
export declare class SkillResponse extends Component {
    constructor(template: Template, context?: any, data?: any);
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
    constructor(fields: IThumbnail, data?: any);
}
