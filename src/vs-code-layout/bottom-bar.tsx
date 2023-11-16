import { useTranslation } from 'react-i18next';
import git_icon from '../assets/git_icon.svg'
import refresh_icon from '../assets/refresh_icon.svg'
import { styled } from '@mui/material/styles';
import bell_icon from '../assets/bell_icon.svg'
import feedback_icon from '../assets/feedback_icon.svg'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import '../App.css';
import LanguageDropdown from './components/LanguageDropdown';

const StatusBar = () => {
    const { t } = useTranslation();
    return (
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

                    <div className='selectbox-language'>
                        <LanguageDropdown />
                    </div>

                    <BootstrapTooltip title={t('tooltip-feedbacks')} placement="top">
                        <div className='vs-bottom-right-2'>
                            <img src={feedback_icon} className='vs-icon-mini-1' alt="logo" />
                        </div>
                    </BootstrapTooltip>
                    <BootstrapTooltip title={t('tooltip-notifications')} placement="top">
                        <div className='vs-bottom-right-2'>
                            <img src={bell_icon} className='vs-icon-mini' alt="logo" />
                        </div>
                    </BootstrapTooltip>
                </div>
            </div>
        </div>
    );
};

export default StatusBar;

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