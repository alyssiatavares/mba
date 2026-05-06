/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from '../components/Hero';
import PerfumeCollection from '../components/PerfumeCollection';
import CandleCollection from '../components/CandleCollection';
import BodyRitual from '../components/BodyRitual';
import BrandStory from '../components/BrandStory';

export default function Home() {
  return (
    <>
      <Hero />
      <PerfumeCollection />
      <CandleCollection />
      <BodyRitual />
      <BrandStory />
      
      {/* Quote Section */}
      <section className="py-20 md:py-40 px-6 text-center bg-sand/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif italic mb-8 leading-tight">
            "We believe the most luxurious thing you can own is a moment of 
            complete harmony with your own nature."
          </h2>
          <p className="text-[11px] uppercase tracking-[0.3em] font-medium text-charcoal/40">
            — Adriana Santiago, Founder
          </p>
        </div>
      </section>

      {/* Ritual Grid */}
      <section className="pb-20 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 thin-border">
          <div className="aspect-square relative overflow-hidden group border-b md:border-b-0 md:thin-border-r">
             <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Yoga ritual" referrerPolicy="no-referrer" />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-charcoal/40 to-transparent">
               <p className="text-white text-[11px] uppercase tracking-widest font-medium">The Lymphatic Ritual</p>
             </div>
          </div>
          <div className="aspect-square relative overflow-hidden group border-b md:border-b-0 lg:thin-border-r">
             <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Natural ingredients" referrerPolicy="no-referrer" />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-charcoal/40 to-transparent">
               <p className="text-white text-[11px] uppercase tracking-widest font-medium">Sustainably Sourced</p>
             </div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
             <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Spa moment" referrerPolicy="no-referrer" />
             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-charcoal/40 to-transparent">
               <p className="text-white text-[11px] uppercase tracking-widest font-medium">The Alchemy of Silence</p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
