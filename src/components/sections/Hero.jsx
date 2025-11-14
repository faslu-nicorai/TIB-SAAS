// src/components/Hero.jsx

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Removed AppWindow, wasn't used
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  BarChart3,
  Users,
  CalendarCheck,
} from "lucide-react";

// 2. Import the INDUSTRY icons for the "Trusted by" section
import { Building, Factory, Ship, HardHat } from "lucide-react";


export const trustedLogos = [
  { component: Building, title: "Apex Construction" },
  { component: Factory, title: "Quantum Industries" },
  { component: Ship, title: "Maritime Logistics" },
  { component: HardHat, title: "EcoServe Solutions" },
];

export const featureIcons = [
  { component: ClipboardCheck, title: "Inspections", color: "text-blue-600" },
  { component: BarChart3, title: "Reporting", color: "text-green-600" },
  { component: Users, title: "Client Portals", color: "text-purple-600" },
  { component: CalendarCheck, title: "Scheduling", color: "text-red-600" },
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    // 4. Effect to cycle through logos every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % featureIcons.length);
        }, 2000); // Change logo every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // 5. Get the current logo component and color
    // These lines will now work correctly
    const CurrentLogo = featureIcons[index].component;
    const currentColor = featureIcons[index].color;

    return (
        <section id="hero" className="bg-white py-20 md:py-20 relative z-10">
            <motion.div
                className="container mx-auto px-4 flex flex-col items-center text-center"
                
                // --- ADD THESE 3 PROPS ---
                initial={{ opacity: 0, y: 20 }} // Start faded out and 20px down
                animate={{ opacity: 1, y: 0 }}   // Animate to fully visible and at y=0
                transition={{ 
                    duration: 0.7, 
                    ease: "easeOut", 
                    delay: 0.4 
                }}
               
            >

                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6 rounded-2xl shadow-lg bg-white overflow-hidden">


                    {/* 3. AnimatePresence: Handles the enter/exit animations */}
                    <AnimatePresence>
                        <motion.div
                            // 4. Key: Crucial for AnimatePresence to detect changes
                            key={index}
                            // 5. Positioning: Absolute to stack on top of each other
                            className="absolute inset-0  flex items-center justify-center bg-white rounded-2xl"
                            style={{ zIndex: 3 }} // Keep the active logo on top
                            // 6. Animations:
                            initial={{ y: "-100%" }} // Start above the container
                            animate={{ y: "0%" }}     // Animate to the center
                            exit={{ y: "100%" }}       // Exit by sliding out the bottom
                            transition={{
                                duration: 0.5,
                                ease: "circInOut",
                            }}
                        >
                            {/* 7. Render the current logo component with its color */}
                            {/* This line was erroring, but is now fixed */}
                            <CurrentLogo className={`w-full h-full ${currentColor}`} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-[#141414] leading-tight max-w-4xl">
                    From Site to  <br></br>Certificate
                </h1>

                <p className="mt-6 text-lg text-[#707070] font-medium max-w-2xl">
                    Certive centralizes inspections, field reports, and certificates so your teams deliver compliant work faster — no paperwork, no rework.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="bg-[#141414] text-white hover:bg-gray-500 rounded-full">
                        <a href="#join">Create free account</a>
                    </Button>

                    <Button size="lg" variant="outline" asChild className="rounded-full hover:bg-[#f6f6f6]">
                        <a href="/pricing" className="flex items-center gap-2 pl-6 pr-3">
                            View pricing
                            <span className="bg-[#f0f0f0] rounded-full flex items-center justify-center w-8 h-8 ">
                                <ArrowRight className="h-5 w-5" />
                            </span>
                        </a>
                    </Button>
                </div>

                {/* "Trusted by" text */}
                <p className="mt-20 text-sm text-gray-500 tracking-wider">
                    Trusted by Companies at
                </p>

                {/* 3. Static logo grid (replaces LogoLoop) */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 md:gap-x-12 gap-y-4">
                    {/* This part needs to be updated to use the 'component' property too */}
                    {trustedLogos.map((logo) => {
                        const LogoComponent = logo.component; // Get the component
                        return (
                            <a
                                key={logo.title}
                                href={logo.href}
                                title={logo.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ADADAD] hover:text-[black] transition-colors"
                                aria-label={logo.title}
                            >
                                {/* Render the component here */}
                                <LogoComponent className="text-5xl" />
                            </a>
                        );
                    })}
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;