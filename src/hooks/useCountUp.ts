'use client';

import { useState, useEffect } from 'react';

export function useCountUp(
  end: number,
  durationMs: number = 2000,
  delayMs: number = 0,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    let timeoutId: NodeJS.Timeout;

    const startAnimation = () => {
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / durationMs, 1);
        const easeProgress =
          progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      animationFrame = requestAnimationFrame(animate);
    };

    // eslint-disable-next-line prefer-const
    timeoutId = setTimeout(startAnimation, delayMs);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, durationMs, delayMs]);

  return count;
}
