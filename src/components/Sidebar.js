import React from 'react';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>booktopia</div>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>Discover</li>
        <li>Shelf</li>
        <li>Quest</li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    height: '155vh',
    backgroundColor: '#f7b733',
    padding: '20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '60px',
    fontFamily: '"Roboto", sans-serif',
  },
  menu: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '60px'
  },
  menuItem: {
    fontSize: '50px',
    marginBottom: '15px',
    cursor: 'pointer',
  },
};

export default Sidebar;
