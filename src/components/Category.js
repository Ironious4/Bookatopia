import React, { useState, useEffect } from 'react';
import Genre from './Genre';
import Sidebar from './Sidebar';

const Category = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/genres')
      .then(response => response.json())
      .then(data => {
        console.log('fetched data',data); // Log data to check its structure
        setGenres(data.genres || []); // Use an empty array if `genres` is not found
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.mainContent}>
        <h1>Genres</h1>
        {genres && genres.length > 0 ? (
          genres.map((genre) => (
            <Genre key={genre.genre} genre={genre.genre} books={genre.books} />
          ))
        ) : (
          <p>No genres available.</p>
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
    backgroundColor: '#fde6a2',
  },
};

export default Category;
