import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mobile Menu Demo',
  description: 'A demo of a mobile hamburger menu with four routes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileMenu />
        <main className="pt-16 p-4">
          {children}
        </main>
      </body>
    </html>
  )
}

