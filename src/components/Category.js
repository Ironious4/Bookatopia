import React, { useState, useEffect } from 'react';
import Genre from './Genre';

const Category = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://potterapi-fedeperin.vercel.app/en/books');
        const data = await response.json();
        
        
        const groupedBooks = data.reduce((acc, book) => {
          const genre = book.genre || 'Unknown'; 
          if (!acc[genre]) {
            acc[genre] = [];
          }
          acc[genre].push({
            title: book.title,
            author: book.author,
            image: book.cover || 'https://via.placeholder.com/150', 
          });
          return acc;
        }, {});

        
        const genreArray = Object.keys(groupedBooks).map((genre) => ({
          genre,
          books: groupedBooks[genre],
        }));

        setGenres(genreArray);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h1>Genres</h1>
        {genres.length > 0 ? (
          genres.map((genre) => (
            <Genre key={genre.genre} genre={genre.genre} books={genre.books} />
          ))
        ) : (
          <p>Loading books...</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: 'white',
  },
};

export default Category;