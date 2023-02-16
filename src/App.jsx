import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
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
    element: <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout />
      </PersistGate>
    </Provider>,
    errorElement: <ErrorPage />,
    children: [
      { path: '/' || '/home', element: <HomePage /> },
      { path: '/home', element: <HomePage /> },
      { path: '/product/:id', element: <ProductPage />, },
      { path: 'products/:id', element: <ProductsPage /> },]
  }
]);

const App = () => {
  
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App