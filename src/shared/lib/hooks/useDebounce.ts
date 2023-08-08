import { useCallback, useEffect } from 'react';

export function useDebounce(cb: (...args: any[]) => void, delay: number) {
  let timer: any = null;
  return useCallback(
    (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    },
    [cb, delay]
  );
}
