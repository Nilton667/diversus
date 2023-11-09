import 'bootstrap/dist/css/bootstrap.min.css'
import '@public/fontawesome/font-awesome.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}