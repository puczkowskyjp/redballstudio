import { motion } from 'framer-motion';


interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerMenu({ isOpen, toggleMenu }: HamburgerMenuProps) {
  return (
    < motion.div
      onClick={toggleMenu}
      className="cursor-pointer flex flex-col justify-center items-center space-y-1"
      animate={{
        rotate: isOpen ? 45 : 0, // Rotate the hamburger to X
      }
      }
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Top bar */}
      < motion.div
        className="w-8 h-1 bg-white"
        animate={{
          rotate: isOpen ? 90 : 0, // Rotate the top bar when open
          translateY: isOpen ? 6 : 0, // Move it down when it's an X
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Middle bar */}
      <motion.div
        className="w-8 h-1 bg-white"
        animate={{
          opacity: isOpen ? 0 : 1, // Hide the middle bar when open
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Bottom bar */}
      <motion.div
        className="w-8 h-1 bg-white"
        animate={{
          //rotate: isOpen ? 10 : 0, // Rotate the bottom bar when open
          translateY: isOpen ? -9.5 : 0, // Move it up when it's an X
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div >
  );
}
