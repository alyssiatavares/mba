import { motion } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm thin-border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-medium text-charcoal/60">
          <Link to="/catalog" className="hover:text-charcoal transition-colors">Shop</Link>
          <Link to="/philosophy" className="hover:text-charcoal transition-colors">Philosophy</Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Link to="/" className="text-3xl font-serif tracking-[0.2em] font-semibold font-node">
            NØDE
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-medium text-charcoal/60">
            <Link to="/journal" className="hover:text-charcoal transition-colors">Journal</Link>
            <Link to="/cart" className="hover:text-charcoal transition-colors whitespace-nowrap">Bag ({cartCount})</Link>
          </div>
          <Link to="/cart" id="nav-bag-icon" className="relative group p-2">
            <ShoppingBag strokeWidth={1.25} size={20} className="text-charcoal/80 group-hover:text-charcoal transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-3 w-3 items-center justify-center rounded-full bg-charcoal text-[7px] text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden"
          >
            {isOpen ? <X strokeWidth={1.25} size={20} /> : <Menu strokeWidth={1.25} size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-background thin-border-b p-8 flex flex-col gap-6 text-[12px] uppercase tracking-[0.2em]"
        >
          <Link to="/catalog" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/philosophy" onClick={() => setIsOpen(false)}>Philosophy</Link>
          <Link to="/journal" onClick={() => setIsOpen(false)}>Journal</Link>
          <Link to="/" onClick={() => setIsOpen(false)}>Log In</Link>
        </motion.div>
      )}
    </nav>
  );
}
