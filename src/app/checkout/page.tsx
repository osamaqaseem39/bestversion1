'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { getProgramById, videoAnalysisProgram } from '@/config/programs';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('course') || 'video-analysis';
  const [selectedProgram, setSelectedProgram] = useState(videoAnalysisProgram);

  useEffect(() => {
    const program = getProgramById(courseId);
    if (program) {
      setSelectedProgram(program);
    }
  }, [courseId]);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout logic here
    console.log('Checkout submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Header */}
      <div className="text-center py-8 border-b border-gray-800">
        <h1 className="text-4xl font-weight-700 mb-2">BEST VERSION 1</h1>
        <p className="text-gray-300 text-lg">
          Investing in your child's education in soccer is investing in their passion, discipline, and future.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Contact, Order, Payment */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-weight-600 mb-6">Contact US</h2>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-weight-600 mb-6">Order Summary</h2>
              <div className="space-y-4">
                                 <div className="flex justify-between items-center py-3 border-b border-gray-700">
                   <div>
                     <p className="font-weight-500">{selectedProgram.title}</p>
                     <p className="text-gray-400 text-sm">Quantity: 1</p>
                   </div>
                   <p className="font-weight-600 text-xl">${selectedProgram.price.toFixed(2)}</p>
                 </div>
                 <div className="flex justify-between items-center py-3">
                   <p className="text-lg font-weight-600">Order Total</p>
                   <p className="text-2xl font-weight-700 text-blue-400">${selectedProgram.price.toFixed(2)}</p>
                 </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-weight-600 mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-lg border-2 flex flex-col items-center space-y-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-600 bg-gray-800 hover:border-gray-500'
                    }`}
                  >
                    <div className="w-8 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-weight-600">💳</span>
                    </div>
                    <span className="text-sm font-weight-500">Card</span>
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('cashapp')}
                    className={`p-4 rounded-lg border-2 flex flex-col items-center space-y-2 transition-all ${
                      paymentMethod === 'cashapp'
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-gray-600 bg-gray-800 hover:border-gray-500'
                    }`}
                  >
                    <div className="w-8 h-6 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-weight-600">$</span>
                    </div>
                    <span className="text-sm font-weight-500">Cash App Pay</span>
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('amazon')}
                    className={`p-4 rounded-lg border-2 flex flex-col items-center space-y-2 transition-all ${
                      paymentMethod === 'amazon'
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-gray-600 bg-gray-800 hover:border-gray-500'
                    }`}
                  >
                    <div className="w-8 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-weight-600">A</span>
                    </div>
                    <span className="text-sm font-weight-500">Amazon Pay</span>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 mt-6">
                    <div className="flex items-center space-x-2 text-green-400">
                      <span>🔒</span>
                      <span className="text-sm">Secure, 1-click checkout with Link</span>
                      <span>▼</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="1234 1234 1234 1234"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <div className="flex space-x-2 mt-2">
                          <span className="text-blue-400">💳</span>
                          <span className="text-red-400">💳</span>
                          <span className="text-blue-600">💳</span>
                          <span className="text-orange-400">💳</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="expirationDate"
                          placeholder="MM/YY"
                          value={formData.expirationDate}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <input
                          type="text"
                          name="securityCode"
                          placeholder="CVC"
                          value={formData.securityCode}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-weight-600 py-4 rounded-lg transition-colors"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Item Details */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 h-fit">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-weight-600">Item</h2>
              <h2 className="text-2xl font-weight-600">Price</h2>
            </div>
            
                         <div className="flex justify-between items-center mb-6">
               <p className="text-lg font-weight-500">• {selectedProgram.title}</p>
               <p className="text-2xl font-weight-700 text-blue-400">${selectedProgram.price.toFixed(2)}</p>
             </div>

             <div className="space-y-6">
               <p className="text-gray-300 leading-relaxed">
                 {selectedProgram.description}
               </p>

               <div className="space-y-6">
                 {selectedProgram.categories.map((category, index) => (
                   <div key={index}>
                     <h3 className="text-lg font-weight-600 mb-3 text-blue-400">
                       {index + 1}. {category.title}:
                     </h3>
                     <ul className="space-y-2 text-gray-300">
                       {category.items.map((item, itemIndex) => (
                         <li key={itemIndex}>• {item}</li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
} 