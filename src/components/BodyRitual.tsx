import { motion } from 'motion/react';

const ritualSteps = [
  {
    id: 'step1',
    title: 'Purify the Space',
    description: 'Begin by lighting the Alchemy candle. Allow the notes of Benzoin and Smoked Vanilla to ground your surroundings and signal the start of your transition.',
    product: 'Alchemy Candle',
    image: '/ritual-purify.png'
  },
  {
    id: 'step2',
    title: 'Dermal Activation',
    description: 'Apply the Angelica Root Treatment to your pulse points. Using gentle circular motions, activate the lymphatic nodes behind the ears and along the clavicle.',
    product: 'Lymphe Perfume Pearl',
    image: '/ritual-dermal.png'
  },
  {
    id: '3',
    title: 'Pulse Point Imprint',
    description: 'Apply your chosen Perfume Pearl. The water-based formula bonds with your activated skin, creating a long-lasting, bio-compatible olfactory veil.',
    product: 'Signature Perfume Pearls',
    image: '/ritual-pulse.png'
  }
];

export default function BodyRitual() {
  return (
    <section className="py-24 md:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[11px] uppercase tracking-[0.4em] text-text-muted font-medium block mb-6">
            The Method
          </span>
          <h2 className="text-5xl md:text-8xl font-serif italic mb-8 tracking-tight">
            The Body <span className="font-node not-italic">Ritual</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[16px] font-light text-text-muted leading-relaxed text-balance">
            A three-step approach rooted in dermal biology and osteopathic principles. 
            Nøde rituals are designed to synchronize your olfactory experience with 
            your body's natural lymphatic rhythms.
          </p>
        </div>

        <div className="space-y-32">
          {ritualSteps.map((step, idx) => (
            <div 
              key={step.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 aspect-[4/3] bg-surface relative overflow-hidden"
              >
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-8 left-8 flex items-center justify-center w-12 h-12 rounded-full border border-charcoal/20 bg-background/40 backdrop-blur-md">
                  <span className="font-serif italic text-xl">0{idx + 1}</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 lg:px-12"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted font-bold block mb-4">
                  Step {idx + 1}: {step.product}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight italic">
                  {step.title}
                </h3>
                <p className="text-[15px] md:text-[17px] text-text-muted leading-relaxed font-light mb-10 text-balance">
                  {step.description}
                </p>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-px bg-charcoal transition-all group-hover:w-20"></div>
                  <span className="text-[11px] uppercase tracking-[0.3em] font-medium transition-opacity group-hover:opacity-60">
                    Discover Step {idx + 1}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
