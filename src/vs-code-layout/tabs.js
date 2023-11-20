import { useState, useTransition } from 'react';
import TabButton from './components/TabButton.js';
import AboutTab from '../tabs-pages/about.js';
import ContactTab from '../tabs-pages/contact.js';
import ResumeTab from '../tabs-pages/resume.js';
import ProjectsTab from '../tabs-pages/projects.js';
import { useTranslation } from 'react-i18next';
import md_icon from '../assets/md_icon.svg';
import pdf_icon from '../assets/md_icon.svg';
import cs_icon from '../assets/md_icon.svg';
import config_icon from '../assets/md_icon.svg';


export default function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');
  const { t } = useTranslation();

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    // <div className='vs-code-tab-main'>
    <div>
      <TabButton
        isActive={tab === 'about'}
        onClick={() => selectTab('about')}
      >
        <div >
          <img src={md_icon} className='icon-white' alt="logo" />
          <span className='span-tab'>{t('about')}</span>
        </div>
      </TabButton>
      
      <TabButton
        isActive={tab === 'resume'}
        onClick={() => selectTab('resume')}
      >
        <div >
          <img src={pdf_icon} className='icon-white' alt="logo" />
          <span className='span-tab'>{t('resume')}</span>
        </div>
      </TabButton>

      <TabButton
        isActive={tab === 'projects'}
        onClick={() => selectTab('projects')}
      >
        <div >
          <img src={cs_icon} className='icon-white' alt="logo" />
          <span className='span-tab'>{t('projects')}</span>
        </div>
      </TabButton>

      <TabButton
        isActive={tab === 'contact'}
        onClick={() => selectTab('contact')}
      >
        <div >
          <img src={config_icon} className='icon-white' alt="logo" />
          <span className='span-tab'>{t('about')}</span>
        </div>
      </TabButton>

      <div>
        {tab === 'about' && <AboutTab />}
        {tab === 'resume' && <ResumeTab />}
        {tab === 'projects' && <ProjectsTab />}
        {tab === 'contact' && <ContactTab />}
      </div>

    </div>
  );
}
