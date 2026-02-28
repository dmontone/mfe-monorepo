import React from 'react'
import dynamic from 'next/dynamic'

const RemoteHome = dynamic(() => import('mfe-remote/Home'), {
  ssr: true,
  loading: () => <p>Carregando...</p>,
})

export default function HomePage() {
  return (
    <div>
      <div className='bg-slate-800 text-slate-50 p-4 shadow-lg mb-4'>
        <h2>Controle: slate-800/slate-50 (deve funcionar)</h2>
      </div>

      <h1 className='bg-primary text-primary-foreground p-4 shadow-lg'>
        Testando Primary
      </h1>

      <h2 className='bg-secondary text-secondary-foreground p-2 mt-4'>
        Testando Secondary
      </h2>
      <h3 className='bg-tertiary text-tertiary-foreground p-2 mt-4'>
        Testando Tertiary
      </h3>

      <div className='mt-4 mb-4 p-2 border bg-secondary text-secondary-foreground'>
        <p className='text-muted-foreground'>Debug - Classes:</p>
        <p className='text-primary'>Primary Text</p>
        <p className='text-primary-foreground bg-primary p-2 rounded'>
          Primary Foreground
        </p>
      </div>

      <RemoteHome />
    </div>
  )
}
