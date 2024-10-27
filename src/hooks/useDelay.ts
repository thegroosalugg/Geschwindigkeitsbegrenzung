import { useEffect, useState } from 'react';

const useDelay = (delay: number, condition: boolean) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    if (condition) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, condition]);

  return { isAnimating, setIsAnimating };
};

export default useDelay;
