import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Products');
  const [searchQuery, setSearchQuery] = useState('');

  const navItems: NavItem[] = [
    { name: 'Products', href: '#products' },
    { name: 'Cart', href: '#cart' },
    { name: 'Orders', href: '#orders' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 whitespace-nowrap"
            >
              Store
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex-1 max-w-md"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                  onClick={() => setActiveItem(item.name)}
                  className="relative px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
                >
                  {item.name}
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;