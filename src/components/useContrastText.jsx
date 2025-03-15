// useContrastText.js
import { useEffect, useRef } from 'react';

function useContrastText() {
  const textRef = useRef(null);

  useEffect(() => {
    const updateTextColor = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const backgroundElement = document.elementFromPoint(rect.left, rect.top);
        if (backgroundElement) {
          const bgColor = window.getComputedStyle(backgroundElement).backgroundColor;
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            const [r, g, b] = rgb.map(Number);
            // Calculate luminance to determine if the background is light or dark
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            textRef.current.style.color = luminance > 0.5 ? 'black' : 'white';
          }
        }
      }
    };

    window.addEventListener('scroll', updateTextColor);
    window.addEventListener('mousemove', updateTextColor); // Update on hover/movement
    updateTextColor(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateTextColor);
      window.removeEventListener('mousemove', updateTextColor);
    };
  }, []);

  return textRef;
}

export default useContrastText;