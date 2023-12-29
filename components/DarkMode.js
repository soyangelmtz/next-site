"use client"

import React, {useState, useEffect} from 'react'

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(true)
    const handleDarkMode = () => setDarkMode (!darkMode)

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode)
    }, [darkMode])

  return (
    <div>
        <button
        className='bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200'
        onClick={handleDarkMode}
        >
            {darkMode ? (
                <svg 
                id='theme-toggle-dark-icon'
                className="w-[32px] h-[32px] bg-gray-900 text-gray-800 dark:text-white" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 18 20">
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
                </svg>
            ) : (
                <svg
                id='theme-toggle-light-icon' 
                className="w-[32px] h-[32px] text-blue-900 bg-white dark:text-white" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                </svg>
            )

            }

        </button>
    </div>
  )
}

export default DarkMode
