import './styles.css';
import { VscCopy } from "react-icons/vsc";
import { HiOutlineUser } from "react-icons/hi2";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineWorkOutline, MdCalendarMonth, MdLocationPin, MdLanguage } from "react-icons/md";
import { BiSolidCertification } from "react-icons/bi";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { SiDevdotto, SiGoogleclassroom } from "react-icons/si";
import { Tooltip } from 'react-tooltip'
import { FaInfoCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import me from './assets/profile-photo.png';



const Resume = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const profileText = t('content-profile');
    const profileParagraphs = profileText.split('\n');

    const expText = t('content-venturus-text');
    const expParagraphs = expText.split('\n');

    const skillsBackText = t('content-back');
    const skillsBack = skillsBackText.split(';');

    const skillsFrontText = t('content-front');
    const skillsFront = skillsFrontText.split(';');

    const skillsToolsText = t('content-tools');
    const skillsTools = skillsToolsText.split(';');

    const skillsSoftText = t('content-soft');
    const skillsSoft = skillsSoftText.split(';');

    const skillsLanguageText = t('content-language');
    const skillsLanguage = skillsLanguageText.split(';');


    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Texto copiado para a área de transferência:', text);
            })
            .catch((err) => {
                console.error('Erro ao copiar para a área de transferência:', err);
            });
    };

    return (
        <div className='page'>
            <div className="a4-layout">
                <div className='headContent'>
                    <div className='leftCard'>
                        <div className='cv-profile-photo'>
                            <img src={me} className='imgProfile' alt="Mauricio Borges" />
                        </div>
                    </div>
                    <div className='rightCard'>
                        <div className='cv-title'>
                            Mauricio Borges
                        </div>
                    </div>
                </div>
                <div className='bodyContent'>
                    <div className='leftCard'>
                        <div className='cv-title-left'>
                            <div className='cv-title-left-text'>{t('title-contact')}</div>
                        </div>
                        <div className='cv-contact'>
                            <div data-tooltip-id="contact-tooltip" data-tooltip-content={t('tooltip-whatsapp')} data-tooltip-place="bottom">
                                <a href='https://wa.me/5519996607813' target='_blank' rel="noreferrer"> +55 19 9966 0 7913 </a> <span><VscCopy className='icon' onClick={() => handleCopyToClipboard('+55 19 9966 0 7813')} /></span>
                            </div>
                            <div data-tooltip-id="contact-tooltip" data-tooltip-content={t('tooltip-email')} data-tooltip-place="bottom">
                                <span onClick={() => handleCopyToClipboard('mvrborges0@gmail.com')} > mvrborges0@gmail.com <VscCopy className='icon' /> </span>
                            </div>
                            <div data-tooltip-id="contact-tooltip" data-tooltip-content={t('tooltip-linkedin')} data-tooltip-place="bottom">
                                <a href='https://linkedin.com/in/mvrborges' target='_blank' rel="noreferrer"> linkedin.com/in/mvrborges <FiExternalLink className='icon' /></a>
                            </div>
                            <div data-tooltip-id="contact-tooltip" data-tooltip-content={t('tooltip-github')} data-tooltip-place="bottom">
                                <a href='https://github.com/devmvrborges' target='_blank' rel="noreferrer"> github.com/devmvrborges <FiExternalLink className='icon' /></a>
                            </div>
                        </div>
                        <div className='cv-title-left'>
                            <div className='cv-title-left-text'>{t('title-education')}</div>
                        </div>

                        <div className='sectionContentText'>
                            <div className='sectionTopicLeft'>
                                <a className='textBold' href='https://linkedin.com/school/universidadecruzeirodosul/' target='_blank' rel="noreferrer"><SiGoogleclassroom className='icon' /> {t('content-cruzeiro-do-sul')} <FiExternalLink className='icon' /></a>
                                <div className='min-fontsize'><MdCalendarMonth className='icon' /> {t('content-date-cruzeiro-do-sul')} <MdLocationPin className='icon' /> {t('content-local-saopaulo')}</div>
                                <div>{t('content-cruzeiro-do-sul-text')}</div>
                            </div>
                            <p />
                            <div className='sectionTopicLeft'>
                                <a className='textBold' href='https://linkedin.com/school/unifajoficial/' target='_blank' rel="noreferrer"><SiGoogleclassroom className='icon' /> {t('content-unifaj')} <FiExternalLink className='icon' /></a>
                                <div className='min-fontsize'><MdCalendarMonth className='icon' /> {t('content-date-unifaj')} <MdLocationPin className='icon' /> {t('content-local-jaguariuna')}</div>
                                <div>{t('content-unifaj-text')}</div>
                            </div>
                        </div>
                        <div className='cv-title-left'>
                            <div className='cv-title-left-text'>{t('title-skills')}</div>
                            <div className='cv-title-left min-fontsize'><FaInfoCircle className='icon' /> {t('content-title-back')}</div>
                            {skillsBack.map((skillsBack, index) => (
                                <span key={index} className='skill-tag'>{skillsBack}</span>
                            ))}

                            <div className='cv-title-left min-fontsize'><FaInfoCircle className='icon' /> {t('content-title-front')}</div>
                            {skillsFront.map((skillsFront, index) => (
                                <span key={index} className='skill-tag'>{skillsFront}</span>
                            ))}
                            <div className='cv-title-left min-fontsize'><FaInfoCircle className='icon' /> {t('content-title-tools')}</div>
                            {skillsTools.map((skillsTools, index) => (
                                <span key={index} className='skill-tag'>{skillsTools}</span>
                            ))}
                            <div className='cv-title-left min-fontsize'><FaInfoCircle className='icon' /> {t('content-title-soft')}</div>
                            {skillsSoft.map((skillsSoft, index) => (
                                <span key={index} className='skill-tag'>{skillsSoft}</span>
                            ))}

                            <div className='cv-title-left min-fontsize'><FaInfoCircle className='icon' /> {t('content-title-language')}</div>
                            {skillsLanguage.map((skillsLanguage, index) => (
                                <span key={index} className='skill-tag'>{skillsLanguage}</span>
                            ))}
                        </div>
                        <div className='cv-title-left'>
                            <div className='cv-title-left-text'>{t('title-certificates')}</div>
                            <BiSolidCertification className='icon' /><a className='textBold' href='https://www.coursera.org/account/accomplishments/certificate/5Y697FJ7VE9F' target='_blank' rel="noreferrer"> {t('content-last-certificate-1')} <FiExternalLink className='externalIcon' /><br /></a>
                            <span className='min-fontsize'>{t('content-last-certificate-1-desc')}</span>
                            <p />
                            <BiSolidCertification className='icon' /><a className='textBold' href='https://www.coursera.org/account/accomplishments/certificate/J9EQN8HHXJMD' target='_blank' rel="noreferrer"> {t('content-last-certificate-2')} <FiExternalLink className='externalIcon' /><br /></a>
                            <span className='min-fontsize'>{t('content-last-certificate-2-desc')}</span>
                        </div>
                    </div>
                    <div className='rightCard'>
                        <div className='cv-title-right'>
                            <HiOutlineUser className='icon' /> {t('title-profile')}
                        </div>
                        <div className='justify-text'>
                            {profileParagraphs.map((paragraph, index) => (
                                <div key={index}>{paragraph}</div>
                            ))}
                        </div>
                        <div className='cv-title-right'>
                            <MdOutlineWorkOutline className='icon' /> {t('title-work-experience')}
                        </div>
                        <div className='sectionTopicRight'>
                            <span><SiDevdotto className='icon' /><a className='textBold' href='https://linkedin.com/company/venturus' target='_blank' rel="noreferrer">  {t('content-venturus')} <FiExternalLink className='externalIcon' /></a></span><br />
                            <div className='min-fontsize'><MdLocationPin className='icon' /> {t('content-local-campinas')} <MdCalendarMonth className='icon' /> {t('content-date-venturus')}</div>

                            <div className='justify-text'>
                                {expParagraphs.map((paragraph, index) => (
                                    <div key={index}>{paragraph}</div>
                                ))}
                            </div>
                            <div className='sectionTopicRight'>
                                <span><PiChalkboardTeacherDuotone className='icon' /><a className='textBold' href='https://linkedin.com/company/instituto-stefanini/' target='_blank' rel="noreferrer">  {t('content-stefanini')} <FiExternalLink className='externalIcon' /></a></span><br />
                                <div className='min-fontsize'><MdLocationPin className='icon' /> {t('content-local-jaguariuna')} <MdCalendarMonth className='icon' /> {t('content-date-stefanini')} </div>
                                <div className='justify-text'>
                                    {t('content-stefanini-text')}
                                </div>
                            </div>
                        </div>
                        <div className='cv-title-right'>
                            <MdOutlineWorkOutline className='icon' /> {t('title-last-projects')}
                        </div>
                        <div className='sectionTopicRight'>
                            <div><VscGithub className='icon' /><a className='textBold' href='https://github.com/devmvrborges/pet-recognizer' target='_blank' rel="noreferrer"> {t('content-lastprojects-1')} <FiExternalLink className='externalIcon' /></a></div>
                            <div className='justify-text'>{t('content-lastprojects-1-desc')}</div>
                            <div><VscGithub className='icon' /><a className='textBold' href='https://github.com/devmvrborges/github-page' target='_blank' rel="noreferrer"> {t('content-lastprojects-2')} <FiExternalLink className='externalIcon' /></a></div>
                            <div className='justify-text'>{t('content-lastprojects-2-desc')}</div>
                        </div>
                    </div>
                </div>
                <Tooltip id="contact-tooltip" className="tooltip-font" />
            </div >
            <div>
                <div>
                    <div className='credits'><MdLanguage className='icon' /> {t('change-language')}
                        <div onClick={() => changeLanguage('en')} className='pointer'>EN-EN</div>
                        <div onClick={() => changeLanguage('pt')} className='pointer'>PT-BR</div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Resume;