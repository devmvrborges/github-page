import React from 'react';
import explorer_icon from './explorer_icon.svg'
import git_icon from './git_icon.svg'
import linkedin_icon from './linkedin_icon.svg'
import pdf_icon from './pdf_icon.svg'
import md_icon from './md_icon.svg'
import cs_icon from './cs_icon.svg'
import config_icon from './config_icon.svg'
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
              <a href="https://github.com/devmvrborges/" target='_blank'>
                <img src={git_icon} className='vs-icon' alt="logo" />
              </a>
              <a href="https://www.linkedin.com/in/mvrborges/" target='_blank'>
                <img src={linkedin_icon} className='vs-icon' alt="logo" />
              </a>
          </div>
          
<section>
  <div className="vs-code-tabs">
    <img src={md_icon} className='icon-white' alt="logo" />
    about.md</div>
</section>

<section>
  <div className="vs-code-tabs">
    <img src={pdf_icon} className='tab-icon' alt="logo" />
    resume.pdf</div>
</section>

<section>
  <div className="vs-code-tabs">
    <img src={cs_icon} className='icon-white' alt="logo" />
    projects.sln</div>
</section>

<section>
  <div className="vs-code-tabs">
    <img src={config_icon} className='icon-white' alt="logo" />
    contact.config</div>
</section>

        </div>
        </div>

        
              </header>
    </div>
 );
}



export default App;
