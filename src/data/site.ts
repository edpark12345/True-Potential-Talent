export const site = {
  name: 'True Potential Training',
  tagline: 'Coaching & Development',
  founder: 'Lynne Robson',
  email: 'hello@truepotentialtraining.net',
  phone: '+44 7000 000000',
  location: 'North East England · Online & in-person UK-wide',
  calendly: 'https://calendly.com/truepotentialtraining',
  logo: '/logo.png',
  social: {
    linkedin: 'https://www.linkedin.com/',
  },
  banner: '10% of profits support women rebuilding their lives after domestic abuse.',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Coaching',
    children: [
      { label: '8-Week Coaching Programme', href: '/coaching/8-week-course' },
      { label: 'Individual Coaching Sessions', href: '/coaching/individual-coaching-sessions' },
      { label: 'Free 14-Day Guide', href: '/coaching/14-day-guide' },
    ],
  },
  {
    label: 'Training',
    href: '/training',
    wide: true,
    childrenFrom: 'training',
  },
  { label: 'Contact', href: '/contact' },
];
