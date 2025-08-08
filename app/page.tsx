import Link from 'next/link'
import { Activity, TrendingUp, Users, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">Fitness Pro V2</span>
          </div>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
            <Link href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Transform Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Track workouts, monitor progress, and achieve your goals
          </p>
          <Link href="/dashboard" className="bg-indigo-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-indigo-700 inline-block">
            Start Now - It's Free
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Zap className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Workouts</h3>
            <p className="text-gray-600">Log exercises, sets, reps, and weight with ease</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <TrendingUp className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Monitor Progress</h3>
            <p className="text-gray-600">Visualize your improvements over time</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Stay Motivated</h3>
            <p className="text-gray-600">Set goals and celebrate achievements</p>
          </div>
        </div>
      </main>
    </div>
  )
}