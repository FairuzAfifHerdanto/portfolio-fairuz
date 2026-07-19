import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Name */}

        <h2 className="text-3xl font-bold text-center">
          Fairuz Afif Herdanto
        </h2>

        <p className="text-center text-slate-400 mt-3">
          Network Engineer • Full-stack Developer • IoT Developer
        </p>

        {/* Social */}

        <div className="flex justify-center gap-8 mt-8 text-3xl">

          <a
            href="https://github.com/FairuzAfifHerdanto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/fairuzafif"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/6282136342846"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:fairuzafifherdanto@gmail.com"
            className="hover:text-red-400 transition"
          >
            <MdEmail />
          </a>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-700 mt-10 pt-6">

          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Fairuz Afif Herdanto. All Rights Reserved.
          </p>

          <p className="text-center text-slate-600 text-sm mt-2">
            Built with React, Vite & Tailwind CSS ❤️
          </p>

        </div>

      </div>
    </footer>
  );
}