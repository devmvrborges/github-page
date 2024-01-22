// TypingAnimation.tsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const deletingAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
`;

const TypingText = styled.div<{ isDeleting: boolean }>`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  width: 100%;
  animation: ${(props) => (props.isDeleting ? deletingAnimation : typingAnimation)} 2s steps(40, end) forwards;
`;

interface TypingAnimationProps {
  texts: string[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ texts }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsDeleting(true), 2000);
      setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 4000);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, texts]);

  return (
    <Wrapper>
      {isVisible && <TypingText isDeleting={isDeleting}>{texts[currentIndex]}</TypingText>}
    </Wrapper>
  );
};

export default TypingAnimation;
