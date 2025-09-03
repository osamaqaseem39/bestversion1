import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elite Tactical Education for Ambitious Players - Best Version 1',
  description: 'Transform Your Football IQ with La Masia\'s Proven System. Elite football education platform built by former FC Barcelona coach Jordi Roura.',
  keywords: 'soccer training, football coaching, player development, sports psychology, athletic performance, La Masia, FC Barcelona, tactical education, football IQ',
  authors: [{ name: 'Best Version 1 Team' }],
  creator: 'Best Version 1',
  publisher: 'Best Version 1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bestversion1.com',
    siteName: 'Best Version 1',
    title: 'Elite Tactical Education for Ambitious Players',
    description: 'Transform Your Football IQ with La Masia\'s Proven System. Elite football education platform built by former FC Barcelona coach Jordi Roura.',
    images: [
      {
        url: '/bv1icon.png',
        width: 1200,
        height: 630,
        alt: 'Best Version 1 - Elite Tactical Education for Ambitious Players',
      },
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Best Version 1 Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bestversion1',
    creator: '@bestversion1',
    title: 'Elite Tactical Education for Ambitious Players',
    description: 'Transform Your Football IQ with La Masia\'s Proven System. Elite football education platform built by former FC Barcelona coach Jordi Roura.',
    images: ['/bv1icon.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3B82F6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Next.js automatically generates meta tags from the metadata object */}
      </head>
      <body className={`${inter.className} bg-black min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 