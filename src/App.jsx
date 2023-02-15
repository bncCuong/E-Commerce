import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import { HomePage, ProductPage, ProductsPage, ErrorPage } from './pages';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import "./App.scss"

const Layout = () => {
  return <div className='app'>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/home', element: <HomePage /> },
      { path: '/product/:id', element: <ProductPage /> },
      { path: 'home/products/:id', element: <ProductsPage /> },]
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App