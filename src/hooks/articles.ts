import { useEffect, useMemo, useState } from 'react';

import { getArticles, IArticle } from 'services/article-service';
import { filterOption } from 'types/filter-options';
import { defaultSortOption, sortOption } from 'types/sort-options';

interface IProps {
  sortParam?: sortOption;
  filterParam?: filterOption;
}

export const useArticles = ({ sortParam, filterParam }: IProps) => {
  const [sports, setSports] = useState<IArticle[]>();
  const [fashion, setFashion] = useState<IArticle[]>();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles('Fashion')
      .then((data) => setFashion(data.articles))
      .catch(() => setHasError(true))
      .then(() =>
        getArticles('Sports')
          .then((data) => setSports(data.articles))
          .catch(() => setHasError(true)),
      )
      .then(() => setIsLoading(false));
  }, []);

  const articles = useMemo(() => {
    if (filterParam === 'Sports') {
      return sports;
    }
    if (filterParam === 'Fashion') {
      return fashion;
    }
    return [...(sports || []), ...(fashion || [])];
  }, [sports, fashion, filterParam]);

  const sorted = useMemo(() => {
    if (!articles) {
      return;
    }

    if (sortParam === defaultSortOption) {
      return articles;
    }

    if (sortParam === 'Newest') {
      return articles.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    }

    return articles.sort((a, b) => +new Date(a.date) - +new Date(b.date));
  }, [sortParam, articles]);

  return {
    articles: sorted,
    hasError,
    isLoading,
  };
};
