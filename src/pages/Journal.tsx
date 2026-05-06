/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { journalEntries } from '../data/journalEntries';

export default function Journal() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-24 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-charcoal/40 font-medium mb-6 block">
            THE NØDE JOURNAL
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
            Notes on <br />
            <span className="italic font-light">Existence</span>
          </h1>
          <p className="text-lg text-charcoal/60 leading-relaxed">
            A curated space for reflections on scent, somatic wellness, and the 
            art of living intentionally.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-px bg-border-subtle overflow-hidden thin-border">
          {journalEntries.map((article, index) => (
            <Link 
              key={article.id}
              to={`/journal/${article.id}`}
              className="block"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-background group cursor-pointer flex flex-col md:flex-row items-stretch"
              >
                <div className="md:w-1/3 aspect-[4/3] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-charcoal/40">
                      {article.date}
                    </span>
                    <span className="w-8 h-px bg-charcoal/10" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-text-muted">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8 group-hover:italic transition-all">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-40 px-6 text-center">
        <button className="px-12 py-4 border border-charcoal text-charcoal text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-charcoal hover:text-white transition-all duration-500">
          Load More Entries
        </button>
      </section>
    </div>
  );
}
