import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { candles } from '../data/products';

export default function CandleCollection() {
  const displayCandles = candles.slice(0, 2);
  return (
    <section className="py-24 md:py-40 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 items-end">
          <div className="lg:col-span-8">
            <span className="text-[11px] uppercase tracking-[0.4em] text-text-muted font-medium block mb-6">
              Atmospheric Wellness
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic tracking-tight">
              Artisanal <span className="font-node not-italic">Toxin-Free Candles</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[14px] font-light text-text-muted leading-relaxed lg:border-l lg:thin-border lg:pl-10 lg:py-4">
              More than scent, Nøde candles are atmospheric tools for lymphatic flow 
              and mental clarity. Crafted with ethical wax and zero synthetic fixatives.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {displayCandles.map((candle, idx) => (
            <motion.div 
              key={candle.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[5/4] overflow-hidden mb-10 bg-surface relative">
                <img 
                  src={candle.image} 
                  alt={candle.name}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border-subtle">
                   <span className="text-[9px] uppercase tracking-widest font-bold">55 Hours Burn Time</span>
                </div>
              </div>
              <div className="max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <Link to={`/catalog/${candle.id}`}>
                    <h3 className="text-3xl font-serif italic hover:not-italic transition-all">{candle.name}</h3>
                  </Link>
                  <span className="text-[14px] font-medium">{candle.price}</span>
                </div>
                <p className="text-[15px] font-light text-text-muted/80 leading-relaxed mb-8 line-clamp-3">
                  {candle.description}
                </p>
                <Link to={`/catalog/${candle.id}`} className="inline-block text-[11px] uppercase tracking-[0.2em] font-medium px-8 py-3 bg-charcoal text-white hover:bg-charcoal/90 transition-all">
                  Purchase the Vessel
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
