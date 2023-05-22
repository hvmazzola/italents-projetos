import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from './components/NavMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter - responsave por informar que utilizaremos roteamento no browser
  <React.StrictMode>
    <BrowserRouter>
      <NavMenu/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
