import { Icons } from ".."
import './card.scss'

export const EmptyCard = () => {
  return (
    <div className="empty-card">
      <div className="empty-card__box">
        <Icons.EmptyCard />
        <p className="empty-card__desc">Если есть подходящие заявки, перетащите их сюда 🤓</p>
      </div>
    </div>
  )
}
