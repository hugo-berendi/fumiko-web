import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito  } from '@next/font/google'

const font = Nunito()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}
