import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

const HomePage = lazy(() => import('./Pages/HomePage'));
const ProductPage = lazy(() => import('./Pages/ProductPage'));
const CategoryPage = lazy(() => import('./Pages/CategoryPage'));
const OrdersPage = lazy(() => import('./Pages/OrdersPage'));

const App = () => {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/categoria" element={<CategoryPage />} />
          <Route path="/meus-pedidos" element={<OrdersPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;


