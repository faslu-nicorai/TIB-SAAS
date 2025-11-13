import React, { useState } from "react";
import { Search, Scan, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

const Logo = () => (

    <div className="navbar-logo">
        <a href="/" className="text-3xl font-bold">Certive</a>
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
                    <button
                        type="button"
                        className="text-gray-600 hover:text-black transition"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Links Row (Left-aligned) */}

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

                </div>



                {/* Right Section */}
                <div className="flex items-center gap-6 shrink-0">

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
