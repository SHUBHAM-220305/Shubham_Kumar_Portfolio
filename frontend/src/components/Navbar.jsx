import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "achievements",
  "testimonials",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="rounded-full neon-border-flow">
        <nav
          className={`
        flex justify-between items-center
    px-8 py-4 rounded-full
    backdrop-blur-2xl
    bg-white/[0.08]
    border border-white/10
    shadow-[0_10px_40px_rgba(0,0,0,0.45)]
    transition-all duration-300
      `}
        >
          {/* Logo */}
          <h1 className="text-white font-bold text-lg tracking-wide">
            Shubham{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Kumar
            </span>
          </h1>

          {/* Links */}
          <div className="hidden md:flex gap-6">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`relative text-xs capitalize tracking-wider transition duration-300 ${active === section ? "text-white neon-white" : "text-white/70 hover:text-white hover:scale-110"}`}
              >
                {section}

                {/* Animated Underline */}
                <span
                  className={`
                  absolute left-0 -bottom-2 h-[2px]
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  transition-all duration-300
                  ${active === section ? "w-full opacity-100" : "w-0 opacity-0"}
                `}
                />
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="text-white" size={26} />
              ) : (
                <Menu className="text-white" size={26} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)] p-6">
          <div className="flex flex-col gap-3 text-center">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className="relative text-white/70 hover:text-white capitalize text-sm tracking-wider transition duration-300"
              >
                {section}

                {/* Underline animation like desktop */}
                <span
                  className={`
              absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px]
              bg-gradient-to-r from-cyan-400 to-blue-500
              transition-all duration-300
              ${active === section ? "w-1/2 opacity-100" : "w-0 opacity-0"}
            `}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
