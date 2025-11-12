import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 sticky bottom-0 left-0 w-full">
            <div className="container mx-auto px-4">
                {/* Top Section: Logo + Tagline + Link Columns */}
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
                    {/* Left: Logo + Tagline */}
                    <div className="mb-8 md:mb-0">
                        {/* Updated Logo to "tib" text */}
                        <div className="h-8 w-auto mb-4">
                           <span className="text-3xl font-bold text-white">tib</span>
                        </div>

                        <p className="text-[#ADADAD] text-base max-w-xs">
                            Grow your business smarter with tib.(tib- Technical Inspection Bureau)
                        </p>
                    </div>

                    {/* Right: Link Columns Group */}
                    <div className="flex flex-row justify-start w-full md:w-auto gap-12 sm:gap-24 lg:gap-32">
                        {/* Product Links */}
                        <div>
                            <ul className="space-y-3 text-base">
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Features</a></li>
                                <li className="font-semibold"><a href="/pricing" className="hover:text-gray-400 transition">Pricing</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Integrations</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Data Migration</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Book a Demo</a></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <ul className="space-y-3 text-base">
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Help Center</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Blog</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">Changelog</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">X (Twitter)</a></li>
                                <li className="font-semibold"><a href="#" className="hover:text-gray-400 transition">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright + Legal Links */}
                <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[#ADADAD] text-sm">
                    <p className="text-sm">© tib 2025</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;