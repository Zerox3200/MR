import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Layout from './pages/Layout';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading/Loading';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import LoginProtector from './Loginprotector.jsx';
const Home = lazy(() => import('./pages/Home/Home'))

function App() {

  const router = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
        { path: "englishianoAdmin", element: <Suspense fallback={<Loading />}><Login /></Suspense> },
        { path: "Admin", element: <Suspense fallback={<Loading />}><LoginProtector><Admin /></LoginProtector></Suspense> },
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
