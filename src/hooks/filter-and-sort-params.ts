import { useSearchParams } from 'react-router-dom';

import { defaultFilterOption, isFilterOption } from 'types/filter-options';
import { defaultSortOption, isSortOption } from 'types/sort-options';

export const useFilterAndSortParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortParam = searchParams.get('sortBy');
  const filterParam = searchParams.get('filterBy');

  const correctSortParam = sortParam !== null && isSortOption(sortParam) ? sortParam : defaultSortOption;
  const correctFilterParam = filterParam !== null && isFilterOption(filterParam) ? filterParam : defaultFilterOption;

  const onSortChange = (value: string) => {
    setSearchParams(prev => {
      prev.set('sortBy', value);
      return prev;
    });
  };

  const onFilterChange = (value: string) => {
    setSearchParams(prev => {
      prev.set('filterBy', value);
      return prev;
    });
  };

  return {
    sortParam: correctSortParam,
    filterParam: correctFilterParam,
    onSortChange,
    onFilterChange,
  };
};
