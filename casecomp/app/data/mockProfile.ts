export interface ProfileData {
  user: {
    name: string;
    avatar: string;
    tier: {
      title: string;
      description: string;
      color: string;
    };
    elo: number;
    joinDate: string;
    eloHistory: {
      date: string;
      elo: number;
      change: number;
      challenge: string;
    }[];
  };
  badges: {
    emoji: string;
    label: string;
    description: string;
    earnedDate: string;
    rarity: 'common' | 'uncommon' | 'rare' | 'epic';
    category: 'achievement' | 'milestone' | 'special' | 'platform';
  }[];
  skills: {
    name: string;
    level: number;
    category: 'Analytical' | 'Technical' | 'Business' | 'Soft Skills';
    description: string;
  }[];
  endorsements: {
    from: string;
    text: string;
    skill: string;
    date: string;
  }[];
  completedChallenges: {
    id: string;
    title: string;
    date: string;
    eloEarned: number;
    industry: string;
    rank: number;
    totalParticipants: number;
  }[];
}

export const profileData: ProfileData = {
  user: {
    name: "Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    tier: {
      title: "Expert",
      description: "Top 5% performers with advanced analytical skills",
      color: "from-blue-500 to-indigo-600"
    },
    elo: 1850,
    joinDate: "2023-01-15",
    eloHistory: [
      { date: "2024-01-15", elo: 1200, change: 0, challenge: "Platform Start" },
      { date: "2024-01-22", elo: 1280, change: 80, challenge: "First Case Win" },
      { date: "2024-01-29", elo: 1380, change: 100, challenge: "Market Analysis Challenge" },
      { date: "2024-02-05", elo: 1460, change: 80, challenge: "Strategy Competition" },
      { date: "2024-02-12", elo: 1420, change: -40, challenge: "Financial Modeling Case" },
      { date: "2024-02-19", elo: 1520, change: 100, challenge: "Industry Analysis" },
      { date: "2024-02-26", elo: 1620, change: 100, challenge: "Innovation Challenge" },
      { date: "2024-03-04", elo: 1580, change: -40, challenge: "Market Entry Strategy" },
      { date: "2024-03-11", elo: 1680, change: 100, challenge: "Digital Transformation" },
      { date: "2024-03-18", elo: 1640, change: -40, challenge: "Sustainability Case" },
      { date: "2024-03-25", elo: 1740, change: 100, challenge: "Healthcare Innovation" },
      { date: "2024-04-01", elo: 1700, change: -40, challenge: "E-commerce Strategy" },
      { date: "2024-04-08", elo: 1720, change: 20, challenge: "FinTech Challenge" },
      { date: "2024-04-15", elo: 1700, change: -20, challenge: "Automotive Case" },
      { date: "2024-04-22", elo: 1725, change: 25, challenge: "Supply Chain Analysis" },
      { date: "2024-04-29", elo: 1705, change: -20, challenge: "Retail Strategy" },
      { date: "2024-05-06", elo: 1730, change: 25, challenge: "Technology Innovation" },
      { date: "2024-05-13", elo: 1710, change: -20, challenge: "Energy Sector Case" },
      { date: "2024-05-20", elo: 1735, change: 25, challenge: "Global Market Entry" },
      { date: "2024-05-27", elo: 1715, change: -20, challenge: "M&A Strategy" },
      { date: "2024-06-03", elo: 1740, change: 25, challenge: "Digital Marketing Case" },
      { date: "2024-06-10", elo: 1720, change: -20, challenge: "Operations Optimization" },
      { date: "2024-06-17", elo: 1745, change: 25, challenge: "Product Strategy" },
      { date: "2024-06-24", elo: 1725, change: -20, challenge: "Customer Experience" },
      { date: "2024-07-01", elo: 1750, change: 25, challenge: "Brand Strategy" },
      { date: "2024-07-08", elo: 1730, change: -20, challenge: "Market Research" },
      { date: "2024-07-15", elo: 1755, change: 25, challenge: "Competitive Analysis" },
      { date: "2024-07-22", elo: 1735, change: -20, challenge: "Business Model Innovation" },
      { date: "2024-07-29", elo: 1760, change: 25, challenge: "Growth Strategy" },
      { date: "2024-08-05", elo: 1740, change: -20, challenge: "Risk Management" },
      { date: "2024-08-12", elo: 1765, change: 25, challenge: "Strategic Planning" },
      { date: "2024-08-19", elo: 1745, change: -20, challenge: "Change Management" },
      { date: "2024-08-26", elo: 1770, change: 25, challenge: "Performance Optimization" },
      { date: "2024-09-02", elo: 1750, change: -20, challenge: "Resource Allocation" },
      { date: "2024-09-09", elo: 1775, change: 25, challenge: "Strategic Partnerships" },
      { date: "2024-09-16", elo: 1755, change: -20, challenge: "Market Expansion" },
      { date: "2024-09-23", elo: 1780, change: 25, challenge: "Innovation Strategy" },
      { date: "2024-09-30", elo: 1760, change: -20, challenge: "Cost Optimization" },
      { date: "2024-10-07", elo: 1785, change: 25, challenge: "Digital Transformation" },
      { date: "2024-10-14", elo: 1765, change: -20, challenge: "Strategic Analysis" },
      { date: "2024-10-21", elo: 1790, change: 25, challenge: "Business Strategy" },
      { date: "2024-10-28", elo: 1770, change: -20, challenge: "Market Strategy" },
      { date: "2024-11-04", elo: 1795, change: 25, challenge: "Competitive Strategy" },
      { date: "2024-11-11", elo: 1775, change: -20, challenge: "Strategic Planning" },
      { date: "2024-11-18", elo: 1800, change: 25, challenge: "Business Development" },
      { date: "2024-11-25", elo: 1780, change: -20, challenge: "Market Analysis" },
      { date: "2024-12-02", elo: 1805, change: 25, challenge: "Strategic Consulting" },
      { date: "2024-12-09", elo: 1785, change: -20, challenge: "Business Strategy" },
      { date: "2024-12-16", elo: 1810, change: 25, challenge: "Strategic Management" },
      { date: "2024-12-23", elo: 1790, change: -20, challenge: "Market Strategy" },
      { date: "2024-12-30", elo: 1815, change: 25, challenge: "Business Development" },
      { date: "2025-01-06", elo: 1795, change: -20, challenge: "Strategic Planning" },
      { date: "2025-01-13", elo: 1820, change: 25, challenge: "Market Analysis" },
      { date: "2025-01-20", elo: 1800, change: -20, challenge: "Business Strategy" },
      { date: "2025-01-27", elo: 1825, change: 25, challenge: "Strategic Consulting" },
      { date: "2025-02-03", elo: 1805, change: -20, challenge: "Market Strategy" },
      { date: "2025-02-10", elo: 1830, change: 25, challenge: "Business Development" },
      { date: "2025-02-17", elo: 1810, change: -20, challenge: "Strategic Planning" },
      { date: "2025-02-24", elo: 1835, change: 25, challenge: "Market Analysis" },
      { date: "2025-03-03", elo: 1815, change: -20, challenge: "Business Strategy" },
      { date: "2025-03-10", elo: 1840, change: 25, challenge: "Strategic Consulting" },
      { date: "2025-03-17", elo: 1820, change: -20, challenge: "Market Strategy" },
      { date: "2025-03-24", elo: 1845, change: 25, challenge: "Business Development" },
      { date: "2025-03-31", elo: 1825, change: -20, challenge: "Strategic Planning" },
      { date: "2025-04-07", elo: 1850, change: 25, challenge: "Market Analysis" }
    ]
  },
  badges: [
    {
      emoji: "🎯",
      label: "First Submission",
      description: "Completed your first case challenge",
      earnedDate: "2024-01-20",
      rarity: "common",
      category: "milestone"
    },
    {
      emoji: "📈",
      label: "Consistent Contributor",
      description: "Submitted solutions for 5 consecutive weeks",
      earnedDate: "2024-02-15",
      rarity: "uncommon",
      category: "achievement"
    },
    {
      emoji: "💡",
      label: "Early Adopter",
      description: "Joined the platform in its first month",
      earnedDate: "2024-01-15",
      rarity: "rare",
      category: "platform"
    },
    {
      emoji: "🏆",
      label: "Top 10",
      description: "Finished in the top 10 of a challenge",
      earnedDate: "2024-03-01",
      rarity: "uncommon",
      category: "achievement"
    },
    {
      emoji: "🤝",
      label: "Feedback Master",
      description: "Provided 100+ feedback points to other participants",
      earnedDate: "2024-04-15",
      rarity: "uncommon",
      category: "achievement"
    },
    {
      emoji: "🎨",
      label: "Creative Thinker",
      description: "Received 5+ creativity endorsements",
      earnedDate: "2024-05-01",
      rarity: "rare",
      category: "achievement"
    },
    {
      emoji: "📊",
      label: "Data Expert",
      description: "Won 3 data analysis challenges",
      earnedDate: "2024-06-15",
      rarity: "epic",
      category: "achievement"
    },
    {
      emoji: "🌟",
      label: "Industry Expert",
      description: "Completed challenges in 5 different industries",
      earnedDate: "2024-07-01",
      rarity: "rare",
      category: "achievement"
    }
  ],
  skills: [
    {
      name: "Market Research",
      level: 50,
      category: "Analytical",
      description: "Strong ability to analyze market trends and competitive landscapes"
    },
    {
      name: "Financial Modeling",
      level: 65,
      category: "Technical",
      description: "Proficient in creating financial models and projections"
    },
    {
      name: "Presentation",
      level: 95,
      category: "Soft Skills",
      description: "Excellent presentation and communication skills"
    },
    {
      name: "Creativity",
      level: 18,
      category: "Soft Skills",
      description: "Strong innovative thinking and problem-solving abilities"
    },
    {
      name: "Strategic Planning",
      level: 90,
      category: "Business",
      description: "Expert in developing comprehensive business strategies"
    },
    {
      name: "Collaboration",
      level: 47,
      category: "Soft Skills",
      description: "Effective team player with strong interpersonal skills"
    }
  ],
  endorsements: [
    {
      from: "Alex Thompson",
      text: "Sarah's data analysis skills are exceptional. She helped our team win the FinTech challenge!",
      skill: "Data Analysis",
      date: "2024-07-15"
    },
    {
      from: "Maria Garcia",
      text: "Her strategic thinking and presentation skills are top-notch. A great team player!",
      skill: "Strategic Planning",
      date: "2024-08-01"
    },
    {
      from: "James Wilson",
      text: "Sarah's market research insights were crucial for our success in the E-commerce challenge.",
      skill: "Market Research",
      date: "2024-08-15"
    }
  ],
  completedChallenges: [
    {
      id: "1",
      title: "Digital Transformation in Banking",
      date: "2024-11-01",
      eloEarned: 30,
      industry: "FinTech",
      rank: 3,
      totalParticipants: 150
    },
    {
      id: "2",
      title: "Market Entry Strategy for Electric Vehicles",
      date: "2024-10-15",
      eloEarned: 40,
      industry: "Automotive",
      rank: 2,
      totalParticipants: 120
    },
    {
      id: "3",
      title: "Sustainable Packaging Solutions",
      date: "2024-10-01",
      eloEarned: 30,
      industry: "Sustainability",
      rank: 5,
      totalParticipants: 100
    },
    {
      id: "4",
      title: "E-commerce Growth Strategy",
      date: "2024-09-15",
      eloEarned: 30,
      industry: "E-commerce",
      rank: 4,
      totalParticipants: 180
    },
    {
      id: "5",
      title: "Healthcare Innovation Challenge",
      date: "2024-09-01",
      eloEarned: 40,
      industry: "Healthcare",
      rank: 2,
      totalParticipants: 140
    }
  ]
}; 