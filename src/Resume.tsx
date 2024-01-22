import React from 'react';
import './styles.css';
import { VscCopy } from "react-icons/vsc";
import { HiOutlineUser, HiOutlineRocketLaunch } from "react-icons/hi2";
import { VscMortarBoard } from "react-icons/vsc";
import { MdOutlineWorkOutline } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { ImLab } from "react-icons/im";
import TypingAnimation from './TypingAnimation';

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
          <div className='contactLines'  data-tip="Texto da dica" data-for="meu-tooltip">
          <a href='https://wa.me/5519996607813' target='_blank' rel="noreferrer"> +55 19 9966 0 7913 </a> <VscCopy className='copyIcon' onClick={() => handleCopyToClipboard('+55 19 9966 0 7813')}/> </div>
          <div className='contactLines'><span onClick={() => handleCopyToClipboard('mvrborges0@gmail.com')} > mvrborges0@gmail.com <VscCopy className='copyIcon' /> </span></div>
          <div className='contactLines'><a href='https://linkedin.com/in/mvrborges' target='_blank' rel="noreferrer"> linkedin.com/in/mvrborges <FiExternalLink className='externalIcon' /></a></div>
          <div className='contactLines'><a href='https://github.com/devmvrborges' target='_blank' rel="noreferrer"> github.com/devmvrborges <FiExternalLink className='externalIcon' /></a></div>
        
       
        </div>
      </div>
      <div className='bodyContainer'>
        <div>
        <div className='section'>
            <div className='sectionText'> <HiOutlineUser /> Profile</div>
            <div className='sectionContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula ante, commodo luctus sapien ut, condimentum euismod felis. Nullam consequat nisi condimentum odio interdum, eget mollis diam porttitor. Morbi massa nunc, tincidunt sit amet bibendum a, scelerisque et sem. Ut aliquet risus enim, vel lobortis libero fermentum eu. Donec scelerisque.</div>
          </div>
          <div className='section'>
            <div className='sectionText'> <MdOutlineWorkOutline /> Work experience</div>
            <div className='sectionContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula ante, commodo luctus sapien ut, condimentum euismod felis. Nullam consequat nisi condimentum odio interdum, eget mollis diam porttitor. Morbi massa nunc, tincidunt sit amet bibendum a, scelerisque et sem. Ut aliquet risus enim, vel lobortis libero fermentum eu. Donec scelerisque.</div>
          </div>
          <div className='section'>
            <div className='sectionText'> <VscMortarBoard />Education</div>
            <div className='sectionContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula ante, commodo luctus sapien ut, condimentum euismod felis. Nullam consequat nisi condimentum odio interdum, eget mollis diam porttitor. Morbi massa nunc, tincidunt sit amet bibendum a, scelerisque et sem. Ut aliquet risus enim, vel lobortis libero fermentum eu. Donec scelerisque.</div>
          </div>
        </div>
        <div>
        <div>
          <div className='section'>
            <div className='sectionText'> <ImLab /> Skills</div>
            <div className='sectionContentText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula ante, commodo luctus sapien ut, condimentum euismod felis. Nullam consequat nisi condimentum odio interdum, eget mollis diam porttitor. Morbi massa nunc, tincidunt sit amet bibendum a, scelerisque et sem. Ut aliquet risus enim, vel lobortis libero fermentum eu. Donec scelerisque.</div>
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
    </div>
  );
};

export default Resume;