import React from 'react';
import {
  BrowserRouter as Router, 
  // Switch has been replaced by Routes
  Routes, 
  Route, 
  // Navigate,
  // Redirect has been replaced by Navigate
  } from 'react-router-dom';

import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import AlertNotification from './shared/components/AlertNotification'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' caseSensitive={false} element={<LoginPage />} />
          <Route exact path='/register' caseSensitive={false} element={<RegisterPage />} />
          <Route exact path='/dashboard' caseSensitive={false} element={<Dashboard />} />
          <Route exact path='/' caseSensitive={false} element={<Dashboard />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  );
}
