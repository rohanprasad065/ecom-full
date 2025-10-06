import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">
         
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 whitespace-nowrap"
          >
            Store
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 max-w-md"
          >
            <div className="relative">
              <input
                type="email"
                placeholder="Subscribe to newsletter..."
                className="w-full px-4 py-2 pl-10 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <div className="flex space-x-1">
            {['Privacy', 'Terms', 'Contact', 'Help'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                className="relative px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2025 Store. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;