import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center transform translate-y-3 gap-5">
      {/* Container for the image with hover effect */}
      <div
        className="relative w-25 h-25 mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background circle that transitions */}
        <div
          className={`absolute inset-0 rounded-full bg-black dark:bg-white transition-all duration-500 ease-in-out ${
            isHovered ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
        {/* Profile image */}
        <img
          src="src/assets/profile.jpg" // Replace with your actual image path
          alt="Valentino Ivanovski"
          className="absolute inset-0 w-full h-full rounded-full object-cover transition-all duration-500 ease-in-out"
        />
      </div>
      <p className="text-center text-md w-2/3 dark:text-white text-black">
        Hey, my name is Valentino Ivanovski, a 23 year old senior year Computer Science student at UP FAMNIT. I started my programming journey back in 2021, after being interested in 3D Modeling and Graphics Design for 6 years before that. This resulted in my desire to develop aesthetic websites while paying attention even to the slightest of details.
        <br/>
        <br/>
        A motto I always follow is the Law of the Five P's which states "Proper preparation prevents poor performance". No matter the situation, I always make sure to be prepared and ready to take over any challenge thats in my way.
        <br/>
        <br/>
        <a href="https://a.dropoverapp.com/cloud/download/207f18c1-22f5-44f9-bc10-d1a7de9b1802/b4385080-b0bd-47a6-8fc5-425330866f38" target="_blank" rel="noopener noreferrer">
          <u className="text-black dark:text-white">Download my resume.</u>
        </a>
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="https://instagram.com/valentino.ivanovski" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" />
        </a>
        <a href="https://github.com/valentino-ivanovski" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" />
        </a>
        <a href="https://linkedin.com/in/valentino-ivanovski" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
}

export default About;