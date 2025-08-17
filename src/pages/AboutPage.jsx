
import "../styles/AboutPage.css";

export default function AboutPage() {
  const projects = [
            {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase skills, experience, and projects with React.js.",
      link: "https://bagalsaurabh4606.github.io/myPortfolio/",
    },
    {
      title: "Ethere - E-commerce Platform",
      description:
        "A full-stack MERN project with features like product listings, cart, wishlist, and admin panel.",
      link: "https://ethere-live.onrender.com/",
    },

    {
      title: "Git Repositories",
      description:
        "A collection of my personal projects showcasing various technologies and skills.",
      link: "https://github.com/bagalsaurabh4606?tab=repositories",
    },

  ];

  return (
    <div className="about-page">
      <h1>About Me</h1>
      <div className="about_container">
        <p>
          I’m <strong>Saurabh Bagal</strong>, a Computer Science graduate and MERN
          stack developer with a passion for building scalable, user-friendly
          applications. I specialize in clean, maintainable code and love solving
          challenging problems.
        </p>
      </div>

      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

