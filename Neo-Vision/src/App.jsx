import React from 'react';
import './App.css';
import Home from './components/Home';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';

function App() {
  return (
    <div>
      <header>
        <nav className="navigation">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Products</a>
          <a href="support.html" className="nav-link">Support</a>
        </nav>
      </header>

      <main>
        <Home />
      </main>

      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
