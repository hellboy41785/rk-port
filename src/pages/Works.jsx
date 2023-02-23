import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../Projects/projects";
const work = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1.2 },
  },
  exit: {
    x: "-100vw",
  },
};

const Works = () => {
  return (
    <motion.div
      variants={work}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full px-2 md:px-4 max-w-6xl mt-10 select-none mb-32"
    >
      <div initial="hidden" animate="visible" exit="exit">
        <span className="text-purple-600">/</span>projects
        <br />
      </div>
      <div className="mt-10">List of my projects :</div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 justify-center items-center mt-32 gap-5">
        {projects.map((project, i) => (
          <div key={i} className="border border-gray-400 max-w-[500px] rounded-sm">
            <img className="min-h-[200px] border-b border-gray-400" src={project.img} />
            <h1 className="border-b border-gray-400 text-sm text-gray-400 px-2 py-1">
              {project.technologies}
            </h1>
            <div className="px-2">
              <h1 className="py-2">{project.name}</h1>
              <p className="text-xs text-gray-400 mb-3">{project.description}</p>
              <div className="flex sm:flex-row justify-between space-x-8 py-3">
                <a href={project.live} className="border px-5 py-1 hover:bg-[#c778dd] hover:border-0">Live</a>
                <a href={project.github} className="border px-5 py-1 hover:bg-[#c778dd] hover:border-0">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Works;
