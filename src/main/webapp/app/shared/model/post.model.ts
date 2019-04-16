export interface IPost {
  id?: number;
  title?: string;
  content?: string;
}

export const defaultValue: Readonly<IPost> = {};
