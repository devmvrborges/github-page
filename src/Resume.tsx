import React from 'react';
import './styles.css';
import { VscCopy } from "react-icons/vsc";
import { HiOutlineUser, HiOutlineRocketLaunch } from "react-icons/hi2";
import { VscMortarBoard } from "react-icons/vsc";
import { MdOutlineWorkOutline, MdCalendarMonth, MdLocationPin, MdOutlineInfo, MdLanguage } from "react-icons/md";
import { PiCertificate, PiChalkboardTeacherDuotone } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { SiDevdotto, SiGoogleclassroom } from "react-icons/si";
import { ImLab } from "react-icons/im";
import TypingAnimation from './TypingAnimation';
import { Tooltip } from 'react-tooltip'
import SliderComponent from './Components/Slider';
import { useTranslation } from 'react-i18next';


const Resume = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
    <div>
      <div className="a4-layout">
        <div className='headContainer'>
          <div className="head headLeft">
            <div className='headName'>
              Mauricio <br />Borges
              <div className='animate-text'><TypingAnimation texts={["full stack developer ☕", "development fanactic 🐍", "game developer enthusiast 🧙‍♂️", "hobby with craft beer 🍺"]}></TypingAnimation>
              </div>
            </div>
          </div>
          <div className="headCenter"></div>
          <div className="head headRight contact">
            <div className='contactLines' data-tooltip-id="contact-tooltip" data-tooltip-content={t('tooltip-whatsapp')} data-tooltip-place="bottom">
              <a href='https://wa.me/5519996607813' target='_blank' rel="noreferrer"> +55 19 9966 0 7913 </a> <VscCopy className='copyIcon' onClick={() => handleCopyToClipboard('+55 19 9966 0 7813')} />
            </div>
            <div className='contactLines' data-tooltip-id="contact-tooltip" data-tooltip-content={t('tooltip-email')} data-tooltip-place="bottom">
              <span onClick={() => handleCopyToClipboard('mvrborges0@gmail.com')} > mvrborges0@gmail.com <VscCopy className='copyIcon' /> </span>
            </div>
            <div className='contactLines' data-tooltip-id="contact-tooltip" data-tooltip-content={t('tooltip-linkedin')} data-tooltip-place="bottom">
              <a href='https://linkedin.com/in/mvrborges' target='_blank' rel="noreferrer"> linkedin.com/in/mvrborges <FiExternalLink className='externalIcon' /></a>
            </div>
            <div className='contactLines' data-tooltip-id="contact-tooltip" data-tooltip-content={t('tooltip-github')} data-tooltip-place="bottom">
              <a href='https://github.com/devmvrborges' target='_blank' rel="noreferrer"> github.com/devmvrborges <FiExternalLink className='externalIcon' /></a>
            </div>
          </div>
        </div>
        <div className='bodyContainer'>
          <div>
            <div className='section'>
              <div className='sectionText'> <HiOutlineUser className='icon' /> {t('title-profile')}</div>
              <div className='sectionContentText'>


                {t('content-profile')}
              </div>

            </div>
            <div className='section'>
              <div className='sectionText'> <MdOutlineWorkOutline className='icon' /> {t('title-work-experience')}</div>
              <div className='sectionContentText'>
                <div className='sectionTopic'>
                  <span><SiDevdotto className='icon' /><a className='textBold' href='https://linkedin.com/company/venturus' target='_blank' rel="noreferrer">  {t('content-venturus')} <FiExternalLink className='externalIcon' /></a></span><br />
                  <MdCalendarMonth className='icon' /> {t('content-date-venturus')}  <br />
                  <MdLocationPin className='icon' /> {t('content-local-campinas')} <br />
                  <li>text 1</li>
                  <li>text 2</li>
                  <li>text 3</li>
                  <li>text 4</li>
                </div>

                <div className='sectionTopic'>
                  <span><PiChalkboardTeacherDuotone className='icon' /><a className='textBold' href='https://linkedin.com/company/instituto-stefanini/' target='_blank' rel="noreferrer">  {t('content-stefanini')} <FiExternalLink className='externalIcon' /></a></span><br />
                  <MdCalendarMonth className='icon' /> {t('content-date-stefanini')} <br />
                  <MdLocationPin className='icon' /> {t('content-local-jaguariuna')}  <br />
                  <div>
                  {t('content-stefanini-text')}
                  </div>
                </div>
              </div>
            </div>
            <div className='section'>
              <div className='sectionText'> <VscMortarBoard className='icon' /> {t('title-education')}</div>
              <div className='sectionContentText'>
                <div className='sectionTopic'>

                  <span><SiGoogleclassroom className='icon' /><a className='textBold' href='https://linkedin.com/school/universidadecruzeirodosul/' target='_blank' rel="noreferrer">  {t('content-cruzeiro-do-sul')} <FiExternalLink className='externalIcon' /></a></span><br />


                  <MdCalendarMonth className='icon' /> {t('content-date-cruzeiro-do-sul')} <br />
                  <MdLocationPin className='icon' /> {t('content-local-saopaulo')} <br />


                  <p>
                    {t('content-cruzeiro-do-sul-text')}
                  </p>

                </div>

                <div className='sectionTopic'>

                  <span><SiGoogleclassroom className='icon' /><a className='textBold' href='https://linkedin.com/school/unifajoficial/' target='_blank' rel="noreferrer">  {t('content-unifaj')} <FiExternalLink className='externalIcon' /></a></span><br />
                  <MdCalendarMonth className='icon' /> {t('content-date-unifaj')} <br />
                  <MdLocationPin className='icon' /> {t('content-local-jaguariuna')} <br />

                  <p>
                    {t('content-unifaj-text')}
                  </p>


                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='section'>
                <div className='sectionText'> <ImLab className='icon' /> {t('title-skills')}</div>
                <div className='sectionContentText'>

                  <div className='sectionTopic'>
                    <div className="mini-container">
                      <span className='subtitle'> <MdOutlineInfo className='icon' /> {t('sub-title-skills-softwareskills')}</span> <br />
                      <table>
                        <tbody>
                          <tr>
                            <td>C#</td>
                            <td><SliderComponent initialValue={9} /></td>
                          </tr>
                          <tr>
                            <td>NodeJS</td>
                            <td><SliderComponent initialValue={8} /></td>
                          </tr>
                          <tr>
                            <td>ReactJS</td>
                            <td><SliderComponent initialValue={6} /></td>
                          </tr>
                          <tr>
                            <td>Git</td>
                            <td><SliderComponent initialValue={8} /></td>
                          </tr>
                          <tr>
                            <td>Python</td>
                            <td><SliderComponent initialValue={8} /></td>
                          </tr>
                        </tbody>
                      </table>

                      <span className='subtitle'> <MdOutlineInfo className='icon' /> {t('sub-title-skills-softskills')}</span> <br />

                      <table>
                        <tbody>
                          <tr>
                            <td>{t('sub-item-skills-comunication')}</td>
                            <td><SliderComponent initialValue={5} /></td>
                          </tr>
                          <tr>
                            <td>{t('sub-item-skills-multitasking')}</td>
                            <td><SliderComponent initialValue={7} /></td>
                          </tr>
                          <tr>
                            <td>{t('sub-item-skills-teamwork')}</td>
                            <td><SliderComponent initialValue={9} /></td>
                          </tr>
                          <tr>
                            <td>{t('sub-item-skills-analytical')}</td>
                            <td><SliderComponent initialValue={7} /></td>
                          </tr>
                        </tbody>
                      </table>
                      <span className='subtitle'> <MdOutlineInfo className='icon' /> {t('sub-title-skills-languages')}</span> <br />

                      <table>
                        <tbody>
                          <tr>
                            <td className='simpleRight'>{t('lang-content-pt-br')}</td>
                            <td className='simpleLeft'>{t('lang-content-level-pt-br')}</td>
                          </tr>
                          <tr>
                            <td className='simpleRight'>{t('lang-content-en-en')}</td>
                            <td className='simpleLeft'>{t('lang-content-level-en-en')}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className='section'>
                <div className='sectionText'> <HiOutlineRocketLaunch className='icon' /> {t('title-last-projects')} </div>
                <div className='sectionContentText'>
                  {t('content-lastprojects')}
                </div>
              </div>
              <div className='section'>
                <div className='sectionText'> <PiCertificate className='icon' /> {t('title-certificates')}</div>
                <div className='sectionContentText'>
                  {t('content-certificates')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tooltip id="contact-tooltip" className="tooltip-font" />
      </div>
      <div>
        <div>
          <div className='credits'><MdLanguage className='icon' /> {t('change-language')}
            <div onClick={() => changeLanguage('en')} className='pointer'>EN-EN</div>
            <div onClick={() => changeLanguage('pt')} className='pointer'>PT-BR</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;