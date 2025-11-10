// src/components/Header.jsx

import React, { useEffect, useState } from "react";
import "./Header.css";
// import logo from "./mobbin-logo.png"; // replace this with your logo path
import { motion, AnimatePresence } from "framer-motion"; // <-- 1. Import motion and AnimatePresence
import { Button } from "@/components/ui/button";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showJoinBtn, setShowJoinBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const featuresSection = document.getElementById("product-showcase");
            if (!featuresSection) return;

            const rect = featuresSection.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.6;
            setShowJoinBtn(isVisible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const motionTransition = { duration: 0.3, ease: "easeInOut" };

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Left: Logo */}
                <div className="navbar-logo">
                    {/* <img src={logo} alt="Mobbin logo" /> */}
                    <span className="brand-text">TIB</span>
                </div>

                {/* Right: Nav Links */}
                <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <Button variant="ghost" asChild>
                   <motion.a
                        href="#pricing"
                        layout="position" // This tells it to animate its position
                        transition={motionTransition}
                    >
                        Pricing
                    </motion.a>
                    </Button>

                    {/* 2. Change "Log in" to a motion.a */}
                    <Button variant="ghost" asChild>
                    <motion.a
                        href="#login"
                        layout="position" // This tells it to animate its position
                        transition={motionTransition}
                    >
                        Log in
                    </motion.a>
                    </Button>

                    {/* 3. Wrap the button in AnimatePresence and animate its width */}
                    <AnimatePresence>
                        {showJoinBtn && (
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={motionTransition}
                                // Add this to prevent text wrapping during animation
                                style={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <Button asChild
                                    className="bg-[#141414] text-white hover:bg-gray-500 rounded-full "
                                >
                                <a href="#join">Get started free</a>
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                {/* Mobile menu icon */}
                <button
                    className="hamburger"
                    aria-label="Menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;