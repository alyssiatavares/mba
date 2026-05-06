import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SubscribePopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('node_subscribed')) return;
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
    localStorage.setItem('node_subscribed', '1');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(dismiss, 2200);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(26,26,26,0.55)', backdropFilter: 'blur(4px)' }}
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-background max-w-lg w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Top image strip */}
            <div className="h-48 bg-surface overflow-hidden">
              <img
                src="/hero-candle.png"
                alt="NØDE"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-background/60" />
            </div>

            {/* Close */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="px-10 pb-10 pt-6 text-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-text-muted font-medium block mb-3">
                The Inner Circle
              </span>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-4xl font-serif italic font-light mb-3 leading-tight">
                      Rituals before<br />everyone else
                    </h2>
                    <p className="text-[13px] text-text-muted font-light leading-relaxed mb-8">
                      Subscribe for early access to new formulas, wellness dispatches,
                      and 10% off your first order.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full border border-border-subtle bg-transparent px-5 py-3.5 text-[13px] placeholder:text-text-muted/50 outline-none focus:border-charcoal transition-colors"
                      />
                      <button
                        type="submit"
                        className="w-full bg-charcoal text-white text-[11px] uppercase tracking-[0.25em] font-medium py-4 hover:opacity-80 transition-opacity"
                      >
                        Subscribe
                      </button>
                    </form>

                    <button
                      onClick={dismiss}
                      className="mt-5 text-[11px] text-text-muted uppercase tracking-[0.2em] hover:text-charcoal transition-colors"
                    >
                      No thanks
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="py-6"
                  >
                    <p className="text-4xl font-serif italic mb-3">Welcome.</p>
                    <p className="text-[13px] text-text-muted font-light">
                      Your ritual begins soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
