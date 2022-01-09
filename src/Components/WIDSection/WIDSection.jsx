import Card from "../Card/Card";
import Section from "../SectionLayout/Section";
import DesignIcon from "../Svgs/DesignIcon/DesignIcon";
import DevelopmentIcon from "../Svgs/DevelopmentIcon/DevelopmentIcon";
import PerformanceIcon from "../Svgs/PerformanceIcon/PerformanceIcon";
import "./WIDSection.css";

const WIDSection = () => {
  return (
    <Section className="what-i-do" title="What I Do">
      <div className="card-wrapper three-col-layout">
        <Card image={<DesignIcon />} title="Design">
          <p>
            I work with some design tools to create highly accurate designs and
            prototypes. I design accessible, usable products that promote the
            growth of businesses.
          </p>
        </Card>
        <Card image={<DevelopmentIcon />} title="Development">
          <p>
            I use diverse web technologies to develop attractive websites that
            convert visitors into clients. I design creative, reactive layouts.
          </p>
        </Card>
        <Card image={<PerformanceIcon />} title="Accessibility">
          <p>
            I use various accessible and automated web tools to evaluate the
            performance of the page which helps authors make their web content
            more accessible to individuals with disabilities.
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default WIDSection;
