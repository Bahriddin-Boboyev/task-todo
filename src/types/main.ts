import { MouseEvent } from 'react';

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

export interface IDragEvents {
  handleDragEnter: (e: MouseEvent<HTMLLIElement>, id: string) => void;
  handleDragStart: (e: MouseEvent<HTMLLIElement>, id: string) => void;
  handleDragEnd: (e: MouseEvent<HTMLLIElement>, id: string) => void;
}