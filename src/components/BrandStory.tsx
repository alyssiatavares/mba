import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] bg-surface overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=1000" 
                alt="Botanical alchemy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/5" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-text-muted font-medium block mb-8">
                The Philosophy
              </span>
              <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-[1.1] text-balance">
                Elevated elements for a <span className="font-node not-italic">Sacred Ritual</span>.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] leading-relaxed font-light text-text-muted">
                <p>
                  At Nøde, we believe luxury should be bio-compatible. Our alcohol-free, water-based fragrances 
                  are crafted with the highest concentration of therapeutic-grade botanicals, designed 
                  to resonate with your body's natural biorhythms.
                </p>
                <p>
                  From our signature Angelica Root to sustainably harvested resins, each ingredient is 
                  selected for its ability to promote lymphatic health and skin barrier integrity, 
                  while providing a transcendent olfactory experience.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-12">
                <div>
                  <h4 className="text-2xl font-serif mb-2 italic">0%</h4>
                  <p className="text-[11px] uppercase tracking-widest font-medium text-text-muted opacity-60">Alcohol & Toxins</p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-2 italic">100%</h4>
                  <p className="text-[11px] uppercase tracking-widest font-medium text-text-muted opacity-60">Bio-Functional</p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-2 italic">Vegan</h4>
                  <p className="text-[11px] uppercase tracking-widest font-medium text-text-muted opacity-60">Cruelty-Free</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
