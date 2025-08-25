import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '#' },
    { name: 'Programs', href: '#' },
    { name: 'Method', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'About', href: '#' }
  ];

  return (
    <footer className="bg-transparent text-[#D9D9D9] font-['Poppins']">
      {/* Top white line separator */}
      <div className="border-t border-white/20"></div>
      
             {/* Main Footer Content */}
       <div className="container mx-auto px-4 py-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Left Side - Navigation Links */}
           <div className="space-y-4">
             <nav className="space-y-3">
               {navigationLinks.map((link) => (
                 <a
                   key={link.name}
                   href={link.href}
                   className="block text-[#D9D9D9] hover:text-blue-400 py-2 transition-colors duration-300 text-base font-normal leading-none tracking-normal"
                 >
                   {link.name}
                 </a>
               ))}
             </nav>
           </div>

                       {/* Right Side - Company Information */}
            <div className="space-y-2 lg:text-right">
                          {/* Logo */}
              <div className="flex items-center lg:justify-end mb-0">
                               <div className="w-32 h-32 flex items-center justify-center">
                 <Image 
                   src="/logo.png" 
                   alt="Best Version 1 Logo" 
                   width={128}
                   height={128}
                   className="object-contain"
                 />
               </div>
              </div>

              {/* Company Description */}
              <p className="text-[#D9D9D9] max-w-md text-base font-normal leading-none tracking-normal lg:ml-auto mt-0">
               Online football training community for ambitious players. Training programs, 
               training ideas and online courses for players who are serious about improving 
               their game fast.
             </p>

             {/* Social Media */}
             <div className="flex items-center gap-3 lg:justify-end">
               <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                 <svg 
                   className="w-4 h-4 text-black" 
                   fill="currentColor" 
                   viewBox="0 0 24 24"
                 >
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
               </div>
               <span className="text-[#D9D9D9] text-base font-normal leading-none tracking-normal">
                 @bestversion__1
               </span>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom white line separator */}
      <div className="border-t border-white/20"></div>

      {/* Legal/Copyright Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Side - Terms & Privacy */}
          <div className="text-[#D9D9D9]">
            <a href="#" className="hover:text-white transition-colors duration-300 text-base font-normal leading-none tracking-normal">
              Terms & Privacy Policy
            </a>
          </div>

          {/* Right Side - Copyright */}
          <div className="text-[#D9D9D9] text-base font-normal leading-none tracking-normal">
            © Best Version 1 LLC. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 