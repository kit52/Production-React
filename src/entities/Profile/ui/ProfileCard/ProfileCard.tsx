import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import s from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';

import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
  readOnly?: boolean;
}
export const ProfileCard = ({
  className,
  isLoading,
  error,
  data,
  onChangeLastName,
  onChangeFirstName,
  onChangeCity,
  onChangeAge,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency,
  readOnly,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  if (isLoading) {
    return (
      <div className={classNames(s.ProfileCard, {}, [className, s.loading])}>
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className={classNames(s.ProfileCard, {}, [className, s.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t(error)}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }
  const mods: Mods = {
    [s.editing]: !readOnly,
  };
  return (
    <div className={classNames(s.ProfileCard, mods, [className])}>
      <div className={s.data}>
        {data?.avatar && (
          <div className={s.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          className={s.input}
          value={data?.first}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstName}
          readOnly={readOnly}
        />
        <Input
          className={s.input}
          value={data?.lastName}
          placeholder={t('Ваша фамилия')}
          onChange={onChangeLastName}
          readOnly={readOnly}
        />
        <Input
          className={s.input}
          value={data?.age}
          placeholder={t('Ваша возраст')}
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          className={s.input}
          value={data?.city}
          placeholder={t('Город')}
          onChange={onChangeCity}
          readOnly={readOnly}
        />

        <Input
          className={s.input}
          value={data?.username}
          placeholder={t('Имя пользователя')}
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
          className={s.input}
          value={data?.avatar}
          placeholder={t('Аватар')}
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readOnly}
          className={s.input}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readOnly}
          className={s.input}
        />
      </div>
    </div>
  );
};
