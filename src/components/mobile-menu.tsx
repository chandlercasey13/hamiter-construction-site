'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-white text-black"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <nav className="flex flex-col h-full py-4">
          <Link href="/" className="py-4 px-6 text-lg hover:bg-gray-100 transition-colors duration-200 text-black" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="py-4 px-6 text-lg hover:bg-gray-100 transition-colors duration-200 text-black" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/services" className="py-4 px-6 text-lg hover:bg-gray-100 transition-colors duration-200 text-black" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/contact" className="py-4 px-6 text-lg hover:bg-gray-100 transition-colors duration-200 text-black" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

export default MobileMenu
