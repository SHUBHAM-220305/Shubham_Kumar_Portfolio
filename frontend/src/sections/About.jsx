import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const technologies = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "Git",
    "REST APIs",
    "Firebase",
    "Postman",
  ];

  return (
    <section
      id="about"
      className="w-full relative min-h-screen flex items-center justify-center px-2 py-24 bg-[#11111c] text-white"
    >
      <div className="max-w-7xl w-full space-y-10">
        {/* Heading */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.15]">
            About{" "}
            <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
        </motion.div>

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white to-[#f4d6a5] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <img
                src="/About_Photo.jpeg"
                alt="Shubham Kumar"
                className="relative object-cover rounded-2xl border border-white/10"
              />
            </div>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              I'm a Full-Stack Developer focused on building scalable,
              high-performance web applications that create impactful digital
              experiences. I transform ideas into robust systems with intuitive,
              visually engaging interfaces.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              Specializing in the MERN stack, I develop modern, fast, and
              interactive applications with clean, maintainable code — crafting
              premium UI experiences with smooth animations while constantly
              leveling up my skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/20 backdrop-blur-sm hover:scale-105 hover:border-white transition duration-300">
                <h3 className="text-3xl font-bold text-cyan-400">
                  <Counter target={2} />+
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  Years of Experience
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/20 backdrop-blur-sm hover:scale-105 hover:border-white transition duration-300">
                <h3 className="text-3xl font-bold text-purple-400">
                  <Counter target={10} />+
                </h3>
                <p className="text-white/60 text-sm mt-1">Projects Completed</p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/20 backdrop-blur-sm hover:scale-105 hover:border-white transition duration-300">
                <h3 className="text-3xl font-bold text-blue-400">
                  <Counter target={15} />+
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  Technologies Learned
                </p>
              </div>
            </div>

            {/* Core Technologies */}
            <h3 className="text-base font-semibold text-white/50">
              Core Technologies :
            </h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium 
                bg-gradient-to-r from-white/10 to-white/5 
                border border-white/10 
                text-white/80
                hover:scale-105 hover:border-cyan-400 
                transition duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
