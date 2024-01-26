import { useEffect, useContext } from 'react';
import './main.scss';
import { Icons, Board } from '..';
import { AppContext } from '@/store/index';
import { IBoardItem } from '@/types/index';
import { calcCardCount } from '@/utils/index';
import JSONDate from 'db.json';

export const Main = () => {
  const state = useContext(AppContext);

  useEffect(() => {
    // fetch('http://localhost:8000/boardItem')
    //   .then((res) => res.json())
    //   .then((data) => state.getItems(data))
    //   .catch((err) => console.error(err));

    // TODO: Vaqtinchalik vercel da server bilan olishda muammo bo'layotganligi tufayli xozircha JSON date dan ma'lumotlar olinib turiladi.
    state.getItems(JSONDate.boardItem);
  }, []);

  return (
    <main className="hero">
      <div className="hero__heading-box">
        <h2 className="hero__heading">Заявки</h2>
        <div className="hero__dot">
          <Icons.Dot />
        </div>
        <span className="hero__all-count">{calcCardCount(state.boardItems)}</span>
      </div>
      <ul className="board-list">
        {state.boardItems.map((item: IBoardItem, index) => (
          <Board data={item} key={item.id} index={index} />
        ))}
      </ul>
    </main>
  );
};
