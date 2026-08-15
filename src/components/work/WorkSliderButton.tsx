'use client';

import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles?: string;
}

const WorkSliderButtons = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();
  const [navigationState, setNavigationState] = useState({
    isBeginning: swiper.isBeginning,
    isEnd: swiper.isEnd,
  });

  useEffect(() => {
    const updateNavigationState = () => {
      setNavigationState({
        isBeginning: swiper.isBeginning,
        isEnd: swiper.isEnd,
      });
    };

    updateNavigationState();
    swiper.on('slideChange', updateNavigationState);

    return () => {
      swiper.off('slideChange', updateNavigationState);
    };
  }, [swiper]);

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        aria-label="Previous project"
        disabled={navigationState.isBeginning}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold aria-hidden="true" className={iconStyles} />
      </button>
      <button
        className={btnStyles}
        aria-label="Next project"
        disabled={navigationState.isEnd}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold aria-hidden="true" className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
