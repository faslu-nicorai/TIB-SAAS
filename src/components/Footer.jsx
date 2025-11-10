// import React from 'react';

// const Footer = () => {
//     return (
//         <div className='bg-white'>

//             <div className="bg-black">
//                 <div className='bg-white p-5 rounded-b-[25px]'/>
//             </div>

//             <footer className="bg-black text-white py-12 px-25">

//                 <div className="container mx-auto px-4">
//                     {/* Top Section: Logo + Tagline + Link Columns */}
//                     <div className="flex flex-col md:flex-row justify-between gap-8">
//                         {/* Left: Logo + Tagline */}
//                         <div>
//                             <div className="h-8 w-8 bg-white rounded-sm mb-4"></div> {/* Placeholder for logo */}
//                             <p className="text-[#ADADAD] text-sm max-w-xs">
//                                 Grow your business smarter with TIB.
//                             </p>
//                         </div>

//                         {/* Middle: Explore Links */}
//                         <div>
//                             <ul className="space-y-2 font-semibold">
//                                 <li><a href="#" className="hover:text-gray-400 transition">Explore</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">Glossary</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">Pricing</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">Changelog</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">Blog</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">Colors</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">Competitor research</a></li>
//                             </ul>
//                         </div>

//                         {/* Right: Contact Links */}
//                         <div>
//                             <ul className="space-y-2 font-semibold">
//                                 <li><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">Help center</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">Careers</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">Merch</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">X (Twitter)</a></li>
//                                 <li><a href="#" className="hover:text-gray-400 transition">LinkedIn</a></li>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Bottom Section: Copyright + Legal Links */}
//                     <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[#ADADAD] text-xs">
//                         <p>© YourBrand Since 2025. All rights reserved.</p>
//                         <div className="flex space-x-6 mt-4 sm:mt-0">
//                             <a href="#" className="hover:text-white transition">Privacy policy</a>
//                             <a href="#" className="hover:text-white transition">Terms</a>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Footer;




import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 sticky bottom-0 left-0 w-full">
            <div className="container mx-auto px-4">
                {/* Top Section: Logo + Tagline + Link Columns */}
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Left: Logo + Tagline */}
                    <div>
                        <div className="h-8 w-8 bg-white rounded-sm mb-4"></div>
                        <p className="text-[#ADADAD] text-sm max-w-xs">
                            Grow your business smarter with TIB.
                        </p>
                    </div>

                    {/* Middle: Explore Links */}
                    <div>
                        <ul className="space-y-2 font-semibold">
                            <li><a href="#" className="hover:text-gray-400 transition">Explore</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">Glossary</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">Changelog</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">Colors</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">Competitor research</a></li>
                        </ul>
                    </div>

                    {/* Right: Contact Links */}
                    <div>
                        <ul className="space-y-2 font-semibold">
                            <li><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">Help center</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">Merch</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">X (Twitter)</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright + Legal Links */}
                <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[#ADADAD] text-xs">
                    <p>© YourBrand Since 2025. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white transition">Privacy policy</a>
                        <a href="#" className="hover:text-white transition">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;