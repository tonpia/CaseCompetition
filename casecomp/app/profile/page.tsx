'use client';

import { profileData } from '../data/mockProfile';
import Image from 'next/image';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const API = 'https://api.dicebear.com/7.x/avataaars/svg';

const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  return `${API}?seed=${src.split('seed=')[1]}&width=${width}&quality=${quality || 75}`;
};

const getBadgeColor = (rarity: string) => {
  switch (rarity) {
    case 'epic':
      return 'from-purple-500 to-pink-500';
    case 'rare':
      return 'from-blue-500 to-indigo-500';
    case 'uncommon':
      return 'from-green-500 to-teal-500';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export default function ProfilePage() {
  // Prepare data for radar chart
  const radarData = profileData.skills.map(skill => ({
    skill: skill.name,
    value: skill.level,
    description: skill.description
  }));

  // Prepare data for ELO history chart
  const eloHistoryData = profileData.user.eloHistory.map(entry => ({
    date: new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    elo: entry.elo,
    change: entry.change,
    challenge: entry.challenge
  }));

  // Group skills by category
  const skillsByCategory = profileData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof profileData.skills>);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
            <Image
              loader={imageLoader}
              src={profileData.user.avatar}
              alt={profileData.user.name}
              width={96}
              height={96}
              className="object-cover"
              quality={90}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {profileData.user.name}
              </h1>
              <span 
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${profileData.user.tier.color} text-white shadow-sm`}
              >
                {profileData.user.tier.title}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {profileData.user.tier.description}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {profileData.user.elo}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/ 2000</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Member since {new Date(profileData.user.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Skills & Endorsements */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills Overview</h2>
            <div className="h-[300px] mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#E5E7EB" strokeOpacity={0.2} />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.6}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                            <p className="font-medium text-gray-900 dark:text-white">{data.skill}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{data.description}</p>
                            <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">Level: {data.value}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{category}</h3>
                  <div className="space-y-2">
                    {skills.map(skill => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ELO Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance History</h2>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={eloHistoryData}>
                  <XAxis dataKey="date" />
                  <YAxis domain={['dataMin - 50', 'dataMax + 50']} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                            <p className="font-medium text-gray-900 dark:text-white">{data.challenge}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">ELO: {data.elo}</p>
                            <p className={`text-sm ${data.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                              {data.change >= 0 ? '+' : ''}{data.change} ELO
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="elo"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: '#3B82F6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Endorsements Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Professional Endorsements</h2>
            <div className="space-y-4">
              {profileData.endorsements.map((endorsement) => (
                <div key={endorsement.from} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {endorsement.from[0]}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {endorsement.from}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {endorsement.text}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Endorsed for {endorsement.skill}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(endorsement.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Badges & Recent Activity */}
        <div className="space-y-6">
          {/* Badges Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              {profileData.badges.map((badge) => (
                <div
                  key={badge.label}
                  className="group relative p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className={`text-2xl mb-2 bg-gradient-to-r ${getBadgeColor(badge.rarity)} bg-clip-text text-transparent`}>
                    {badge.emoji}
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {badge.label}
                  </div>
                  <div className="absolute left-0 top-full mt-2 w-64 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {badge.description}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Earned {new Date(badge.earnedDate).toLocaleDateString()}
                    </div>
                    <div className={`text-xs mt-1 inline-block px-2 py-1 rounded-full ${
                      badge.rarity === 'epic' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
                      badge.rarity === 'rare' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                      badge.rarity === 'uncommon' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                    }`}>
                      {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Case Studies</h2>
            <div className="space-y-4">
              {profileData.completedChallenges.map((challenge) => (
                <div key={challenge.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {challenge.title}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {challenge.industry}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(challenge.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-medium text-gray-900 dark:text-white">
                          Rank #{challenge.rank}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          of {challenge.totalParticipants} participants
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        +{challenge.eloEarned}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">ELO</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 