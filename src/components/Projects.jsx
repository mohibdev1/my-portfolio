import "./Projects.css";

function Projects() {
 const projects = [
  {
    title: "Education Website",
    description:
      "A modern and responsive education institute website built with React JS.",
    tech: "React JS • CSS",
    live: "https://react-ass-04.netlify.app/",
    github: "https://github.com/mohibdev1/react-assignment-04",
  },
  {
    title: "Todo App",
    description:
      "A Todo application with Firebase Firestore for storing and managing tasks.",
    tech: "React JS • Firebase",
    live: "https://react-assign-03.netlify.app/",
    github: "https://github.com/mohibdev1/react-assignment-03",
  },
  {
  title: "Salt'n Pepper",
  description:
    "A restaurant website created with HTML and CSS, featuring a clean and responsive design.",
  tech: "HTML • CSS",
  live: "https://mohibdev1.github.io/Css-Assignment-05/",
  github: "https://github.com/mohibdev1/Css-Assignment-05",
},
 {
  title: "Pokémon",
  description:
    "A Pokémon website created with HTML and CSS, featuring Pokémon cards and a clean responsive design.",
  tech: "HTML • CSS",
  live: "https://mohibdev1.github.io/Css-Assignment--07/",
  github: "https://github.com/mohibdev1/Css-Assignment--07",
},
{
  title: "Calculator",
  description:
    "A functional calculator built with HTML, CSS and JavaScript for performing basic mathematical calculations.",
  tech: "HTML • CSS • JavaScript",
  live: "https://mohibdev1.github.io/Javascript-Assignment-13/",
  github: "https://github.com/mohibdev1/Javascript-Assignment-13",
},
{
  title: "Rock Paper Scissors",
  description:
    "An interactive Rock Paper Scissors game built with HTML, CSS and JavaScript with a simple and engaging user interface.",
  tech: "HTML • CSS • JavaScript",
  live: "https://rock-paper-scissors5.netlify.app/",
  github: "https://github.com/mohibdev1/Rock-Paper-Scissors",
},
];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <p className="section-title">MY WORK</p>

       <h2>Featured <span>Projects</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-number">0{index + 1}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
  >
    Live Demo
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;