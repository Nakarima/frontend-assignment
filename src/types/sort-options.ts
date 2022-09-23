export type sortOption = 'Default' | 'Newest' | 'Oldest';
export const defaultSortOption: sortOption = 'Default';

export const isSortOption = (value: string): value is sortOption => {
  return ['Default', 'Newest', 'Oldest'].includes(value as sortOption);
};
