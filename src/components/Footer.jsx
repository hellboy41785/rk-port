import { motion } from "framer-motion";

const footer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    transition: { delay: 1.5, duration: 1 },
  },
};

const path = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
    },
  },
};

const Footer = () => {
  return (
    <motion.div
      variants={footer}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full   border-t border-gray-400 py-10 max-w-6xl px-4  xl:px-0"
    ></motion.div>
  );
};

export default Footer;
