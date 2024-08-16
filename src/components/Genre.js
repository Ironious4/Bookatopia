import React from 'react';
import BookCard from './BookCard';

const Genre = ({ genre, books }) => {
  return (
    <div style={styles.genre}>
      <h2 style={styles.genreTitle}>{genre}</h2>
      <div style={styles.bookList}>
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.title} title={book.title} author={book.author} image={book.image} />
          ))
        ) : (
          <p>No books have been downloaded.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  genre: {
    marginBottom: '30px',
    borderStyle: 'ridge',
    borderRadius: '20px',
  },
  genreTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  bookList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
};

export default Genre;
