import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <>
        <Navbar />
        
        <Contact />
      </>
    </ThemeProvider>
  );
};

export default App;
