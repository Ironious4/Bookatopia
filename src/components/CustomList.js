import React, { useState } from 'react';

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

    fetch(`http://localhost:8000/users/${user.id}`, {
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

    fetch(`http://localhost:8000/users/${user.id}`, {
      ...user,
      customLists: updatedLists
    })
      .then(response => console.log('User updated:', response.data))
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div style={styles.container}>
      <h4 style={styles.title}>{user.name}'s Custom Lists</h4>
      {customLists.map(list => (
        <div key={list.id} style={styles.listContainer}>
          <h5 style={styles.listTitle}>{list.name}</h5>
          <ul style={styles.bookList}>
            {list.books.map(bookId => {
              const book = books.find(b => b.id === bookId);
              return (
                <li key={bookId} style={styles.bookItem}>
                  {book ? book.title : 'Book not found'}
                  <button
                    style={styles.removeButton}
                    onClick={() => removeBookFromList(list.id, bookId)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <select
            style={styles.select}
            onChange={(e) => addBookToList(list.id, parseInt(e.target.value))}
          >
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

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  listContainer: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#fff',
  },
  listTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#555',
  },
  bookList: {
    listStyleType: 'none',
    paddingLeft: '0',
    marginBottom: '10px',
  },
  bookItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    padding: '5px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
  },
  removeButton: {
    padding: '4px 8px',
    fontSize: '14px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    width: '100%',
    marginTop: '10px',
  },
};

export default CustomList;






