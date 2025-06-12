import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [showBold, setShowBold] = useState(false);
  const [showSerif, setShowSerif] = useState(false);

  useEffect(() => {
    const boldTimer = setTimeout(() => setShowBold(true), 0);
    const serifTimer = setTimeout(() => {
      setShowSerif(true);
      if (onIntroComplete) onIntroComplete();
    }, 1000);

    return () => {
      clearTimeout(boldTimer);
      clearTimeout(serifTimer);
    };
  }, [onIntroComplete]);

  const boldLetters = [
    { src: BoldI, alt: 'I', className: 'pr-5 pl-0 -translate-x-[5px]' },
    { src: BoldA, alt: 'A', className: 'pl-5 pr-0 translate-x-[5px]' },
    { src: BoldM, alt: 'M', className: 'pr-5 pl-0 -translate-x-[3px]' },
    { src: BoldT, alt: 'T', className: 'pl-5 pr-0 translate-x-[3px]' },
    { src: BoldI2, alt: 'I2', className: 'pl-0 pr-0 translate-x-[0px]' },
    { src: BoldN, alt: 'N', className: 'pl-0 pr-0 -translate-x-[2px]' },
    { src: BoldO, alt: 'O', className: 'pl-0 pr-0 translate-x-[2px]' },
  ];

  const serifLetters = [
    { src: SerifI, alt: 'I', className: 'pr-5 pl-0 -translate-x-[3px]', delay: 0 },
    { src: SerifA, alt: 'A', className: 'pl-5 pr-0 pb-1 translate-x-[4px]', delay: 0.1 },
    { src: SerifM, alt: 'M', className: 'pr-5 pl-0 -translate-x-[3px]', delay: 0.2 },
    { src: SerifT, alt: 'T', className: 'pl-5 pr-0 translate-x-[6px]', delay: 0.3 },
    { src: SerifI2, alt: 'I2', className: 'pl-0 pr-0 translate-x-[2px]', delay: 0.4 },
    { src: SerifN, alt: 'N', className: 'pl-0 pr-0 -translate-x-[8px] translate-y-[2px]', delay: 0.5 },
    { src: SerifO, alt: 'O', className: 'pl-0 pr-0 -translate-x-[6px]', delay: 0.6 },
  ];

  return (
    <div className="flex justify-center transform -translate-y-7 sm:-translate-y-0 items-center relative dark:bg-black w-screen h-screen">
      {/* Bold Letters */}
      {showBold && (
        <motion.div
          className="flex flex-row justify-center items-center dark:invert absolute xl:scale-100 lg:scale-80 md:scale-60 sm:scale-40 scale-40 bg-transparent w-2/3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {boldLetters.map((letter, index) => (
            <motion.img
              key={`bold-${index}`}
              src={letter.src}
              alt={letter.alt}
              className={letter.className}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
            />
          ))}
        </motion.div>
      )}

      {/* Serif Letters */}
      {showSerif && (
        <motion.div className="flex flex-row justify-center dark:invert dark:brightness-85 items-center mb-2 absolute xl:scale-100 lg:scale-80 md:scale-60 sm:scale-40 scale-40 bg-transparent w-2/3 gap-2 z-0">
          {serifLetters.map((letter, index) => (
            <motion.img
              key={`serif-${index}`}
              src={letter.src}
              alt={letter.alt}
              className={letter.className}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: letter.delay,
                duration: 0.7,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default IamTino;