import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./Header.css";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showJoinBtn, setShowJoinBtn] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    const hamburgerRef = useRef(null);
    const [menuStyle, setMenuStyle] = useState({}); // inline style when anchored on tablet

    useEffect(() => {
        const checkScreenSize = () => {
            const w = window.innerWidth;
            setIsMobile(w <= 767);
            setIsTablet(w >= 768 && w < 1024);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Position the popover under the hamburger for tablet only
    useLayoutEffect(() => {
        // If it's not a tablet, always clear the custom styles.
        if (!isTablet) {
            setMenuStyle({});
            return;
        }

        // If it IS a tablet, but the menu is closed or ref is missing,
        // do nothing. This preserves the style for the exit animation.
        if (!menuOpen || !hamburgerRef.current) {
            return;
        }

        // If we're here, the menu is open AND it's a tablet.
        // Calculate and set the position.
        const updatePosition = () => {
            // Guard in case ref is lost on resize/scroll
            if (!hamburgerRef.current) return;
            
            const btnRect = hamburgerRef.current.getBoundingClientRect();
            const desiredWidth = 300; // adjust as needed
            const left = Math.min(
                Math.max(8, btnRect.right - desiredWidth + 8),
                window.innerWidth - desiredWidth - 8
            );
            const top = btnRect.bottom + 25; // gap below button
            setMenuStyle({
                left: `${Math.round(left)}px`,
                top: `${Math.round(top)}px`,
                width: `${desiredWidth}px`,
            });
        };

        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, { passive: true });

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition);
        };
    }, [menuOpen, isTablet]); // The dependencies remain the same


    // Show join button when product section scrolls into view (unchanged)
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const featuresSection = document.getElementById("product-showcase");
    //         if (!featuresSection) return;
    //         const rect = featuresSection.getBoundingClientRect();
    //         const isVisible = rect.top <= window.innerHeight * 0.6;
    //         setShowJoinBtn(isVisible);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     handleScroll();
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    const motionTransition = { duration: 0.28, ease: "easeInOut" };

    // helper: are we using JS-anchored placement?
    const anchored = Boolean(menuStyle && menuStyle.left);

    return (
        <header className={`navbar ${menuOpen && isMobile ? "expanded" : ""}`}>
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <a href="/" className="text-3xl font-bold">
                        Inspektra
                    </a>
                </div>

                {/* Desktop nav (only when not mobile/tablet) */}
                {!isMobile && !isTablet && (
                    <nav className="navbar-links">
                        <Button variant="ghost" asChild>
                            <a href="/pricing">Pricing</a>
                        </Button>

                        <Button variant="ghost" asChild>
                            <a href="#login">Log in</a>
                        </Button>

                        {/* <AnimatePresence>
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
                                        <a href="#join">Create free account</a>
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence> */}
                    </nav>
                )}

                {/* Mobile/Tablet hamburger */}
                {(isMobile || isTablet) && (
                    <button
                        ref={hamburgerRef}
                        className="hamburger"
                        aria-label="Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </button>
                )}
            </div>

            {/* Expanded menu (mobile centered via CSS; tablet anchored by menuStyle) */}
            <AnimatePresence>
                {(isMobile || isTablet) && menuOpen && (
                    <motion.nav
                        className="navbar-links-expanded"
                        // include x: "-50%" for mobile so translateX is preserved (Framer will put it inline)
                        initial={{ opacity: 0, y: -15, x: anchored ? 0 : "-50%" }}
                        animate={{ opacity: 1, y: 0, x: anchored ? 0 : "-50%" }}
                        exit={{ opacity: 0, y: -15, x: anchored ? 0 : "-50%" }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        style={menuStyle}
                    >
                        <Button variant="ghost" asChild>
                            <a href="#changelog" onClick={() => setMenuOpen(false)}>
                                Changelog
                            </a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="/pricing" onClick={() => setMenuOpen(false)}>
                                Pricing
                            </a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#careers" onClick={() => setMenuOpen(false)}>
                                Careers
                            </a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#merch" onClick={() => setMenuOpen(false)}>
                                Merch
                            </a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#support" onClick={() => setMenuOpen(false)}>
                                Support
                            </a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#login" onClick={() => setMenuOpen(false)}>
                                Log in
                            </a>
                        </Button>

                        <Button
                            asChild
                            className="bg-[#141414] text-white hover:bg-gray-600 rounded-full px-6"
                        >
                            <a href="#join" onClick={() => setMenuOpen(false)}>
                                Get started free
                            </a>
                        </Button>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
