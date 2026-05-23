export interface Project {
  name: string;
  blurb: string;
  tech: string[];
  live?: string;
  repo?: string;
  privateRepo?: boolean;
  era: 'current' | 'older';
}

export const PROJECTS: Project[] = [
  {
    name: 'Goodwin HVAC',
    blurb: 'Marketing site for the family HVAC business — booking, service info, reviews.',
    tech: ['Angular 17', 'GSAP', 'Vercel'],
    live: 'https://goodwin-hvac.vercel.app',
    repo: 'https://github.com/mattgoo/goodwin-hvac',
    era: 'current',
  },
  {
    name: 'alpha-insider',
    blurb: 'Insider-trading dashboard scraping openinsider with cron jobs and animated UI.',
    tech: ['Angular 19', 'Vercel Functions', 'GSAP'],
    privateRepo: true,
    era: 'current',
  },
  {
    name: 'habit-grind',
    blurb: 'Habit tracker PWA with 5 themes, daily push reminders, and arcade animations.',
    tech: ['Angular 19', 'GSAP', 'Web Push'],
    live: 'https://habit-grind.vercel.app',
    era: 'current',
  },
  {
    name: 'HabitGrind iOS',
    blurb: 'Native SwiftUI port of habit-grind for iPhone — in development.',
    tech: ['SwiftUI', 'Swift', 'xcodegen'],
    era: 'current',
  },
  {
    name: 'riddles',
    blurb: 'A small puzzle game prototype.',
    tech: ['Web'],
    live: 'https://riddles-six.vercel.app',
    repo: 'https://github.com/mattgoo/riddles',
    era: 'older',
  },
  {
    name: 'christmas-riddles',
    blurb: 'Holiday-themed puzzle site for friends and family.',
    tech: ['Web'],
    repo: 'https://github.com/mattgoo/christmas-riddles',
    era: 'older',
  },
];
