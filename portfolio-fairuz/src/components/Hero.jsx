import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Fairuz Afif
            <br />
            Herdanto
          </h1>

          <div className="text-2xl lg:text-3xl font-semibold text-blue-400 mt-6 h-12">
            <TypeAnimation
              sequence={[
                "Network Engineer",
                2000,
                "Full-stack Developer",
                2000,
                "IoT System Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-300 mt-8 max-w-xl leading-8">
            Passionate about building reliable network infrastructure,
            developing modern web applications, and creating IoT-based
            monitoring systems that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
                href={`${import.meta.env.BASE_URL}cv/Fairuz_Afif_Herdanto_CV.pdf`}
                download
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl flex items-center gap-2 transition"
            >
                <FaDownload />
                Download CV
            </a>

            <a
                href="#projects"
                className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-xl transition"
            >
                View Projects
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
                href="https://github.com/FairuzAfifHerdanto"
                className="hover:text-blue-400 hover:scale-125 transition"
            >
                <FaGithub />
            </a>

            <a
                href="https://linkedin.com/in/fairuzafif"
                className="hover:text-blue-400 hover:scale-125 transition"
            >
                <FaLinkedin />
            </a>

            </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">

                <img
                    src={profile}
                    alt="Fairuz"
                    className="w-full h-full object-cover object-[center_20%]"
                />

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}