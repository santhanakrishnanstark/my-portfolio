import Card from "../Card/Card";
import Section from "../SectionLayout/Section";
import {
  ANGULAR_ICON,
  BOOTSTRAP_ICON,
  CSS_ICON,
  D3_ICON,
  FIGMA_ICON,
  FIREBASE_ICON,
  GATSBY_ICON,
  GIT_ICON,
  GULP_ICON,
  HTML_ICON,
  JAVASCRIPT_ICON,
  JQUERY_ICON,
  LESS_ICON,
  MATERIAL_ICON,
  NPM_ICON,
  REACT_ICON,
  REDUX_ICON,
  SASS_ICON,
  TYPESCRIPT_ICON,
  VSCODE_ICON,
} from "../Svgs/LanguageSvgs/IconList";
import "./SkillsAndExperience.css";

const SkillsAndExperience = () => {
  return (
    <Section title="Skills & Experience">
      <div className="card-wrapper two-col-layout skills-experience">
        <Card title="Skills">
          <div className="showcase">
            <div className="panel">
              <HTML_ICON />
              <CSS_ICON />
              <JAVASCRIPT_ICON />
              <LESS_ICON />
              <SASS_ICON />
            </div>
            <div className="panel">
              <JQUERY_ICON />
              <GULP_ICON />
              <BOOTSTRAP_ICON />
              <MATERIAL_ICON />
            </div>
            <div className="panel">
              <REACT_ICON />
              <GATSBY_ICON />
              <REDUX_ICON />
              <ANGULAR_ICON />
              <TYPESCRIPT_ICON />
              <D3_ICON />
            </div>
            <div className="panel">
              <FIREBASE_ICON />
              <NPM_ICON />
              <GIT_ICON />
              <VSCODE_ICON />
              <FIGMA_ICON />
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
