import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import workspace from '../../assets/workspace.png';
import dashboard from '../../assets/dashboard.png';
import client from '../../assets/client.png';

// --- Mock content ---
const productScreens = [
    {
        id: 1,
        content: workspace
    },
    {
        id: 2,
        content: dashboard
    },
    {
        id: 3,
        content: client
    },
];

const ProductShowcase = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) =>
                (prevIndex + 1) % productScreens.length
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="product-showcase" className="py-6 bg-white relative z-10">
            <motion.div
                className="container mx-auto px-4"

                // --- ADD THESE 3 PROPS ---
                initial={{ opacity: 0, y: 20 }} // Start faded out and 20px down
                animate={{ opacity: 1, y: 0 }}   // Animate to fully visible and at y=0
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: 0.2 // A slight delay to feel like a "page load"
                }}

            >

                {/* Modern Rounded Container (replaces browser frame) */}
                <div className="max-w-6xl mx-auto rounded-3xl shadow-lg bg-gray-50 overflow-hidden pt-6 md:pt-16 px-8 md:px-25 pb-0">

                    {/* Carousel Area */}
                    <div className="relative w-full h-[500px] md:h-[700px] bg-white rounded-tl-xl rounded-tr-xl overflow-hidden">
                        <AnimatePresence>
                            <motion.div
                                key={index}
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.9 }}
                            >
                                <img
                                    src={productScreens[index].content}
                                    alt={`Product screenshot ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProductShowcase;