import React, { useState } from 'react';
import axios from 'axios';

function CustomList({ user, books }) {
  const [customLists, setCustomLists] = useState(user.customLists || []);

  const addBookToList = (listId, bookId) => {
    const updatedLists = customLists.map(list => {
      if (list.id === listId) {
        return { ...list, books: [...list.books, bookId] };
      }
      return list;
    });
    setCustomLists(updatedLists);

   
    axios.put(`http://localhost:3001/users/${user.id}`, {
      ...user,
      customLists: updatedLists
    })
    .then(response => console.log('User updated:', response.data))
    .catch(error => console.error('Error updating user:', error));
  };

  const removeBookFromList = (listId, bookId) => {
    const updatedLists = customLists.map(list => {
      if (list.id === listId) {
        return { ...list, books: list.books.filter(id => id !== bookId) };
      }
      return list;
    });
    setCustomLists(updatedLists);

    
    axios.put(`http://localhost:3001/users/${user.id}`, {
      ...user,
      customLists: updatedLists
    })
    .then(response => console.log('User updated:', response.data))
    .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div>
      <h4>{user.name}'s Custom Lists</h4>
      {customLists.map(list => (
        <div key={list.id}>
          <h5>{list.name}</h5>
          <ul>
            {list.books.map(bookId => {
              const book = books.find(b => b.id === bookId);
              return (
                <li key={bookId}>
                  {book ? book.title : 'Book not found'}
                  <button onClick={() => removeBookFromList(list.id, bookId)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <select onChange={(e) => addBookToList(list.id, parseInt(e.target.value))}>
            <option value="">Select a book to add</option>
            {books.map(book => (
              <option key={book.id} value={book.id}>{book.title}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default CustomList;
