import * as React from 'react';
import git_icon from './assets/git_icon.svg'
import linkedin_icon from './assets/linkedin_icon.svg'
import pdf_icon from './assets/pdf_icon.svg'
import md_icon from './assets/md_icon.svg'
import cs_icon from './assets/cs_icon.svg'
import config_icon from './assets/config_icon.svg'
import refresh_icon from './assets/refresh_icon.svg'
import whats_icon from './assets/whats_icon.svg'
import insta_icon from './assets/insta_icon.svg'
import bell_icon from './assets/bell_icon.svg'
import feedback_icon from './assets/feedback_icon.svg'
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './App.css';


function App() {

  const [language, setAge] = React.useState('PT-BR');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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

              <BootstrapTooltip title="Jump to my github repositories 👨‍💻" placement="right-start">
                <a href="https://github.com/devmvrborges/" rel="noopener">
                  <img src={git_icon} className='vs-icon' alt="logo" />
                </a>
              </BootstrapTooltip>

              <BootstrapTooltip title="Jump to my LinkedIn page 💼" placement="right-start">
                <a href="https://www.linkedin.com/in/mvrborges/" rel="noopener">
                  <img src={linkedin_icon} className='vs-icon' alt="logo" />
                </a>
              </BootstrapTooltip>
              <BootstrapTooltip title="Jump to my Instagram page 😎" placement="right-start">
                <a href="https://www.instagram.com/maauborges/" rel="noopener">
                  <img src={insta_icon} className='vs-icon' alt="logo" />
                </a>
              </BootstrapTooltip>
              <BootstrapTooltip title="Send me a message on Whastapp 🐣" placement="right-start">
                <a href="https://wa.me/+5519996607813" rel="noopener">
                  <img src={whats_icon} className='vs-icon' alt="logo" />
                </a>
              </BootstrapTooltip>
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
              <div className='vs-content'>
              </div>
            </div>
          </div>
          <div className='vs-bottom'>
            <div className='vs-bottom-left-1'>
              <BootstrapTooltip title="github-page (Git) - master, Checkout branch/tag..." placement="top">
                <div>
                  <img src={git_icon} className='vs-icon-mini' alt="logo" />
                  <label>master</label>
                </div>
              </BootstrapTooltip>
            </div>
            <div className='vs-bottom-left-2'>
              <BootstrapTooltip title="github-page (Git) - Synchronize Changes" placement="top">
                <img src={refresh_icon} className='vs-icon-mini' alt="logo" />
              </BootstrapTooltip>
            </div>
            <div className='vs-bottom-right'>
              <div>
                <Select className='vs-language-change'
                  value={language}
                  label="Language"
                  onChange={handleChange}>
                  <MenuItem value={"PT-BR"} selected>PT-BR</MenuItem>
                  <MenuItem value={"EN-US"}>EN-US</MenuItem>
                </Select>
                <BootstrapTooltip title="Em breve lugar para enviar feedbacks pra mim sobre a pagina" placement="top">
                  <div className='vs-bottom-right-2'>
                    <img src={feedback_icon} className='vs-icon-mini-1' alt="logo" />
                  </div>
                </BootstrapTooltip>
                <BootstrapTooltip title="Em breve atualizações da pagina aqui" placement="top">
                  <div className='vs-bottom-right-2'>
                    <img src={bell_icon} className='vs-icon-mini' alt="logo" />
                  </div>
                </BootstrapTooltip>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));