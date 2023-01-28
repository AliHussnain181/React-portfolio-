import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-700 p-4 text-center text-white font-bold py-2"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
    >
      <p className="text-xs">Copyright 2022</p>
    </motion.footer>
  );
}

export default Footer;
