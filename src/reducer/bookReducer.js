import { v4 as uuid } from "uuid";
import BookList from "../components/booklist/BookList";
export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          id: uuid(),
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
