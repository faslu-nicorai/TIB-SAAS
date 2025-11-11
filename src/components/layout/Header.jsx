// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import "./Header.css";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showJoinBtn, setShowJoinBtn] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const featuresSection = document.getElementById("product-showcase");
            if (!featuresSection) return;
            const rect = featuresSection.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.6;
            setShowJoinBtn(isVisible);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once in case page already scrolled
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const motionTransition = { duration: 0.28, ease: "easeInOut" };

    return (
        <header className={`navbar ${menuOpen && isMobile ? "expanded" : ""}`}>
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <span className="brand-text">TIB</span>
                </div>

                {/* Desktop Nav Links */}
                {!isMobile && (
                    <nav className="navbar-links">
                        <Button variant="ghost" asChild>
                            <a href="#pricing">Pricing</a>
                        </Button>

                        <Button variant="ghost" asChild>
                            <a href="#login">Log in</a>
                        </Button>

                        {/* Animate the join button on desktop */}
                        <AnimatePresence>
                            {showJoinBtn && (
                                <motion.div
                                    key="join-btn"
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={motionTransition}
                                    style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                                >
                                    <Button
                                        asChild
                                        className="bg-[#141414] text-white hover:bg-gray-600 rounded-full px-6"
                                    >
                                        <a href="#join">Get started free</a>
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </nav>
                )}

                {/* Mobile hamburger */}
                {isMobile && (
                    <button
                        className={`hamburger ${menuOpen ? "active" : ""}`}
                        aria-label="Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                )}
            </div>

            {/* Mobile Expanded Menu */}
            <AnimatePresence>
                {isMobile && menuOpen && (
                    <motion.nav
                        className="navbar-links-expanded"
                        initial={{ opacity: 0, scaleY: 0.8, transformOrigin: "top" }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0.8 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        {/* === LINKS FROM THE VIDEO === */}
                        <Button variant="ghost" asChild>
                            <a href="#changelog" onClick={() => setMenuOpen(false)}>Changelog</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#careers" onClick={() => setMenuOpen(false)}>Careers</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#merch" onClick={() => setMenuOpen(false)}>Merch</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#support" onClick={() => setMenuOpen(false)}>Support</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#login" onClick={() => setMenuOpen(false)}>Log in</a>
                        </Button>

                        <Button
                            asChild
                            className="bg-[#141414] text-white hover:bg-gray-600 rounded-full px-6"
                            s                       >
                            <a href="#join" onClick={() => setMenuOpen(false)}>Join for free</a>
                        </Button>
                    </motion.nav>
                )}
                t       </AnimatePresence>
        </header>
    );
};

export default Header;
