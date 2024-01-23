import React from 'react';
import './styles.css';
import { VscCopy } from "react-icons/vsc";
import { HiOutlineUser, HiOutlineRocketLaunch } from "react-icons/hi2";
import { VscMortarBoard } from "react-icons/vsc";
import { MdOutlineWorkOutline, MdCalendarMonth, MdLocationPin, MdOutlineInfo } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { ImLab } from "react-icons/im";
import TypingAnimation from './TypingAnimation';
import { Tooltip } from 'react-tooltip'
import SliderComponent from './Components/Slider';

const Resume = () => {

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
    <div className="a4-layout">
      <div className='headContainer'>
        <div className="head headLeft">
          <div className='headName'>
            Maurício <br />Borges
            <TypingAnimation texts={["full stack developer ☕", "development fanactic 🐍", "game developer enthusiast 🧙‍♂️", "hobby with craft beer 🍺"]}></TypingAnimation>
          </div></div>
        <div className="headCenter"></div>
        <div className="head headRight contact">
          <div className='contactLines' data-tooltip-id="contact-tooltip" data-tooltip-content="Call me on whatsapp or copy to clipboard" data-tooltip-place="bottom">
            <a href='https://wa.me/5519996607813' target='_blank' rel="noreferrer"> +55 19 9966 0 7913 </a> <VscCopy className='copyIcon' onClick={() => handleCopyToClipboard('+55 19 9966 0 7813')} />
          </div>
          <div className='contactLines' data-tooltip-id="contact-tooltip" data-tooltip-content="Copy to clipboard" data-tooltip-place="bottom">
            <span onClick={() => handleCopyToClipboard('mvrborges0@gmail.com')} > mvrborges0@gmail.com <VscCopy className='copyIcon' /> </span>
          </div>
          <div className='contactLines' data-tooltip-id="contact-tooltip" data-tooltip-content="Visit my LinkedIn" data-tooltip-place="bottom">
            <a href='https://linkedin.com/in/mvrborges' target='_blank' rel="noreferrer"> linkedin.com/in/mvrborges <FiExternalLink className='externalIcon' /></a>
          </div>
          <div className='contactLines' data-tooltip-id="contact-tooltip" data-tooltip-content="Meet my github" data-tooltip-place="bottom">
            <a href='https://github.com/devmvrborges' target='_blank' rel="noreferrer"> github.com/devmvrborges <FiExternalLink className='externalIcon' /></a>
          </div>


        </div>
      </div>
      <div className='bodyContainer'>
        <div>
          <div className='section'>
            <div className='sectionText'> <HiOutlineUser /> Profile</div>
            <div className='sectionContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula ante, commodo luctus sapien ut, condimentum euismod felis. </div>
          </div>
          <div className='section'>
            <div className='sectionText'> <MdOutlineWorkOutline /> Work experience</div>
            <div className='sectionContentText'>
              <div className='sectionTopic'>
                <MdCalendarMonth /> MM/YYYY - MM/YYYY <br />
                <MdLocationPin /> Local, País <br />
                <span className='textBold'>Nome da empresa</span>
                <li>text 1</li>
                <li>text 2</li>
                <li>text 3</li>
                <li>text 4</li>
              </div>

              <div className='sectionTopic'>
                <MdCalendarMonth /> MM/YYYY - MM/YYYY <br />
                <MdLocationPin /> Local, País <br />
                <span className='textBold'>Nome da empresa</span>
                <li>text 1</li>
                <li>text 2</li>
                <li>text 3</li>
                <li>text 4</li>
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='sectionText'> <VscMortarBoard />Education</div>
            <div className='sectionContentText'>
              <div className='sectionTopic'>
                <MdCalendarMonth /> MM/YYYY - MM/YYYY <br />
                <MdLocationPin /> Local, País <br />
                <span className='textBold'>Nome da faculdade</span>
                <li>text 1</li>
                <li>text 2</li>
                <li>text 3</li>
                <li>text 4</li>
              </div>

              <div className='sectionTopic'>
                <MdCalendarMonth /> MM/YYYY - MM/YYYY <br />
                <MdLocationPin /> Local, País <br />
                <span className='textBold'>Nome da faculdade</span>
                <li>text 1</li>
                <li>text 2</li>
                <li>text 3</li>
                <li>text 4</li>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='section'>
              <div className='sectionText'> <ImLab /> Skills</div>
              <div className='sectionContentText'>

                <div className='sectionTopic'>
                  <div className="mini-container">
                  <MdOutlineInfo /> Software Skills <br />
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


                    <MdOutlineInfo /> Soft Skills <br />

                    <table>
                      <tbody>
                        <tr>
                          <td>Comunication</td>
                          <td><SliderComponent initialValue={5} /></td>
                        </tr>
                        <tr>
                          <td>Multitasking</td>
                          <td><SliderComponent initialValue={7} /></td>
                        </tr>
                        <tr>
                          <td>Teamwork</td>
                          <td><SliderComponent initialValue={7} /></td>
                        </tr>
                        <tr>
                          <td>Analytical skills</td>
                          <td><SliderComponent initialValue={7} /></td>
                        </tr>
                      </tbody>
                    </table>

                    <MdOutlineInfo /> Languages <br />
                    <table>
                      <tbody>
                        <tr>
                          <td>Português</td>
                          <td>Nativo</td>
                        </tr>
                        <tr>
                          <td>Inglês</td>
                          <td>Avançado</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>




              </div>
            </div>
            <div className='section'>
              <div className='sectionText'> <HiOutlineRocketLaunch /> Last projects</div>
              <div className='sectionContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula ante, commodo luctus sapien ut, condimentum euismod felis. Nullam consequat nisi condimentum odio interdum, eget mollis diam porttitor. Morbi massa nunc, tincidunt sit amet bibendum a, scelerisque et sem. Ut aliquet risus enim, vel lobortis libero fermentum eu. Donec scelerisque.</div>
            </div>
            <div className='section'>
              <div className='sectionText'> <PiCertificate /> Certificates</div>
              <div className='sectionContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula ante, commodo luctus sapien ut, condimentum euismod felis. Nullam consequat nisi condimentum odio interdum, eget mollis diam porttitor. Morbi massa nunc, tincidunt sit amet bibendum a, scelerisque et sem. Ut aliquet risus enim, vel lobortis libero fermentum eu. Donec scelerisque.</div>
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="contact-tooltip" className="tooltip-font" />

    </div>
  );
};

export default Resume;