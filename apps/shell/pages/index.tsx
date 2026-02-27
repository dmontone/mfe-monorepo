import React from 'react'
import dynamic from 'next/dynamic'

const RemoteHome = dynamic(() => import('remote/Home'), {
  ssr: true,
  loading: () => <div>Carregando...</div>,
})

export default function HomePage() {
  return (
    <div>
      <h1>Hello World</h1>
      <RemoteHome />
    </div>
  )
}
