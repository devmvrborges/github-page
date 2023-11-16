import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="vs-code-the-window">
      <App />
    </div>
  </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();