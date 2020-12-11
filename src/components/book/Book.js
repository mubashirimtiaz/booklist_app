import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
const Book = (props) => {
  const { dispatch } = useContext(BookContext);
  console.log(props);
  const handleClick = (e) => {
    dispatch({ type: "REMOVE_BOOK", payload: props.id });
  };
  return (
    <li onClick={handleClick}>
      <span>{props.title}</span> {"-----"} <span>{props.author}</span>
    </li>
  );
};

export default Book;
