import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';
import reportWebVitals from './reportWebVitals';
import './background-styles.css';

ReactDOM.render(
  <React.StrictMode>
      <div className='center'>
        <Resume />
      </div>
  </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();