import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss'
import './font-awesome.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
