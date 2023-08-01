import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  weight: '400',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'geeb.eth.limo',
  description: 'geeb.eth portfolio',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
