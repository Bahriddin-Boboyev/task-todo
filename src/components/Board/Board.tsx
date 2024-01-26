import './board.scss';
import { Icons } from '../UI';
import { Card, EmptyCard } from '..';
import { IBoardItem } from '@/types/index';
import { useScrollFixed } from '@/hooks/index';
import { DragEvent, useContext } from 'react';
import { AppContext } from '@/store/index';

interface Props {
  data: IBoardItem;
  index: number;
}

export const Board = ({ data, index }: Props) => {
  const state = useContext(AppContext);
  const scroll = useScrollFixed(70);

  const handleOnDrop = (e: DragEvent<HTMLLIElement>) => {
    const result = JSON.parse(e.dataTransfer.getData('text'));
    state.draggableCard({ itemId: result.id, index: result.parentIndex, boardIndex: index });
  };

  return (
    <li className="board" onDrop={handleOnDrop} onDragOver={(e) => e.preventDefault()}>
      <div className={`board__box ${scroll ? 'fixed' : ''}`}>
        <div className="board__inner-box">
          <h3 className="board__heading">{data.title}</h3>
          <div className="board__dot">
            <Icons.Dot />
          </div>
          <span className="board__count">{data.cards?.length}</span>
        </div>
      </div>
      <div className={scroll ? 'fixed-height' : ''} />
      <ul>
        {data.cards?.length ? (
          data.cards.map((item) => {
            return <Card data={item} key={item.id} parentIndex={data.id - 1} />;
          })
        ) : (
          <EmptyCard />
        )}
      </ul>
    </li>
  );
};
