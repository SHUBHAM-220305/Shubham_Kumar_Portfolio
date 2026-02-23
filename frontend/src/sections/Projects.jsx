import { motion } from "framer-motion";

const projects = [
  {
    title: "Blogiary",
    description:
      "A modern full-stack blogging platform with authentication, rich text editing, and seamless content management experience.",
    image: "/Blogiary.png",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/SHUBHAM-220305/Blogiary",
    live: "https://blogiary.vercel.app",
  },
  {
    title: "Melodify",
    description:
      "A Spotify-inspired music web app built with HTML, CSS, and JavaScript, featuring real-time song search, playlists, favorites, and a custom audio player.",
    image: "/Melodify.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SHUBHAM-220305/Melodify",
    live: "https://shubham-220305.github.io/Melodify/",
  },
  {
    title: "Smart To-Do List",
    description:
      "A responsive and user-friendly ToDo application built with HTML, CSS, and JavaScript. It allows users to add, edit, delete, and filter tasks with local storage.",
    image: "/Smart_TODO.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SHUBHAM-220305/TODO",
    live: "https://shubham-220305.github.io/TODO/",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A simple implementation of the classic Tic Tac Toe game built using HTML, CSS, and JavaScript which detects win or draw conditions.",
    image: "/TicTacToe.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SHUBHAM-220305/TICTACTOE",
    live: "https://shubham-220305.github.io/TICTACTOE/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-5xl md:text-6xl font-bold text-center mb-10"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h1>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative bg-[#111827] rounded-2xl overflow-hidden 
                border border-white/10 
                hover:border-cyan-400/60 
                hover:shadow-[0_25px_60px_rgba(34,211,238,0.35)] 
                transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Black overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:scale-105 transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  {/* GitHub Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex-1 text-center py-2 rounded-lg 
                      border border-white/20 
                      bg-white/5 text-white 
                      overflow-hidden
                      transition-all duration-300
                      hover:border-cyan-400
                      hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  >
                    <span className="relative z-10">GitHub</span>

                    {/* Shine Effect */}
                    <span
                      className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                        skew-x-12 
                        transition-all duration-700 group-hover:left-[125%]"
                    ></span>
                  </motion.a>

                  {/* Live Demo Button */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex-1 text-center py-2 rounded-lg 
                      bg-gradient-to-r from-cyan-500 to-blue-500 
                      text-black font-semibold 
                      overflow-hidden
                      transition-all duration-300
                      hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
                      hover:brightness-110"
                  >
                    <span className="relative z-10">Live Demo</span>

                    {/* Animated Shine */}
                    <span
                      className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                        skew-x-12 
                        transition-all duration-700 group-hover:left-[125%]"
                    ></span>
                  </motion.a>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-cyan-500/5 blur-2xl transition duration-500 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
