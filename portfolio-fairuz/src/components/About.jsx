import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaCertificate } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.6 }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-bold">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-slate-400 mt-5">
            Get to know me better.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}

          <motion.div
            initial={{ opacity:0,x:-50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
          >

            <h3 className="text-3xl font-semibold mb-6">
              Network Engineer & Full-stack Developer
            </h3>

            <p className="text-slate-300 leading-9 text-lg">
              I am a graduate of Informatics Engineering from Telkom University
              with one year of professional experience as a Network Engineer at
              PLN ICON PLUS Jakarta. My experience includes fiber optic
              troubleshooting, ONU/ONT activation, MikroTik and Cisco
              configuration, VLAN implementation, IP addressing, and enterprise
              network maintenance.
            </p>

            <p className="text-slate-300 leading-9 text-lg mt-6">
              Besides networking, I also develop modern web applications using
              Laravel and build IoT monitoring systems with ESP32 and Firebase.
              I enjoy solving real-world problems through technology and always
              strive to deliver reliable and efficient solutions.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-blue-500 transition">

              <FaGraduationCap className="text-3xl text-blue-400 mb-4"/>

              <h4 className="font-semibold text-xl">
                Education
              </h4>

              <p className="text-slate-400 mt-2">
                Telkom University
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-blue-500 transition">

              <FaBriefcase className="text-3xl text-blue-400 mb-4"/>

              <h4 className="font-semibold text-xl">
                Experience
              </h4>

              <p className="text-slate-400 mt-2">
                1+ Years
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-blue-500 transition">

              <FaLaptopCode className="text-3xl text-blue-400 mb-4"/>

              <h4 className="font-semibold text-xl">
                Projects
              </h4>

              <p className="text-slate-400 mt-2">
                3+ Projects
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-7 border border-slate-800 hover:border-blue-500 transition">

              <FaCertificate className="text-3xl text-blue-400 mb-4"/>

              <h4 className="font-semibold text-xl">
                Certificates
              </h4>

              <p className="text-slate-400 mt-2">
                5+ Certificates
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}