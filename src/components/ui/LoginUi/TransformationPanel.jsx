import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TransformationPanel = () => {
  // State to toggle between "Paper" (false) and "Digital" (true)
  const [isDigital, setIsDigital] = useState(false);

  // Auto-switch every 5 seconds for a slightly longer view
  useEffect(() => {
    const interval = setInterval(() => {
      setIsDigital((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gray-50 font-sans">
      <AnimatePresence mode="wait">
        {!isDigital ? (
          /* --- SCENE 1: THE OLD WAY (Paperwork Chaos) --- */
          <motion.div
            key="paper-scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200"
          >
            {/* Scattered Papers Background */}
            <div className="relative h-96 w-80">
              {/* Paper 1 */}
              <motion.div
                initial={{ y: 0, rotate: -12 }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [-12, -14, -12]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-4 top-0 h-64 w-48 rounded bg-white p-4 shadow-lg ring-1 ring-gray-200"
              >
                <div className="mb-2 h-2 w-1/2 rounded bg-gray-300"></div>
                <div className="space-y-2">
                  <div className="h-1 w-full rounded bg-gray-100"></div>
                  <div className="h-1 w-full rounded bg-gray-100"></div>
                  <div className="h-1 w-3/4 rounded bg-gray-100"></div>
                </div>
                <div className="mt-8 h-16 w-16 rounded-full border-2 border-red-200 p-2 opacity-50">
                  <span className="text-[10px] font-bold text-red-400 transform -rotate-12 block">URGENT</span>
                </div>
              </motion.div>

              {/* Paper 2 */}
              <motion.div
                initial={{ y: 0, rotate: 6 }}
                animate={{
                  y: [0, 20, 0],
                  rotate: [6, 8, 6]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute right-8 top-12 h-64 w-48 rounded bg-white p-4 shadow-lg ring-1 ring-gray-200"
              >
                <div className="mb-4 flex justify-between">
                  <div className="h-2 w-1/3 rounded bg-gray-300"></div>
                  <div className="h-2 w-8 rounded bg-red-100"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-full rounded bg-gray-100"></div>
                  <div className="h-1 w-full rounded bg-gray-100"></div>
                  <div className="h-1 w-5/6 rounded bg-gray-100"></div>
                </div>
              </motion.div>

              {/* Paper 3 (Center) */}
              <motion.div
                initial={{ y: 0, rotate: -3 }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [-3, -1, -3]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="absolute left-12 top-24 h-64 w-48 rounded bg-white p-6 shadow-xl ring-1 ring-gray-300"
              >
                <div className="mb-4 h-4 w-16 rounded bg-gray-800"></div>
                <div className="space-y-3">
                  <div className="h-2 w-full rounded bg-gray-200"></div>
                  <div className="h-2 w-full rounded bg-gray-200"></div>
                  <div className="h-2 w-2/3 rounded bg-gray-200"></div>
                </div>
                <div className="absolute bottom-4 right-4">
                  {/* X Icon for error */}
                  <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-500">Manual Workflows</h3>
              <p className="text-gray-400">Spreadsheets, PDF templates, lost data.</p>
            </motion.div>
          </motion.div>
        ) : (
          /* --- SCENE 2: THE NEW WAY (FieldCert Mobile) --- */
          <motion.div
            key="digital-scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-600"
          >
            {/* Tablet Mockup */}
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="relative h-[450px] w-[320px] rounded-[2rem] border-8 border-gray-900 bg-white shadow-2xl overflow-hidden"
            >
              {/* Tablet Header */}
              <div className="bg-gray-50 px-4 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">FC</span>
                  </div>
                  <span className="text-xs font-bold text-gray-700">Inspection #402</span>
                </div>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="text-[10px] text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium"
                >
                  Online
                </motion.span>
              </div>

              {/* App Content */}
              <div className="p-4 space-y-3">

                {/* Job Details Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-xl bg-gray-50 p-3"
                >
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">Equipment</p>
                  <p className="text-sm font-semibold text-gray-800">50T Mobile Crane</p>
                  <p className="text-xs text-gray-500 mt-1">Client: Technical Bureau</p>
                </motion.div>

                {/* Checklist Items */}
                <div className="space-y-2 mt-4">
                  {[
                    "Hydraulic Systems",
                    "Load Test (SWL)",
                    "Wire Rope Condition"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (index * 0.15) }}
                      className="flex items-center justify-between p-2 rounded border border-gray-100 hover:bg-indigo-50 transition"
                    >
                      <span className="text-xs font-medium text-gray-600">{item}</span>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + (index * 0.15), type: "spring" }}
                        className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center"
                      >
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{ boxShadow: ["0px 0px 0px rgba(79, 70, 229, 0)", "0px 0px 20px rgba(79, 70, 229, 0.5)", "0px 0px 0px rgba(79, 70, 229, 0)"] }}
                    transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                    className="w-full py-2 bg-indigo-600 text-white text-center text-xs font-bold rounded-lg shadow-lg shadow-indigo-200 cursor-pointer"
                  >
                    Generate Certificate
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white">Certive Digital Core</h3>
              <p className="text-indigo-200">Mobile inspections, instant certificates.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gray-200 w-full z-10">
        <motion.div
          key={isDigital ? "digital" : "paper"}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className={`h-full ${isDigital ? 'bg-indigo-400' : 'bg-gray-400'}`}
        ></motion.div>
      </div>

    </div>
  );
};

export default TransformationPanel;