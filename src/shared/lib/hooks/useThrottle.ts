import { useCallback, useEffect } from 'react';

export function useThrottle(cb: (...args: any[]) => void, delay: number) {
  let on = false;
  return useCallback(
    (...args) => {
      if (!on) {
        cb(...args);
        setTimeout(() => {
          on = true;
        }, delay);
      }
    },
    [cb, delay]
  );
}
