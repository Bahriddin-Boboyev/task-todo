import './board.scss'
import { Icons } from '../UI'
import { Card, EmptyCard } from '..'
import { IBoardItem } from '../../types/main'

interface Props {
  data: IBoardItem
}

export const Board = ({ data }: Props) => {
  return (
    <div className='board'>
      <div className='board__box'>
        <div className='board__inner-box'>
          <h3 className="board__heading">{data.title}</h3>
          <div className="board__dot">
            <Icons.Dot />
          </div>
          <span className="board__count">{data.cards.length}</span>
        </div>
      </div>
      {
        data.cards.length ? data.cards.map(item => (
          < Card data={item} key={item.id} />
        ))
          : <EmptyCard />
      }
    </div>
  )
}
