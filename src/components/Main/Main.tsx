import './main.scss'
import { Icons } from '../UI'

export const Main = () => {


  return (
    <main className="hero">
      <div className='hero__heading-box'>
        <h2 className="hero__heading">Заявки</h2>
        <div className="hero__dot">
          <Icons.dotIcon />
        </div>
        <span className="hero__all-count">22</span>
      </div>
    </main>

  )
}
