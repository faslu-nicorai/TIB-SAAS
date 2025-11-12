import React, { useState } from "react";
import { Search, Scan, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

const Logo = () => (

    <div className="navbar-logo">
        <span className="brand-text">TIB</span>
    </div>

);

const PricingHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white ">
            {/* ===== Mobile + Tablet Header (below lg) ===== */}
            <div className="flex flex-col lg:hidden">
                {/* Top Row (Logo + Search + Menu) */}
                <div className="flex items-center justify-between px-4 py-2">
                    <Logo />
                    <div className="flex-1 mx-3 max-w-md">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-[#141414]" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search Screens"
                                className="w-full bg-gray-100 rounded-full border-none pl-10 pr-10 py-2 text-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <Scan className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="text-gray-600 hover:text-black transition"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Links Row (Left-aligned) */}
                <div className="flex justify-start gap-6 border-t border-gray-100 py-2 px-4 text-sm font-medium">
                    <a href="/" className="text-[#ADADAD] hover:text-black">
                        Apps
                    </a>
                    <a href="#" className="text-[#ADADAD] hover:text-black">
                        Sites
                    </a>
                </div>

                {/* Dropdown Menu Animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-[90px] left-0 w-full bg-white z-40 shadow-lg"
                        >
                            <div className="flex flex-col items-center py-4 gap-3">
                                <a
                                    href="#"
                                    className="text-sm font-medium text-gray-800 hover:text-black py-1"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-gray-800 hover:text-black py-1"
                                >
                                    Log in
                                </a>
                                <Button
                                    type="button"
                                    className="mt-2 w-11/12 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                                >
                                    Create free account
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ===== Desktop Header (from lg and up) ===== */}
            <div className="hidden lg:flex items-center justify-between px-14 py-3">
                {/* Left Section */}
                <div className="flex items-center gap-6 shrink-0">
                    <Logo />
                    <a
                        href="/"
                        className="text-sm font-medium text-[#ADADAD] hover:text-black"
                    >
                        Apps
                    </a>
                    <a
                        href="#"
                        className="text-sm font-medium text-[#ADADAD] hover:text-black"
                    >
                        Sites
                    </a>
                </div>

                {/* Center Search — smaller for laptops */}
                <div className="w-full max-w-sm xl:max-w-md relative -ml-6">

                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-[#141414]" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search Screens"
                        className="w-full bg-gray-100 rounded-full border-none pl-10 pr-10 py-2.5 text-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <Scan className="h-5 w-5 text-gray-400" />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6 shrink-0">
                    <a
                        href="#"
                        className="text-sm font-medium text-[#141414] hover:text-black"
                    >
                        Pricing
                    </a>
                    <a
                        href="#"
                        className="text-sm font-medium text-[#141414] hover:text-black"
                    >
                        Log in
                    </a>
                    <Button
                        type="button"
                        className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                    >
                        Create free account
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default PricingHeader;
