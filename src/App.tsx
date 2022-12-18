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
              <a href="https://github.com/devmvrborges/" rel="noopener">
                <img src={git_icon} className='vs-icon' alt="logo" />
              </a>
              <a href="https://www.linkedin.com/in/mvrborges/" rel="noopener">
                <img src={linkedin_icon} className='vs-icon' alt="logo" />
              </a>
            </div>
            <div className='vs-code-tab-main'>
              <section>
                <div className="vs-code-tabs">
                  <img src={md_icon} className='icon-white' alt="logo" />
                  <span className='span-tab'>about.md</span></div>
                <div className="vs-code-tabs">
                  <img src={pdf_icon} className='tab-icon' alt="logo" />
                  <span className='span-tab'>resume.pdf</span></div>
                <div className="vs-code-tabs">
                  <img src={cs_icon} className='icon-white' alt="logo" />
                  <span className='span-tab'>projects.sln</span></div>
                <div className="vs-code-tabs">
                  <img src={config_icon} className='icon-white' alt="logo" />
                  <span className='span-tab'>contact.config</span></div>
              </section>
              <div className='vs-content'>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
          </div>  
        </div>
      </header>
    </div>
  );
}
export default App;