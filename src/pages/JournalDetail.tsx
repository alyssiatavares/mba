/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { journalEntries } from '../data/journalEntries';
import { ArrowLeft } from 'lucide-react';

export default function JournalDetail() {
  const { journalId } = useParams<{ journalId: string }>();
  const entry = journalEntries.find(e => e.id === journalId);

  if (!entry) {
    return (
      <div className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-3xl font-serif mb-8">Journal entry not found</h1>
        <Link to="/journal" className="text-charcoal/60 hover:text-charcoal transition-colors">
          Return to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/journal" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors mb-12">
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-charcoal/40">
              {entry.date}
            </span>
            <span className="w-8 h-px bg-charcoal/10" />
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-text-muted">
              {entry.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
            {entry.title}
          </h1>

          <div className="w-full aspect-[16/9] mb-16 overflow-hidden">
            <img 
              src={entry.image} 
              alt={entry.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-charcoal max-w-none">
            <p className="text-2xl font-serif italic text-charcoal/80 mb-12 leading-relaxed">
              {entry.summary}
            </p>
            
            <div className="text-lg text-charcoal/70 leading-relaxed font-light space-y-8 whitespace-pre-line">
              {entry.content}
            </div>
          </div>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-charcoal/5 flex justify-between items-center">
            <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest font-bold text-charcoal/40 mb-2">Author</span>
                <p className="text-sm">Editorial Team</p>
            </div>
            <div className="flex gap-4">
                {/* Social Share Placeholders */}
                <div className="w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center cursor-pointer hover:bg-sand/30 transition-colors">
                    <span className="text-[10px]">TW</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center cursor-pointer hover:bg-sand/30 transition-colors">
                    <span className="text-[10px]">IG</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
