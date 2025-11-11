import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 sticky bottom-0 left-0 w-full">
            <div className="container mx-auto px-4">
                {/* Top Section: Logo + Tagline + Link Columns */}
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
                    {/* Left: Logo + Tagline */}
                    <div className="mb-8 md:mb-0">
                        {/* Logo Placeholder - Mimics the Mobbin 'M' shape */}
                        <div className="flex items-end h-8 w-8 mb-4">
                            <div className="w-3 h-6 bg-white transform -skew-x-12 mr-1"></div>
                            <div className="w-3 h-6 bg-white transform skew-x-12"></div>
                        </div>

                        <p className="text-[#ADADAD] text-base max-w-xs">
                            Grow your business smarter with TIB.
                        </p>
                    </div>

                    {/* Right: Link Columns Group - Forced to be side-by-side on all screens (as requested for mobile) */}
                    <div className="flex flex-row justify-start w-full md:w-auto gap-12 sm:gap-24 lg:gap-32">
                        {/* Explore Links */}
                        <div>
                            <ul className="space-y-3 text-base">
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Explore</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Glossary</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Pricing</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Changelog</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Blog</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Colors</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Competitor research</a></li>
                            </ul>
                        </div>

                        {/* Contact Links */}
                        <div>
                            <ul className="space-y-3 text-base">
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Help center</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Careers</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Merch</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">X (Twitter)</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright + Legal Links */}
                <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[#ADADAD] text-sm">
                    <p className="text-sm">© TIB 2025</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms</a>
                    </div>
                </div>
            </div>        </footer>
    );
};

export default Footer;