import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';
import reportWebVitals from './reportWebVitals';
import './background-styles.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    </I18nextProvider>,
      <div className='center'>
        <Resume />
      </div>
  </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();