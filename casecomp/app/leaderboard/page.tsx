'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { leaderboardData } from '../data/mockLeaderboard';
import { LeaderboardSkeleton } from '../components/LeaderboardSkeleton';
import { PageTransition } from '../components/PageTransition';
import { SubmitFAB } from '../components/SubmitFAB';

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1:
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 2:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    case 3:
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
    default:
      return 'bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
  }
};

const EloProgressBar = ({ current, max }: { current: number; max: number }) => {
  const percentage = Math.min((current / max) * 100, 100);
  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'from-yellow-400 to-amber-500';
    if (percentage >= 70) return 'from-blue-500 to-indigo-600';
    if (percentage >= 40) return 'from-emerald-500 to-teal-600';
    return 'from-gray-400 to-gray-500';
  };

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
      <div
        className={`bg-gradient-to-r ${getProgressColor(percentage)} h-1.5 rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default function Leaderboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <PageTransition>
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
          </div>
          <LeaderboardSkeleton />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Global Leaderboard
          </h1>
          <div className="flex gap-2" role="radiogroup" aria-label="View mode">
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                viewMode === 'table'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
              role="radio"
              aria-checked={viewMode === 'table'}
            >
              Table View
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                viewMode === 'grid'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
              role="radio"
              aria-checked={viewMode === 'grid'}
            >
              Grid View
            </button>
          </div>
        </div>

        {viewMode === 'table' ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" role="table">
                <thead className="bg-gray-50 dark:bg-gray-900" role="rowgroup">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" role="columnheader">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" role="columnheader">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" role="columnheader">
                      Tier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" role="columnheader">
                      ELO
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700" role="rowgroup">
                  {leaderboardData.map((user) => (
                    <motion.tr
                      key={user.rank}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 focus-within:bg-gray-50 dark:focus-within:bg-gray-700"
                      role="row"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white" role="cell">
                        #{user.rank}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white" role="cell">
                        <div className="flex items-center gap-2">
                          <span className="text-lg" aria-hidden="true">{user.badge.emoji}</span>
                          <span className="truncate max-w-[200px]">{user.username}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" role="cell">
                        <div className="group relative">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${user.tier.color} text-white`}
                          >
                            {user.tier.title}
                          </span>
                          <div className="absolute left-0 mt-2 w-64 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" role="tooltip">
                            {user.tier.description}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" role="cell">
                        <div className="group relative">
                          <span className="text-sm text-gray-900 dark:text-white">{user.elo}</span>
                          <div className="absolute left-0 mt-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" role="tooltip">
                            <div className="flex items-center gap-2">
                              <span className="text-green-400" aria-hidden="true">↑</span>
                              <span>+25 ELO from last challenge</span>
                            </div>
                            <div className="mt-1 text-gray-400">{user.recentActivity}</div>
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {leaderboardData.map((user) => (
              <motion.div
                key={user.rank}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-200 focus-within:shadow-md"
                role="listitem"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">{user.badge.emoji}</span>
                    <span className="font-medium text-gray-900 dark:text-white truncate max-w-[150px]">
                      {user.username}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    #{user.rank}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="group relative">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${user.tier.color} text-white`}
                    >
                      {user.tier.title}
                    </span>
                    <div className="absolute left-0 mt-2 w-64 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" role="tooltip">
                      {user.tier.description}
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900 dark:text-white">{user.elo} ELO</span>
                      <span className="text-xs text-green-500" aria-hidden="true">↑ +25</span>
                    </div>
                    <div className="absolute left-0 mt-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" role="tooltip">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400" aria-hidden="true">↑</span>
                        <span>+25 ELO from last challenge</span>
                      </div>
                      <div className="mt-1 text-gray-400">{user.recentActivity}</div>
                    </div>
                  </div>
                  <EloProgressBar current={user.elo} max={3000} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <SubmitFAB />
    </PageTransition>
  );
} 