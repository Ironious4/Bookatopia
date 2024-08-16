import React, { useState } from 'react';
import Discover from './Discover';
import shelf from './shelf';

function App() {
  const [bookCollection, setBookCollection] = useState([]);
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);


  const addBookToCollection = (newBook) => {
    setBookCollection([...bookCollection, newBook]);
  };

  const removeBookFromCollection = (bookId) => {
    const updatedCollection = bookCollection.filter(book => book.id !== bookId);
    setBookCollection(updatedCollection);
  };

  return (
    <div className="App">
      <h1>Bookatopia</h1>
      <Discover
        addBookToCollection={addBookToCollection} 
       removeBookFromCollection={removeBookFromCollection} 
      />
    </div>
  );
}

export default App;
