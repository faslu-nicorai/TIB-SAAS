import React, { useRef } from 'react';
import nicorai from '../../assets/nicorai.png';
import { motion, useScroll, useTransform } from "framer-motion";



const AppShowcase = () => {

    // --- 3. Set up a ref for the section ---
    const trackRef = useRef(null);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;


    // --- 4. Track scroll progress for the section ---
    const { scrollYProgress } = useScroll(
        !isMobile ? {
            target: trackRef,
            // Start animation when top of section hits 80% down viewport,
            // end when top of section hits 20% down viewport.
            offset: ["start end", "end start"]
        } : { target: null }
    );

    // Hold (Hidden): 0% to 20% (0.2)
    // Animate: 20% to 80% (0.2 to 0.8)
    // Hold (Visible): 80% to 100% (0.8 to 1.0)
    // This creates a 20% "hold" at the start and end.

    // Line 1: Animates between 20% and 40%
    const opacity1 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const y1 = useTransform(scrollYProgress, [0.2, 0.4], [30, 0]);

    // Line 2: Animates between 40% and 60%
    const opacity2 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const y2 = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);

    // Line 3: Animates between 60% and 80%
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.8], [30, 0]);

    const floatTransition = {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
    };

    const Logo = ({ src, alt, className, animate, transition }) =>
        isMobile ? (
            <img src={src} alt={alt} className={className} />
        ) : (
            <motion.img src={src} alt={alt} className={className} animate={animate} transition={transition} />
        );

    return (
        <div ref={trackRef} className={`relative ${isMobile ? "h-auto" : "h-[400vh]"}`}>
            <section id="app-showcase" className="relative md:sticky md:top-0 h-screen py-8 md:py-20 px-4 md:px-25 bg-white overflow-hidden z-10">                <div className="container mx-auto px-4 h-full">
                <div className="relative w-full h-full">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">

                        <p className="text-3xl text-[black] font-bold mb-8">Already powering</p>

                        <div>
                            {isMobile ? (
                                <div className='mt-4'>
                                    <h2 className="text-2xl md:text-6xl font-extrabold text-[#141414] mb-2 whitespace-nowrap">
                                        2+ Companies
                                    </h2>
                                    <h3 className="text-2xl md:text-6xl font-extrabold text-[#141414] mb-2 whitespace-nowrap">
                                        2000+ Orders
                                    </h3>
                                    <p className="text-2xl md:text-6xl font-extrabold text-[#141414] whitespace-nowrap">
                                        1500+ Certificates
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <motion.div style={{ opacity: opacity1, y: y1 }}
                                        className="text-8xl font-extrabold text-[#141414] mb-2">
                                        2+ Companies
                                    </motion.div>
                                    <motion.div
                                        className="text-8xl font-extrabold text-[#141414] mb-2"
                                        style={{ opacity: opacity2, y: y2 }}
                                    >
                                        2000+ Orders
                                    </motion.div>

                                    <motion.div style={{ opacity: opacity3, y: y3 }}
                                        className="text-8xl font-extrabold text-[#141414]">
                                        1500+ Certificates
                                    </motion.div>
                                </>
                            )
                            }
                        </div>
                    </div>

                </div>
            </div>

            </section>
        </div>
    );
};

export default AppShowcase;