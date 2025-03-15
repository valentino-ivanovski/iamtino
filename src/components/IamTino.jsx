import React, { useState } from 'react';

function IamTino() {
  const [showAllSerif, setShowAllSerif] = useState(false);

  console.log('Component rendered, showAllSerif:', showAllSerif);

  const handleClick = () => {
    setShowAllSerif((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center relative dark:bg-black w-screen h-screen">
      <div className="flex flex-row justify-center items-center dark:invert absolute scale-50 sm:scale-100 bg-transparent w-2/3 gap-4">
        <img src="src/assets/Bold/I.svg" alt="I" className="pr-5 pl-0 translate-x-[-5px]" />
        <img src="src/assets/Bold/A.svg" alt="A" className="pl-5 pr-0 translate-x-[5px]" />
        <img src="src/assets/Bold/M.svg" alt="M" className="pr-5 pl-0 translate-x-[-3px]" />
        <img src="src/assets/Bold/T.svg" alt="T" className="pl-5 pr-0 translate-x-[3px]" />
        <img src="src/assets/Bold/I2.svg" alt="I2" className="pl-0 pr-0 translate-x-[0px]" />
        <img src="src/assets/Bold/N.svg" alt="N" className="pl-0 pr-0 translate-x-[-2px]" />
        <img src="src/assets/Bold/O.svg" alt="O" className="pl-0 pr-0 translate-x-[2px]" />
      </div>
      <div
        className={`iamtino2 flex flex-row justify-center invert items-center mb-2 absolute scale-50 sm:scale-100 bg-transparent w-2/3 gap-2 z-0 cursor-pointer`} onClick={handleClick} >
        <img src="src/assets/Serif/I.svg" alt="I" className={`pr-5 pl-0 -translate-x-[3px] transition-all duration-100 ${showAllSerif ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`} />
        <img src="src/assets/Serif/A.svg" alt="A" className={`pl-5 pr-0 pb-1 translate-x-[4px] transition-all duration-100 ${showAllSerif ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`} />
        <img src="src/assets/Serif/M.svg" alt="M" className={`pr-5 pl-0 -translate-x-[3px] transition-all duration-100 ${showAllSerif ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`} />
        <img src="src/assets/Serif/T.svg" alt="T" className={`pl-5 pr-0 translate-x-[6px] transition-all duration-100 ${showAllSerif ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`} />
        <img src="src/assets/Serif/I2.svg" alt="I2" className={`pl-0 pr-0 translate-x-[2px] transition-all duration-100 ${showAllSerif ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`} />
        <img src="src/assets/Serif/N.svg" alt="N" className={`pl-0 pr-0 -translate-x-[8px] transition-all duration-100 ${showAllSerif ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`} />
        <img src="src/assets/Serif/O.svg" alt="O" className={`pl-0 pr-0 -translate-x-[6px] transition-all duration-100 ${showAllSerif ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`} />
      </div>
    </div>
  );
}

export default IamTino;