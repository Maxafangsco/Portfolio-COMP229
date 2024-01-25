/*
File Name: App.js
Student's Name: Agwo Tekeh Maxmillian Afanga
Student ID: [301325202]
*/

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';

/**
 * Main application component defining routes.
 * @returns {JSX.Element} App component.
 */
const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Route for home page */}
        <Route path='/' element={<Home />} />
        {/* Route for about page */}
        <Route path='/about' element={<About />} />
        {/* Route for contact page */}
        <Route path='/contact' element={<Contact />} />
        {/* Route for projects page */}
        <Route path='/project' element={<Projects />} />
        {/* Route for services page */}
        <Route path='/services' element={<Services />} />
      </Routes>
    </Layout>
  );
}

export default App;
