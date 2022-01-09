import Section from "../SectionLayout/Section";
import UnderConstructionImage from "../Svgs/UnderConstructionImage/UnderConstructionImage";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Section title="Our Website is almost ready." className="construction">
      <div className="card-wrapper">
        <p>Please wait for some days, a lot more things about to come...</p>
        <UnderConstructionImage />
        <button
          className="btn primary-btn btn-cta text-white"
          onClick={goToTop}
        >
          Go to Top
        </button>
      </div>
    </Section>
  );
};

export default UnderConstruction;
