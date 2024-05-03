import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { HomePage } from '../../pages/home';
import { DifficultyPage } from '../../pages/difficulty';
import { GamePage } from '../../pages/game';
import { CategoryPage } from '../../pages/category';
import { pathKeys } from '../../shared/lib/react-router';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={pathKeys.home} element={<HomePage />} />
      <Route path={pathKeys.category} element={<CategoryPage />} />
      <Route path={pathKeys.difficulty} element={<DifficultyPage />} />
      <Route path={pathKeys.match} element={<GamePage />} />
    </>
  )
);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
