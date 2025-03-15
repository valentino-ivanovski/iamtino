import React, { useState, useEffect } from 'react';

function IamTino() {
  const [showAllSerif, setShowAllSerif] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [introPhase, setIntroPhase] = useState(0); // 0: initial, 1: bold shown, 2: serif animating, 3: complete

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle intro animation
  useEffect(() => {
    // Show bold letters after 0.3s
    const boldTimer = setTimeout(() => {
      setIntroPhase(1);
    }, 300);

    // Start serif animation after 1s
    const serifTimer = setTimeout(() => {
      setIntroPhase(2);
    }, 1500);

    // Complete animation after all serif letters are shown (adjust timing based on sequence)
    const completeTimer = setTimeout(() => {
      setIntroPhase(3);
    }, 3000); //

    return () => {
      clearTimeout(boldTimer);
      clearTimeout(serifTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  const handleClick = () => {
    if (introPhase === 3) { // Only allow clicking after intro
      setShowAllSerif((prev) => !prev);
    }
  };

  const boldTransform = `translateY(${-scrollY * 0.6}px)`;
  const serifTransform = `translateY(${-scrollY * 0.6}px)`;

  // Serif letter animation delays (0.2s between each letter)
  const serifLetters = [
    { src: 'src/assets/Serif/I.svg', alt: 'I', className: 'pr-5 pl-0 -translate-x-[3px]', delay: 0 },
    { src: 'src/assets/Serif/A.svg', alt: 'A', className: 'pl-5 pr-0 pb-1 translate-x-[4px]', delay: 0.1 },
    { src: 'src/assets/Serif/M.svg', alt: 'M', className: 'pr-5 pl-0 -translate-x-[3px]', delay: 0.2 },
    { src: 'src/assets/Serif/T.svg', alt: 'T', className: 'pl-5 pr-0 translate-x-[6px]', delay: 0.3 },
    { src: 'src/assets/Serif/I2.svg', alt: 'I2', className: 'pl-0 pr-0 translate-x-[2px]', delay: 0.4 },
    { src: 'src/assets/Serif/N.svg', alt: 'N', className: 'pl-0 pr-0 -translate-x-[8px]', delay: 0.5 },
    { src: 'src/assets/Serif/O.svg', alt: 'O', className: 'pl-0 pr-0 -translate-x-[6px]', delay: 0.6 },
  ];

  return (
    <div className="flex justify-center items-center relative dark:bg-black w-screen h-screen">
      <div
        className={`flex flex-row justify-center items-center dark:invert absolute scale-50 sm:scale-100 bg-transparent w-2/3 gap-4 transition-opacity duration-500 ${
          introPhase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: boldTransform, transition: 'transform 0.1s ease-out, opacity 0.5s ease-in' }}
      >
        <img src="src/assets/Bold/I.svg" alt="I" className="pr-5 pl-0 translate-x-[-5px]" />
        <img src="src/assets/Bold/A.svg" alt="A" className="pl-5 pr-0 translate-x-[5px]" />
        <img src="src/assets/Bold/M.svg" alt="M" className="pr-5 pl-0 translate-x-[-3px]" />
        <img src="src/assets/Bold/T.svg" alt="T" className="pl-5 pr-0 translate-x-[3px]" />
        <img src="src/assets/Bold/I2.svg" alt="I2" className="pl-0 pr-0 translate-x-[0px]" />
        <img src="src/assets/Bold/N.svg" alt="N" className="pl-0 pr-0 translate-x-[-2px]" />
        <img src="src/assets/Bold/O.svg" alt="O" className="pl-0 pr-0 translate-x-[2px]" />
      </div>
      <div
        className={`iamtino2 flex flex-row justify-center dark:invert items-center mb-2 absolute scale-50 sm:scale-100 bg-transparent w-2/3 gap-2 z-0 ${
          introPhase === 3 ? 'cursor-pointer' : 'cursor-default'
        }`}
        style={{ transform: serifTransform, transition: 'transform 0.1s ease-out' }}
        onClick={handleClick}
      >
        {serifLetters.map((letter, index) => (
          <img
            key={index}
            src={letter.src}
            alt={letter.alt}
            className={`${letter.className} transition-all duration-500 ${
              introPhase === 2
                ? 'opacity-0' // Start hidden during animation phase
                : introPhase === 3
                ? showAllSerif
                  ? 'opacity-100'
                  : 'opacity-0 hover:opacity-100'
                : 'opacity-0'
            }`}
            style={{
              transitionDelay: introPhase === 2 ? `${letter.delay}s` : '0s',
              opacity: introPhase === 2 && scrollY === 0 ? 1 : undefined, // Show during animation
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default IamTino;