import Card from "../Card/Card";
import Section from "../SectionLayout/Section";
import "./SkillsAndExperience.css";

const SkillsAndExperience = () => {
  return (
    <Section title="Skills & Experience">
      <div className="card-wrapper two-col-layout skills-experience">
        <Card title="Skills">
          <div className="showcase">
            <div className="panel">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </div>
            <div className="panel">
              <p>Bootstrap</p>
              <p>jQuery</p>
              <p>LESS</p>
              <p>SASS</p>
            </div>
            <div className="panel">
              <p>React</p>
              <p>Redux</p>
              <p>Angular</p>
            </div>
            <div className="panel">
              <p>GIT</p>
              <p>Gulp</p>
              <p>Figma</p>
            </div>
          </div>
        </Card>
        <Card title="Work Experience">
          <ul className="timeline">
            <li>
              <h4>
                <a className="logo" href="https://www.ameexusa.com/">
                  <img
                    src="https://www.ameexusa.com/sites/default/files/users/user428/ameex_logo_new.png"
                    alt="company-logo"
                    width="120"
                  />
                </a>
              </h4>
              <small className="text-muted">
                <em>October 2019 - Present. Chennai, India</em>
              </small>
              <ul>
                <li>
                  <p>
                    Bridged the gap between graphic design and technical
                    implementation by working both sides and helping define 30+
                    applications look and feel.
                  </p>
                </li>
                <li>
                  <p>
                    Translated 100+ UI/UX designs to code, resulting in visual
                    elements of the application.
                  </p>
                </li>
                <li>
                  <p>
                    Implemented web performance optimi^ations and ensured web
                    pages conformed to accessibility standards.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default SkillsAndExperience;
