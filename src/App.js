import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Routes from react-router-dom
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from './components/Footer/Footer';
import AdminNavbar from './components/AdminNavbar'; // Import AdminNavbar component
import AdminSidebar from './components/AdminSidebar'; // Import AdminSidebar component
import { bouncy } from 'ldrs';
import Certificates from './pages/AdminCertificates';
import Slides from './pages/AdminSlides';
import Faqs from './pages/AdminFAQs';
import Gallery from './pages/Gallery';
import ProjectDetail from './pages/ProjectDetails';
bouncy.register();

export default function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
            {/* Conditional rendering of Navbar and AdminSidebar based on route */}
            <Routes>
              <Route element={<Navbar />} /> {/* Use a Route for Navbar */}
              <Route path="/admin/*">
                {({ location }) => {
                  console.log('Current path:', location.pathname); // Log the current path
                  return (
                    <>
                      <AdminNavbar />
                      <AdminSidebar />
                    </>
                  );
                }}
              </Route>
              <Route path="/admin/certificates" element={<Certificates />} />
              <Route path="/admin/slides" element={<Slides />} />
              <Route path="/admin/faqs" element={<Faqs />} />
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project-details/:id" element={<ProjectDetail />} />
            </Routes>
            
          </>
        )}
      </Router>
    </DarkModeProvider>
  );
};
