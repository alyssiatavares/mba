/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  number: string;
  name: string;
  description: string;
  notes?: string;
  image: string;
  category: 'candle' | 'perfume';
  price: string;
}

export const candles: Product[] = [
  {
    id: 'c1',
    number: '01',
    name: 'White Silence',
    description: 'Rice milk, white moss, and cold cedar. A candle that evokes the absence of noise — the scent of an empty room in a luxury hotel. Clean 55-hour burn in wild soy wax.',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=800',
    category: 'candle',
    price: '$68'
  },
  {
    id: 'c2',
    number: '02',
    name: 'Alchemy',
    description: 'Benzoin, smoked vanilla, and black amber. A study in sensorial alchemy. Housed in a unique speckled ceramic vessel with hand-decorated dark patina spots for a sophisticated, raw aesthetic.',
    image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&q=80&w=1200',
    category: 'candle',
    price: '$72'
  },
  {
    id: 'c3',
    number: '03',
    name: 'Nordic Forest',
    description: 'Siberian fir, alpine mugo pine, and pale patchouli. The forest as sanctuary. Aromatically anti-inflammatory — fir essential oils are known to stimulate circulation.',
    image: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&fit=crop&q=80&w=800',
    category: 'candle',
    price: '$68'
  },
  {
    id: 'c4',
    number: '04',
    name: 'Sea Salt',
    description: 'Marine salt, ambrette seed, and white algae. Mineral, iodine-bright, and luminous. Formulated for the bath — steam amplifies the bio-active properties of the blend.',
    image: 'https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=800',
    category: 'candle',
    price: '$65'
  },
  {
    id: 'c5',
    number: '05',
    name: 'Warm Skin',
    description: 'Cashmere musk, Australian sandalwood, and camel milk. The temperature of heated skin. The most intimate candle in the collection.',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800',
    category: 'candle',
    price: '$75'
  },
  {
    id: 'c6',
    number: '06',
    name: 'Dark Root',
    description: 'Haitian vetiver, wet earth, and raw tobacco. Grounded in obsidian darkness. A deeply atmospheric scent crafted for the intentional workspace.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    category: 'candle',
    price: '$72'
  },
  {
    id: 'c7',
    number: '07',
    name: 'Burnt Garden',
    description: 'Toasted Damascus rose, ripe fig, and charred rosemary. The paradox of a garden after the sun. Floral top notes with a surprisingly herbal, smoky finish.',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&q=80&w=800',
    category: 'candle',
    price: '$70'
  },
  {
    id: 'c8',
    number: '08',
    name: 'Cloud',
    description: 'Soft aldehydes, French iris, and organic cotton. Light as morning mist. Designed for slow mornings — gently stimulates the circulatory system upon waking.',
    image: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&q=80&w=800',
    category: 'candle',
    price: '$65'
  },
  {
    id: 'c9',
    number: '09',
    name: 'Mist Reflection',
    description: 'Eucalyptus, cucumber, and crushed mint. For morning clarity. A crisp, invigorating scent designed to clear the mind and stimulate deep breathing.',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=800',
    category: 'candle',
    price: '$68'
  },
  {
    id: 'c10',
    number: '10',
    name: 'Night Bloom',
    description: 'Night-blooming jasmine, moonflower, and palo santo. For deep sleep. An ethereal floral scent that settles the nervous system for restorative rest.',
    image: 'https://images.unsplash.com/photo-1508612761958-e931d843bdd5?auto=format&fit=crop&q=80&w=800',
    category: 'candle',
    price: '$75'
  }
];

export const perfumes: Product[] = [
  {
    id: 'p1',
    number: '01',
    name: 'Lymphe',
    description: 'The founding fragrance. Formulated specifically to stimulate lymphatic drainage at pulse points. Ethereal floral with a finish that becomes almost transparent on skin.',
    notes: 'Angelica Root · Neroli · White Musk',
    image: '/lymphe.png',
    category: 'perfume',
    price: '$180'
  },
  {
    id: 'p2',
    number: '02',
    name: 'Aurum Silentium',
    description: 'Gold in silence. A dry, restrained oriental — never sweet, never loud. The fragrance for those who do not need to be noticed. Only felt.',
    notes: 'Iris Pallida · Madagascar Vanilla · Mysore Sandalwood',
    image: '/aurum.png',
    category: 'perfume',
    price: '$210'
  },
  {
    id: 'p3',
    number: '03',
    name: 'Boreal',
    description: 'The scent of a boreal forest at 6 in the morning. Arctic, green, and absolutely clean. Rich in alpha-pinene, a terpene with documented anti-inflammatory properties.',
    notes: 'Black Spruce · Scots Pine · Oak Moss',
    image: '/boreal.png',
    category: 'perfume',
    price: '$190'
  },
  {
    id: 'p4',
    number: '04',
    name: 'Cinders',
    description: 'The boldest fragrance in the collection. Cold smoke, almost mineral. A study in contrasts — wild and raw on opening, soft and warm in the dry-down.',
    notes: 'Cold Smoke · Guaiac Wood · Labdanum',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    category: 'perfume',
    price: '$220'
  },
  {
    id: 'p5',
    number: '05',
    name: 'Petrichor',
    description: 'The scent of rain on warm stone. Aldehydic and earthy with an unexpected floral heart. A climatological moment captured in liquid form.',
    notes: 'Wet Earth · Violet · Orris Root',
    image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800',
    category: 'perfume',
    price: '$195'
  },
  {
    id: 'p6',
    number: '06',
    name: 'Mare Nostrum',
    description: 'The Mediterranean distilled. Marine without being synthetic — the difference lies in real hand-harvested seaweed from the coast of Brittany, rich in iodine and minerals.',
    notes: 'Ambrette Seed · Brittany Seaweed · Fleur de Sel',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800',
    category: 'perfume',
    price: '$185'
  },
  {
    id: 'p7',
    number: '07',
    name: 'Inner Courtyard',
    description: 'The interior courtyard of a French house in July. Green, vegetal, and architectural. A fragrance of place, not of flowers.',
    notes: 'Green Fig · Tomato Leaf · Cedar Wood',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    category: 'perfume',
    price: '$190'
  },
  {
    id: 'p8',
    number: '08',
    name: 'Wild Honey',
    description: 'Honey, but never sugary. The beeswax creates a unique olfactory texture — as if holding something warm between your fingers. Helichrysum is a powerful documented agent for tissue recovery.',
    notes: 'Manuka Honey · Beeswax · Helichrysum',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800',
    category: 'perfume',
    price: '$230'
  },
  {
    id: 'p9',
    number: '09',
    name: 'Silent Peak',
    description: 'Snow-covered stone, ozone, and white thyme. A scent that captures the crisp, thin air of a mountain summit. Cooling and clarifying for the senses.',
    notes: 'Snow Accord · Ozone · White Thyme',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    category: 'perfume',
    price: '$200'
  },
  {
    id: 'p10',
    number: '10',
    name: 'Ancient Resin',
    description: 'Myrrh, frankincense, and aged paper. A fragrance that feels like walking through an ancient library or a sacred temple. Grounding and historical.',
    notes: 'Myrrh · Frankincense · Aged Paper',
    image: 'https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&q=80&w=800',
    category: 'perfume',
    price: '$215'
  }
];

export const allProducts = [...candles, ...perfumes];
