export interface ExtensionMessage<T = undefined> {
  type: string;
  payload?: T;
}

export interface Flag {
  id: string,
  label: string,
  value: boolean,
}

export type Flags = Record<string, Flag>;
