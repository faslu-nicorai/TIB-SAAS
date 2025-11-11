// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import {
//     Tabs,
//     TabsList,
//     TabsTrigger,
// } from "./tabs";

// export function PricingToggle() {
//     const [selected, setSelected] = useState("yearly");

//     return (
//         <div className="flex flex-col items-center gap-3">
//             <Tabs
//                 value={selected}
//                 onValueChange={setSelected}
//                 className="w-auto relative"
//             >
//                 <TabsList className="relative inline-flex h-auto rounded-full bg-gray-100 p-1 overflow-hidden">
//                     {/* Animated background highlight */}
//                     <motion.div
//                         layoutId="toggle-highlight"
//                         className="absolute inset-y-1 rounded-full bg-white shadow-sm z-0"
//                         transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                     />

//                     {/* Yearly */}
//                     <TabsTrigger
//                         value="yearly"
//                         className={`relative z-10 rounded-full px-5 py-1.5 text-sm font-medium transition-colors ${selected === "yearly" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
//                             }`}
//                     >
//                         Yearly
//                     </TabsTrigger>

//                     {/* Quarterly */}
//                     <TabsTrigger
//                         value="quarterly"
//                         className={`relative z-10 rounded-full px-5 py-1.5 text-sm font-medium transition-colors ${selected === "yearly" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
//                             }`}
//                     >
//                         Quarterly
//                     </TabsTrigger>
//                 </TabsList>
//             </Tabs>

//             {/* Descriptive text */}
//             <p className="text-sm font-medium text-muted-foreground">
//                 <span className="font-medium text-blue-600 me-1">Save 33%</span>
//                 on a yearly subscription
//             </p>
//         </div>
//     );
// }


import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs"; // Assuming './tabs' exists

export function PricingToggle() {
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
                        // We MUST disable the default backgrounds to prevent the "double layer"
                        className={`relative z-10 rounded-full px-5 py-1.5 text-sm font-medium transition-colors
                            bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:shadow-none
                            ${
                                selected === "yearly"
                                    ? "text-gray-900" // Active text
                                    : "text-gray-500 hover:text-gray-700" // Inactive text
                            }`}
                    >
                        {/* This is the highlight. It only renders inside the *active* tab.
                          'layoutId' tells Framer Motion to animate it between triggers.
                        */}
                        {selected === "yearly" && (
                            <motion.div
                                layoutId="toggle-highlight"
                                className="absolute inset-0 z-0 rounded-full bg-white shadow-sm"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        {/* This span keeps the text *on top of* the highlight */}
                        <span className="relative z-10">Yearly</span>
                    </TabsTrigger>

                    {/* Quarterly Trigger */}
                    <TabsTrigger
                        value="quarterly"
                        // We MUST disable the default backgrounds here too
                        className={`relative z-10 rounded-full px-5 py-1.5 text-sm font-medium transition-colors
                            bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:shadow-none
                            ${
                                selected === "quarterly"
                                    ? "text-gray-900" // Active text
                                    : "text-gray-500 hover:text-gray-700" // Inactive text
                            }`}
                    >
                        {/* This highlight shares the same 'layoutId' */}
                        {selected === "quarterly" && (
                            <motion.div
                                layoutId="toggle-highlight"
                                className="absolute inset-0 z-0 rounded-full bg-white shadow-sm"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        {/* This span keeps the text *on top of* the highlight */}
                        <span className="relative z-10">Quarterly</span>
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
                                Save 33%
                            </span>
                            on a yearly subscription
                        </>
                    ) : (
                        "Billed every 3 months"
                    )}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}