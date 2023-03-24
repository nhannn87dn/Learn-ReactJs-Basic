import React, { Fragment } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Layout from './layouts/Layout';
import NoPage from './pages/NoPage';
import ParameterPage from './pages/ParameterPage';
import QueryPage from './pages/QueryPage';
import Popular from './pages/Popular';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route  index element={<HomePage />} />
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/contact'  element={<ContactPage />} />
                  <Route path='/popular'  element={<Popular />} />
                  <Route path='/parameter/:id/:name/:email' element={<ParameterPage />} />
                  <Route path='/search' element={<QueryPage />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
