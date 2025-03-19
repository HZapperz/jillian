import React from 'react';
import { motion } from 'framer-motion'; // NOTE: You'll need to install framer-motion with npm install framer-motion

const AnimatedText = ({ text, tag = 'h1', delay = 0, duration = 0.5, ...props }) => {
  const Tag = motion[tag];
  
  // Animation variants for text
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.05,
        duration: duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <Tag {...props}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          style={{ 
            display: 'inline-block',
            whiteSpace: 'pre',
          }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
};

export default AnimatedText; 