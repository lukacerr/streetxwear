import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@/styles/main.scss';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import HomePage from '@/pages/HomePage';
import ItemDetailPage from '@/pages/ItemDetailPage';
import ItemListPage from '@/pages/ItemListPage';
import CategoryListPage from '@/pages/CategoryListPage';
import CartPage from '@/pages/CartPage';
import NotFoundPage from '@/pages/NotFoundPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          {/* HOME */}
          <Route index element={<HomePage />} />
          {['index', 'home'].map((x, i) => (
            <Route key={i} path={x} element={<HomePage />} />
          ))}

          {/* ITEMS (INDIVIDUAL) */}
          {['item', 'product'].map((x, i) => (
            <Route key={i} path={x}>
              <Route path=":itemId" element={<ItemDetailPage />} />
              <Route index element={<NotFoundPage />} />
            </Route>
          ))}

          {/* ITEMS (LIST) */}
          {['items', 'products'].map((x, i) => (
            <Route key={i} path={x}>
              <Route path=":categoryId" element={<ItemListPage />} />
              <Route index element={<ItemListPage />} />
            </Route>
          ))}

          {/* CATEGORIES */}
          {['category', 'categories'].map((x, i) => (
            <Route key={i} path={x}>
              <Route path=":categoryId" element={<ItemListPage />} />
              <Route index element={<CategoryListPage />} />
            </Route>
          ))}

          {/* CART */}
          {['cart', 'carro', 'carrito'].map((x, i) => (
            <Route key={i} path={x}>
              <Route index element={<CartPage />} />
              <Route path="*" element={<CartPage />} />
            </Route>
          ))}

          {/* NOTFOUND */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
