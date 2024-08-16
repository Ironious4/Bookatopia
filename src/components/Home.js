import React, { useState, useEffect } from 'react';
import './Home.css'; 

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://potterapi-fedeperin.vercel.app/en/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="home">
      <h1>Harry Potter Books</h1>
      <div className="book-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <img src={book.imageUrl} alt={book.title} className="book-cover" />
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
