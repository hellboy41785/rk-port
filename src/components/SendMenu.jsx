import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const send = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    delay: 8.5,
  },
};

const loading = {
  visible: {
    textShadow: "",
  },
  animation: {
    y: [0, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};
const loading1 = {
  animation: {
    y: [0, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
};
const loading2 = {
  animation: {
    y: [0, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  },
};

const SendMenu = ({ send, setSend }) => {
  useEffect(() => {
    setTimeout(() => {
      setSend(false);
    }, 6000);
  }, [send]);

  return (
    <AnimatePresence>
      {send && (
        <motion.div
          variants={send}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex items-center justify-center w-full h-full mt-10 p-10 "
        >
          <h1
            className="flex items-center justify-center p-4 bg-purple-600  border-2 border-purple-600 
             text-2xl rounded-md"
          >
            {" "}
            Sending
            <motion.span
              variants={loading}
              animate="animation"
              className="text-1xl drop-shadow-md"
            >
              .
            </motion.span>
            <motion.span
              variants={loading1}
              animate="animation"
              className="text-1xl"
            >
              .
            </motion.span>
            <motion.span
              variants={loading2}
              animate="animation"
              className="text-1xl"
            >
              .
            </motion.span>
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SendMenu;
