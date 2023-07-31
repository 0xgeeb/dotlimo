import type { Metadata } from 'next'
import './globals.css'

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'geeb.eth.limo',
  description: 'geeb.eth portfolio',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
