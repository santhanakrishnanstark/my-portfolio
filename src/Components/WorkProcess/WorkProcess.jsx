import Card from "../Card/Card";
import Section from "../SectionLayout/Section";
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    <Section title="My Work Process">
      <div className="card-wrapper workflow">
        <Card title="Discover">
          <p>
            I do research with users to identify the issue I want to address.
          </p>
        </Card>
        <Card title="Define">
          <p>
            I'm brainstorming to come up with solutions to the identified
            problem.
          </p>
        </Card>
        <Card title="Ideate">
          <p>
            I create wireframes and sketches of the product that I am getting
            ready to design.
          </p>
        </Card>
        <Card title="Prototype">
          <p>I create high precision design and prototype the screens.</p>
        </Card>
        <Card title="Implement">
          <p>After conception, I deliver to the implementation.</p>
        </Card>
      </div>
    </Section>
  );
};

export default WorkProcess;
