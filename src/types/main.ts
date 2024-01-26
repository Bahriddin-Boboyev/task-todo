import { DRAGGABLE_ITEMS, GET_ITEMS } from '../store';

export interface ICard {
  id: string,
  name: string,
  description: string,
  tag: string,
  userCount: number,
  fileCount: number,
  userName: string,
  avatar: string,
}

export interface IBoardItem {
  id: number,
  title: string,
  cards: ICard[],
}

export type BoardType = IBoardItem[]

// store types
export type State = {
  boardItems: BoardType;
  getItems: (value: object) => void;
};

export type Action = {
  type: typeof GET_ITEMS | typeof DRAGGABLE_ITEMS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export type draggableCardValueType = {
  itemId: string;
  index: number;
  boardIndex: number;
};