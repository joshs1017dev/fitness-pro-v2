'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import Link from 'next/link'

interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
  weight: number
}

export default function Workouts() {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [showForm, setShowForm] = useState(false)
  const [newExercise, setNewExercise] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: ''
  })

  const addExercise = () => {
    if (newExercise.name && newExercise.sets && newExercise.reps) {
      setExercises([...exercises, {
        id: Date.now().toString(),
        name: newExercise.name,
        sets: parseInt(newExercise.sets),
        reps: parseInt(newExercise.reps),
        weight: parseFloat(newExercise.weight) || 0
      }])
      setNewExercise({ name: '', sets: '', reps: '', weight: '' })
      setShowForm(false)
    }
  }

  const removeExercise = (id: string) => {
    setExercises(exercises.filter(ex => ex.id !== id))
  }

  const saveWorkout = async () => {
    if (exercises.length === 0) return
    
    try {
      const response = await fetch('/api/workouts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ exercises })
      })
      
      if (response.ok) {
        alert('Workout saved successfully!')
        setExercises([])
      }
    } catch (error) {
      console.error('Failed to save workout:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-xl font-semibold">← Back to Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Log Workout</h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Today's Exercises</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center"
            >
              <Plus className="h-5 w-5 mr-1" />
              Add Exercise
            </button>
          </div>

          {exercises.length === 0 ? (
            <p className="text-gray-500">No exercises added yet</p>
          ) : (
            <div className="space-y-3">
              {exercises.map(exercise => (
                <div key={exercise.id} className="flex justify-between items-center p-4 bg-gray-50 rounded">
                  <div>
                    <p className="font-semibold">{exercise.name}</p>
                    <p className="text-sm text-gray-600">
                      {exercise.sets} sets × {exercise.reps} reps
                      {exercise.weight > 0 && ` @ ${exercise.weight} lbs`}
                    </p>
                  </div>
                  <button
                    onClick={() => removeExercise(exercise.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Add New Exercise</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Exercise name"
                value={newExercise.name}
                onChange={(e) => setNewExercise({...newExercise, name: e.target.value})}
                className="w-full p-2 border rounded"
              />
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="number"
                  placeholder="Sets"
                  value={newExercise.sets}
                  onChange={(e) => setNewExercise({...newExercise, sets: e.target.value})}
                  className="p-2 border rounded"
                />
                <input
                  type="number"
                  placeholder="Reps"
                  value={newExercise.reps}
                  onChange={(e) => setNewExercise({...newExercise, reps: e.target.value})}
                  className="p-2 border rounded"
                />
                <input
                  type="number"
                  placeholder="Weight (lbs)"
                  value={newExercise.weight}
                  onChange={(e) => setNewExercise({...newExercise, weight: e.target.value})}
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={addExercise}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {exercises.length > 0 && (
          <button
            onClick={saveWorkout}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold"
          >
            Save Workout
          </button>
        )}
      </main>
    </div>
  )
}