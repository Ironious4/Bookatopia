<<<<<<< HEAD
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
=======
import React from 'react';
import Category from './components/Category';

>>>>>>> e61f6f10f51ebac0a394c539a0dba3dd1948fcb7

function App() {
  return (
    <div className="App" >
      <Category/> 
    </div>
  );
}

export default App;
