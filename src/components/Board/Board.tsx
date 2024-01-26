import './board.scss';
import { Icons } from '../UI';
import { Card, EmptyCard } from '..';
import { IBoardItem, IDragEvents } from '../../types/main';
import { useScrollFixed } from '../../hooks';

interface Props extends IDragEvents {
  data: IBoardItem;
  parentIndex: number;
}

export const Board = ({ data, handleDragEnd, handleDragEnter, handleDragStart }: Props) => {
  const scroll = useScrollFixed(70);

  return (
    <li className="board">
      <div className={`board__box ${scroll ? 'fixed' : ''}`}>
        <div className="board__inner-box">
          <h3 className="board__heading">{data.title}</h3>
          <div className="board__dot">
            <Icons.Dot />
          </div>
          <span className="board__count">{data.cards.length}</span>
        </div>
      </div>
      <div className={scroll ? 'fixed-height' : ''} />
      <ul>
        {data.cards.length ? (
          data.cards.map((item) => (
            <Card
              data={item}
              key={item.id}
              handleDragStart={handleDragStart}
              handleDragEnd={handleDragEnd}
              handleDragEnter={handleDragEnter}
            />
          ))
        ) : (
          <EmptyCard />
        )}
      </ul>
    </li>
  );
};
