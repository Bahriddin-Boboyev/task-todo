import { useEffect, useRef, useContext, MouseEvent } from 'react';
import {} from 'react';
import './main.scss';
import { Icons, Board } from '..';
import { AppContext } from '../../store';
import { IBoardItem } from '../../types/main';

export const Main = () => {
  const state = useContext(AppContext);

  useEffect(() => {
    fetch('http://localhost:8000/boardItem')
      .then((res) => res.json())
      .then((data) => state.getItems(data))
      .catch((err) => console.error(err));
  }, []);

  const star = useRef('');
  const end = useRef('');

  const handleDragStart = (_: MouseEvent<HTMLLIElement>, id: string) => {
    star.current = id;
  };

  const handleDragEnter = (_: MouseEvent<HTMLLIElement>, id: string) => {
    end.current = id;
  };

  const handleDragEnd = () => {
    if (end.current && star.current) {
      state.draggableCard({ id1: end.current, id2: star.current });
    }
  };

  return (
    <main className="hero">
      <div className="hero__heading-box">
        <h2 className="hero__heading">Заявки</h2>
        <div className="hero__dot">
          <Icons.Dot />
        </div>
        <span className="hero__all-count">22</span>
      </div>
      <ul className="board-list">
        {state.boardItems.map((item: IBoardItem, index) => (
          <Board
            data={item}
            parentIndex={index}
            key={item.id}
            handleDragEnd={handleDragEnd}
            handleDragEnter={handleDragEnter}
            handleDragStart={handleDragStart}
          />
        ))}
      </ul>
    </main>
  );
};
