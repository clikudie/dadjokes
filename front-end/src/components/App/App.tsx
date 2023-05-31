import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { Header } from '../Header';
import { Home, NewJoke } from '../../routes';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "newjoke",
        element: <NewJoke />,
      }
    ]
  }
]);

export function App() {
  return <RouterProvider router={router} />
}
