/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import {motion} from 'motion/react';
import {candles, perfumes, Product} from '../data/products';
import {ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';

export default function Catalog() {
  const [filter, setFilter] = useState<'all' | 'candle' | 'perfume'>('all');

  const filteredProducts = [
    ...(filter === 'all' || filter === 'candle' ? candles : []),
    ...(filter === 'all' || filter === 'perfume' ? perfumes : [])
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="px-6 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
                The Complete <br />
                <span className="italic font-light">Inventory</span>
              </h1>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                Explore our full collection of functional fragrances and artisanal wellness 
                rituals. Every product is a study in precision and sensory harmony.
              </p>
            </div>
            
            {/* Filter */}
            <div className="flex gap-4 border-b border-charcoal/10 pb-4">
              {(['all', 'perfume', 'candle'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${
                    filter === type ? 'text-charcoal' : 'text-charcoal/30 hover:text-charcoal/60'
                  }`}
                >
                  {type === 'all' ? 'All' : type + 's'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 thin-border border-l-0 border-r-0">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 bg-sand/30 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 italic">Not sure where to begin?</h2>
          <button className="flex items-center gap-3 mx-auto text-[11px] uppercase tracking-[0.3em] font-medium group">
            Consult the Ritual Concierge
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
}

function ProductCard({product, index}: {product: Product; index: number; key?: string}) {
  return (
    <Link to={`/catalog/${product.id}`} className="block">
      <motion.div 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{delay: (index % 4) * 0.1, duration: 0.8}}
        className="group aspect-[3/4] relative overflow-hidden thin-border-r border-b last:thin-border-r-0"
      >
        <div className="absolute inset-0 bg-sand/10 transition-colors group-hover:bg-sand/0 pointer-events-none z-10" />
        
        {/* Product Image */}
        <div className="h-full w-full overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Info Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1">{product.category}</p>
          <h3 className="text-white text-xl font-serif mb-4">{product.name}</h3>
          <p className="text-white/80 text-xs leading-relaxed line-clamp-3 mb-6">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
              <span className="text-white text-sm font-medium">{product.price}</span>
              <div className="text-white/80 hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
          </div>
        </div>

        {/* Static Label (Visible by default, hidden on hover) */}
        <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end group-hover:opacity-0 transition-opacity duration-300 z-20">
          <div>
            <p className="text-charcoal/40 text-[10px] uppercase tracking-widest font-mono">{product.number}</p>
            <h3 className="text-charcoal text-lg font-serif">{product.name}</h3>
          </div>
          <p className="text-charcoal/40 text-xs font-medium">{product.price}</p>
        </div>
      </motion.div>
    </Link>
  );
}
