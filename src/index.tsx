import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <div className='center'>
        <Resume />
      </div>
  </React.StrictMode>,
    document.getElementById('root')
    // document.body.style.overflow = 'auto'
);


reportWebVitals();