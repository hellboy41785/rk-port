import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import Message from "../components/Message";
import { motion } from "framer-motion";
import SendMenu from "../components/SendMenu";

const Mail = {
  hover: {
    scale: 1.1,
  },
};

const contacts = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1.8 },
  },
  exit: {
    x: "-100vw",
  },
};

const Contacts = ({ setMessage }) => {
  const [send, setSend] = useState(false);

  return (
    <motion.div
      variants={contacts}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full px-4 sm:px-4 justify-center items-center max-w-6xl mt-10 mb-20"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="select-none">
          <h1 className="text-2xl">
            <span className="text-purple-600">/</span>contacts
          </h1>
          <p className="mt-10">
            Why hire me <span className="text-yellow-500">?</span>
          </p>
          <h1 className="text-gray-300 mt-8">
            I’m a fresher and interested in opportunities <br /> u can give me
            chance. However, if you have,
            <br /> other request or question, don’t hesitate
            <br /> to contact me
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="border mt-16 sm:mt-32 p-8 hover:shadow-md hover:border-purple-600">
            <h1 className="flex justify-center items-center  mb-4">
              Message me here
            </h1>
            <p className="flex justify-center items-center gap-3 text-gray-400">
              <FaDiscord className="text-blue-400 " />
              hellboy#5114
            </p>
            <motion.div
              variants={Mail}
              whileHover="hover"
              className="flex justify-center items-center gap-3 text-gray-400 hover:text-[#C778DD]"
            >
              <HiMailOpen className="text-red-400 " />
              <a href="https://mail.google.com/mail/u/0/#sent?compose=CllgCHrgDMmzMQGvMwVSNkhshCKxNRNJDDbXdwlrwjKWGJrvpdfjDtqFPqBjRvgRcnQRBpHkHzg">
                unknown41785@gmail.com
              </a>
            </motion.div>
            <p className="flex justify-center items-center gap-3 text-gray-400">
              <BsFillTelephoneFill className="text-green-400 " />
              +91 8168020972
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Message setSend={setSend} />
        </div>
      </div>
      <SendMenu send={send} setSend={setSend} />
    </motion.div>
  );
};

export default Contacts;
