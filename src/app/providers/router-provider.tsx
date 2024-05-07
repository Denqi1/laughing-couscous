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
import { ResultPage } from '../../pages/result';

const routeKeys = {
  home: '/',
  category: 'category/',
  difficulty: 'category/:categoryName/',
  match: 'category/:categoryName/difficulty/:difficultyLevel/',
  result: 'category/:categoryName/difficulty/:difficultyLevel/game-result/',
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routeKeys.home} element={<HomePage />} />
      <Route path={routeKeys.category} element={<CategoryPage />} />
      <Route path={routeKeys.difficulty} element={<DifficultyPage />} />
      <Route path={routeKeys.match} element={<GamePage />} />
      <Route path={routeKeys.result} element={<ResultPage />} />
    </>
  )
);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
