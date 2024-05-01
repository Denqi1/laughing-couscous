import { Route } from 'react-router-dom';
import { HomePage } from './home-page.ui';
import { pathKeys } from '../../shared/lib/react-router';

export function HomePageRoute() {
  return <Route path={pathKeys.home} element={<HomePage />} />;
}
