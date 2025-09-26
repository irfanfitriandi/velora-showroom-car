import { useEffect, useState } from 'react';

export const useCountUp = (end: number, start = 0, duration = 1000, active = true) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!active) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, start, duration, active]);

  return count;
};
