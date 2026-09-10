export interface TechCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    featured?: boolean;
  }[];
}

export const TECH_STACK: TechCategory[] = [
  {
    title: 'Mobile Development',
    description: 'Cross-platform app development using modern React Native ecosystem',
    iconName: 'Smartphone',
    skills: [
      { name: 'React Native', level: 'Core', featured: true },
      { name: 'React Native CLI', level: 'Intermediate' },
      { name: 'Expo', level: 'Core', featured: true },
      { name: 'Expo Router', level: 'Advanced' },
      { name: 'React Navigation', level: 'Core', featured: true }
    ]
  },
  {
    title: 'Languages & Logic',
    description: 'Strong foundation in strongly-typed JavaScript and TypeScript',
    iconName: 'Code2',
    skills: [
      { name: 'JavaScript ES6+', level: 'Expert', featured: true },
      { name: 'TypeScript', level: 'Advanced', featured: true },
      { name: 'JSX / TSX', level: 'Advanced', featured: true }
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'Cloud services, auth, real-time databases and API integration',
    iconName: 'Server',
    skills: [
      { name: 'Supabase', level: 'Practical', featured: true },
      { name: 'Firebase', level: 'Practical', featured: true },
      { name: 'REST APIs', level: 'Advanced', featured: true }
    ]
  },
  {
    title: 'UI & Architecture',
    description: 'Design systems, layout algorithms, and reusable component creation',
    iconName: 'Layout',
    skills: [
      { name: 'Reusable Components', level: 'Core', featured: true },
      { name: 'Flexbox Engine', level: 'Expert' },
      { name: 'Responsive UI Design', level: 'Advanced', featured: true }
    ]
  },
  {
    title: 'Tools & Workflow',
    description: 'Version control, package managers, and development environment',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', level: 'Daily' },
      { name: 'GitHub', level: 'Daily', featured: true },
      { name: 'VS Code', level: 'Daily' },
      { name: 'npm', level: 'Daily' },
      { name: 'Yarn', level: 'Daily' }
    ]
  }
];
