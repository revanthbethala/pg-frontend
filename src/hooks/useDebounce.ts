import { useEffect, useRef, useState } from 'react';

export const useDebounce = (input: string, interval: number = 300): string => {
  const [debouncedVal, setDebouncedVal] = useState('');
  const timeoutRef = useRef<null | number>(null);
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDebouncedVal(input);
    }, interval);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [interval, input]);
  return debouncedVal;
};
