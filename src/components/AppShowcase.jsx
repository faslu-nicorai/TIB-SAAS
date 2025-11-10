import React, { useRef } from 'react';
import nicorai from '../assets/nicorai.png';
import { motion, useScroll, useTransform } from "framer-motion";



const AppShowcase = () => {

    // --- 3. Set up a ref for the section ---
    const trackRef = useRef(null);

    // --- 4. Track scroll progress for the section ---
    const { scrollYProgress } = useScroll({
        target: trackRef,
        // Start animation when top of section hits 80% down viewport,
        // end when top of section hits 20% down viewport.
        offset: ["start end", "end start"]
    });

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

    return (
        <div ref={trackRef} className="relative h-[400vh]">
            <section id="app-showcase" className="sticky top-0 h-screen py-20 px-25 bg-white overflow-hidden">
                <div className="container mx-auto px-4 h-full">
                    <div className="relative w-full h-full">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">

                            <p className="text-lg text-gray-600 font-medium mb-2">Already powering</p>

                            <div>
                                <motion.h2
                                    style={{ opacity: opacity1, y: y1 }}
                                    className="text-5xl md:text-6xl font-extrabold text-[#141414] leading-tight mb-4"
                                >
                                    1,150+ Companies
                                </motion.h2>
                                <motion.h3
                                    style={{ opacity: opacity2, y: y2 }}
                                    className="text-6xl md:text-6xl font-extrabold text-[#141414] leading-snug mb-4"
                                >
                                    550,400+ Orders
                                </motion.h3>
                                <motion.p
                                    style={{ opacity: opacity3, y: y3 }}
                                    className="text-6xl md:text-6xl font-extrabold text-[#141414] leading-snug"
                                >
                                    290,500+ Invoices
                                </motion.p>
                            </div>
                        </div>


                        {/* Top Row */}
                        <motion.img
                            src={nicorai}
                            alt="Logo 1"
                            className="absolute top-[5%] left-[25%] w-16 h-16 md:w-20 md:h-20 object-contain"
                            animate={{ x: ["-7px", "7px"], y: ["-10px", "10px"] }}
                            transition={{ ...floatTransition, duration: 4.5, delay: 0.1 }}
                        />
                        <motion.img
                            src={nicorai}
                            alt="Logo 2"
                            className="absolute top-[3%] right-[25%] w-14 h-14 md:w-18 md:h-18 object-contain"
                            animate={{ x: ["8px", "-8px"], y: ["-8px", "8px"] }}
                            transition={{ ...floatTransition, duration: 4.2, delay: 0.5 }}
                        />
                        <motion.img
                            src={nicorai}
                            alt="Logo 3"
                            className="absolute top-[15%] right-[5%] w-12 h-12 md:w-16 md:h-16 object-contain"
                            animate={{ x: ["-6px", "6px"], y: ["-12px", "12px"] }}
                            transition={{ ...floatTransition, duration: 4.8, delay: 0.3 }}
                        />

                        {/* Middle Row */}
                        <motion.img
                            src={nicorai}
                            alt="Logo 4"
                            className="absolute top-[30%] left-[3%] w-14 h-14 md:w-18 md:h-18 object-contain"
                            animate={{ x: ["9px", "-9px"], y: ["-10px", "10px"] }}
                            transition={{ ...floatTransition, duration: 4.3, delay: 0.2 }}
                        />
                        <motion.img
                            src={nicorai}
                            alt="Logo 10"
                            className="absolute top-[40%] left-[15%] w-14 h-14 md:w-18 md:h-18 object-contain"
                            animate={{ x: ["-5px", "5px"], y: ["-9px", "9px"] }}
                            transition={{ ...floatTransition, duration: 4.6, delay: 0.7 }}
                        />
                        <motion.img
                            src={nicorai}
                            alt="Logo 5"
                            className="absolute top-[35%] right-[10%] w-16 h-16 md:w-20 md:h-20 object-contain"
                            animate={{ x: ["7px", "-7px"], y: ["-11px", "11px"] }}
                            transition={{ ...floatTransition, duration: 4.7, delay: 0.4 }}
                        />

                        {/* Bottom Row */}
                        <motion.img
                            src={nicorai}
                            alt="Logo 6"
                            className="absolute bottom-[20%] left-[15%] w-12 h-12 md:w-16 md:h-16 object-contain"
                            animate={{ x: ["-8px", "8px"], y: ["-12px", "12px"] }}
                            transition={{ ...floatTransition, duration: 4.9, delay: 0.6 }}
                        />
                        <motion.img
                            src={nicorai}
                            alt="Logo 7"
                            className="absolute bottom-[5%] left-[30%] w-16 h-16 md:w-20 md:h-20 object-contain"
                            animate={{ x: ["6px", "-6px"], y: ["-8px", "8px"] }}
                            transition={{ ...floatTransition, duration: 4.1, delay: 0.1 }}
                        />
                        <motion.img
                            src={nicorai}
                            alt="Logo 8"
                            className="absolute bottom-[10%] right-[3%] w-14 h-14 md:w-18 md:h-18 object-contain"
                            animate={{ x: ["-7px", "7px"], y: ["-10px", "10px"] }}
                            transition={{ ...floatTransition, duration: 5.0, delay: 0.3 }}
                        />
                        <motion.img
                            src={nicorai}
                            alt="Logo 9"
                            className="absolute bottom-[25%] right-[20%] w-12 h-12 md:w-16 md:h-16 object-contain"
                            animate={{ x: ["8px", "-8px"], y: ["-9px", "9px"] }}
                            transition={{ ...floatTransition, duration: 4.4, delay: 0.8 }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppShowcase;