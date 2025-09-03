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
             <div className="flex items-center gap-4 lg:justify-end pt-4">
               {/* Instagram */}
               <a 
                 href="https://www.instagram.com/bestversion__1"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
               >
                 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                   <svg 
                     className="w-5 h-5 text-black" 
                     fill="currentColor" 
                     viewBox="0 0 24 24"
                   >
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                   </svg>
                 </div>
                 <span className="text-[#D9D9D9] text-sm font-medium hover:text-white transition-colors duration-300">
                 
                 </span>
               </a>

               {/* YouTube */}
               <a 
                 href="https://www.youtube.com/@bestversion1-bv1"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
               >
                 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                   <svg 
                     className="w-5 h-5 text-black" 
                     fill="currentColor" 
                     viewBox="0 0 24 24"
                   >
                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                   </svg>
                 </div>
                 <span className="text-[#D9D9D9] text-sm font-medium hover:text-white transition-colors duration-300">
                 
                 </span>
               </a>

               {/* TikTok */}
               <a 
                 href="https://www.tiktok.com/@bestversion__1"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
               >
                 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                   <svg 
                     className="w-5 h-5 text-black" 
                     fill="currentColor" 
                     viewBox="0 0 24 24"
                   >
                     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                   </svg>
                 </div>
                 <span className="text-[#D9D9D9] text-sm font-medium hover:text-white transition-colors duration-300">
                  
                 </span>
               </a>

               {/* LinkedIn */}
               <a 
                 href="https://www.linkedin.com/company/best-version-1/posts/?feedView=all"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
               >
                 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                   <svg 
                     className="w-5 h-5 text-black" 
                     fill="currentColor" 
                     viewBox="0 0 24 24"
                   >
                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                   </svg>
                 </div>
                 <span className="text-[#D9D9D9] text-sm font-medium hover:text-white transition-colors duration-300">
                 
                 </span>
               </a>
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