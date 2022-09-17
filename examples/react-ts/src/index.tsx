import React from 'react';
import ReactDOM from 'react-dom/client';
import "../../../packages/sten-themes/npm/index.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import http from '../../../packages/core/src/http'

console.log('http',http)
// import { injectComponents } from "./plugins/index";
// injectComponents();

declare global {
  interface PxhRouter {
    path: string
  }
  namespace JSX {
    // interface IntrinsicElements {
    //   "gf-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    // }
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
