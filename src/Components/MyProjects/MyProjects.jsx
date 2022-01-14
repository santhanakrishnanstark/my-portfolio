import Card from "../Card/Card";
import Section from "../SectionLayout/Section";
import projectsData from "../../data/myprojects.json";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <Section className="my-projects" title="Some Things I've Built">
      <div className="card-wrapper three-col-layout">
        {projectsData.map((project, index) => {
          return (
            <Card
              key={index}
              subTitle={project.projectName}
              linkTo={project.projectURL}
            >
              <p>{project.description}</p>
              <small>
                <em>
                  <strong>Tech Stack:</strong>
                  <div className="tags">
                    {project.techStack.map((tech, index) => {
                      return (
                        <span key={index} className="tag">
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </em>
              </small>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default MyProjects;
