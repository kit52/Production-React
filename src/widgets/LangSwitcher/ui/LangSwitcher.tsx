import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(
        '',
        {},
        [className],
      )}
    >
      {t('Язык')}
    </Button>
  );
};
