import React, { useState, useEffect } from 'react';
// Bold images
import BoldI from '../assets/Bold/I.svg';
import BoldA from '../assets/Bold/A.svg';
import BoldM from '../assets/Bold/M.svg';
import BoldT from '../assets/Bold/T.svg';
import BoldI2 from '../assets/Bold/I2.svg';
import BoldN from '../assets/Bold/N.svg';
import BoldO from '../assets/Bold/O.svg';
// Serif images
import SerifI from '../assets/Serif/I.svg';
import SerifA from '../assets/Serif/A.svg';
import SerifM from '../assets/Serif/M.svg';
import SerifT from '../assets/Serif/T.svg';
import SerifI2 from '../assets/Serif/I2.svg';
import SerifN from '../assets/Serif/N.svg';
import SerifO from '../assets/Serif/O.svg';

function IamTino({ onIntroComplete }) {
  const [showAllSerif, setShowAllSerif] = useState(false);
  const [introPhase, setIntroPhase] = useState(0);

  useEffect(() => {
    const boldTimer = setTimeout(() => setIntroPhase(1), 300);
    const serifTimer = setTimeout(() => setIntroPhase(2), 1500);
    const completeTimer = setTimeout(() => {
      setIntroPhase(3);
      if (onIntroComplete) onIntroComplete();
    }, 3000);
    const finalPhaseTimer = setTimeout(() => setIntroPhase(4), 3100);

    return () => {
      clearTimeout(boldTimer);
      clearTimeout(serifTimer);
      clearTimeout(completeTimer);
      clearTimeout(finalPhaseTimer);
    };
  }, [onIntroComplete]);

  const handleClick = () => {
    if (introPhase === 4) {
      setShowAllSerif((prev) => !prev);
    }
  };

  const serifLetters = [
    { src: SerifI, alt: 'I', className: 'pr-5 pl-0 -translate-x-[3px]', delay: 0 },
    { src: SerifA, alt: 'A', className: 'pl-5 pr-0 pb-1 translate-x-[4px]', delay: 0.1 },
    { src: SerifM, alt: 'M', className: 'pr-5 pl-0 -translate-x-[3px]', delay: 0.2 },
    { src: SerifT, alt: 'T', className: 'pl-5 pr-0 translate-x-[6px]', delay: 0.3 },
    { src: SerifI2, alt: 'I2', className: 'pl-0 pr-0 translate-x-[2px]', delay: 0.4 },
    { src: SerifN, alt: 'N', className: 'pl-0 pr-0 -translate-x-[8px]', delay: 0.5 },
    { src: SerifO, alt: 'O', className: 'pl-0 pr-0 -translate-x-[6px]', delay: 0.6 },
  ];

  return (
    <div className="flex justify-center items-center relative dark:bg-black scale-80 sm:scale-100 w-screen h-screen">
      <div
        className={`flex flex-row justify-center items-center dark:invert absolute scale-50 sm:scale-100 bg-transparent w-2/3 gap-4 transition-opacity duration-500 ${
          introPhase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img src={BoldI} alt="I" className="pr-5 pl-0 translate-x-[-5px]" />
        <img src={BoldA} alt="A" className="pl-5 pr-0 translate-x-[5px]" />
        <img src={BoldM} alt="M" className="pr-5 pl-0 translate-x-[-3px]" />
        <img src={BoldT} alt="T" className="pl-5 pr-0 translate-x-[3px]" />
        <img src={BoldI2} alt="I2" className="pl-0 pr-0 translate-x-[0px]" />
        <img src={BoldN} alt="N" className="pl-0 pr-0 translate-x-[-2px]" />
        <img src={BoldO} alt="O" className="pl-0 pr-0 translate-x-[2px]" />
      </div>
      <div
        className={`iamtino2 flex flex-row justify-center dark:invert items-center mb-2 absolute scale-50 sm:scale-100 bg-transparent w-2/3 gap-2 z-0 ${
          introPhase === 4 ? 'cursor-pointer' : 'cursor-default'
        }`}
        onClick={handleClick}
      >
        {serifLetters.map((letter, index) => (
          <img
            key={index}
            src={letter.src}
            alt={letter.alt}
            className={`${letter.className} transition-all ${
              introPhase === 2 || introPhase === 3
                ? 'duration-500 opacity-0'
                : introPhase === 4
                ? showAllSerif
                  ? 'duration-200 opacity-100'
                  : 'duration-200 opacity-0 hover:opacity-100'
                : 'opacity-0'
            }`}
            style={{
              transitionDelay: introPhase === 2 ? `${letter.delay}s` : '0s',
              opacity: introPhase === 2 ? 1 : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default IamTino;