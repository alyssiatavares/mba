/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { allProducts } from '../data/products';
import { Trash2, Plus, Minus, ArrowRight, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, addToCart } = useCart();
  const [hasCoupon, setHasCoupon] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const checkCoupon = () => {
      const coupon = localStorage.getItem('node_coupon');
      setHasCoupon(coupon === 'NODE10');
    };

    checkCoupon();

    const handleStorageChange = () => {
        checkCoupon();
    };

    window.addEventListener('storage', handleStorageChange);
    // Intersection observer or other ways to detect focus might be needed for smoother UX if they redeem in same tab
    // For now storage event + initial check is good.
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const removeCoupon = () => {
    localStorage.removeItem('node_coupon');
    setHasCoupon(false);
  };

  const cartItems = cart.map(item => {
    const product = allProducts.find(p => p.id === item.id);
    return {
      ...product,
      quantity: item.quantity
    };
  }).filter(item => item.id !== undefined);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price?.replace('$', '') || '0');
    return acc + (price * (item.quantity || 0));
  }, 0);

  const discount = hasCoupon ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const cartIds = new Set(cart.map(i => i.id));
  const suggestions = allProducts.filter(p => !cartIds.has(p.id)).slice(0, 3);

  function handleAddSuggestion(id: string) {
    addToCart(id);
    setAddedIds(prev => new Set(prev).add(id));
  }

  if (cartItems.length === 0) {
    return (
      <div className="pt-40 pb-20 px-6 text-center animate-in fade-in duration-700">
        <h1 className="text-4xl font-serif mb-8">Your Ritual Bag is empty</h1>
        <p className="text-charcoal/60 mb-12 max-w-md mx-auto">
          It seems you haven't selected any vessels or fragrances yet. 
          Return to the collection to begin your ritual.
        </p>
        <Link 
          to="/catalog" 
          className="inline-block px-12 py-4 bg-charcoal text-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-charcoal/90 transition-all"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Your <span className="italic">Ritual Bag</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Cart Items List */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-px bg-border-subtle thin-border">
              {cartItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-6 md:p-8 flex gap-6 md:gap-10"
                >
                  <div className="w-24 h-32 md:w-32 md:h-40 bg-surface flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-charcoal/40 mb-1">{item.category}</p>
                          <h3 className="text-xl md:text-2xl font-serif">{item.name}</h3>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id!)}
                          className="text-charcoal/30 hover:text-charcoal transition-colors p-1"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">{item.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center border border-charcoal/10">
                        <button 
                          onClick={() => updateQuantity(item.id!, item.quantity - 1)}
                          className="p-2 hover:bg-sand/30 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-xs font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id!, item.quantity + 1)}
                          className="p-2 hover:bg-sand/30 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-sm font-medium">
                        ${(parseFloat(item.price?.replace('$', '') || '0') * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-4">
            <div className="bg-sand/20 p-10 border border-border-subtle sticky top-32">
              <h2 className="text-2xl font-serif mb-8">Summary</h2>
              
              <div className="space-y-4 mb-8 pb-8 border-b border-charcoal/5">
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal/60">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                {hasCoupon && (
                   <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2 text-green-700">
                        <span className="font-medium uppercase text-[10px] tracking-widest">Discount (10%)</span>
                        <button onClick={removeCoupon} className="hover:text-red-500 transition-colors">
                            <X size={12} />
                        </button>
                    </div>
                    <span className="font-medium text-green-700">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal/60">Tax</span>
                  <span className="italic text-charcoal/40">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal/60">Shipping</span>
                  <span className="font-medium text-green-600 uppercase text-[10px] tracking-widest pt-1">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-10">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Estimated Total</span>
                <span className="text-3xl font-serif">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => setShowUpsell(true)}
                className="w-full py-5 bg-charcoal text-white text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-charcoal/90 transition-all flex items-center justify-center gap-3 group"
              >
                Begin Ritual Checkout
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-8">
                <p className="text-[10px] text-charcoal/40 leading-relaxed italic text-center">
                  All ritual components are ethically sourced and packaged in recyclable, 
                  forest-certified materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upsell Modal */}
      <AnimatePresence>
        {showUpsell && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-0 sm:pb-4"
            style={{ backgroundColor: 'rgba(26,26,26,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={() => setShowUpsell(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-border-subtle">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-text-muted font-medium block mb-1">
                    Complete Your Ritual
                  </span>
                  <h2 className="text-3xl font-serif italic">Others also added</h2>
                </div>
                <button
                  onClick={() => setShowUpsell(false)}
                  className="text-charcoal/40 hover:text-charcoal transition-colors mt-1"
                  aria-label="Close"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Suggestions */}
              <div className="px-8 py-6 flex flex-col gap-4">
                {suggestions.map((product, idx) => {
                  const added = addedIds.has(product.id);
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.4 }}
                      className="flex items-center gap-5 p-4 border border-border-subtle hover:border-charcoal/20 transition-colors"
                    >
                      <div className="w-16 h-20 bg-surface flex-shrink-0 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] uppercase tracking-widest text-text-muted mb-0.5">{product.category}</p>
                        <h3 className="font-serif text-lg leading-tight mb-1">{product.name}</h3>
                        {product.notes && (
                          <p className="text-[11px] text-text-muted truncate">{product.notes}</p>
                        )}
                        <p className="text-sm font-medium mt-1">{product.price}</p>
                      </div>
                      <button
                        onClick={() => handleAddSuggestion(product.id)}
                        disabled={added}
                        className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-medium border transition-all duration-300 ${
                          added
                            ? 'border-charcoal bg-charcoal text-white cursor-default'
                            : 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                        }`}
                      >
                        {added ? <><Check size={12} /> Added</> : '+ Add'}
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTA */}
              <div className="px-8 pb-8 pt-2 flex flex-col gap-3">
                <button
                  onClick={() => setShowUpsell(false)}
                  className="w-full py-4 bg-charcoal text-white text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-charcoal/90 transition-all flex items-center justify-center gap-3 group"
                >
                  Continue to Checkout
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => setShowUpsell(false)}
                  className="w-full py-3 text-[10px] uppercase tracking-[0.2em] text-text-muted hover:text-charcoal transition-colors"
                >
                  No thanks, proceed without adding
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
