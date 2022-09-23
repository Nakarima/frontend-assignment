import { filterOption } from 'types/filter-options';

export interface IArticle {
  id: number;
  date: string;
  title: string;
  preamble: string | null;
  image: string;
}

export const getArticles = async (
  filterParam?: filterOption,
): Promise<{ articles: IArticle[] }> => {
  const filter = filterParam ? `/${filterParam.toLowerCase()}` : '';
  const response = await fetch(`http://localhost:6010/articles${filter}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  
  const data = await response.json();
  return data;
};
