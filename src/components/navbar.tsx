

"use client"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-lg font-semibold text-gray-800">
              HC
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800" onClick={()=> {
             const target = document.getElementById("start-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });
             }
                
               
             
          }}>Home</button>
            <button className="text-gray-600 hover:text-gray-800" onClick={()=> {
             const target = document.getElementById("about-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });
             }
                
               
             
          }}>About</button>
             <button className="text-gray-600 hover:text-gray-800" onClick={()=> {
             const target = document.getElementById("services-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });
             }
                
               
             
          }}>Services</button>
            <button className="text-gray-600 hover:text-gray-800" onClick={()=> {
             const target = document.getElementById("contact-section");
             if (target) {
               const offset = 80; // Adjust offset as needed
               const y = target.getBoundingClientRect().top + window.scrollY - offset;
               window.scrollTo({ top: y, behavior: "smooth" });
             }
                
               
             
          }}>Contact</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

