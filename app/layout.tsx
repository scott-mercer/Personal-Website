import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Scott Mercer',
  description: 'Personal website, blog, and portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
