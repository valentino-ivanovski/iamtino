import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Sketch from 'react-p5';

function About() {
  let particles = [];
  const particleCount = 100;
  const ferrofluidRadius = 100;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300).parent(canvasParentRef);
    p5.background(255);

    // Initialize particles in a circular pattern
    for (let i = 0; i < particleCount; i++) {
      const angle = p5.map(i, 0, particleCount, 0, p5.TWO_PI);
      const r = ferrofluidRadius * 0.5;
      const x = 150 + r * p5.cos(angle);
      const y = 150 + r * p5.sin(angle);
      particles.push({ x, y, baseX: x, baseY: y });
    }
  };

  const draw = (p5) => {
    p5.clear();
    p5.background(255);

    const mouseX = p5.mouseX;
    const mouseY = p5.mouseY;

    particles.forEach(particle => {
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = p5.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) * 0.1;
        const angle = p5.atan2(dy, dx);
        particle.x -= p5.cos(angle) * force;
        particle.y -= p5.sin(angle) * force;
      } else {
        // Return to base position
        particle.x += (particle.baseX - particle.x) * 0.05;
        particle.y += (particle.baseY - particle.y) * 0.05;
      }

      p5.fill(0);
      p5.noStroke();
      p5.ellipse(particle.x, particle.y, 5, 5);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center transform translate-y-8 gap-5">
      <p className="text-center text-md w-2/3 dark:text-white text-black">
        Hey, my name is Valentino Ivanovski, a 23 year old senior year Computer Science student at UP FAMNIT. I started my programming journey back in 2021, after being interested in 3D Modeling and Graphics Design for 6 years before that. This resulted in my desire to develop aesthetic websites while paying attention even to the slightest of details.
        <br/>
        <br/>
        A motto I always follow is the Law of the Five P's which states "Proper preparation prevents poor performance". No matter the situation, I always make sure to be prepared and ready to take over any challenge thats in my way.
        <br/>
        <br/>
        <a href="https://a.dropoverapp.com/cloud/download/207f18c1-22f5-44f9-bc10-d1a7de9b1802/b4385080-b0bd-47a6-8fc5-425330866f38" target="_blank" rel="noopener noreferrer"><u className='text-black dark:text-white'>Download my resume.</u></a>
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
      <div className="mt-8">
        <Sketch setup={setup} draw={draw} />
      </div>
    </div>
  );
}

export default About;