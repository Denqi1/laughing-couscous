import { createElement } from 'react';
import { pathKeys } from '../../shared/lib/react-router';
import { ChoosingPage } from './choosing-page.ui';

export const choosingPageRoute = {
  path: pathKeys.choosing(),
  element: createElement(ChoosingPage),
};
