import React from 'react';
import Discover from './Discover';
import Quest from './components/Quest;
import Home from './components/Home;

function App() {
 return (
    <div className="App">
      <h1>Welcome to Bookatopia</h1>
      <Discover/>
      <Home/>
      <Quest/>
    </div>
  );
}

export default App;
