import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import MobileMenu from '../components/mobile-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hamiter Construction',
  description: '',
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
        <main className="pt-14  bg-white w-screen flex flex-col justify-center items-center  ">
          {children}
        </main>
      </body>
    </html>
  )
}

