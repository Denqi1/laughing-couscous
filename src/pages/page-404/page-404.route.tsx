import { createElement } from 'react';
import { pathKeys } from '../../shared/lib/react-router';
import { Page404 } from './page-404.ui';

export const Page404Route = {
  path: pathKeys.page404(),
  element: createElement(Page404),
};
