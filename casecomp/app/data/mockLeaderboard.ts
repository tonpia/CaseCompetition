export interface LeaderboardEntry {
  rank: number;
  username: string;
  tier: {
    title: string;
    description: string;
    color: string;
  };
  badge: {
    emoji: string;
    label: string;
  };
  recentActivity: string;
  elo: number;
}

export const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    username: 'c-number',
    tier: {
      title: 'Grandmaster',
      description: 'Elite performers who consistently deliver exceptional solutions',
      color: 'from-yellow-400 to-amber-500'
    },
    badge: {
      emoji: "👑",
      label: "Case Master"
    },
    recentActivity: "Completed Healthcare Challenge",
    elo: 2450
  },
  {
    rank: 2,
    username: 'Raja Biswas',
    tier: {
      title: 'Grandmaster',
      description: 'Elite performers who consistently deliver exceptional solutions',
      color: 'from-yellow-400 to-amber-500'
    },
    badge: {
      emoji: "🏆",
      label: "Top Performer"
    },
    recentActivity: "Won FinTech Challenge",
    elo: 2350
  },
  {
    rank: 3,
    username: 'yuanzhe zhou',
    tier: {
      title: 'Grandmaster',
      description: 'Elite performers who consistently deliver exceptional solutions',
      color: 'from-yellow-400 to-amber-500'
    },
    badge: {
      emoji: "📊",
      label: "Data Expert"
    },
    recentActivity: "Completed 3 Challenges",
    elo: 2300
  },
  {
    rank: 4,
    username: 'Psi',
    tier: {
      title: 'Expert',
      description: 'Highly skilled consultants with proven track record',
      color: 'from-blue-500 to-indigo-600'
    },
    badge: {
      emoji: "🎯",
      label: "Strategy Expert"
    },
    recentActivity: "Active in E-commerce Challenge",
    elo: 2250
  },
  {
    rank: 5,
    username: 'Pascal Pfeiffer',
    tier: {
      title: 'Expert',
      description: 'Highly skilled consultants with proven track record',
      color: 'from-blue-500 to-indigo-600'
    },
    badge: {
      emoji: "📊",
      label: "Data Expert"
    },
    recentActivity: "Completed 3 Challenges",
    elo: 2200
  },
  {
    rank: 6,
    username: 'tascj',
    tier: {
      title: 'Expert',
      description: 'Highly skilled consultants with proven track record',
      color: 'from-blue-500 to-indigo-600'
    },
    badge: {
      emoji: "📊",
      label: "Data Expert"
    },
    recentActivity: "Completed 3 Challenges",
    elo: 2150
  },
  {
    rank: 7,
    username: 'Mathurin Aché',
    tier: {
      title: 'Expert',
      description: 'Highly skilled consultants with proven track record',
      color: 'from-blue-500 to-indigo-600'
    },
    badge: {
      emoji: "📊",
      label: "Data Expert"
    },
    recentActivity: "Completed 3 Challenges",
    elo: 2100
  },
  {
    rank: 8,
    username: 'sayoulala',
    tier: {
      title: 'Intermediate',
      description: 'Solid performers with growing expertise',
      color: 'from-green-500 to-emerald-600'
    },
    badge: {
      emoji: "📊",
      label: "Data Expert"
    },
    recentActivity: "Completed 3 Challenges",
    elo: 2050
  },
  {
    rank: 9,
    username: 'Ahmet Erdem',
    tier: {
      title: 'Intermediate',
      description: 'Solid performers with growing expertise',
      color: 'from-green-500 to-emerald-600'
    },
    badge: {
      emoji: "📊",
      label: "Data Expert"
    },
    recentActivity: "Completed 3 Challenges",
    elo: 2000
  },
  {
    rank: 10,
    username: 'charmq',
    tier: {
      title: 'Intermediate',
      description: 'Solid performers with growing expertise',
      color: 'from-green-500 to-emerald-600'
    },
    badge: {
      emoji: "📊",
      label: "Data Expert"
    },
    recentActivity: "Completed 3 Challenges",
    elo: 1950
  },
  {
    rank: 11,
    username: 'Takoi',
    tier: {
      title: 'Intermediate',
      description: 'Solid performers with growing expertise',
      color: 'from-green-500 to-emerald-600'
    },
    badge: {
      emoji: "📊",
      label: "Data Expert"
    },
    recentActivity: "Completed 3 Challenges",
    elo: 1900
  },
]; 