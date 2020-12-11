import React, { useState, useContext } from "react";
import { BookContext } from "../../context/BookContext";
const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", payload: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title:</label>
      <input
        type="text"
        value={title}
        name="title"
        onChange={handleTitleChange}
      />
      <label htmlFor="author">author:</label>
      <input
        type="text"
        value={author}
        name="auhtor"
        onChange={handleAuthorChange}
      />
      <input type="submit" />
    </form>
  );
};
export default NewBookForm;
