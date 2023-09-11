import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss'
import './font-awesome.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diversus',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
