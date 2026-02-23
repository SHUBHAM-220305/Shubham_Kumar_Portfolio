import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/api/contact`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.data.success) {
        alert("Message sent successfully 🚀");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#06122a] to-black py-16 md:py-24 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>

          <p className="text-gray-400 mb-10 text-lg">
            Let's create something extraordinary.<br />
            Currently open for freelance projects and full-time opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="text-cyan-400" size={22} />
              </div>
              <span className="text-gray-300 hover:text-cyan-400">
                shubhamk.22032005@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="text-cyan-400" size={22} />
              </div>
              <span className="text-gray-300 hover:text-cyan-400">
                Hisar, Haryana, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-cyan-400"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-cyan-500 to-blue-600
                transition duration-300 shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
