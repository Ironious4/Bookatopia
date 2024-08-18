import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Discover from './Discover';
import Category from './Category';
import CustomList from './CustomList';
import Quest from './Quest';
import "./Home.css"

const Home = () => {
  const user = {
    id: 1,
    name: 'Your ',
    customLists: [
      { id: 1, name: 'Favorites', books: [1, 2] },
      { id: 2, name: 'To Read', books: [3, 4] },
    ],
  };

  const books = [
    { id: 1, title: 'The Catcher in the Rye' },
    { id: 2, title: 'To Kill a Mockingbird' },
    { id: 3, title: '1984' },
    { id: 4, title: 'The Great Gatsby' },
  ];

  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <Link to="/Discover" style={styles.link}>Discover</Link>
            </li>
            <li style={styles.li}>
              <Link to="/Category" style={styles.link}>Category</Link>
            </li>
            <li style={styles.li}>
              <Link to="/CustomList" style={styles.link}>Shelf</Link>
            </li>
            <li style={styles.li}>
              <Link to="/Quest" style={styles.link}>Quest</Link>
            </li>
          </ul>
        </nav>

        <div style={styles.content}>
          <Routes>
            <Route path="/Discover" element={<Discover />} />
            <Route path="/Category" element={<Category />} />
            <Route
              path="/CustomList"
              element={<CustomList user={user} books={books} />}
            />
            <Route path="/Quest" element={<Quest />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  nav: {
    width: '20%',
    backgroundColor: '#f0f0f0',
    padding: '10px',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
  li: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  content: {
    width: '80%',
    padding: '20px',
  },
};

export default Home;
