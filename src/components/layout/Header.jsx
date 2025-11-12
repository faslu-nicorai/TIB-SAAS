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
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const motionTransition = { duration: 0.28, ease: "easeInOut" };

    return (
        <header className={`navbar ${menuOpen && isMobile ? "expanded" : ""}`}>
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <a href="/" className="brand-text">TIB</a>
                </div>

                {/* Desktop Nav Links */}
                {!isMobile && (
                    <nav className="navbar-links">
                        <Button variant="ghost" asChild>
                            <a href="/pricing">Pricing</a>
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

                {/* Mobile hamburger with Framer Motion */}
                {isMobile && (
                    <button
                        className="hamburger"
                        aria-label="Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <motion.span
                            animate={menuOpen ? {
                                rotate: 45,
                                y: 7
                            } : {
                                rotate: 0,
                                y: 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                        <motion.span
                            animate={menuOpen ? {
                                opacity: 0
                            } : {
                                opacity: 1
                            }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            animate={menuOpen ? {
                                rotate: -45,
                                y: -7
                            } : {
                                rotate: 0,
                                y: 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </button>
                )}
            </div>

            {/* Mobile Expanded Menu - Framer Motion Animation */}
            <AnimatePresence>
                {isMobile && menuOpen && (
                    <motion.nav
                        className="navbar-links-expanded"
                        initial={{ opacity: 0, y: -20, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -20, x: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ left: "50%" }}
                    >
                        <Button variant="ghost" asChild>
                            <a href="#changelog" onClick={() => setMenuOpen(false)}>Changelog</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
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
                        >
                            <a href="#join" onClick={() => setMenuOpen(false)}>Get started free</a>
                        </Button>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;