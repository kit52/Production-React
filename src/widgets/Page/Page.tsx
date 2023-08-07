import { classNames } from 'shared/lib/classNames/classNames';

import { MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveScrollActions } from 'features/SaveScroll';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollByPath } from 'features/SaveScroll/model/selectors/selectors';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
export const Page = (props: PageProps) => {
  const { children, className, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, location.pathname)
  );
  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });
  useInfinityScroll({
    trigger: triggerRef,
    wrapper: wrapperRef,
    callback: onScrollEnd,
  });
  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    console.log('ddd');
    dispatch(
      saveScrollActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: location.pathname,
      })
    );
  }, 500);
  return (
    <section
      ref={wrapperRef}
      className={classNames('', {}, [className, 'page-wrapper'])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef}></div>
    </section>
  );
};
