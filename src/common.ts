import pupa from 'pupa';
import { QuickReply } from './directions';

export interface ContextValue {
  name: string;
  lifeSpan: number;
  params: Record<string, any>;
}

export interface Context {
  values: ContextValue[];
}

const replace = (fields: Record<string, any>, data: Record<string, any>) => {
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
  constructor(
    protected fields: Record<string, any>,
    public type: string,
    data?: Record<string, any> | undefined,
  ) {
    this.insertData(data);
  }

  insertData(data: Record<string, any> | undefined) {
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
  constructor(outputs: Component[], quickReplies?: QuickReply[]) {
    const renderOutputs: Record<string, any>[] = [];
    for (const output of outputs) {
      renderOutputs.push(output.render());
    }
    const fields = {
      outputs: renderOutputs,
      quickReplies: quickReplies,
    };
    super(fields, 'template');
  }
}

export class SkillResponse extends Component {
  constructor(
    template: Template,
    context?: Context,
    data?: Record<string, any>,
  ) {
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

export interface Profile {
  nickname: string;
  imageUrl?: string;
}

export class Thumbnail extends Component {
  constructor(fields: IThumbnail, data?: Record<string, any>) {
    super(fields, 'thumbnail', data);
  }
}

export class SimpleThumbnail extends Thumbnail {
  constructor(imageUrl: string, data?: Record<string, any>) {
    super(
      {
        imageUrl: imageUrl,
      },
      data,
    );
  }
}
