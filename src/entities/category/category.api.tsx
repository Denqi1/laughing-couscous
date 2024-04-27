import { instance } from '../../shared/lib/axios';
import { ENDPOINT_CATEGORIES } from './category.const';
import { CategoryModel } from './category.types';

async function requestCategories() {
  const response = await instance.get(ENDPOINT_CATEGORIES);
  return response.data;
}

export async function getCategories() {
  const data: CategoryModel[] = await requestCategories();
  return data;
}
