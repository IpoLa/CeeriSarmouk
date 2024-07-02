import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from './components/Footer/Footer';

// Importing ldrs for loading indicator
import { bouncy } from 'ldrs';
bouncy.register(); // Register the loading indicator component

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show the loading indicator
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <DarkModeProvider>
      <Router>
        {isLoading ? (
          <div style={{ backgroundColor: '#092537', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <l-bouncy size="50" speed="1.75" color="#3584e4" />
          </div>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </DarkModeProvider>
  );
};

export default App;
