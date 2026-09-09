
import { FaReact, FaJsSquare, FaCss3Alt, FaGithub, FaCode } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import "./Skills.css";

function Skills() {
 
const skills = [
  {
    icon: <FaCode />,
    name: "Frontend Development",
    text: "Building modern and interactive websites using HTML, CSS, JavaScript and React JS.",
    level: "90%",
  },
  {
    icon: <FaReact />,
    name: "React JS",
    text: "Creating reusable components and responsive user interfaces with React JS.",
    level: "80%",
  },
  {
    icon: <MdDevices />,
    name: "Responsive Design",
    text: "Designing websites that work smoothly across desktop, tablet and mobile devices.",
    level: "85%",
  },
  {
    icon: <FaJsSquare />,
    name: "JavaScript",
    text: "Writing clean and functional JavaScript for dynamic and interactive web experiences.",
    level: "75%",
  },
  {
    icon: <FaCss3Alt />,
    name: "UI & CSS",
    text: "Creating attractive layouts, animations and modern user interfaces with CSS.",
    level: "85%",
  },
  {
    icon: <FaGithub />,
    name: "Git & GitHub",
    text: "Managing projects and source code using Git and GitHub with professional workflow.",
    level: "70%",
  },
];



  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p>MY SKILLS</p>

          <h2>
            What I <span>Can Do</span>
          </h2>

          <div className="heading-line"></div>

          <p className="skills-intro">
            I continuously improve my skills by learning new technologies
            and building real-world projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="card-number">
                0{index + 1}
              </div>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <p className="skill-text">
                {skill.text}
              </p>

              <div className="skill-info">
                <span>Skill Level</span>
                <span>{skill.level}</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: skill.level }}
                ></div>
              </div>

              <a href="#contact" className="skill-link">
                Learn More <span>→</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;