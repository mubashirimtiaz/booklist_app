import React from "react";
import BookList from "./components/booklist/BookList";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div>
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
