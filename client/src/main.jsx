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
import AboutUsPage from '@/pages/AboutUsPage';
import NotFoundPage from '@/pages/NotFoundPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          {/* HOME */}
          <Route index element={<HomePage />} />
          {['index', 'home', 'main', 'casa'].map((x, i) => (
            <Route key={i} path={x} element={<HomePage />} />
          ))}

          {/* ITEMS (INDIVIDUAL) */}
          {['item', 'product', 'producto'].map((x, i) => (
            <Route key={i} path={x}>
              <Route path=":itemId" element={<ItemDetailPage />} />
              <Route index element={<ItemListPage />} />
            </Route>
          ))}

          {/* ITEMS (LIST) */}
          {['items', 'products', 'productos'].map((x, i) => (
            <Route key={i} path={x}>
              <Route path=":categoryId">
                <Route index element={<ItemListPage />} />
                <Route path=":subcategoryId" element={<ItemListPage />} />
              </Route>
              <Route index element={<ItemListPage />} />
            </Route>
          ))}

          {/* CATEGORIES */}
          {['category', 'categories', 'categoria', 'categorias'].map((x, i) => (
            <Route key={i} path={x}>
              <Route path=":categoryId">
                <Route index element={<ItemListPage />} />
                <Route path=":subcategoryId" element={<ItemListPage />} />
              </Route>
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

          {/* ABOUT US */}
          {['about', 'about-us', 'contact', 'sobre-nosotros', 'contacto'].map((x, i) => (
            <Route key={i} path={x}>
              <Route index element={<AboutUsPage />} />
              <Route path="*" element={<AboutUsPage />} />
            </Route>
          ))}

          {/* NOT FOUND */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
