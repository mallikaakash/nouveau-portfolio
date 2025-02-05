import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-col items-start justify-start h-screen m-8 w-1/2 mx-auto">
      <Link href="/" className="fixed top-4 left-4 text-gray-600 hover:text-gray-900 transition-colors">
        ← Back to Home
      </Link>

      <div className='m-4 text-2xl '>
        Coming soon...
      </div>
      
    </div>
  )
}

export default page
