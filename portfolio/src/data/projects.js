// Each project needs a unique `slug` — used both by the in-page modal and
// by the future /projects/:slug case-study route (see src/pages/ProjectCaseStudy.jsx).
export const projects = [
  {
    slug: "cognifi",
    name: "CogniFi",
    tag: "Cybersecurity / ML",
    status: "Ongoing",

    desc:
      "A smart public Wi-Fi security system that analyzes network behavior and metadata to assess the trustworthiness of wireless networks and identify potentially suspicious activity.",

    tech: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Wireshark",
      "TShark",
      "Machine Learning",
      "Random Forest",
      "XGBoost",
      "Network Analysis"
    ],

    problem:
      "Public Wi-Fi networks can expose users to threats such as rogue access points, evil twin attacks, DNS spoofing, and man-in-the-middle attacks. Traditional security approaches may not provide users with an understandable real-time indication of network trustworthiness.",

    solution:
      "Developing a behavioral Wi-Fi security system that captures network traffic using Wireshark and TShark, extracts network metadata and behavioral features, and uses analysis and machine learning techniques to identify anomalous network behavior and generate a trust and risk assessment.",

    how:
      "The React frontend communicates with the Python FastAPI backend through REST APIs. TShark is used for command-line packet capture and extraction of network traffic metadata from Wireshark captures. The backend processes behavioral features such as packet-flow patterns, DNS behavior, gateway latency, beacon-related information, and encryption characteristics before applying machine-learning models for anomaly detection and risk classification.",

    features: [
      "Real-time Wi-Fi network monitoring",
      "Wireshark-based network traffic analysis",
      "TShark command-line packet capture",
      "Network metadata extraction",
      "Behavioral feature analysis",
      "DNS and gateway behavior analysis",
      "Packet-flow pattern analysis",
      "Encryption status analysis",
      "Machine-learning based anomaly detection",
      "Trust score generation",
      "Safe, Suspicious, and Risky classification",
      "User and Admin analysis modes",
      "Privacy-focused metadata analysis without inspecting packet contents"
    ],

    contribution:
      "Developing the frontend interface and integrating it with the Python FastAPI backend, while working on real-time network monitoring, Wireshark/TShark packet capture, network metadata extraction, behavioral analysis, and the trust-scoring workflow.",

    github: "https://github.com/A-Ankitha/CogniFi",
    demo: null
  },

  {
    slug: "ai-resume-builder",
    name: "AI Resume Builder",
    tag: "Full-Stack / AI",
    status: "Ongoing",

    desc: "An AI-assisted full-stack resume builder designed for students and early-career applicants to create, edit, improve, preview, and share professional resumes.",

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "OpenAI API",
      "ImageKit"
    ],

    problem:
      "Creating a professional resume can be time-consuming, especially for students and early-career applicants who may struggle with structuring their experience and writing effective, ATS-friendly content.",

    solution:
      "Built an AI-assisted resume platform that combines structured resume editing, multiple professional templates, live previews, AI-powered content enhancement, existing-resume import, and persistent cloud-backed resume data.",

    how:
      "The React frontend provides section-based resume editing, template selection, live previews, and user interactions. Redux Toolkit manages application state while React Router handles navigation. The Node.js and Express backend provides REST APIs, authentication, resume storage, feedback, and AI-assisted content generation using the OpenAI API. MongoDB with Mongoose stores user and resume data, while ImageKit handles profile image storage.",

    features: [
      "Section-based resume creation and editing",
      "AI-assisted professional summary and content enhancement",
      "10+ structured resume sections",
      "Multiple professional resume templates",
      "Live resume preview",
      "PDF-ready resume export",
      "Existing resume PDF import and AI-assisted extraction",
      "Profile image upload",
      "Public resume sharing",
      "User authentication and protected accounts",
      "Persistent resume data with MongoDB",
      "Student-focused resume workflow"
    ],

    contribution:
      "Developing the full-stack application, including the React frontend, resume editing workflow, template system, live previews, REST API integration, authentication, MongoDB data handling, and AI-assisted resume content generation.",

    github: "https://github.com/A-Ankitha/ResuVibe",
    demo: "https://resume-builder-theta-amber.vercel.app/"
  },

  {
    slug: "task-manager",
    name: "Task Manager",
    tag: "MERN Stack",
    status: "Completed",
    desc: "A full-stack task management application for creating, viewing, updating, and deleting tasks through a React frontend and RESTful backend.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "React Router"
    ],
    problem:
      "Managing tasks without a centralized system can make it difficult to create, update, and keep track of tasks efficiently.",

    solution:
      "Built a full-stack task management application that provides a simple interface for managing tasks while connecting the React frontend to a RESTful Express and MongoDB backend.",

    how:
      "The React frontend communicates with the Express backend through REST API endpoints. Express handles CRUD operations and Mongoose manages task data in MongoDB.",

    features: [
      "Create new tasks",
      "View all tasks",
      "View individual tasks",
      "Edit existing tasks",
      "Delete tasks",
      "REST API integration",
      "MongoDB data persistence",
      "React Router navigation"
    ],

    contribution:
      "Developed the React frontend, implemented frontend routing, integrated the REST APIs, and worked with the Node.js, Express.js, and MongoDB backend.",

    github: "https://github.com/A-Ankitha",
    demo: "https://frontend-beige-eight-97.vercel.app/"
  },

  {
    slug: "clickdefender",
    name: "ClickDefender",
    tag: "Cybersecurity / Browser Extension",
    status: "Completed",

    desc: "A lightweight Chrome extension for real-time phishing detection using hybrid heuristic analysis and explainable risk scoring.",

    tech: [
      "JavaScript",
      "Chrome Extension MV3",
      "HTML5",
      "CSS3",
      "Google Safe Browsing",
      "Chrome Storage API"
    ],

    problem: "Phishing websites can closely imitate legitimate services, while traditional blacklist-based protection may miss newly created threats and often provides little explanation for why a website is considered unsafe.",

    solution: "ClickDefender combines URL and DOM analysis, whitelist and blacklist validation, SSL checks, threat intelligence, and weighted heuristic scoring to classify websites as Safe, Suspicious, or Dangerous while explaining the factors behind each result.",

    how: "The Chrome extension uses a Manifest V3 service worker for background processing and message routing, while content scripts inspect webpage DOM signals and performance metrics. URL features, suspicious keywords, redirects, domain characteristics, SSL information, Punycode/IDN indicators, and other heuristics are combined by a weighted scoring engine. Google Safe Browsing is also used to verify known threats, while Chrome local storage maintains analysis history and user lists.",

    features: [
      "Real-time phishing detection",
      "Weighted explainable risk scoring",
      "URL and DOM analysis",
      "Whitelist and blacklist validation",
      "SSL and security checks",
      "Punycode and IDN detection",
      "Google Safe Browsing integration",
      "Analysis history and data export"
    ],

    contribution: "Designed and implemented the phishing detection workflow, heuristic-based risk scoring, URL and DOM analysis, browser-extension logic, and interactive risk visualization.",

    github: "https://github.com/A-Ankitha/ClickDefender",
    demo: null,
  },

  {
    slug: "moodscape",
    name: "MoodScape",
    tag: "AI / Travel",

    status: "Completed",

    desc:
      "An AI-powered travel recommendation platform that generates personalized destination suggestions and travel plans based on the user's mood, preferences, and location.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Google Gemini AI",
      "REST APIs"
    ],

    problem:
      "Planning a trip can be overwhelming when users have to search through multiple sources to find destinations that match their current mood, interests, location, and travel preferences.",

    solution:
      "Built an AI-powered travel platform that uses mood-based inputs and location context to generate personalized destination recommendations and interactive travel suggestions.",

    how:
      "The frontend collects the user's mood, location, and travel preferences and communicates with an Express.js backend through API requests. The backend processes the request and uses Google Gemini AI to generate contextual travel recommendations and planning suggestions, which are then displayed through the interactive interface.",

    features: [
      "Mood-based travel recommendations",
      "Location-aware destination suggestions",
      "AI-generated travel planning",
      "Real-time AI travel chat",
      "Multiple mood-based travel categories",
      "Dynamic mood-based interface",
      "Personalized destination suggestions"
    ],

    contribution:
      "Developed the frontend interface, integrated the Express.js backend with the Google Gemini AI service, implemented the mood-based recommendation workflow, and connected the frontend with the AI-powered travel APIs.",

    github: "https://github.com/A-Ankitha/MoodScape-Travel",
    demo: null
  },
];
