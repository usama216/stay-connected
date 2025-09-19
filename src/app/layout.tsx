import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'STAYCONNECTED - Security and Network Solutions',
  description: 'Specialists in providing comprehensive security and network solutions for businesses and homes.',
  icons: {
    icon: '/log-dark.png',
    shortcut: '/log-dark.png',
    apple: '/log-dark.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
