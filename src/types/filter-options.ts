export type filterOption = 'All' | 'Sports' | 'Fashion';
export const defaultFilterOption: filterOption = 'All';

export const isFilterOption = (value: string): value is filterOption => {
  return ['All', 'Sports', 'Fashion'].includes(value as filterOption);
};
