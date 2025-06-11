import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function StickyText() {
  const [visible, setVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 sm:left-36 sm:transform-none rounded-md p-2 sm:p-3 z-50 cursor-default flex flex-col items-center sm:items-start text-xs sm:text-sm bg-white mix-blend-difference"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p 
            className="text-center pt-0 sm:text-left text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            VALENTINO IVANOVSKI
            <br />
            <span className="hidden sm:inline">JUNIOR SOFTWARE DEVELOPER</span>
            <br className="hidden sm:block" />
            {currentTime.toLocaleString()}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StickyText;