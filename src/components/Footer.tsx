import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { X, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#262626', '#E5E1DA', '#d4cebc']
    });

    setShowPopup(true);
    setEmail('');
  };

  const handleRedeem = () => {
    localStorage.setItem('node_coupon', 'NODE10');
    setShowPopup(false);
    // Optional: trigger a custom event or just let cart page handle it on mount/focus
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <footer className="bg-surface pt-20 pb-10 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="md:col-span-2 lg:col-span-2">
            <Link to="/" className="text-2xl md:text-3xl font-serif tracking-[0.1em] font-node mb-8 block">
              NØDE
            </Link>
            <p className="text-sm text-charcoal/60 leading-relaxed max-w-sm">
              Functional fragrance and wellness essentials for the intentional home. 
              Certified toxin-free, alcohol-free, and bio-functional.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-6">Shop</h4>
            <ul className="flex flex-col gap-4 text-xs text-charcoal/60 uppercase tracking-widest">
              <li><Link to="/catalog" className="hover:text-charcoal transition-colors">Fragrance</Link></li>
              <li><Link to="/catalog" className="hover:text-charcoal transition-colors">Body Ritual</Link></li>
              <li><Link to="/catalog" className="hover:text-charcoal transition-colors">Discovery Set</Link></li>
              <li><Link to="/catalog" className="hover:text-charcoal transition-colors">Candles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-6">About</h4>
            <ul className="flex flex-col gap-4 text-xs text-charcoal/60 uppercase tracking-widest">
              <li><Link to="/philosophy" className="hover:text-charcoal transition-colors">Our Story</Link></li>
              <li><Link to="/philosophy" className="hover:text-charcoal transition-colors">Ingredients</Link></li>
              <li><Link to="/philosophy" className="hover:text-charcoal transition-colors">The Ritual</Link></li>
              <li><Link to="/journal" className="hover:text-charcoal transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div className="md:col-span-full lg:col-span-1">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-6">Subscribe</h4>
            <form onSubmit={handleSubscribe} className="flex border-b border-charcoal/20 pb-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent text-[10px] w-full focus:outline-none placeholder:text-charcoal/30 tracking-widest"
              />
              <button type="submit" className="text-[10px] font-bold tracking-widest ml-4">JOIN</button>
            </form>
            <p className="text-[9px] text-charcoal/40 mt-4 leading-relaxed italic">
              Join the Alchemy of Silence. Early access and ritual guides.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 thin-border-t gap-6">
          <div className="text-[9px] uppercase tracking-widest text-charcoal/40">
            © 2026 Nøde Wellness LLC. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[9px] uppercase tracking-widest text-charcoal/40">
            <Link to="/privacy-policy" className="hover:text-charcoal">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-charcoal">Terms of Service</Link>
            <Link to="/shipping-policy" className="hover:text-charcoal">Shipping & Returns</Link>
          </div>
        </div>
      </div>

      {/* Subscription Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-background p-10 md:p-16 max-w-lg w-full text-center shadow-2xl border border-charcoal/5"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 text-charcoal/20 hover:text-charcoal transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-sand/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="text-charcoal" />
              </div>

              <h3 className="text-3xl font-serif italic mb-4">Welcome to the Nøde Ritual</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-10">
                You are now part of our inner circle. As a gesture of gratitude, enjoy 10% off your first ritual.
              </p>

              <div className="bg-sand/20 py-6 px-10 border border-charcoal/5 mb-10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-charcoal/40 block mb-2">Your Coupon Code</span>
                <span className="text-2xl font-serif tracking-[0.2em]">NODE10</span>
              </div>

              <button 
                onClick={handleRedeem}
                className="w-full py-4 bg-charcoal text-white text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-charcoal/90 transition-all"
              >
                Redeem Discount
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
