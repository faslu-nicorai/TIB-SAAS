// src/components/CheckoutModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios'; // Ensure axios is installed

const CheckoutModal = ({ isOpen, onClose }) => {
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!companyName) return;
    setLoading(true);

    try {
      // 1. Call your new Backend API
      const response = await axios.post("http://localhost:3000/api/subscribe/create-tenant", {
        companyName: companyName
      }, {
        withCredentials: true // Crucial for reading the session cookie
      });

      if (response.data.success) {
        alert("Organization Created! Please log in again to access your new workspace.");
        
        // 2. Redirect to Login (The session was revoked to force a clean slate)
        // Pass the new tenant ID to auto-fill the login if you want, or just let metadata handle it
        window.location.href = "http://localhost:5174/login"; 
      }
    } catch (error) {
      console.error("Checkout failed", error);
      alert("Failed to create organization. Try a unique name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
          >
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900">Setup Organization</h2>
              <p className="text-sm text-gray-500">Enter your company name to create your workspace.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Acme Inspections"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Fake Credit Card UI for realism */}
              <div className="opacity-50 pointer-events-none">
                 <label className="mb-1 block text-sm font-medium text-gray-700">Card Details</label>
                 <div className="flex gap-2">
                    <input type="text" placeholder="**** **** **** 4242" className="w-full rounded-lg border bg-gray-50 px-4 py-3" disabled />
                    <input type="text" placeholder="MM/YY" className="w-24 rounded-lg border bg-gray-50 px-4 py-3" disabled />
                 </div>
              </div>

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="mt-4 w-full rounded-full bg-black py-4 font-bold text-white transition hover:bg-gray-800 disabled:opacity-70"
              >
                {loading ? "Creating Workspace..." : "Complete Purchase & Create"}
              </button>
              
              <button onClick={onClose} className="w-full py-2 text-sm font-medium text-gray-500 hover:text-black">
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
