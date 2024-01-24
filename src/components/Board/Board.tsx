import './board.scss'
import { Icons } from '../UI'
import { Card } from '..'

export const Board = () => {
  return (
    <div className='board'>
      <div className='board__box'>
        <div className='board__inner-box'>
          <h3 className="board__heading">Новые</h3>
          <div className="board__dot">
            <Icons.Dot />
          </div>
          <span className="board__count">4</span>
        </div>
      </div>
      <Card />
    </div>
  )
}
