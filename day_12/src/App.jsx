
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={<Product products={products} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
