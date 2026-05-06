import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={itemVars} className="mb-8">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-text-muted">
              Skin Rituals — Vol. 01
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVars}
            className="text-6xl md:text-[88px] font-serif italic font-light tracking-tight mb-10 leading-[0.9] text-balance"
          >
            Intentional <br /> 
            <span className="font-node not-italic font-normal">Simplicity for the</span> <br />
            Modern Soul
          </motion.h1>

          <motion.p 
            variants={itemVars}
            className="max-w-md mx-auto text-[15px] text-text-muted leading-relaxed font-light mb-14 text-balance px-4"
          >
            A curated collection of essential elements, formulated with botanical 
            precision to reveal your skin's natural architecture.
          </motion.p>

          <motion.div variants={itemVars}>
            <Link to="/catalog" className="inline-block px-12 py-4 border border-charcoal text-charcoal text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-charcoal hover:text-white transition-all duration-500">
              Experience the Collection
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mt-16 w-full max-w-5xl aspect-[16/9] bg-surface relative overflow-hidden"
        >
          <img
            src="/hero-candle.png"
            alt="NØDE Dark Root candle"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
