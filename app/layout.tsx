import '../styles/globals.css'
import { ReactNode } from 'react'
import { Github, Linkedin } from 'lucide-react'

export const metadata = {
  title: 'Scott Mercer | Sales Engineer & Builder',
  description: 'Portfolio of Scott Mercer – Sales Engineer focused on mobile security, tooling, and automation.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Scott Mercer | Sales Engineer" />
        <meta property="og:description" content="Portfolio of Scott Mercer – Sales Engineer focused on mobile security, tooling, and automation." />
        <meta property="og:image" content="/profile.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className="bg-white text-gray-900 font-sans antialiased">{children}</body>
    </html>
  )
}