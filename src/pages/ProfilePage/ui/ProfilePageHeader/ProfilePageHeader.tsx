import { classNames } from 'shared/lib/classNames/classNames';
import s from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readOnly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);
  return (
    <div className={classNames(s.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readOnly ? (
        <Button
          className={s.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button
            className={s.editBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t('Отменить')}
          </Button>
          <Button
            className={s.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  );
};
