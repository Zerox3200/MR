import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Layout from './pages/Layout';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading/Loading';
import NotFound from './pages/notFound/NotFound';

const Home = lazy(() => import('./pages/Home/Home'))

function App() {

  const router = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
        { path: "*", element: <NotFound /> }
      ]
    }
  ])

  return <>
    <RouterProvider router={router}>
    </RouterProvider>
  </>
}

export default App;
