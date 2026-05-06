/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-serif mb-12 italic">Privacy Policy</h1>
          
          <div className="prose prose-charcoal max-w-none text-charcoal/70 font-light leading-relaxed space-y-8">
            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">Introduction</h2>
              <p>
                At Nøde, we value the trust you place in us when you share your personal information. This Privacy Policy describes how we collect, use, and protect your data when you visit our website or interact with our ritual essentials.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you create an account, make a purchase, or subscribe to our journal. This may include your name, email address, shipping address, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">How We Use Your Information</h2>
              <p>
                Your information is used to process your orders, communicate with you about our products and rituals, and improve your overall experience with our brand. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
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
