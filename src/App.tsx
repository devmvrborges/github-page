import React from 'react';
import explorer_icon from './explorer_icon.svg'
import git_icon from './git_icon.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="vs-code-window">
          <div className="vs-code-top"> 
            <div className="left">☕</div>
            <div className="center">mauricio-borges-dev</div>
          </div>
          <div className="vs-code-content">
            <div className="vs-code-left-tools">
              <img src={explorer_icon} className='vs-icon' alt="logo" />
            <a href='www.google.com' target="_blank" rel="noreferrer">
              <img src={git_icon} className='vs-icon' alt="logo" />
            </a>
            </div>
          </div>
        </div>
        
      </header>
    </div>
  );
}





export default App;
