import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate,className }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  if (!timeLeft) {
    return <div className={`${className}`}>WE ARE LIVE🎉</div>;
  }

  return (
  <div className={className}>
      <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
        <div className="bg-white bg-opacity-20 rounded-lg p-1 sm:p-2">
          <div className="text-sm sm:text-lg lg:text-2xl font-bold">{timeLeft.days}</div>
          <div className="text-xs">DAYS</div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-1 sm:p-2">
          <div className="text-sm sm:text-lg lg:text-2xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs">HRS</div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-1 sm:p-2">
          <div className="text-sm sm:text-lg lg:text-2xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs">MIN</div>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-1 sm:p-2">
          <div className="text-sm sm:text-lg lg:text-2xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs">SEC</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
