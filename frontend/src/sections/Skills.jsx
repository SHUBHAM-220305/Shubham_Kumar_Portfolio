import { motion } from "framer-motion";
import {
  FaLock,
  FaLaptopCode,
  FaServer,
  FaCode,
  FaTools,
} from "react-icons/fa";

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

export default function Skills() {
  const frontend = [
    { name: "React", icon: <i className="devicon-react-original colored"></i> },
    { name: "Redux", icon: <i className="devicon-redux-original colored"></i> },
    {
      name: "JavaScript",
      icon: <i className="devicon-javascript-plain colored"></i>,
    },
    { name: "HTML5", icon: <i className="devicon-html5-plain colored"></i> },
    { name: "CSS3", icon: <i className="devicon-css3-plain colored"></i> },
    {
      name: "Bootstrap",
      icon: <i className="devicon-bootstrap-plain colored"></i>,
    },
    {
      name: "Tailwind CSS",
      icon: <i className="devicon-tailwindcss-plain colored"></i>,
    },
    {
      name: "Framer Motion",
      icon: <i className="devicon-framermotion-original colored"></i>,
    },
  ];

  const backend = [
    { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
    {
      name: "Express.js",
      icon: <i className="devicon-express-original colored"></i>,
    },
    {
      name: "MongoDB",
      icon: <i className="devicon-mongodb-plain colored"></i>,
    },
    { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
    {
      name: "REST APIs",
      icon: <i className="devicon-fastapi-plain colored"></i>,
    },
    {
      name: "Authentication",
      icon: <FaLock className="text-yellow-400 my-2" />,
    },
  ];

  const programming = [
    { name: "C", icon: <i className="devicon-c-plain colored"></i> },
    { name: "C++", icon: <i className="devicon-cplusplus-plain colored"></i> },
    { name: "Python", icon: <i className="devicon-python-plain colored"></i> },
    { name: "Java", icon: <i className="devicon-java-plain colored"></i> },
    { name: "C#", icon: <i className="devicon-csharp-plain colored"></i> },
    { name: "R", icon: <i className="devicon-r-plain colored"></i> },
  ];

  const tools = [
    { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
    {
      name: "GitHub",
      icon: <i className="devicon-github-original colored"></i>,
    },
    {
      name: "Vercel",
      icon: <i className="devicon-vercel-original colored"></i>,
    },
    {
      name: "Netlify",
      icon: <i className="devicon-netlify-plain colored"></i>,
    },
    { name: "VS Code", icon: <i className="devicon-vscode-plain colored"></i> },
    {
      name: "Postman",
      icon: <i className="devicon-postman-plain colored"></i>,
    },
  ];

  const Card = ({ title, items, image }) => (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm 
        hover:border-cyan-400/40 
        hover:shadow-[0_20px_40px_rgba(34,211,238,0.25)] 
        transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl text-cyan-400">{image}</span>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4  rounded-full 
                bg-gradient-to-r from-white/10 to-white/5
                border border-white/10
                text-white/80 text-sm font-medium
                hover:-translate-y-1
                hover:scale-105 
                hover:border-cyan-400
                hover:shadow-[0_8px_18px_rgba(34,211,238,0.35)]
                transition-all duration-300 ease-out"
          >
            <span className="text-lg pt-1">{item.icon}</span>
            {item.name}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#141422] text-white py-24 px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl font-bold text-center text-white mb-10"
        >
          Technical{" "}
          <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Arsenal
          </span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          <Card title="Frontend" items={frontend} image={<FaLaptopCode />} />
          <Card
            title="Backend & Database"
            items={backend}
            image={<FaServer />}
          />
          <Card
            title="Programming Languages"
            items={programming}
            image={<FaCode />}
          />
          <Card title="Tools & Workflows" items={tools} image={<FaTools />} />
        </div>
      </motion.div>
    </section>
  );
}
