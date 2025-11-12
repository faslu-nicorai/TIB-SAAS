import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs"; // Assuming './tabs' exists

export function PricingToggle() {
    // Default to "yearly" as it's the best value
    const [selected, setSelected] = useState("yearly");

    return (
        <div className="flex flex-col items-center gap-3">
            <Tabs
                value={selected}
                onValueChange={setSelected}
                className="w-auto"
            >
                <TabsList className="relative inline-flex h-auto rounded-full bg-gray-100 p-1">
                    {/* Yearly Trigger */}
                    <TabsTrigger
                        value="yearly"
                        className={`relative z-10 rounded-full px-5 py-1.5 text-sm font-medium transition-colors
                            bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:shadow-none
                            ${
                                selected === "yearly"
                                    ? "text-gray-900" // Active text
                                    : "text-gray-500 hover:text-gray-700" // Inactive text
                            }`}
                    >
                        {/* This is the highlight */}
                        {selected === "yearly" && (
                            <motion.div
                                layoutId="toggle-highlight"
                                className="absolute inset-0 z-0 rounded-full bg-white shadow-sm"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">Yearly</span>
                    </TabsTrigger>

                    {/* Monthly Trigger (Updated from Quarterly) */}
                    <TabsTrigger
                        value="monthly" // Changed from "quarterly"
                        className={`relative z-10 rounded-full px-5 py-1.5 text-sm font-medium transition-colors
                            bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:shadow-none
                            ${
                                selected === "monthly" // Changed from "quarterly"
                                    ? "text-gray-900" // Active text
                                    : "text-gray-500 hover:text-gray-700" // Inactive text
                            }`}
                    >
                        {/* This highlight shares the same 'layoutId' */}
                        {selected === "monthly" && ( // Changed from "quarterly"
                            <motion.div
                                layoutId="toggle-highlight"
                                className="absolute inset-0 z-0 rounded-full bg-white shadow-sm"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">Monthly</span>
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            {/* Descriptive text (with bonus animation) */}
            <AnimatePresence mode="wait">
                <motion.p
                    key={selected} // This key triggers the animation on change
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-medium text-muted-foreground"
                >
                    {selected === "yearly" ? (
                        <>
                            <span className="font-medium text-blue-600 me-1">
                                Save over 49%
                            </span>
                            on a yearly subscription
                        </>
                    ) : (
                        "Billed every month" // Changed from "Billed every 3 months"
                    )}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}