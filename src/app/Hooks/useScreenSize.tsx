import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Set initial width on mount
      setWindowWidth(window.innerWidth);

      // Add event listener for resize
      window.addEventListener('resize', handleResize);

      // Clean up event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return windowWidth;
};

export default useScreenSize;