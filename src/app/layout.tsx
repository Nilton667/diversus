import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss'
import '@public/fontawesome/font-awesome.css'
import type { Metadata } from 'next'
import Layout from '../components/Layout'

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
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
