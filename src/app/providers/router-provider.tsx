import {
  RouterProvider,
  createBrowserRouter,
  redirect,
  useRouteError,
} from 'react-router-dom';
import { introductionPageRoute } from '../../pages/introduction';
import { Page404Route } from '../../pages/page-404';
import { pathKeys } from '../../shared/lib/react-router';

function BubbleError() {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

const router = createBrowserRouter([
  {
    errorElement: <BubbleError />,
    children: [introductionPageRoute, Page404Route],
  },
  { loader: async () => redirect(pathKeys.page404()), path: '*' },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
