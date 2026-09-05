export const projects = [
  {
    id: 1,
    title: "Network Infrastructure Design & Simulation",
    category: "Network Project",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/networking/Network Hotel Management.png`,
        `${import.meta.env.BASE_URL}projects/networking/Network Campus Management.png`,
    ],

    description:
      "Designed and simulated hotel and campus network infrastructures using Cisco Packet Tracer, implementing VLAN segmentation, inter-VLAN routing, OSPF, DHCP, SSH, and port security. The projects focused on building secure, scalable, and reliable networks across multiple departments, floors, and campus locations.",

    technologies: [
      "Cisco Packet Tracer",
      "VLAN",
      "Trunking",
      "Inter-VLAN Routing",
      "OSPF",
      "DHCP",
      "SSH",
      "Port Security",
      "Layer 3 Switching",
    ],

  },

  {
    id: 2,
    title: "Hydroponic IoT Monitoring System",
    category: "Final Project",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/hydroponic/dashboard.png`,
        `${import.meta.env.BASE_URL}projects/hydroponic/riwayat.png`,
        `${import.meta.env.BASE_URL}projects/hydroponic/alat.png`,
        `${import.meta.env.BASE_URL}projects/hydroponic/rangkaian.png`,
        `${import.meta.env.BASE_URL}projects/hydroponic/kebun.png`,
    ],

    description:
      "IoT-based hydroponic monitoring system using ESP32, Firebase, and dynamic threshold for monitoring pH, TDS, water temperature, and room temperature in real time.",

    technologies: [
      "ESP32",
      "Firebase",
      "Laravel",
      "Chart.js",
      "DS18B20",
      "DHT22",
      "TDS",
      "pH Sensor",
    ],

  },

  {
    id: 3,
    title: "Cekrekin.id",
    category: "Web Application",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/cekrekin/home.png`,
    ],

    description:
        "Photo marketplace platform that connects photographers and customers with integrated online payment and digital photo delivery.",

    technologies: [
        "Laravel",
        "MySQL",
        "Bootstrap",
        "Midtrans",
    ],

  },

  {
    id: 4,
    title: "Visitor Queue Management",
    category: "Internship Project",
    status: "Completed",

    images: [
        `${import.meta.env.BASE_URL}projects/queue/home.png`,
    ],

    description:
        "Visitor queue management system developed during internship to digitalize front desk services and improve operational efficiency.",

    technologies: [
        "Laravel",
        "PHP",
        "Bootstrap",
        "MySQL",
    ],

  },
];