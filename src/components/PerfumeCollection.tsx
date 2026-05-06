import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { perfumes } from '../data/products';

export default function PerfumeCollection() {
  // Use first 3 perfumes for home display
  const displayPerfumes = perfumes.slice(0, 3);

  return (
    <section className="py-24 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-[11px] uppercase tracking-[0.4em] text-text-muted font-medium block mb-6">
            The Olfactory Series
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8 tracking-tight">
            Signature <span className="font-node not-italic">Perfume Pearls</span>
          </h2>
          <p className="max-w-xl text-[15px] font-light text-text-muted leading-relaxed">
            Alcohol-free. Water-based. Bio-functional. Nøde fragrances are formulated with 
            biocompatible plant oils that hydrate skin while delivering a transcendent 
            scent experience designed for daily ritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 thin-border">
          {displayPerfumes.map((perfume, idx) => (
            <motion.div 
              key={perfume.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group flex flex-col bg-background p-10 ${idx !== displayPerfumes.length - 1 ? 'md:thin-border-r' : ''} border-b md:border-b-0 cursor-pointer`}
            >
              <div className="aspect-[3/4] overflow-hidden mb-10 bg-surface grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out">
                <img 
                  src={perfume.image} 
                  alt={perfume.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-auto">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted opacity-60 font-medium">
                    {perfume.number}
                  </span>
                  <Link to={`/catalog/${perfume.id}`} className="text-[12px] font-serif italic hover:text-charcoal transition-colors">
                    {perfume.price}
                  </Link>
                </div>
                <Link to={`/catalog/${perfume.id}`}>
                  <h3 className="text-2xl font-serif mb-4 leading-tight hover:italic transition-all">
                    {perfume.name}
                  </h3>
                </Link>
                <p className="text-[13px] text-text-muted/70 font-light leading-relaxed mb-8 line-clamp-3">
                  {perfume.description}
                </p>
                <Link to={`/catalog/${perfume.id}`} className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-charcoal/20 pb-1 group-hover:border-charcoal transition-all">
                  Shop the Pearl
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
