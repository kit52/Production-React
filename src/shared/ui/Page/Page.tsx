import { classNames } from 'shared/lib/classNames/classNames';

import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
export const Page = (props: PageProps) => {
  const { children, className, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  useInfinityScroll({
    trigger: triggerRef,
    wrapper: wrapperRef,
    callback: onScrollEnd,
  });
  return (
    <section
      ref={wrapperRef}
      className={classNames('', {}, [className, 'page-wrapper'])}
    >
      {children}
      <div ref={triggerRef}></div>
    </section>
  );
};
