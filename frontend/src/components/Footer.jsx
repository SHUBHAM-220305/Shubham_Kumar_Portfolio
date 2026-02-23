import { useEffect, useState } from "react";
import { Linkedin, Github, Twitter, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-zinc-900 border-t border-white/10 text-gray-400 px-6 md:px-12 pt-16 pb-10">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
            SHUBHAM <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">KUMAR</span>
          </h2>

          <p className="leading-relaxed mb-6 text-gray-400 text-sm md:text-base">
            Passionate Full-Stack Developer building scalable web experiences 
            with clean architecture and modern technologies. I focus on writing 
            maintainable code, solving real-world problems, and continuously 
            leveling up my craft.
          </p>

          <p className="text-red-500 flex items-center gap-2 text-sm md:text-base font-medium">
            <span className="animate-pop">❤️</span>
            Code, coffee & countless late nights — this is for the dreamers.
          </p>
        </div>

        {/* CONNECT */}
        <div className="md:pl-48">
          <h3 className="text-white font-semibold mb-6 text-lg">
            Connect
          </h3>

          <div className="flex gap-4 mb-6">
            <a
              href="https://linkedin.com/in/shubham-kumar-22032005sk"
              target="_blank"
              className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:-translate-y-1 transition duration-300"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/SHUBHAM-220305"
              target="_blank"
              className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:-translate-y-1 transition duration-300"
            >
              <Github size={20} />
            </a>

            <a
              href="https://x.com/Shubham_220305"
              target="_blank"
              className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:-translate-y-1 transition duration-300"
            >
              <Twitter size={20} />
            </a>

            <a
              href="https://www.instagram.com/shubham_._2005"
              target="_blank"
              className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:-translate-y-1 transition duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>

          <p className="flex items-center gap-2 text-white font-medium">
            LIVE // Always Learning
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-blink mt-1"></span>
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p>© {year} Shubham Kumar. All rights reserved.</p>

        <p className="flex items-center gap-2">
          <MapPin size={16} />
          Hisar, Haryana, India
        </p>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        .animate-pop {
          animation: pop 1.8s infinite;
        }

        .animate-pop.delay-200 {
          animation-delay: 0.4s;
        }

        @keyframes pop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        .animate-blink {
          animation: blink 1.2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </footer>
  );
}