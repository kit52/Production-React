import { ArticleDetails } from 'entities/Article';
import { NotFoundPage } from 'pages/NotFoundPage';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  if (!id) {
    return <NotFoundPage />;
  }
  return (
    <div>
      {t('Articel detail')}
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
