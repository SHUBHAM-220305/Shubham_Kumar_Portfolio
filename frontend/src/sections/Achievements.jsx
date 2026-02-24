import { motion } from "framer-motion";

const achievements = [
  {
    year: "2025",
    title: "Joint Program Coordinator - CRT Program",
    category: "Leadership",
    description:
      "Led and managed the Campus Recruitment Training (CRT) Program, overseeing complete event coordination. Strengthened leadership, communication, and management skills while handling large-scale student engagement.",
  },
  {
    year: "2025",
    title: "Adobe India Hackathon - Round 1 Participant",
    category: "National Hackathon",
    description:
      "Successfully participated in Round 1 (Online MCQ + Coding) of the Adobe India Hackathon organized by Adobe, showcasing strong analytical and coding abilities in a competitive national-level environment.",
  },
  {
    year: "2025",
    title: "Smart India Hackathon (Internal) - Academic Platform",
    category: "Hackathon",
    description:
      "Proposed and designed a platform enabling college students to manage academic achievements efficiently. Earned participation certificate for innovative problem-solving approach.",
  },
  {
    year: "2025",
    title: "HP LIFE - AI for Beginners",
    category: "AI Certification",
    description:
      "Completed foundational AI course covering real-world applications, data importance, and ethical AI practices in business and society.",
  },
  {
    year: "2025",
    title: "Konark 2.0 - Crown for Code",
    category: "Competitive Coding",
    description:
      "Participated in an intense individual DSA challenge at Guru Jambheshwar University, solving algorithmic problems under competitive conditions.",
  },
  {
    year: "2024",
    title: "Smart India Hackathon (Internal) - Hospicare",
    category: "Hackathon",
    description:
      "Proposed 'Hospicare', a hospital management platform aimed at streamlining operations and improving healthcare administration processes.",
  },
  {
    year: "2022",
    title: "Summer Internship - JSL (IT & SAP Department)",
    category: "Industry Experience",
    description:
      "Selected among the top 10 interns at Jindal Stainless (JSL). Completed practical summer internship under the IT & SAP department, gaining real-world industry exposure and professional work experience.",
  },
  {
    year: "2021",
    title: "1st Position - PPT Competition",
    category: "Public Speaking",
    description:
      "Secured 1st position in a PowerPoint Presentation competition, demonstrating strong communication skills, structured thinking, and confident stage presence.",
  },
  {
    year: "2020",
    title: "NCC 'A' Grade Certificate",
    category: "Discipline & Leadership",
    description:
      "Awarded NCC 'A' Grade Certificate, reflecting commitment, discipline, teamwork, and foundational leadership training through the National Cadet Corps program.",
  },
];

const victoryMoments = [
  {
    image: "/SIH1.png",
    title: "SIH Internal - 2025",
  },
  {
    image: "/CRT.png",
    title: "CRT Program",
  },
  {
    image: "/SIH2.png",
    title: "SIH Internal - 2024",
  },
  {
    image: "/Subject.png",
    title: "Merit & Subject Topper",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
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

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-28 bg-gradient-to-b from-[#0e1424] to-[#0b0f1a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Journey{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Highlights
          </span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative bg-[#111827] rounded-2xl p-6 
          border border-white/10 
          hover:border-yellow-400/70
          hover:shadow-[0_25px_60px_rgba(250,204,21,0.45)]
          transition-all duration-500 overflow-hidden"
            >
              {/* Left Accent Bar */}
              <div
                className="absolute left-0 top-0 h-full w-1 
          bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400"
              ></div>

              {/* Year Badge */}
              <div
                className="mb-3 inline-block px-3 py-1 text-xs font-semibold 
          rounded-full bg-purple-500/10 text-purple-400 border border-purple-400/20"
              >
                {item.year}
              </div>

              {/* Category */}
              <div className="mb-4 text-sm text-cyan-400 font-medium tracking-wide">
                {item.category}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold text-white mb-3 
          group-hover:text-purple-400 transition duration-300"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 
          group-hover:opacity-100 
          bg-yellow-400/10 blur-2xl 
          transition duration-500 -z-10"
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="pt-28 mb-8 flex items-center justify-center gap-4">
        <div className="h-[1px] w-16 bg-yellow-400/50"></div>

        <h2
          className="text-sm md:text-2xl font-semibold 
            bg-gradient-to-r from-orange-400 via-yellow-400 to-yellow-300 
            bg-clip-text text-transparent tracking-widest uppercase"
        >
          Victory Moments
        </h2>

        <div className="h-[1px] w-16 bg-yellow-400/50"></div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...victoryMoments, ...victoryMoments].map((item, index) => (
            <div
              key={index}
              className="relative min-w-[380px] h-[220px] rounded-2xl overflow-hidden group flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover 
              transition-transform duration-500 
              group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition duration-500"></div>

              {/* Title */}
              <div className="absolute bottom-4 left-4">
                <span className="text-yellow-400 bg-black/80 px-4 py-1 rounded-full text-sm font-bold border border-yellow-400">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
