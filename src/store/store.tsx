import { createContext, useReducer, ReactNode } from 'react';
import { GET_ITEMS, DRAGGABLE_ITEMS } from './actions';
import { State, Action, BoardType, ICard, draggableCardValueType } from '@/types/index';

export const initialValues = {
  boardItems: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getItems: (_value: object) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  draggableCard: (_value: draggableCardValueType) => {},
};

export const AppContext = createContext(initialValues);

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

  const draggableCard = ({ itemId, index, boardIndex }: draggableCardValueType) => {
    let tempItem = {};
    const newBoardItems = state.boardItems as BoardType;
    (newBoardItems[index].cards = newBoardItems[index].cards.filter((cardItem) => {
      if (cardItem.id !== itemId) return cardItem;
      tempItem = cardItem;
      return;
    })),
      newBoardItems[boardIndex].cards.push(tempItem as ICard);
    dispatch({ payload: newBoardItems, type: DRAGGABLE_ITEMS });
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
