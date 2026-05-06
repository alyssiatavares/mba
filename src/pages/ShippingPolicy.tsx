/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function ShippingPolicy() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-serif mb-12 italic">Shipping & Returns</h1>
          
          <div className="prose prose-charcoal max-w-none text-charcoal/70 font-light leading-relaxed space-y-8">
            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">Shipping Ritual</h2>
              <p>
                We believe the journey is as important as the destination. All orders are processed within 2-3 business days. We use carbon-neutral shipping partners to deliver our ritual essentials to your doorstep.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Complimentary shipping on orders over $150.</li>
                <li>Standard shipping (US): 5-7 business days.</li>
                <li>International shipping: 10-14 business days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">Returns & Exchanges</h2>
              <p>
                Due to the sensory and hygienic nature of our products, we can only accept returns on items that are unopened and in their original, sealed packaging within 14 days of delivery.
              </p>
              <p className="mt-4">
                If your vessel arrives damaged during its journey, please contact us within 48 hours of receipt with documentation, and we will initiate an immediate replacement.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">Sustainability Note</h2>
              <p>
                All Nøde packaging is 100% recyclable. We encourage you to repurpose our glass vessels and ceramic containers once your ritual is complete.
              </p>
            </section>

            <section className="pt-12 border-t border-charcoal/5">
              <p className="text-[10px] uppercase tracking-widest">Last Updated: May 2026</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
