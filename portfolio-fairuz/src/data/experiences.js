import {
  FaNetworkWired,
  FaLaptopCode,
  FaChalkboardTeacher,
} from "react-icons/fa";

export const experiences = [
  {
    id: 1,

    year: "2025",

    icon: FaLaptopCode,

    title: "Full-stack Developer",

    type: "Internship",

    company: "PLN ICON PLUS Purwokerto",

    description: [
      "Developed a web-based visitor queue management system to digitalize front desk operations and improve visitor service efficiency.",
      "Built the application using Laravel, MySQL, and Bootstrap.",
      "Designed a responsive interface for visitor registration and queue monitoring.",
      "Collaborated with operational staff to improve system usability."
    ],

    skills: [
      "Laravel",
      "MySQL",
      "Bootstrap",
      "PHP"
    ]
  },

  {
    id:2,

    year:"2024",

    icon:FaChalkboardTeacher,

    title:"Teaching Assistant",

    type:"Part Time",

    company:"Telkom University",

    description:[
      "Assisted Computer Networks laboratory sessions.",
      "Explained networking concepts using Cisco Packet Tracer.",
      "Guided students in routing, switching, VLAN, and IP addressing.",
      "Assisted in grading laboratory assignments."
    ],

    skills:[
      "Cisco",
      "Packet Tracer",
      "Routing",
      "Switching"
    ]
  },

  {

    id:3,

    year:"2021 - 2022",

    icon:FaNetworkWired,

    title:"Network Engineer",

    type:"Full Time",

    company:"PLN ICON PLUS Jakarta",

    description:[
      "Performed fiber optic troubleshooting for residential and enterprise customers.",
      "Conducted ONU/ONT activation and customer installations.",
      "Configured MikroTik routers, Cisco routers, and Cisco switches.",
      "Implemented VLAN and IP addressing.",
      "Installed customer networking equipment."
    ],

    skills:[
      "Fiber Optic",
      "MikroTik",
      "Cisco",
      "VLAN",
      "IP Addressing"
    ]
  }

];