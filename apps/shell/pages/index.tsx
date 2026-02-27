import React from 'react'
import dynamic from 'next/dynamic'

const RemoteHome = dynamic(() => import('mfe-remote/Home'), { ssr: true })

export default function HomePage() {
  return (
    <div>
      <h1>Hello World</h1>
      <RemoteHome />
    </div>
  )
}
