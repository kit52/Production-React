import { MutableRefObject, useEffect } from 'react';

interface useInfinityScrollProps {
  trigger: MutableRefObject<HTMLElement>;
  wrapper: MutableRefObject<HTMLElement>;
  callback?: () => void;
}
export function useInfinityScroll({
  trigger,
  wrapper,
  callback,
}: useInfinityScrollProps) {
  useEffect(() => {
    let observer = null;
    const wrapperElement = wrapper.current;
    const triggerElement = trigger.current;

    let options = {
      root: wrapperElement,
      rootMargin: '1px',
      threshold: 1.0,
    };
    if (callback) {
      observer = new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);
      observer.observe(triggerElement);
    }
  }, [callback, wrapper, trigger]);
}
