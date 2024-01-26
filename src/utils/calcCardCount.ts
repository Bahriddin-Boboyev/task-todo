import { BoardType } from "../types/main";

export const calcCardCount = (item: BoardType) => {
  return item.reduce((item, currentItem,) => {
    return item + currentItem.cards.length
  }, 0)

}
