import  { useEffect, useState } from 'react';

// Custom hook for getting browser width
export const useBrowserWidth = () => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setBrowserWidth(window.innerWidth);
  };

  useEffect(() => {
    // Throttle the resize event to improve performance
    const handleResizeThrottled = () => {
      let timeoutId: any;
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          handleResize();
        }, 100);
      };
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResizeThrottled());

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResizeThrottled());
    };
  }, []);

  return browserWidth;
};
