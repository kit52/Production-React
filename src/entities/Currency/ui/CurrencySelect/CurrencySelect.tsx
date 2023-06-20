import { classNames } from 'shared/lib/classNames/classNames';

import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
interface CurrencySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}
const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = memo(
  ({ className, value, onChange, readOnly }: CurrencySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Currency);
      },
      [onChange]
    );
    return (
      <Select
        label={t('Валюта')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        className={classNames('', {}, [className])}
        readOnly={readOnly}
      />
    );
  }
);
