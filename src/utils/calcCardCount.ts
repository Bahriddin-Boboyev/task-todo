import { BoardType } from "../types";

export const calcCardCount = (item: BoardType) => {
  return item.reduce((item, currentItem,) => {
    return item + currentItem.cards.length
  }, 0)

}
