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
        className="fixed top-2 right-4 z-50 p-2 rounded-md bg-white text-black"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-14 right-0 bottom-0 w-64 h-screen   bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <nav className="flex flex-col  py-4">
        <button className="text-start py-4 px-6 text-lg hover:bg-gray-100 transition-colors duration-200 text-black" onClick={()=> {
             const target = document.getElementById("start-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });
             }
                
                toggleMenu(); 
             
          }}>
           Home
          </button>
          
          <button className="text-start py-4 px-6 text-lg hover:bg-gray-100 transition-colors duration-200 text-black" onClick={()=> {
             const target = document.getElementById("services-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });
             }
                
            toggleMenu(); 
         
      }}>
        Services
        </button>
          <button className="text-start py-4 px-6 text-lg hover:bg-gray-100 transition-colors duration-200 text-black" onClick={()=> {
             const target = document.getElementById("about-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });
             }
                
                toggleMenu(); 
             
          }}>
            About
          </button>
          <button className="text-start py-4 px-6 text-lg hover:bg-gray-100 transition-colors duration-200 text-black" onClick={()=> {
             const target = document.getElementById("contact-section");
             if (target) {
               const offset = 100; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });
             }
                
                toggleMenu(); 
             
          }}>
            Contact
          </button>
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
