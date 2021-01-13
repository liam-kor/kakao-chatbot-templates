import { BasicCard, CommerceCard } from './cards';
import { QuickReply } from './directions';
import { SimpleImage, SimpleText } from './simple';
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
    constructor(outputs: BasicCard[] | CommerceCard[] | SimpleText[] | SimpleImage[], quickReplies?: QuickReply[]);
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
