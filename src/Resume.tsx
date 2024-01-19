import React from 'react';
import './styles.css';
import { FaCopy, FaEnvelope, FaPhone } from 'react-icons/fa';

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
                <div className='headLeft'>
                    <div className='headName'>Maurício<br/>Borges</div>
                </div>
                <div className='contact headRight'>
                    <div>+55 19 9966 0 7913 <FaCopy onClick={() => handleCopyToClipboard('+55 19 9966 0 7813')}  />
                        </div>
                    <div>mvrborges0@gmail.com <FaCopy onClick={() => handleCopyToClipboard('mvrborges0@gmail.com')} /></div>
                </div>
            </div>
            <div className='bodyContainer'>

            </div>
        </div>
  );
};

export default Resume;

