export const projects = [
  {
    id: 1,
    title: "Hydroponic IoT Monitoring System",
    category: "Final Project",
    status: "Completed",

    images: [
        "/projects/hydroponic/dashboard.png",
        "/projects/hydroponic/riwayat.png",
        "/projects/hydroponic/alat.png",
        "/projects/hydroponic/rangkaian.png",
        "/projects/hydroponic/kebun.png",
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
    id: 2,
    title: "Cekrekin.id",
    category: "Web Application",
    status: "Completed",

    images: [
        "/projects/cekrekin/home.png",
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
    id: 3,
    title: "Visitor Queue Management",
    category: "Internship Project",
    status: "Completed",

    images: [
        "/projects/queue/home.png",
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