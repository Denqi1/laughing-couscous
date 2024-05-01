import { Route } from 'react-router-dom';
import { CategoryPage } from './category-page.ui';
import { pathKeys } from '../../shared/lib/react-router';

export const CategoryPageRoute = () => (
  <Route path={pathKeys.category} element={<CategoryPage />} />
);
