import React, { useState, FC, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type UserType = 'buyer' | 'seller';

interface AuthFormData {
  userType: UserType;
  email: string;
  password: string;
  name?: string;
}

const AuthPage: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [userType, setUserType] = useState<UserType>('buyer');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleSubmit = (): void => {
    const formData: AuthFormData = {
      userType,
      email,
      password,
      ...(name && { name })
    };
    console.log(formData);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(to bottom, #d9a574, #f5ebe0, #c9ced6, #7fa3b0)' }}>
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Toggle Switch */}
          <div className="p-2 bg-gray-50">
            <div className="relative bg-gray-200 rounded-full p-1 flex">
              <motion.div
                className="absolute top-1 bottom-1 bg-white rounded-full shadow-md"
                animate={{
                  left: isLogin ? '4px' : '50%',
                  right: isLogin ? '50%' : '4px',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              <motion.button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 text-sm font-semibold rounded-full relative z-10 ${
                  isLogin ? 'text-gray-900' : 'text-gray-500'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </motion.button>
              <motion.button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-sm font-semibold rounded-full relative z-10 ${
                  !isLogin ? 'text-gray-900' : 'text-gray-500'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign Up
              </motion.button>
            </div>
          </div>

          {/* Form Container */}
          <div className="p-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-2"
              key={isLogin ? 'login-title' : 'signup-title'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </motion.h2>
            <motion.p 
              className="text-gray-500 mb-8"
              key={isLogin ? 'login-subtitle' : 'signup-subtitle'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {isLogin ? 'Login to continue' : 'Sign up to get started'}
            </motion.p>

            {/* User Type Toggle */}
            <div className="mb-6">
              <div className="flex gap-3">
                <motion.button
                  onClick={() => setUserType('buyer')}
                  className={`flex-1 py-3 px-4 rounded-2xl font-medium ${
                    userType === 'buyer'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ scale: userType === 'buyer' ? 1.05 : 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  Buyer
                </motion.button>
                <motion.button
                  onClick={() => setUserType('seller')}
                  className={`flex-1 py-3 px-4 rounded-2xl font-medium ${
                    userType === 'seller'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ scale: userType === 'seller' ? 1.05 : 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  Seller
                </motion.button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={handleNameChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              <AnimatePresence>
                {isLogin && (
                  <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.button
                      type="button"
                      className="text-sm text-blue-500 hover:text-blue-600 font-medium"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Forgot Password?
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-3 rounded-2xl font-semibold shadow-lg mt-6"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </motion.button>
            </div>

            {/* Divider */}
            <motion.div 
              className="relative my-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </motion.div>

            {/* Social Login */}
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button 
                className="flex-1 py-3 px-4 bg-gray-50 rounded-2xl border border-gray-200"
                whileHover={{ scale: 1.02, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium text-gray-700">Google</span>
              </motion.button>
              <motion.button 
                className="flex-1 py-3 px-4 bg-gray-50 rounded-2xl border border-gray-200"
                whileHover={{ scale: 1.02, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium text-gray-700">Apple</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;