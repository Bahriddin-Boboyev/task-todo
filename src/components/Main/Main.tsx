import './main.scss'
import { Icons, Board } from '..'

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
      <Board />
    </main>

  )
}
