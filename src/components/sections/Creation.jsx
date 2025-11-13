import React from 'react';
import clientScreenshot from '../../assets/clientScreenshot.png'
import orderScreenshot from '../../assets/orderScreenshot.png'
import invoiceScreenshot from '../../assets/invoiceScreenshot.png'


const Creation = () => {
  return (
    <section id="creation" className="py-10 px-4 md:py-24 md:px-25 bg-white relative z-10">
      <div className="container mx-auto">
        
        {/* Main Heading - responsive sizing */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[black] leading-tight max-w-4xl text-center mx-auto mb-8 sm:mb-12 md:mb-20 px-4">
          From busywork to your best work.
        </h2>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          
          {/* Column 1: Copy to Figma */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs mb-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-full h-52 flex items-center justify-center">
                  <div className="w-full max-w-[300px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                    <img 
                      src={clientScreenshot} 
                      alt="Screenshot of client management in tib"
                      className="w-full h-auto" // Responsive image
                    />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[black] mb-2">Manage Your Clients</h3>
            <p className="text-[#707070] font-medium text-base leading-relaxed max-w-[280px]">
              Access complete client history, contact details, and order status in one click. No more searching through emails or spreadsheets.
            </p>
          </div>
          
          {/* Column 2: Save to collections */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs mb-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-full h-52 flex items-center justify-center">
                  <div className="w-full max-w-[300px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                    <img 
                      src={orderScreenshot} 
                      alt="Screenshot of client management in tib"
                      className="w-full h-auto" // Responsive image
                    />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[black] mb-2">Automate Your Orders</h3>
            <p className="text-[#707070] font-medium text-base leading-relaxed max-w-[280px]">
              Create new orders, track their progress from start to finish, and see all related files in a single, unified view.
            </p>
          </div>

          {/* Column 3: Leave comments - SPANS FULL WIDTH ON TABLET */}
          <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
            <div className="w-full max-w-xs mb-6 md:max-w-none md:w-full">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-full h-52 flex items-center justify-center">
                  <div className="w-full max-w-[300px]  bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                    <img 
                      src={invoiceScreenshot} 
                      alt="Screenshot of client management in tib"
                      className="w-full h-auto" // Responsive image
                    />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[black] mb-2">Get Paid Faster</h3>
            <p className="text-[#707070] font-medium text-base leading-relaxed max-w-[280px]">
              Generate and send professional invoices directly from the app. Track payment status in real-time and stop chasing late payments.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Creation;