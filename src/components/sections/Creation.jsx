import React from 'react';

const Creation = () => {
  return (
    <section id="creation" className="py-10 px-4 md:py-24 md:px-25 bg-white relative z-10">
      <div className="container mx-auto">
        
        {/* Main Heading - responsive sizing */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[black] leading-tight max-w-4xl text-center mx-auto mb-8 sm:mb-12 md:mb-20 px-4">
          From busywork to your best work.
        </h2>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          
          {/* Column 1: Copy to Figma */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs mb-6">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-full h-48 flex items-center justify-center">
                  <div className="bg-black text-white rounded-full px-6 py-3 flex items-center gap-2 shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied to Figma
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[black] mb-2">Copy to Figma</h3>
            <p className="text-[#707070] text-base leading-relaxed max-w-[280px]">
              Download designs you like or copy it straight into Figma with our new Figma plugin.
            </p>
          </div>
          
          {/* Column 2: Save to collections */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs mb-6">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-full h-48 flex items-center justify-center">
                  <div className="w-full max-w-[240px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                    <div className="p-4 border-b">
                      <span className="text-sm font-medium">Quick save</span>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Library</span>
                        <span>☰</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg">+</span>
                        <span className="font-medium">Create collection</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Dark Mode</span>
                        <span>✓</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Launch Screens</span>
                        <span>✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[black] mb-2">Save to collections</h3>
            <p className="text-[#707070] text-base leading-relaxed max-w-[280px]">
              Collect your favorite designs and upload your own screenshots into one place.
            </p>
          </div>

          {/* Column 3: Leave comments */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs mb-6">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="w-full h-48 flex items-center justify-center">
                  <div className="w-full max-w-[240px] bg-white rounded-lg shadow-xl p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      <div>
                        <span className="font-medium text-sm">You</span>
                        <span className="text-sm text-gray-500"> 8h ago</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm">
                      Love this checkout screen, especially the order summary section.
                    </p>
                    <div className="mt-3 bg-gray-100 rounded-lg p-3 text-sm flex justify-between items-center">
                      <span>Saving this for later!!</span>
                      <span className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center">↑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[black] mb-2">Leave comments</h3>
            <p className="text-[#707070] text-base leading-relaxed max-w-[280px]">
              Take notes upon saving so you'll never forget the context in the future.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Creation;