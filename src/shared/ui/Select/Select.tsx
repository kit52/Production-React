import { Mods, classNames } from 'shared/lib/classNames/classNames';
import s from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';
export interface SelectOption {
  value: string;
  content: string;
}
interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (val: string) => void;
  readOnly?: boolean;
}
export const Select = memo(
  ({ className, label, options, value, onChange, readOnly }: SelectProps) => {
    const mods: Mods = {};
    const optionsList = useMemo(() => {
      return options?.map((option: SelectOption) => {
        return (
          <option className={s.option} value={option.value} key={value}>
            {option.content}
          </option>
        );
      });
    }, [options]);
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };
    return (
      <div className={classNames(s.Wrapper, mods, [className])}>
        {label && <span className={s.label}>{label}</span>}
        <select
          className={s.select}
          value={value}
          onChange={onChangeHandler}
          disabled={readOnly}
        >
          {optionsList}
        </select>
      </div>
    );
  }
);
