import Naruto from "../image/Naruto.png";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { delay, motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ showSideBar, setShowSideBar, setLoading, loading }) => {
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

  const navBar = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      opacity: 0,
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

  return (
    <motion.div
      variants={navBar}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full px-2 md:px-4 py-3 flex justify-center items-center  max-w-6xl "
    >
      <div className="flex py-4 justify-between items-center w-full">
        <div className="flex justify-center items-center gap-1">
          <img className="select-none w-10 h-10" src={Naruto} alt="logo" />

          <p className=" select-none text-2xl font-bold ">Rahul</p>
        </div>
        <div className="hidden md:flex gap-3 ">
          <div>
            <p
              onClick={() => handleHome()}
              className=" hover:text-yellow-400 cursor-pointer"
            >
              <span className="text-[#C778DD]">#</span>home
            </p>
          </div>
          <div>
            <p
              onClick={() => handleWorks()}
              className="hover:text-yellow-400 cursor-pointer"
            >
              <span className="text-[#C778DD]">#</span>works
            </p>
          </div>
          <div>
            <p
              onClick={() => handleAboutMe()}
              className=" hover:text-yellow-400 cursor-pointer"
            >
              <span className="text-[#C778DD]">#</span>about-me
            </p>
          </div>
          <div>
            <p
              onClick={() => handleContacts()}
              className=" hover:text-yellow-400 cursor-pointer"
            >
              <span className="text-[#C778DD]">#</span>contacts
            </p>
          </div>
        </div>

        {showSideBar === false ? (
          <FiMenu
            onClick={() => setShowSideBar((show) => !show)}
            className="h-5 w-5 text-white sm:hidden cursor-pointer"
          />
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
