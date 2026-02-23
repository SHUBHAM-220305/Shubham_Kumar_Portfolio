import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/api/testimonials`);
      if (res.data.length === 0) {
        setTestimonials(defaultTestimonials);
      } else {
        setTestimonials([...defaultTestimonials, ...res.data]);
      }
    } catch (err) {
      setTestimonials(defaultTestimonials);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API}/api/testimonials`, form);
      setTestimonials((prev) => [res.data, ...prev]);
      setForm({ name: "", role: "", message: "" });
      setShowModal(false);
      fetchTestimonials();
    } catch (error) {
        console.error(error);
    }
  };

  const defaultTestimonials = [
    {
      name: "Amod",
      role: "IT & SAP Head, JSL Hisar",
      message:
        "Shubham is a highly dedicated and disciplined learner. His leadership and technical growth are impressive.",
    },
    {
      name: "Theo Ravi",
      role: "NCC ANO (Air Wing)",
      message:
        "He consistently demonstrates strong presentation skills and confidence in competitive environments.",
    },
    {
      name: "Palak",
      role: "Coordinator (Speakathon Club)",
      message:
        "Working with him is smooth. He takes ownership and delivers on time.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-b from-[#0e1424] to-black overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-5xl md:text-6xl font-bold text-center mb-20
          bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
          bg-clip-text text-transparent"
        >
          Testimonials
        </motion.h2>

        {/* Sliding Testimonials */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="min-w-[250px] md:min-w-[350px] bg-[#111827] p-6 rounded-2xl
                border border-yellow-400/20
                hover:shadow-[0_20px_50px_rgba(250,204,21,0.4)]
                transition-all duration-500"
              >
                <p className="text-white/80 mb-4 italic">"{item.message}"</p>
                <div className="text-yellow-400 font-semibold">{item.name}</div>
                <div className="text-white/50 text-sm">{item.role}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 my-5 rounded-full
            bg-yellow-400 text-black font-semibold
            hover:scale-105 transition"
          >
            + Add Testimonial
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Blur Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              onClick={() => setShowModal(false)}
            />

            {/* Popup */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
            >
              <div className="bg-[#111827] p-8 rounded-2xl w-full max-w-md border border-yellow-400/20">
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                  Add Your Testimonial
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full p-3 bg-black border border-white/20 rounded-lg text-white"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Your Role"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full p-3 bg-black border border-white/20 rounded-lg text-white"
                  />

                  <textarea
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full p-3 bg-black border border-white/20 rounded-lg text-white"
                    required
                  />

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="w-1/2 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="w-1/2 py-3 rounded-lg
                      bg-gradient-to-r from-yellow-400 to-orange-400
                      text-black font-semibold
                      hover:scale-105 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
