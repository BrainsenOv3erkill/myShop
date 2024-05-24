import { useState, useEffect } from 'react';

const useTimer = (initialTimer) => {
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer]);

  return timer;
};

export default useTimer;