import React from 'react';
import { useTranslation } from 'react-i18next'; 
import git_icon from '../assets/git_icon.svg'
import linkedin_icon from '../assets/linkedin_icon.svg'
import insta_icon from '../assets/insta_icon.svg'
import whats_icon from '../assets/whats_icon.svg'
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import '../App.css';

const SidePainel = () => {
    const { t } = useTranslation();
    return (
        <div className="vs-code-left-tools">
        <BootstrapTooltip title={t('tooltip-github')} placement="right-start">
          <a href="https://github.com/devmvrborges/" rel="noopener">
            <img src={git_icon} className='vs-icon' alt="logo" />
          </a>
        </BootstrapTooltip>

        <BootstrapTooltip title={t('tooltip-linkedin')} placement="right-start">
          <a href="https://www.linkedin.com/in/mvrborges/" rel="noopener">
            <img src={linkedin_icon} className='vs-icon' alt="logo" />
          </a>
        </BootstrapTooltip>
        <BootstrapTooltip title={t('tooltip-instagram')} placement="right-start">
          <a href="https://www.instagram.com/maauborges/" rel="noopener">
            <img src={insta_icon} className='vs-icon' alt="logo" />
          </a>
        </BootstrapTooltip>
        <BootstrapTooltip title={t('tooltip-whatsapp')} placement="right-start">
          <a href="https://wa.me/+5519996607813" rel="noopener">
            <img src={whats_icon} className='vs-icon' alt="logo" />
          </a>
        </BootstrapTooltip>
      </div>
    );
  };
  
  export default SidePainel;

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => {
      return ({
          [`& .${tooltipClasses.arrow}`]: {
              color: theme.palette.common.black,
          },
          [`& .${tooltipClasses.tooltip}`]: {
              backgroundColor: theme.palette.common.black,
          },
      });
  });