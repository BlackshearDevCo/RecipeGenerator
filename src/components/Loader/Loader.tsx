import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <InfinitySpin
        width='200'
        color="#4fa94d"
      />
    </div>
  )
}