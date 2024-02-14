import { useState, useEffect } from 'react';

const useResponsive = (query, start) => {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    let mediaQuery = '';

    switch (query) {
      case 'up':
        mediaQuery = `(min-width:${start}px)`;
        break;
      case 'down':
        mediaQuery = `(max-width:${start}px)`;
        break;
      case 'between':
        const [min, max] = start;
        mediaQuery = `(min-width:${min}px) and (max-width:${max}px)`;
        break;
      case 'only':
        const [only] = start;
        mediaQuery = `(min-width:${only}px) and (max-width:${only}px)`;
        break;
      default:
        break;
    }

    const mq = window.matchMedia(mediaQuery);
    setIsMatching(mq.matches);

    const handleChange = (event) => {
      setIsMatching(event.matches);
    };

    mq.addListener(handleChange);

    return () => {
      mq.removeListener(handleChange);
    };
  }, [query, start]);

  return isMatching;
};

export default useResponsive;
