'use client'

import { useState } from 'react'

export default function DreamForm() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = () => {
    if (!input.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('🎥 Simulated: Dream converted to video (backend to be integrated)')
    }, 2000)
  }

  return (
    <div className="w-full max-w-xl">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe your dream in vivid detail..."
        className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={6}
      />
      <button
        onClick={handleGenerate}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Dream Video'}
      </button>
    </div>
  )
}
