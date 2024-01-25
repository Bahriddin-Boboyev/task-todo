export interface ICard {
  id: number,
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