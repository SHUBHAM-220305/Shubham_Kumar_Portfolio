import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="bg-[#171728] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ===== SECTION TITLE ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-5xl md:text-6xl font-bold text-center mb-10"
        >
          Professional{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Journey
          </span>
        </motion.h1>

        {/* ===== TIMELINE WRAPPER ===== */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line (limited height) */}
          <div
            className="
      absolute 
      left-4 md:left-1/2 
      top-0 
      md:-translate-x-1/2
      w-[2px] h-full
      bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500
      opacity-70
    "
          />

          <div className="space-y-24">
            {/* ================= ENTRY 1 ================= */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="relative grid grid-cols-1 md:grid-cols-2 items-start pl-12 md:pl-0"
            >
              {/* LEFT SIDE (Title + Org) */}
              <div className="hidden md:block pr-12 text-right">
                <h3 className="text-2xl font-bold text-white hover:text-cyan-400">
                  Joint Coordinator
                </h3>
                <p className="text-white/50 text-sm mt-1">Speakathon Club</p>
              </div>

              {/* RIGHT SIDE (Date + Description) */}
              <div className="md:pl-12">
                <span
                  className="inline-block px-4 py-1 rounded-full 
                  bg-gradient-to-r from-white/10 to-white/5
                  border border-white/10
                  text-white/80 text-sm font-medium
                  mb-4"
                >
                  Sep 2025 - Present
                </span>

                {/* Mobile Title */}
                <h3 className="md:hidden text-xl font-bold text-white mb-1">
                  Joint Coordinator
                </h3>

                {/* Mobile Org */}
                <p className="md:hidden text-white/50 text-sm mb-4">
                  Speakathon Club
                </p>

                <p className="text-white/70 leading-relaxed">
                  Played a key role in organizing and coordinating club events,
                  technical sessions, and placement-driven initiatives.
                  Collaborated with team members to manage logistics, student
                  communication, and event execution, enhancing leadership,
                  coordination, and professional networking skills.
                </p>
              </div>

              {/* Small Center Dot */}
              <div
                className="
      absolute 
      left-3 md:left-1/2 
      top-2 
      md:-translate-x-1/2
      w-3 h-3 bg-cyan-400 rounded-full
      shadow-[0_0_12px_rgba(34,211,238,0.8)]
    "
              />
            </motion.div>

            {/* ================= ENTRY 2 ================= */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="relative grid grid-cols-1 md:grid-cols-2 items-start pl-12 md:pl-0"
            >
              {/* LEFT SIDE (Title + Org) */}
              <div className="hidden md:block pr-12 text-right">
                <h3 className="text-2xl font-bold text-white hover:text-cyan-400">
                  Frontend Developer Intern
                </h3>
                <p className="text-white/50 text-sm mt-1">
                  Jindal Stainless Limited, Hisar
                </p>
              </div>

              {/* RIGHT SIDE (Date + Description) */}
              <div className="md:pl-12">
                <span
                  className="inline-block px-4 py-1 rounded-full 
                  bg-gradient-to-r from-white/10 to-white/5
                  border border-white/10
                  text-white/80 text-sm font-medium
                  mb-4"
                >
                  Jun 2022 - Jul 2022
                </span>

                {/* Mobile Title */}
                <h3 className="md:hidden text-xl font-bold text-white mb-1">
                  Frontend Developer Intern
                </h3>

                {/* Mobile Org */}
                <p className="md:hidden text-white/50 text-sm mb-4">
                  Jindal Stainless Limited, Hisar
                </p>

                <p className="text-white/70 leading-relaxed">
                  Cloned my school's website UI using Bootstrap, focusing on
                  responsive layouts and structured component design. Gained
                  hands-on experience in frontend development and strengthened
                  understanding of UI consistency and grid systems.
                </p>
              </div>

              {/* Small Center Dot */}
              <div
                className="
      absolute 
      left-3 md:left-1/2 
      top-2 
      md:-translate-x-1/2
      w-3 h-3 bg-cyan-400 rounded-full
      shadow-[0_0_12px_rgba(34,211,238,0.8)]
    "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
