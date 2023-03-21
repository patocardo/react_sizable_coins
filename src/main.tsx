import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axe from '@axe-core/react';

if (import.meta.env.NODE_ENV !== 'production') {
  // const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
