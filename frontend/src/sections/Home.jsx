import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  const roles = [
    "Full Stack Developer",
    "Backend Engineer",
    "React & Next.js Developer",
    "Problem Solver",
    "System Design Enthusiast",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Shubham_Kumar_Resume.pdf";
    link.download = "Shubham_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-10 md:mt-0"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="max-w-4xl w-full px-6 text-center space-y-8"
      >
        {/* Name Intro */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl mt-8 font-extrabold text-white leading-[1.15]"
        >
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Shubham Kumar
          </span>
        </motion.h1>

        {/* Rotating Role */}
        <motion.div
          variants={fadeUp}
          className="h-8 flex items-center justify-center"
        >
          <p className="text-lg md:text-2xl text-white/70 tracking-wide transition-all duration-500">
            <span className="text-cyan-400 mr-2">&gt;</span>
            {roles[currentRole]}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-white/50 text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
        >
          Crafting pixel-perfect interfaces with immersive animations while
          building scalable full-stack applications using modern technologies —
          driven by clean code and seamless user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-6 pt-4"
        >
          <button
            onClick={handleDownload}
            className="px-8 py-3 rounded-full bg-white text-black font-medium
            hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
            transition duration-300"
          >
            Download CV
          </button>

          <button
            onClick={handleContactClick}
            className="px-8 py-3 rounded-full border border-white/20 text-white
            hover:border-white hover:bg-white/5
            transition duration-300"
          >
            Contact Me
          </button>
        </motion.div>

        <motion.i
          variants={fadeUp}
          className="fi fi-br-angle-down mt-3 text-white/60 animate-float"
        ></motion.i>
      </motion.div>
    </section>
  );
}
