import { motion } from "framer-motion";

export default function ContactCard({ contact }) {
  const Icon = contact.icon;

  return (
    <motion.a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        bg-slate-900
        border
        border-slate-700
        hover:border-blue-500
        rounded-2xl
        p-6
        flex
        items-center
        gap-5
        duration-300
      "
    >
      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
        <Icon className="text-3xl text-blue-400" />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">
          {contact.title}
        </h3>

        <p className="text-slate-400 mt-1 break-all">
          {contact.value}
        </p>
      </div>
    </motion.a>
  );
}