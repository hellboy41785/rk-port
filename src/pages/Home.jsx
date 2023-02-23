import Jujutsu from "../image/juhi.png";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const handleContacts = () => {
    navigate(`contacts`);
  };

  const section = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
    },
  };

  const quote = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { delay: 1.4, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
    },
  };
  const quote2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 3, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
    },
  };

  return (
    <>
      <motion.section
        variants={section}
        initial="hidden"
        animate="visible"
        exit="exit"
        className=" w-full flex justify-center mt-10 sm:px-4"
      >
        <div className="md:flex">
          <div className="">
            <h1 className=" text-3xl">
              I am a self-made
              <br /> <span className="text-[#C778DD]">front-end developer</span>
            </h1>
            <p className="text-gray-400 mt-9 text-sm">
              I crafts responsive websites where <br /> technologies meet
              creativity
            </p>
            <button
              onClick={() => handleContacts()}
              className="mt-7 border border-purple-400 p-3 px-5 hover:bg-[#C778DD] hover:text-black"
            >
              Contact me !!
            </button>
          </div>
          <div className="md:w-1/2 mb-4 px-8">
            <img className=" h-[400px] ml-8" src={Jujutsu} alt="Jujutsu" />
            <div className="flex  text-sm border w-[320px] gap-2 items-center ">
              <div className="w-[14px] h-[14px] bg-purple-600 ml-5"></div>
              <p>Currently Working on Tv Show App</p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className=" w-full max-w-xl p-10  mb-20 text-center">
        <motion.div
          variants={quote}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex justify-center items-center border border-gray-500 px-6 text-sm md:text-1xl h-20"
        >
          Behind every successful person is a substantial amount of coffee
        </motion.div>
        <div className="flex justify-end">
          <motion.div
            variants={quote2}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-28 text-sm  border border-purple-600 p-4 "
          >
            -Dr Who-
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
