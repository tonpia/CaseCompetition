'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { leaderboardData } from './data/mockLeaderboard';
import { fadeIn, slideUp, staggerContainer, scaleIn } from './components/animations';
import { HeroSkeleton, TrackCardSkeleton, LeaderboardCardSkeleton, CardSkeleton } from './components/SkeletonLoader';

const featuredTracks = [
  {
    title: 'FinTech',
    description: 'Tackle challenges in digital banking, blockchain, and financial innovation.',
    icon: '💳',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'ESG',
    description: 'Solve sustainability challenges and drive positive environmental impact.',
    icon: '🌱',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Healthcare',
    description: 'Address healthcare challenges from patient care to medical innovation.',
    icon: '🏥',
    color: 'from-red-500 to-pink-600',
  },
  {
    title: 'eSports',
    description: 'Navigate the growing world of competitive gaming and digital entertainment.',
    icon: '🎮',
    color: 'from-purple-500 to-pink-600',
  },
];

const howItWorks = [
  {
    title: 'Choose a Case',
    description: 'Browse our collection of real-world consulting challenges.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Submit Solution',
    description: 'Work on your solution and submit within the time limit.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Get Ranked',
    description: 'Receive feedback and climb the global leaderboard.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-24 py-12">
        <HeroSkeleton />
        <div className="space-y-12">
          <div className="text-center">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-8 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(4)].map((_, i) => (
              <TrackCardSkeleton key={i} />
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <div className="text-center">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-8 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(3)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <div className="text-center">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-8 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <LeaderboardCardSkeleton key={i} />
            ))}
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl p-8 md:p-12 animate-pulse">
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mx-auto mb-8"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-32 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-16 sm:space-y-24 py-8 sm:py-12"
    >
      {/* Hero Section */}
      <motion.section
        variants={fadeIn}
        className="text-center space-y-6 sm:space-y-8 py-6 sm:py-8 md:py-12 px-4 sm:px-6"
      >
        <motion.h1
          variants={slideUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          Crack Real-World Case Challenges
        </motion.h1>
        <motion.p
          variants={slideUp}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Solve consulting cases. Earn XP. Build your career.
        </motion.p>
        <motion.div
          variants={slideUp}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="/challenges"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 block text-center"
            >
              View Challenges
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="/profile"
              className="w-full sm:w-auto px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 block text-center"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured Tracks */}
      <motion.section variants={fadeIn} className="px-4 sm:px-6">
        <motion.h2
          variants={slideUp}
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12"
        >
          Featured Tracks
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {featuredTracks.map((track, index) => (
            <motion.div
              key={track.title}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`text-3xl sm:text-4xl mb-3 sm:mb-4 bg-gradient-to-r ${track.color} bg-clip-text text-transparent`}
              >
                {track.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {track.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {track.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* How It Works */}
      <motion.section variants={fadeIn} className="px-4 sm:px-6">
        <motion.h2
          variants={slideUp}
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12"
        >
          How It Works
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {howItWorks.map((step, index) => (
            <motion.div
              key={step.title}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mt-4 text-blue-600 dark:text-blue-400"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Leaderboard Preview */}
      <motion.section variants={fadeIn} className="px-4 sm:px-6">
        <motion.h2
          variants={slideUp}
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12"
        >
          Top Performers
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {leaderboardData.slice(0, 3).map((user, index) => (
            <motion.div
              key={user.username}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 ${
                index === 0 ? 'lg:transform lg:scale-105' : ''
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-xl sm:text-2xl"
                >
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                </motion.div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {user.username}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {user.elo} ELO
                    </span>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${user.tier.color} text-white`}
                    >
                      {user.tier.title}
                    </motion.span>
                  </div>
                </div>
        </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Banner */}
      <motion.section
        variants={fadeIn}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white mx-4 sm:mx-6"
      >
        <motion.h2
          variants={slideUp}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Join Thousands of Future Consultants
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto"
        >
          Start solving real-world cases today and build your consulting portfolio.
        </motion.p>
        <motion.div
          variants={slideUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto"
        >
          <Link
            href="/challenges"
            className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 block text-center"
          >
            Start Now
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
