import Tanjiro from "../image/nazkuo.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  const about = {
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

  return (
    <motion.div
      variants={about}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full px-4 sm:px-4 justify-center items-center max-w-6xl m-10 select-none  mb-20"
    >
      <div className=" flex flex-col-reverse md:flex-row justify-between  w-full ">
        <div className="">
          <h1 className="text-2xl">
            <span className="text-purple-700">/</span>about me
          </h1>
          <h1 className="text-sm mt-5">Who am i ?</h1>
          <div className="sm:w-[515px]">
            <p className="text-gray-400 mt-10 sm:mt-20 text-sm">
              Hello, i’m Rahul!
              <br />
              <br />
              <br />
              I’m a self-taught front-end developer . I can develop responsive
              websites from scratch and raise them into modern user-friendly web
              experiences.
              <br />
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been creating various projects
              over the time to gain experience. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <img className="" src={Tanjiro} />
        </div>
      </div>

      <div className="mt-14">
        <h1 className="text-2xl">
          <span className="text-purple-600">#</span>skills
        </h1>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-center sm:justify-between items-center mt-8 ">
          <div className="w-[250px]">
            <div className="border border-gray-300">
              <h1 className="font-bold sm:inline p-1">
                Languages & Frameworks
              </h1>
            </div>
            <div className="border border-gray-300 ">
              <h1 className="text-gray-400 text-sm px-2">
                javascript ,<br />
                React.js , tailwnid css , Nextjs , Zustand , TanstackQuery{" "}
                <br /> HTML
              </h1>
            </div>
          </div>
          <div className="w-[250px]">
            <div className="border border-gray-300">
              <h1 className="font-bold px-2">Others skills</h1>
            </div>
            <div className="border border-gray-300">
              <h1 className="text-gray-400 text-sm px-2">
                Computer Hardware knowledge , Networking , Linux operating
                system
              </h1>
            </div>
          </div>
          <div className="w-[250px]">
            <div className="border border-gray-300">
              <h1 className="font-bold px-2">Tools</h1>
            </div>
            <div className="border border-gray-300 px-2 w-full">
              <h1 className="text-gray-400 text-sm px-2 w-full p-2">
                Vs Code , PyCharm , <br />
                BootStrap , Git , DaisyUi, Github, Prisma,<br/>Cheerio ,PostgreSQL
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full mt-20">
          <h1 className="text-2xl">
            <span className="text-purple-600">#</span>
            my-fun-facts
          </h1>

          <div className="mt-8 text-sm h-full">
            <div className="flex flex-col md:flex-row gap-3">
              <div className=" border border-gray-400 ">
                <p className="px-2 text-gray-300">
                  I like anime a lot as u can see from my Portfolio
                </p>
              </div>

              <div className=" border border-gray-400 ">
                <p className="px-2 text-gray-300">
                  I like to play Online games and Valo is my favorite well its
                  still a headache in rankUp games!!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <div className=" border border-gray-400">
                <p className="px-2 text-gray-300">
                  I like to do cooking but i still didn't got good at it{" "}
                </p>
              </div>
              <div className=" border border-gray-400">
                <p className="px-2 text-gray-300">
                  I am pursuing MCA for higher degree{" "}
                </p>
              </div>
            </div>

            <div className="max-w-xl">
              <div className=" border border-gray-400 mt-3">
                <p className="px-2 text-gray-300">
                  I have a sibling but as well u guys know sibling war never end{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <div className=" border border-gray-400">
                <p className="px-2 text-gray-300">
                  I like to eat sweets a allot{" "}
                </p>
              </div>
              <div className=" border border-gray-400">
                <p className="px-2 text-gray-300">
                  Coding is good until{" "}
                  <span className="text-red-400">error's</span> come{" "}
                  <span className="text-purple-400">:(((</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
