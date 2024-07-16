import React from 'react';
import Header from './components/Header'; // Adjust the path as necessary
import Footer from './components/Footer';
import Home from './Home'; // Assuming Home.jsx is located in src/pages

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
