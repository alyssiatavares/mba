/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { allProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = allProducts.find(p => p.id === productId);
  const { addToCart } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (!product) {
    return (
      <div className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-3xl font-serif mb-8">Product not found</h1>
        <Link to="/catalog" className="text-charcoal/60 hover:text-charcoal transition-colors">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Start animation
    setIsAnimating(true);
    
    // Actually add to cart after a short delay or immediately
    setTimeout(() => {
        addToCart(product.id);
        setIsAnimating(false);
    }, 800);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/catalog" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors mb-12">
          <ArrowLeft size={14} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Product Image Section */}
          <div className="relative aspect-[4/5] bg-surface overflow-hidden group">
            <motion.img 
              ref={imageRef}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            
            {/* Minimal Logo Overlay to simulate branded glass/label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center">
                <span className="text-[120px] font-node opacity-[0.08] text-charcoal select-none tracking-tighter mix-blend-overlay">
                  Nøde
                </span>
                <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 text-charcoal font-medium -mt-4">
                  Copenhagen
                </span>
              </div>
            </div>

            {/* Flying animation overlay */}
            <AnimatePresence>
              {isAnimating && (
                <motion.div
                  initial={{ 
                    position: 'fixed',
                    top: imageRef.current?.getBoundingClientRect().top,
                    left: imageRef.current?.getBoundingClientRect().left,
                    width: imageRef.current?.getBoundingClientRect().width,
                    height: imageRef.current?.getBoundingClientRect().height,
                    opacity: 1,
                    zIndex: 100,
                    borderRadius: '0%'
                  }}
                  animate={{ 
                    top: document.getElementById('nav-bag-icon')?.getBoundingClientRect().top || 0,
                    left: document.getElementById('nav-bag-icon')?.getBoundingClientRect().left || 0,
                    width: 20,
                    height: 20,
                    opacity: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="bg-charcoal pointer-events-none overflow-hidden"
                >
                    <img src={product.image} className="w-full h-full object-cover opacity-50" alt="" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Content Section */}
          <div className="flex flex-col">
            <div className="mb-12">
              <span className="text-[10px] uppercase tracking-[0.4em] text-charcoal/40 font-medium mb-4 block">
                {product.category} — {product.number}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
                {product.name}
              </h1>
              <p className="text-2xl font-light text-charcoal/80">
                {product.price}
              </p>
            </div>

            <div className="space-y-12 mb-16">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4">Description</h3>
                <p className="text-charcoal/70 leading-relaxed font-light text-lg">
                  {product.description}
                </p>
              </div>

              {product.notes && (
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-4">Olfactory Notes</h3>
                  <p className="text-charcoal/70 leading-relaxed font-medium">
                    {product.notes}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <button 
                ref={buttonRef}
                onClick={handleAddToCart}
                disabled={isAnimating}
                className="w-full md:w-auto px-16 py-5 bg-charcoal text-white text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-charcoal/90 transition-all disabled:opacity-50"
              >
                {isAnimating ? 'Adding to Ritual...' : 'Add to Bag'}
              </button>
              <p className="text-[10px] text-charcoal/40 italic">
                * Complementary shipping on orders over $150.
              </p>
            </div>

            {/* Additional details (static for aesthetic) */}
            <div className="mt-24 pt-12 border-t border-charcoal/5 grid grid-cols-2 gap-8">
                <div>
                    <h4 className="text-[9px] uppercase tracking-widest font-bold mb-2">Source</h4>
                    <p className="text-[11px] text-charcoal/60">Grasse, France & Nordic Archipelago</p>
                </div>
                <div>
                    <h4 className="text-[9px] uppercase tracking-widest font-bold mb-2">Ritual</h4>
                    <p className="text-[11px] text-charcoal/60">Best applied to pulse points or during meditation.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
