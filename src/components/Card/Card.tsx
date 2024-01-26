// import { useRef } from 'react';
import { Icons } from '..';
import { ICard } from '../../types';
import './card.scss';

interface Props {
  data: ICard;
  parentIndex: number;
}

export const Card = ({ data, parentIndex }: Props) => {
  return (
    <li
      id={data.id}
      className="card"
      draggable
      onDragStart={(e) => e.dataTransfer.setData('text', JSON.stringify({ id: data.id, parentIndex }))}
    >
      <div className="card__title-box">
        <h4 className="card__title">{data.name}</h4>
        <button>
          <Icons.More />
        </button>
      </div>
      <p className="card__descriptions">{data.description}</p>
      <div className="card__sub-box">
        <span className="card__chip">{data.tag}</span>
        <div className="card__icon-box">
          <Icons.User /> <span>{data.userCount}</span>
        </div>
        <div className="card__icon-box">
          <Icons.File /> <span>{data.fileCount}</span>
        </div>
      </div>
      <div className="card__avatar-box">
        <div className="img-box">
          <img src={data.avatar} alt="avatar-1" />
        </div>
        <div className="desc-box">
          <span>Рекруитер</span>
          <h4>{data.userName}</h4>
        </div>
      </div>
    </li>
  );
};
