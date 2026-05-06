/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Philosophy from './pages/Philosophy';
import Journal from './pages/Journal';
import JournalDetail from './pages/JournalDetail';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ShippingPolicy from './pages/ShippingPolicy';
import { CartProvider } from './context/CartContext';
import SubscribePopup from './components/SubscribePopup';

function ScrollToTop() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background selection:bg-charcoal selection:text-white">
          <Navbar />
          <SubscribePopup />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:productId" element={<ProductDetail />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:journalId" element={<JournalDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              {/* Fallback to home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
