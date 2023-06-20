import { classNames } from 'shared/lib/classNames/classNames';

import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../model/types/country';
interface CountrySelectProps {
  className?: string;
  value?: string;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}
const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Russia, content: Country.Russia },
];
export const CountrySelect = memo(
  ({ className, value, onChange, readOnly }: CountrySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Country);
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
