import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Chart from './components/Chart';
import NoPage from './pages/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-brand">
              <img src={require('./assets/logo.png')} alt="Logo" width="30" height="30" className="mr-1" />
              Manchester United
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link btn btn-dark">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/chart" className="nav-link btn btn-dark">Chart</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container content mt-4">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <footer className="footer mt-4">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
}



