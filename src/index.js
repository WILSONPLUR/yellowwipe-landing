import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFontAwesome, faDribbble, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faInstagram, faDribbble, faTwitter, faYoutube,  faFontAwesome);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);