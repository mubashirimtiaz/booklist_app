import React, { useContext } from "react";
import Book from "../book/Book";
import NewBookForm from "../newBookForm/NewBookForm";
import { BookContext } from "../../context/BookContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  return (
    <div>
      <ul>
        {books.length ? (
          books.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
              id={book.id}
            />
          ))
        ) : (
          <h3>There is no book to read</h3>
        )}
      </ul>
      <NewBookForm />
    </div>
  );
};
export default BookList;
