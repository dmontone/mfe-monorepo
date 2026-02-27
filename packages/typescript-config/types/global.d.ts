import type { AppProps } from 'next/app'

declare global {
  type AppComponent = (props: AppProps) => React.ReactElement
}

export {}
