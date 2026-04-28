const person = {
  fullname: "Jormaedes Luís",
  title: "Software Engineer",
  email: "jormaedes@gmail.com",
  phone: "+244 923 456 789",
  location: "Luanda, Angola",
  github: "github.com/jormaedes",
  linkedin: "linkedin.com/in/jormaedes",
  about:
    "Systems-minded software engineer with experience in low-level programming and full-stack web development. Passionate about building tools with real-world impact, especially for African users and markets. Currently deepening expertise in C, JavaScript, and React.",

  education: [
    {
      school: "42 Luanda",
      degree: "Software Engineering",
      start: "2024",
      end: "Present",
      details:
        "Peer-to-peer, project-based curriculum focused on low-level systems programming. Completed projects including a ray-casting 3D engine (cub3D) in C, a C++ OOP module series, and a WebRTC peer-to-peer video chat application.",
    },
    {
      school: "The Odin Project",
      degree: "Full-Stack JavaScript",
      start: "2023",
      end: "Present",
      details:
        "Self-directed full-stack curriculum covering HTML, CSS, JavaScript, React, Node.js and computer science fundamentals. Built production-ready projects including a Battleship game with TDD, a Binary Search Tree, and a dynamic restaurant page.",
    },
  ],

  experiences: [
    {
      enterprise: "WebRTC P2P Video Chat",
      position: "Lead Developer",
      start: "Jan 2024",
      end: "Mar 2024",
      responsibilities:
        "Built a real-time peer-to-peer video chat application using WebRTC, Node.js, Express and WebSockets. Implemented a multi-theme UI with glassmorphism design, resolved mirroring bugs, and deployed to Render. Collaborated with two teammates and credited all contributors in the README.",
    },
    {
      enterprise: "42 Luanda — cub3D",
      position: "Systems Programmer",
      start: "Mar 2024",
      end: "Present",
      responsibilities:
        "Developing a Wolfenstein-style 3D ray-casting engine in C using the miniLibX graphics library. Responsible for project architecture, map parsing, texture loading, and rendering logic. All code written under strict 42 Norma style constraints.",
    },
  ],
};

export default person;