import React, { useState, useEffect } from 'react';

function IamTino({ onIntroComplete }) {
  const [showAllSerif, setShowAllSerif] = useState(false);
  const [introPhase, setIntroPhase] = useState(0); // 0: initial, 1: bold shown, 2: serif animating, 3: complete, 4: final phase

  // Handle intro animation
  useEffect(() => {
    // Show bold letters after 0.3s
    const boldTimer = setTimeout(() => {
      setIntroPhase(1);
    }, 300);

    // Start serif animation after 1.5s
    const serifTimer = setTimeout(() => {
      setIntroPhase(2);
    }, 1500);

    // Complete animation after all serif letters are shown
    const completeTimer = setTimeout(() => {
      setIntroPhase(3);
      if (onIntroComplete) onIntroComplete(); // Notify parent when intro is done
    }, 3000);

    // Final phase to change duration back to 200ms
    const finalPhaseTimer = setTimeout(() => {
      setIntroPhase(4);
    }, 3100);

    return () => {
      clearTimeout(boldTimer);
      clearTimeout(serifTimer);
      clearTimeout(completeTimer);
      clearTimeout(finalPhaseTimer);
    };
  }, [onIntroComplete]);

  const handleClick = () => {
    if (introPhase === 4) { // Only allow clicking after final phase
      setShowAllSerif((prev) => !prev);
    }
  };

  // Serif letter animation delays (0.1s between each letter)
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
                ? 'duration-500 opacity-0' // Start hidden during animation phase with 500ms duration
                : introPhase === 4
                ? showAllSerif
                  ? 'duration-200 opacity-100' // After final phase, 200ms duration
                  : 'duration-200 opacity-0 hover:opacity-100'
                : 'opacity-0'
            }`}
            style={{
              transitionDelay: introPhase === 2 ? `${letter.delay}s` : '0s',
              opacity: introPhase === 2 ? 1 : undefined, // Show during animation
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default IamTino;