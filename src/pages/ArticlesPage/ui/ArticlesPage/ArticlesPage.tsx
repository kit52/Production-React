import { Article, ArticleList } from 'entities/Article';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { article } from 'shared/mock/articleMock';
import { Input } from 'shared/ui/Input/Input';

const ArticleDetailsPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <ArticleList articles={[article as Article]} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
