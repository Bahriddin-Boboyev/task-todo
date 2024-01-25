import './main.scss'
import { Icons, Board } from '..'
import { BoardItem } from '../../constants'

export const Main = () => {
  return (
    <main className="hero">
      <div className='hero__heading-box'>
        <h2 className="hero__heading">Заявки</h2>
        <div className="hero__dot">
          <Icons.Dot />
        </div>
        <span className="hero__all-count">22</span>
      </div>
      <ul className='board-list'>
        {
          BoardItem.map(item => (
            <Board data={item} key={item.id} />
          ))
        }
      </ul>

    </main>

  )
}
