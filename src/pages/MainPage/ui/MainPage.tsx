import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t } = useTranslation();
  return (
    <h1>
      {t('Главная страница')}
      <button>dsad</button> <button>dsad</button>
    </h1>
  );
}
