import React, { useRef } from 'react';
import nicorai from '../../assets/nicorai.png';
import { motion, useScroll, useTransform } from "framer-motion";



const AppShowcase = () => {

    // --- 3. Set up a ref for the section ---
    const trackRef = useRef(null);

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;


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

                        <p className="text-lg text-gray-600 font-medium mb-2">Already powering</p>

                        <div>
                            {isMobile ? (
                                <div className='mt-4'>
                                    <h2 className="text-2xl md:text-6xl font-extrabold text-[#141414] mb-2 whitespace-nowrap">
                                        1,150+ Companies
                                    </h2>
                                    <h3 className="text-2xl md:text-6xl font-extrabold text-[#141414] mb-2 whitespace-nowrap">
                                        550,400+ Orders
                                    </h3>
                                    <p className="text-2xl md:text-6xl font-extrabold text-[#141414] whitespace-nowrap">
                                        290,500+ Invoices
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <motion.div style={{ opacity: opacity1, y: y1 }}
                                        className="text-6xl font-extrabold text-[#141414] mb-2">
                                        1,150+ Companies
                                    </motion.div>
                                    <motion.div
                                        className="text-6xl font-extrabold text-[#141414] mb-2"
                                        style={{ opacity: opacity2, y: y2 }}
                                    >
                                        550,400+ Orders
                                    </motion.div>

                                    <motion.div style={{ opacity: opacity3, y: y3 }}
                                        className="text-6xl font-extrabold text-[#141414]">
                                        290,500+ Invoices
                                    </motion.div>
                                </>
                            )
                            }
                        </div>
                    </div>


                    <>
                        {/* Top Row */}
                        <Logo
                            src={nicorai}
                            alt="Logo 1"
                            className="absolute top-[15%] -left-[5%] md:top-[5%] md:left-[25%] w-16 h-16 md:w-20 md:h-20 object-contain opacity-100"
                            animate={!isMobile ? { x: ["-7px", "7px"], y: ["-10px", "10px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.5, delay: 0.1 }}
                        />
                        <Logo
                            src={nicorai}
                            alt="Logo 2"
                            className="absolute top-[12%] right-[15%] md:top-[3%] md:right-[25%] w-12 h-12 md:w-18 md:h-18 object-contain opacity-100"
                            animate={!isMobile ? { x: ["8px", "-8px"], y: ["-8px", "8px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.2, delay: 0.5 }}
                        />
                        <Logo
                            src={nicorai}
                            alt="Logo 3"
                            className="absolute top-[18%] -right-[5%] md:top-[15%] md:right-[5%] w-14 h-14 md:w-16 md:h-16 object-contain opacity-100"
                            animate={!isMobile ? { x: ["-6px", "6px"], y: ["-12px", "12px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.8, delay: 0.3 }}
                        />

                        {/* Middle Row */}
                        <Logo
                            src={nicorai}
                            alt="Logo 4"
                            className="absolute top-[35%] -left-[8%] md:top-[30%] md:left-[3%] w-16 h-16 md:w-18 md:h-18 object-contain opacity-100"
                            animate={!isMobile ? { x: ["9px", "-9px"], y: ["-10px", "10px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.3, delay: 0.2 }}
                        />
                        <Logo
                            src={nicorai}
                            alt="Logo 10"
                            className="absolute top-[30%] left-[20%] md:top-[40%] md:left-[15%] w-14 h-14 md:w-18 md:h-18 object-contain opacity-100"
                            animate={!isMobile ? { x: ["-5px", "5px"], y: ["-9px", "9px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.6, delay: 0.7 }}
                        />
                        <Logo
                            src={nicorai}
                            alt="Logo 5"
                            className="absolute top-[32%] right-[15%] md:top-[35%] md:right-[10%] w-12 h-12 md:w-20 md:h-20 object-contain opacity-100"
                            animate={!isMobile ? { x: ["7px", "-7px"], y: ["-11px", "11px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.7, delay: 0.4 }}
                        />
                        <Logo
                            src={nicorai}
                            alt="Logo 11"
                            className="absolute top-[38%] -right-[6%] md:top-[35%] md:right-[10%] w-16 h-16 md:w-20 md:h-20 object-contain opacity-100"
                            animate={!isMobile ? { x: ["7px", "-7px"], y: ["-11px", "11px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.7, delay: 0.4 }}
                        />

                        {/* Bottom Row */}
                        <Logo
                            src={nicorai}
                            alt="Logo 6"
                            className="absolute bottom-[18%] -left-[6%] md:bottom-[20%] md:left-[15%] w-16 h-16 md:w-16 md:h-16 object-contain opacity-100"
                            animate={!isMobile ? { x: ["-8px", "8px"], y: ["-12px", "12px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.9, delay: 0.6 }}
                        />
                        <Logo
                            src={nicorai}
                            alt="Logo 7"
                            className="absolute bottom-[12%] left-[20%] md:bottom-[5%] md:left-[30%] w-14 h-14 md:w-20 md:h-20 object-contain opacity-100"
                            animate={!isMobile ? { x: ["6px", "-6px"], y: ["-8px", "8px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.1, delay: 0.1 }}
                        />
                        <Logo
                            src={nicorai}
                            alt="Logo 8"
                            className="absolute bottom-[15%] right-[25%] md:bottom-[10%] md:right-[3%] w-12 h-12 md:w-18 md:h-18 object-contain opacity-100"
                            animate={!isMobile ? { x: ["-7px", "7px"], y: ["-10px", "10px"] } : {}}
                            transition={{ ...floatTransition, duration: 5.0, delay: 0.3 }}
                        />
                        <Logo
                            src={nicorai}
                            alt="Logo 9"
                            className="absolute bottom-[10%] -right-[5%] md:bottom-[25%] md:right-[20%] w-14 h-14 md:w-16 md:h-16 object-contain opacity-100"
                            animate={!isMobile ? { x: ["8px", "-8px"], y: ["-9px", "9px"] } : {}}
                            transition={{ ...floatTransition, duration: 4.4, delay: 0.8 }}
                        />
                    </>

                </div>
            </div>

            </section>
        </div>
    );
};

export default AppShowcase;