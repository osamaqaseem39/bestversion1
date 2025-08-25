"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the difference between Mini and Full Course?",
      answer: "The Mini Course provides essential fundamentals and core concepts, while the Full Course includes comprehensive training, advanced techniques, personalized feedback, and ongoing support from our coaching team."
    },
    {
      question: "Can beginners use this?",
      answer: "Absolutely! Our programs are designed to accommodate players at all levels. We start with fundamental concepts and progressively build up to advanced techniques, making it perfect for beginners and experienced players alike."
    },
    {
      question: "How does video analysis work?",
      answer: "Our video analysis system allows you to record your training sessions and matches. Our coaches then provide detailed feedback on your technique, positioning, decision-making, and areas for improvement through personalized video reviews."
    },
    {
      question: "Can parents buy for their kids?",
      answer: "Yes! Parents can purchase our programs for their children. We offer family-friendly payment options and our content is designed to be accessible and engaging for young players while maintaining the same high-quality coaching standards."
    },
    {
      question: "What makes BVI different from other training?",
      answer: "BVI combines 40+ years of La Masia methodology with modern player insights. We provide the same elite academy education that's typically only available to top academy players, making professional-level training accessible to serious players worldwide."
    },
    {
      question: "Do I get access to everything at once?",
      answer: "Yes, you get immediate access to your entire course upon purchase. This allows you to work at your own pace, revisit content as needed, and progress through the material according to your schedule and learning preferences."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
         <section id="faq" className="py-20 bg-transparent relative overflow-hidden">
       <div className="container mx-auto px-4">
                   {/* Section Headers */}
          <div className="text-left mb-16">
            <p className="text-white font-poppins uppercase tracking-normal mb-4" style={{ fontSize: '45px', fontWeight: '275', lineHeight: '132%', letterSpacing: '0%' }}>
              FAQS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              GOT QUESTIONS?
            </h2>
          </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           {/* Left Side - Image */}
           <div className="space-y-8">
            
                                                                                                       {/* FAQ Image */}
                <div className="relative">
                                     <Image
                     src="/faqimage.png"
                     alt="FAQ illustration"
                     width={400}
                     height={500}
                     className="w-full h-[500px] object-cover rounded-xl"
                   />
                                     {/* Image overlay */}
                   <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
                             <div
                 key={index}
                 className="relative rounded-xl overflow-hidden group"
               >
                
                                 <button
                   onClick={() => toggleFAQ(index)}
                   className="relative w-full px-6 py-4 text-left bg-white/10 hover:bg-white/20 transition-all duration-700 ease-out flex items-center justify-between group"
                 >
                   <span className="text-white font-poppins font-medium text-lg transition-all duration-500 ease-out">
                     {faq.question}
                   </span>
                   <svg
                     className={`w-5 h-5 text-white transition-all duration-700 ease-out ${
                       openIndex === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                     }`}
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M19 9l-7 7-7-7"
                     />
                   </svg>
                 </button>
                 
                <div className={`relative px-6 py-1 bg-black/30 backdrop-blur-md transform transition-all duration-700 ease-out overflow-hidden ${
                      openIndex === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 py-0'
                    }`}>
                        <p className="text-gray-200 leading-relaxed font-poppins font-light">
                          {faq.answer}
                        </p>
                      </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection; 