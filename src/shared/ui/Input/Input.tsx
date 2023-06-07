import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
  lazy,
} from 'react';
import s from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;

  onChange?: (value: string) => void;
}
export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const ref = useRef<HTMLInputElement>();
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };
    const onFocus = () => {
      setIsFocused(true);
    };
    const onSelect = (e: any) => {
      setCaretPosition(e?.target?.selectionStart || 0);
    };
    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);
    return (
      <div className={s.InputWrapper}>
        {placeholder && (
          <div className={s.placeholder}>{`${placeholder}>`}</div>
        )}
        <div className={s.caretWrapper}>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value}
            className={s.input}
            onBlur={onBlur}
            onFocus={onFocus}
            onSelect={onSelect}
          />
          {isFocused && (
            <span
              className={s.caret}
              style={{
                left: `${caretPosition * 9}px`,
              }}
            />
          )}
        </div>
      </div>
    );
  },
);
