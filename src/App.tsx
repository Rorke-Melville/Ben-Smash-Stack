import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Burger from './components/Burger';
import Catering from './components/Catering';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Burger />
        <Catering />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
