import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'
import ThemeToggle from './ThemeToggle'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Rayaan Mirkar',
  description: 'Computational biologist, machine learning researcher, neuroscience enthusiast',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ebGaramond.variable} data-theme="dark">
      <body>
        {children}
        <ThemeToggle />
      </body>
    </html>
  )
}
