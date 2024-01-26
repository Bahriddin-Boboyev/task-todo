import { createContext, useReducer, ReactNode } from 'react';
import { GET_ITEMS, DRAGGABLE_ITEMS } from './actions';
import { BoardType } from '../types/main';

export const initialValues = {
  boardItems: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getItems: (_value: object) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  draggableCard: (_value: { id1: string; id2: string }) => {},
};

export const AppContext = createContext(initialValues);

type State = {
  boardItems: BoardType;
  getItems: (value: object) => void;
};

type Action = {
  type: typeof GET_ITEMS | typeof DRAGGABLE_ITEMS;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, boardItems: action.payload };
    case DRAGGABLE_ITEMS:
      return { ...state, boardItems: action.payload };
    default:
      return state;
  }
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const getItems = (item: object) => {
    dispatch({
      type: GET_ITEMS,
      payload: item,
    });
  };

  const draggableCard = ({ id1, id2 }: { id1: string; id2: string }) => {
    const item1: number[] = [];
    const item2: number[] = [];

    (state.boardItems as BoardType).forEach((item, index) => {
      if (state.boardItems[index].cards[item.cards.findIndex((i) => i.id === id1)]) {
        item1.push(
          index,
          item.cards.findIndex((i) => i.id === id1),
        );
      }
      if (state.boardItems[index].cards[item.cards.findIndex((i) => i.id === id2)]) {
        item2.push(
          index,
          item.cards.findIndex((i) => i.id === id2),
        );
      }
    });

    if (state.boardItems[item1[0]]?.cards[item1[1]] && state.boardItems[item2[0]]?.cards[item2[1]]) {
      const boardItems = [...state.boardItems];
      const temp = boardItems[item1[0]].cards[item1[1]];
      boardItems[item1[0]].cards[item1[1]] = boardItems[item2[0]].cards[item2[1]];
      boardItems[item2[0]].cards[item2[1]] = temp;

      dispatch({ payload: boardItems, type: DRAGGABLE_ITEMS });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getItems,
        draggableCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
