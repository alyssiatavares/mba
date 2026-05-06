/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-serif mb-12 italic">Terms of Service</h1>
          
          <div className="prose prose-charcoal max-w-none text-charcoal/70 font-light leading-relaxed space-y-8">
            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Nøde website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Nøde's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">3. Product Disclaimer</h2>
              <p>
                Our products are intended for sensory and wellness purposes. While we use high-quality, non-toxic ingredients, results may vary. Consult with a professional if you have specific sensitivities or allergies before beginning any new ritual.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">4. Limitations</h2>
              <p>
                In no event shall Nøde or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website, even if notified orally or in writing of the possibility of such damage.
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
