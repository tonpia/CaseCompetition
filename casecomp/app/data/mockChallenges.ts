export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  xpReward: number;
  industry: string;
  deadline: string;
  isActive: boolean;
  prizeMoney: number;
}

export const challenges: Challenge[] = [
  {
    id: '1',
    title: 'Market Entry Strategy for Electric Vehicles',
    description: 'Develop a comprehensive market entry strategy for an electric vehicle manufacturer looking to expand into Southeast Asia.',
    difficulty: 'Hard',
    xpReward: 1000,
    industry: 'Automotive',
    deadline: '2024-04-15',
    isActive: true,
    prizeMoney: 5000,
  },
  {
    id: '2',
    title: 'Digital Transformation in Banking',
    description: 'Create a digital transformation roadmap for a traditional bank to improve customer experience and operational efficiency.',
    difficulty: 'Medium',
    xpReward: 800,
    industry: 'FinTech',
    deadline: '2024-04-10',
    isActive: true,
    prizeMoney: 3000,
  },
  {
    id: '3',
    title: 'Sustainable Packaging Solutions',
    description: 'Design sustainable packaging solutions for a food delivery service to reduce environmental impact.',
    difficulty: 'Medium',
    xpReward: 750,
    industry: 'Sustainability',
    deadline: '2024-04-20',
    isActive: true,
    prizeMoney: 2500,
  },
  {
    id: '4',
    title: 'E-commerce Growth Strategy',
    description: 'Develop a growth strategy for an e-commerce platform to increase market share in the fashion industry.',
    difficulty: 'Easy',
    xpReward: 500,
    industry: 'E-commerce',
    deadline: '2024-04-05',
    isActive: true,
    prizeMoney: 1500,
  },
  {
    id: '5',
    title: 'Healthcare Innovation Challenge',
    description: 'Propose innovative solutions to improve patient care and reduce healthcare costs using technology.',
    difficulty: 'Hard',
    xpReward: 1200,
    industry: 'Healthcare',
    deadline: '2024-04-25',
    isActive: true,
    prizeMoney: 4000,
  },
]; 