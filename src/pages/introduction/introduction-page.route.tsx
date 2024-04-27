import { createElement } from 'react';
import { pathKeys } from '../../shared/lib/react-router';
import { IntroductionPage } from './introduction-page.ui';

export const introductionPageRoute = {
  path: pathKeys.introduction(),
  element: createElement(IntroductionPage),
};
