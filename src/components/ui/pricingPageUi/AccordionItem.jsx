import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react"; // Removed X import

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  const contentVariants = {
    collapsed: { 
      opacity: 0, 
      height: 0,
      transition: {
        height: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.2 }
      }
    },
    expanded: { 
      opacity: 1, 
      height: "auto",
      transition: {
        height: { type: "spring", stiffness: 300, damping: 30, duration: 0.4 },
        opacity: { duration: 0.3, delay: 0.05 }
      }
    }
  };

  return (
    <>
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      className="w-full bg-[#F4F4F4] rounded-xl px-6 hover:bg-[#EBEBEB] py-4 cursor-pointer"
      whileHover={{ scale: 1.01 }}
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-black">{question}</p>
        
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.3
          }}
          className="w-5 h-5 flex-shrink-0"
        >
          <Plus className="w-full h-full" />
        </motion.div>
      </div>

      {/* Smooth expand effect with spring physics */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            layout
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <p className="mt-3 text-[#707070] font-medium">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

    </>
    
  );
}

export default AccordionItem;
