import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Toaster } from 'react-hot-toast';
import AllProduct from './components/AllProduct.jsx';
import CartSidebar from './pages/CartSidebar.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import { useAppContext } from './context/AppContext.jsx';
import Checkout from './components/Checkout.jsx';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {showCheckout} = useAppContext();
  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
      <Toaster />
      <Navbar openCart={() => setIsCartOpen(true)} />
      {showCheckout ? <Checkout /> : null}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProduct />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
