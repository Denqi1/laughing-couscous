import { instance } from '@/shared/lib/axios';

import { ENDPOINT_CATEGORIES } from '../lib/constants';
import { CategoriesDataResponse } from './getCategories.types';

export async function getCategories() {
  const { data }: CategoriesDataResponse =
    await instance.get(ENDPOINT_CATEGORIES);

  return data;
}
