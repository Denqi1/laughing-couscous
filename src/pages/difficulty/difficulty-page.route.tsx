import { createElement } from 'react';
import { DifficultyPage } from './difficulty-page.ui';
import { pathKeys } from '../../shared/lib/react-router';

export const difficultyPageRoute = {
  path: pathKeys.play.difficulty({ selectedCategory: 'nafany' }),
  element: createElement(DifficultyPage),
};
