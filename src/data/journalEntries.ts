/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  content: string;
}

export const journalEntries: JournalEntry[] = [
  {
    id: "lymphatic-drainage",
    date: "OCT 14, 2026",
    title: "The Science of Lymphatic Drainage",
    category: "WELLNESS",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200",
    summary: "Understanding the body's vital network for detoxification and immunity, and how we can support its natural flow.",
    content: "The lymphatic system is often described as the 'unsung hero' of our physiology. Unlike the circulatory system, which has the heart to pump blood, the lymph system relies on movement, breath, and external stimulation to circulate fluid. \n\nAt Nøde, we approach lymphatic health as a foundational pillar of beauty. When the lymph is stagnant, the skin can appear dull and the body may feel heavy. By incorporating specific somatic movements and pulse-point fragrance application into your daily ritual, you can encourage this vital system to function at its peak. \n\nIn this entry, we explore the physiological mechanisms behind drainage and offer a simple five-minute routine to integrate into your morning."
  },
  {
    id: "morning-rituals",
    date: "SEP 28, 2026",
    title: "Morning Rituals for Mental Clarity",
    category: "RITUALS",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200",
    summary: "How the first sixty minutes of your day can define the trajectory of your nervous system.",
    content: "The way we wake up is the way we live. In a world characterized by immediate digital demands, reclaiming the 'golden hour' after waking is a radical act of self-care. \n\nA Nøde morning ritual isn't about productivity; it's about presence. We recommend starting with sensory grounding: the strike of a match, the scent of 'Cloud' or 'White Silence', and the intentional centering of the breath. \n\nBy creating a consistent container for stillness before the day begins, we prime our nervous systems for resilience rather than reactivity. Here is our guide to building a morning ritual that serves your specific nature."
  },
  {
    id: "rare-resins",
    date: "SEP 12, 2026",
    title: "The Alchemy of Rare Resins",
    category: "FRAGRANCE",
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=1200",
    summary: "A deep dive into the historical and spiritual significance of Frankincense, Myrrh, and Labdanum.",
    content: "Resins are the 'lifeblood' of trees — the substance produced to heal wounds and protect against invaders. It is no coincidence that these same substances have been used for millennia by humans to promote spiritual and physical healing. \n\nIn 'Ancient Resin' and 'Alchemy', we utilize these raw, powerful materials to create a scent profile that is both grounding and ethereal. These notes don't just smell pleasant; they resonate at a frequency that has been used in sacred spaces for centuries. \n\nJoin us as we travel to the source of these rare materials and understand the ethical harvesting process that preserves these ancient forests."
  }
];
