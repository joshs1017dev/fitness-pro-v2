'use client'

import { useState, useEffect } from 'react'
import { Activity, Calendar, TrendingUp, Target } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    thisWeek: 0,
    streak: 0,
    goalsCompleted: 0
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-indigo-600 mr-2" />
              <span className="text-xl font-semibold">Fitness Pro V2</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/workouts" className="text-gray-700 hover:text-indigo-600">Workouts</Link>
              <Link href="/progress" className="text-gray-700 hover:text-indigo-600">Progress</Link>
              <Link href="/" className="text-gray-700 hover:text-indigo-600">Logout</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Workouts</h3>
              <Activity className="h-5 w-5 text-indigo-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{stats.totalWorkouts}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">This Week</h3>
              <Calendar className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{stats.thisWeek}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Current Streak</h3>
              <TrendingUp className="h-5 w-5 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{stats.streak} days</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Goals Completed</h3>
              <Target className="h-5 w-5 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{stats.goalsCompleted}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Workouts</h2>
            <div className="space-y-3">
              <p className="text-gray-600">No workouts yet. Start your first workout!</p>
              <Link href="/workouts" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Log Workout
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link href="/workouts" className="block w-full text-left px-4 py-3 bg-gray-50 rounded hover:bg-gray-100">
                ➕ New Workout
              </Link>
              <Link href="/progress" className="block w-full text-left px-4 py-3 bg-gray-50 rounded hover:bg-gray-100">
                📊 View Progress
              </Link>
              <Link href="/goals" className="block w-full text-left px-4 py-3 bg-gray-50 rounded hover:bg-gray-100">
                🎯 Set Goals
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}