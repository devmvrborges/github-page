import React from 'react';
import { useTranslation } from 'react-i18next'; 
import md_icon from '../assets/md_icon.svg'
import pdf_icon from '../assets/pdf_icon.svg'
import cs_icon from '../assets/cs_icon.svg'
import config_icon from '../assets/config_icon.svg'
import '../App.css';

const Tabs = () => {
  const { t } = useTranslation();
  return (
    <div className='vs-code-tab-main'>
      <section>
        <div className="vs-code-tabs">
          <img src={md_icon} className='icon-white' alt="logo" />
          <span className='span-tab'>{t('about')}</span>
        </div>
        <div className="vs-code-tabs">
          <img src={pdf_icon} className='tab-icon' alt="logo" />
          <span className='span-tab'>{t('resume')}</span>
        </div>
        <div className="vs-code-tabs">
          <img src={cs_icon} className='icon-white' alt="logo" />
          <span className='span-tab'>{t('projects')}</span>
        </div>
        <div className="vs-code-tabs">
          <img src={config_icon} className='icon-white' alt="logo" />
          <span className='span-tab'>{t('contact')}</span>
        </div>
      </section>
    </div>
  );
};

export default Tabs;
