import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export const contacts = [
  {
    id: 1,
    icon: MdEmail,
    title: "Email",
    value: "fairuzafifherdanto@gmail.com",
    link: "mailto:fairuzafifherdanto@gmail.com",
  },

  {
    id: 2,
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+62 821-3634-2846",
    link: "https://wa.me/6282136342846",
  },

  {
    id: 3,
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/fairuzafif",
    link: "https://linkedin.com/in/fairuzafif",
  },

  {
    id: 4,
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/FairuzAfifHerdanto",
    link: "https://github.com/FairuzAfifHerdanto",
  },
];