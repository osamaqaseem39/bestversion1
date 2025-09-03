import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Version 1 - Discover Your Best Version',
  description: 'Transform your life and discover your best version with our innovative programs and methods.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/bv1icon.png" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={`${inter.className} bg-black min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 