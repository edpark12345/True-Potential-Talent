export interface Course {
  slug: string;
  title: string;
  short: string;
  summary: string;
  outcomes: string[];
  who: string;
  duration: string;
  format: string;
}

export const training: Course[] = [
  {
    slug: 'communication-assertiveness',
    title: 'Communication & Assertiveness',
    short: 'Speak with clarity and hold your ground with warmth.',
    summary:
      'Build the confidence to say what you mean, set boundaries without guilt, and be heard in the room — whether you are leading a meeting or handling a difficult conversation.',
    outcomes: [
      'Express yourself clearly and confidently under pressure',
      'Set and hold boundaries without damaging relationships',
      'Replace passive or aggressive habits with assertive ones',
      'Give and receive feedback that lands well',
    ],
    who: 'Anyone who finds their voice gets lost in meetings or struggles to say no.',
    duration: 'Half-day or full-day workshop',
    format: 'Online or in-person · groups up to 12',
  },
  {
    slug: 'conflict-management',
    title: 'Conflict Management',
    short: 'Turn friction into productive, respectful conversations.',
    summary:
      'Practical, calm-headed approaches to defusing tension, understanding what sits beneath disagreement, and reaching outcomes everyone can live with.',
    outcomes: [
      'Spot and de-escalate conflict early',
      'Stay composed when conversations get heated',
      'Separate the problem from the person',
      'Reach durable, fair resolutions',
    ],
    who: 'Managers and team members navigating workplace tension.',
    duration: 'Full-day workshop',
    format: 'Online or in-person · groups up to 12',
  },
  {
    slug: 'customer-service-complaints-handling',
    title: 'Customer Service & Complaints',
    short: 'Handle complaints with empathy and turn them around.',
    summary:
      'Equip your front-line team to handle complaints with confidence and empathy, protect your reputation, and turn unhappy customers into loyal ones.',
    outcomes: [
      'Stay calm and professional with frustrated customers',
      'Use a clear framework for resolving complaints',
      'Protect your own wellbeing on the front line',
      'Recover and retain at-risk customers',
    ],
    who: 'Customer-facing teams and their managers.',
    duration: 'Half-day or full-day workshop',
    format: 'Online or in-person · groups up to 15',
  },
  {
    slug: 'leadership-people-management',
    title: 'Leadership & People Management',
    short: 'Lead with confidence, clarity and humanity.',
    summary:
      'For new and developing leaders: the practical skills, mindset and tools to manage people well, build trust, and get the best from your team.',
    outcomes: [
      'Adapt your leadership style to the situation and the person',
      'Hold effective one-to-ones and team conversations',
      'Delegate and develop rather than rescue',
      'Build a culture of trust and accountability',
    ],
    who: 'New managers and experienced leaders refreshing their approach.',
    duration: 'Multi-session programme',
    format: 'Online or in-person · groups up to 10',
  },
  {
    slug: 'mental-toughness-stress-awareness',
    title: 'Mental Toughness & Stress',
    short: 'Build resilience that lasts under real pressure.',
    summary:
      'Understand how stress affects you, build practical resilience habits, and develop the mental toughness to stay steady when things get hard.',
    outcomes: [
      'Recognise your stress signals early',
      'Build daily habits that protect your resilience',
      'Reframe setbacks and pressure constructively',
      'Support colleagues who are struggling',
    ],
    who: 'Individuals and teams in demanding roles.',
    duration: 'Half-day workshop',
    format: 'Online or in-person · groups up to 15',
  },
  {
    slug: 'managing-change',
    title: 'Managing Change',
    short: 'Lead people through change without losing them.',
    summary:
      'Change is constant — this workshop gives leaders and teams the tools to navigate it well, address resistance, and keep people engaged through transition.',
    outcomes: [
      'Understand how people experience change',
      'Communicate change clearly and honestly',
      'Address resistance with empathy',
      'Keep momentum and morale through transition',
    ],
    who: 'Leaders and teams going through organisational change.',
    duration: 'Full-day workshop',
    format: 'Online or in-person · groups up to 12',
  },
  {
    slug: 'negotiation-influence',
    title: 'Negotiation & Influence',
    short: 'Get to better outcomes without playing hardball.',
    summary:
      'Practical negotiation and influencing skills grounded in trust and preparation — so you can reach agreements that hold and relationships that last.',
    outcomes: [
      'Prepare thoroughly for any negotiation',
      'Influence ethically and persuasively',
      'Find the value beneath stated positions',
      'Close agreements that stick',
    ],
    who: 'Anyone who negotiates or needs to influence without authority.',
    duration: 'Full-day workshop',
    format: 'Online or in-person · groups up to 12',
  },
  {
    slug: 'personal-impact-personal-development',
    title: 'Personal Impact & Development',
    short: 'Show up as the most confident version of yourself.',
    summary:
      'Develop your presence, self-awareness and personal brand so you make the impact you want — in meetings, presentations and everyday interactions.',
    outcomes: [
      'Understand the impact you currently have',
      'Build genuine, grounded confidence',
      'Develop your personal presence and brand',
      'Create a plan for your ongoing development',
    ],
    who: 'Professionals ready to invest in themselves.',
    duration: 'Half-day or full-day workshop',
    format: 'Online or in-person · groups up to 12',
  },
  {
    slug: 'presentation-skills',
    title: 'Presentation Skills',
    short: 'Present with confidence, structure and impact.',
    summary:
      'From nerves to natural — learn to structure a compelling message, manage anxiety, and deliver presentations that land with any audience.',
    outcomes: [
      'Structure a clear, persuasive presentation',
      'Manage nerves and use them to your advantage',
      'Engage an audience with confidence',
      'Handle questions calmly and credibly',
    ],
    who: 'Anyone who presents to colleagues, clients or stakeholders.',
    duration: 'Full-day workshop',
    format: 'Online or in-person · groups up to 10',
  },
  {
    slug: 'sales-negotiation',
    title: 'Sales & Negotiation',
    short: 'Sell with integrity and close with confidence.',
    summary:
      'A human, trust-first approach to selling — understanding your customer, communicating value, and negotiating to a fair close without pressure tactics.',
    outcomes: [
      'Build rapport and understand customer needs',
      'Communicate value rather than discount',
      'Handle objections with confidence',
      'Negotiate and close with integrity',
    ],
    who: 'Sales teams and business owners.',
    duration: 'Full-day workshop',
    format: 'Online or in-person · groups up to 12',
  },
  {
    slug: 'time-management',
    title: 'Time Management',
    short: 'Take back control of your time and focus.',
    summary:
      'Practical, realistic strategies to prioritise what matters, manage competing demands, and protect your focus — without burning out.',
    outcomes: [
      'Prioritise using clear, practical frameworks',
      'Protect time for deep, important work',
      'Manage interruptions and competing demands',
      'Build sustainable productivity habits',
    ],
    who: 'Anyone feeling stretched and reactive at work.',
    duration: 'Half-day workshop',
    format: 'Online or in-person · groups up to 15',
  },
];

export const getCourse = (slug: string) => training.find((c) => c.slug === slug);
