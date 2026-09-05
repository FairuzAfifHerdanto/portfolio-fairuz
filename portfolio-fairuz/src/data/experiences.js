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

    title:"Network Engineer Intern",

    type:"Full Time",

    company:"PLN ICON PLUS Jakarta",

    description:[
      "Installed and configured network devices, primarily FiberHome, BDCOM, and Huawei routers, including network and management parameters to establish connectivity and enable remote access by the NOC team.",
      "Supported the activation and implementation of corporate network services, including Metro Ethernet services.",
      "Performed testing and commissioning to verify service connectivity and readiness, including BER testing for high-capacity links when required.",
      "Conducted onsite troubleshooting during network incidents by inspecting network devices, physical connections, and optical signal levels using an Optical Power Meter (OPM).",
      "Coordinated with the NOC team during service activation and troubleshooting to support remote diagnostics, configuration, and service recovery.",
      "Prepared technical documentation and service activation/testing reports."
    ],

    skills:[
      "Fiber Optic",
      "Routing",
      "Switching",
      "Cisco",
      "VLAN",
      "IP Addressing"
    ]
  }

];