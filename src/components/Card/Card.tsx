import { Icons } from '..'
import './card.scss'

export const Card = () => {
  return (
    <div className='card'>
      <div className='card__title-box'> <h4 className='card__title'>UI/UX дизайнер</h4> <button><Icons.More /></button></div>
      <p className='card__descriptions'>Отдел разработки мобильного приложения</p>
      <div className='card__sub-box'>
        <span className='card__chip'>В приоритете</span>
        <div className='card__icon-box'>
          <Icons.User /> <span>3</span>
        </div>
        <div className='card__icon-box'>
          <Icons.File /> <span>255</span>
        </div>
      </div>
      <div className='card__avatar-box'>
        <div className='img-box'>
          <img src="img/avatar-1.png" alt="avatar-1" />
        </div>
        <div className='desc-box'>
          <span>Рекруитер</span>
          <h4>Алексей Щербаков</h4>
        </div>
      </div>
    </div>
  )
}
