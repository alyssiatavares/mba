/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Philosophy() {
  const sections = [
    {
      title: "The Alchemy of Silence",
      subtitle: "RESTORATION THROUGH STILLNESS",
      content: "At Nøde, we believe that luxury is not an object, but a state of being. In a world that demands constant noise, silence is the ultimate corrective measure. Our fragrances are designed to act as anchors, bringing you back to the present moment through sensory grounding.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Lymphatic Wellness",
      subtitle: "THE FLOW OF LIFE",
      content: "Beyond scent, we focus on function. Our products are formulated to work in harmony with the body's lymphatic system—the vital network responsible for detoxification and immunity. Through specific application rituals and curated ingredients, we stimulate the natural flow of life within.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Sustainably Sourced",
      subtitle: "ETHICAL LUXURY",
      content: "We source our ingredients from small-scale farms that prioritize biodiversity and regenerative practices. From wild-harvested seaweed in Brittany to artisanal soy wax, every element of Nøde is chosen for its purity and its minimal impact on our earth.",
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8">
            The <span className="italic">Nøde</span> <br />
            Manifesto
          </h1>
          <p className="text-xl text-charcoal/60 leading-relaxed font-light">
            Founded on the intersection of high-end perfumery and functional wellness, 
            we create products that serve as tools for a more harmonized existence.
          </p>
        </motion.div>
      </section>

      {sections.map((section, index) => (
        <section key={index} className={`py-20 md:py-32 px-6 ${index % 2 === 1 ? 'bg-sand/30' : ''}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <div className="overflow-hidden aspect-[4/5] relative">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <span className="text-[10px] uppercase tracking-[0.4em] text-charcoal/40 font-medium mb-6 block">
                {section.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
                {section.title}
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed font-light max-w-lg">
                {section.content}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="py-40 px-6 text-center border-t border-charcoal/5">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-serif italic mb-8">
            "Beauty is the byproduct of health."
          </h3>
          <p className="text-[11px] uppercase tracking-[0.3em] text-charcoal/40">
            — Adriana Santiago, Founder
          </p>
        </div>
      </section>
    </div>
  );
}
