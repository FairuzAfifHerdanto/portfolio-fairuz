import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-slate-900/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-8">

        <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">
          FAIRUZ<span className="text-white">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}