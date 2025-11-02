"use client"

import { useState } from 'react'

export default function Home() {
  const [step, setStep] = useState(0)
  const [showHearts, setShowHearts] = useState(false)

  const handleYes = () => {
    setStep(3)
    setShowHearts(true)
  }

  const handleNo = () => {
    setStep(2)
  }

  const handleStart = () => {
    setStep(1)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background hearts */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <div className="max-w-2xl w-full">
        {/* Step 0: Initial Landing */}
        {step === 0 && (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
                ❤️
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                I have something to tell you...
              </h2>
              <p className="text-xl text-gray-600">
                Click below when you&apos;re ready
              </p>
            </div>
            <button
              onClick={handleStart}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              I&apos;m Ready ✨
            </button>
          </div>
        )}

        {/* Step 1: The Question */}
        {step === 1 && (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Will you be my girlfriend?
              </h1>
              <p className="text-2xl text-gray-600">
                You make every day brighter 🌟
              </p>
              <div className="flex justify-center gap-4 pt-8">
                <button
                  onClick={handleYes}
                  className="px-12 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                >
                  Yes! 💚
                </button>
                <button
                  onClick={handleNo}
                  className="px-12 py-4 bg-gradient-to-r from-gray-400 to-gray-600 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                >
                  No 💔
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: If they said no */}
        {step === 2 && (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Are you sure? 🥺
              </h1>
              <p className="text-xl text-gray-600">
                I promise to make you smile every day
              </p>
              <div className="flex justify-center gap-4 pt-8">
                <button
                  onClick={handleYes}
                  className="px-16 py-5 bg-gradient-to-r from-green-400 to-green-600 text-white text-3xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce"
                >
                  Yes! 💚
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="px-8 py-3 bg-gradient-to-r from-gray-300 to-gray-400 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                >
                  Maybe...
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Success! */}
        {step === 3 && (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 animate-pulse">
                🎉 YES! 🎉
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                You just made me the happiest person alive!
              </h2>
              <p className="text-2xl text-gray-600">
                I can&apos;t wait to create amazing memories with you ❤️
              </p>
              <div className="pt-8">
                <div className="text-6xl animate-bounce">
                  💕
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
