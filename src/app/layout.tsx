import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hamiter Construction',
  description: '',
  icons: {
    icon: '/favicon.ico', // Path to your favicon in the public directory
    apple: '/apple-touch-icon.png',
    other: [
      {
        url: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      // ... other icons
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={`${inter.className} overflow-x-hidden` }>
        <Navbar />
        <MobileMenu />
        <main className="pt-14  bg-white w-screen flex flex-col justify-center items-center overflow-x-hidden   ">
          {children}
        </main>
      </body>
    </html>
  )
}

