import pupa from 'pupa';
import { QuickReply } from './directions';

const replace = (fields: any, data: any) => {
  for (const [key, value] of Object.entries(fields)) {
    if (typeof value === 'string') {
      fields = Object.assign(fields, {
        [key]: pupa(value, data),
      });
    } else if (value instanceof Component) {
      value.insertData(data);
    } else if (value instanceof Array) {
      for (const obj of value) {
        if (obj instanceof Component) {
          obj.insertData(data);
        }
      }
    }
  }
  return fields;
};

export class Component {
  fields = {};
  type = '';

  constructor(fields: any, type: string, data?: any) {
    this.fields = fields;
    this.type = type;
    this.insertData(data);
  }

  insertData(data: any) {
    if (data && Object.entries(data).length > 0) {
      this.fields = replace(this.fields, data);
    }
  }

  render() {
    return {
      [this.type]: {
        ...this.fields,
      },
    };
  }

  toJSON() {
    return this.fields;
  }
}

export class Template extends Component {
  constructor(outputs: any[], quickReplies?: QuickReply[]) {
    const fields = {
      outputs: outputs,
      quickReplies: quickReplies,
    };
    super(fields, 'template');
  }
}

export class SkillResponse extends Component {
  constructor(template: Template, context?: any, data?: any) {
    const fields = {
      version: '2.0',
      template: template,
      context: context,
      data: data,
    };
    super(fields, 'skillResponse');
  }

  render() {
    return {
      ...this.fields,
    };
  }
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

export class Thumbnail extends Component {
  constructor(fields: IThumbnail, data?: any) {
    super(fields, 'thumbnail', data);
  }
}
