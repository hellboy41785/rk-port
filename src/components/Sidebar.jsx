import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0, },
};

const Menu = {
  hidden: {
    y: "-100vh",
    opacity: 0,
   
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Cross = {
  hover: {
    scale: 2.1,
    textShadow: "#",
    rotate: [360,90],
    transition:{
     yoyo: Infinity,
     duration:1.5,
     ease: "easeInOut",
    }
  },
  visible:{
    rotate: [360,90],
    transition:{
     yoyo: Infinity,
     duration:1.5,
     ease: "easeInOut",
    }
  }
}; 

const Section={
  hover: {
    x: 25,
    scale: 1.2
  },
}

const SideBar = ({ showSideBar, setShowSideBar }) => {
  const navigate = useNavigate();
  const handleWorks = () => {
    navigate(`works`);
  };
  const handleAboutMe = () => {
    navigate(`about-me`);
  };
  const handleContacts = () => {
    navigate(`contacts`);
  };
  const handleHome = () => {
    navigate(`/`);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showSideBar && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop"
        >
          <motion.div
            variants={Menu}
            className=" text-3xl py-32 flex flex-col  justify-center items-center gap-8"
          >
            <motion.div variants={Section} whileHover="hover" onClick={() => setShowSideBar((show) => !show)}>
              <p
                onClick={() => handleHome()}
                className=" hover:text-yellow-400 cursor-pointer"
              >
                <span className="text-[#C778DD]">#</span>home
              </p>
            </motion.div>
            <motion.div variants={Section} whileHover="hover" onClick={() => setShowSideBar((show) => !show)}>
              <p
                onClick={() => handleWorks()}
                className="hover:text-yellow-400 cursor-pointer"
              >
                <span className="text-[#C778DD]">#</span>works
              </p>
            </motion.div>
            <motion.div variants={Section} whileHover="hover" onClick={() => setShowSideBar((show) => !show)}>
              <p
                onClick={() => handleAboutMe()}
                className=" hover:text-yellow-400 cursor-pointer"
              >
                <span className="text-[#C778DD]">#</span>about-me
              </p>
            </motion.div>
            <motion.div variants={Section} whileHover="hover" onClick={() => setShowSideBar((show) => !show)}>
              <p
                onClick={() => handleContacts()}
                className=" hover:text-yellow-400 cursor-pointer"
              >
                <span className="text-[#C778DD]">#</span>contacts
              </p>
            </motion.div>
            <motion.div variants={Cross} whileHover="hover" animate="visible" >
              <GiTireIronCross
                onClick={() => setShowSideBar((show) => !show)}
                className="text-white cursor-pointer"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
