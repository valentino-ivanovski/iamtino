import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center transform translate-y-3">
      <p className="text-center dark:brightness-85 cursor-default text-md sm:text:lg w-3/4 sm:w-2/3 dark:text-white text-black">
        Hey, my name is Valentino Ivanovski, a 23 year old senior year Computer Science student at UP FAMNIT. I started my programming journey back in 2021, after being interested in 3D Modeling and Graphics Design since 2015. This resulted in my desire to develop aesthetic websites while paying attention even to the slightest of details.
        <br/>
        <br/>
        A motto I always follow is the Law of the Five P's which states "Proper preparation prevents poor performance". No matter the situation, I always make sure to be prepared and ready to take over any challenge that's in my way.
        <br/>
        <br/>
        <a href="https://a.dropoverapp.com/cloud/download/3d4604ab-d855-4f05-b8b7-cd3caec4f708/e250416c-0d27-4bbb-a876-6aaa8d18a177" target="_blank" rel="noopener noreferrer">
          <u className="text-black dark:text-white ">Download my resume</u>
        </a>  or
        <a href="mailto:valentino.ivanovski@icloud.com"> <u className=' text-black dark:text-white'>reach out.</u></a><br/>
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="https://instagram.com/valentino.ivanovski" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-black dark:brightness-85 dark:text-white hover:text-gray-700 dark:hover:text-gray-300" />
        </a>
        <a href="https://github.com/valentino-ivanovski" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-black dark:brightness-85 dark:text-white hover:text-gray-700 dark:hover:text-gray-300" />
        </a>
        <a href="https://linkedin.com/in/valentino-ivanovski" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-black dark:brightness-85 dark:text-white hover:text-gray-700 dark:hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
}

export default About;