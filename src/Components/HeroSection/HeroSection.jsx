import InspirationLogo from "../Svgs/InspirationLogo/InspirationLogo";
import Wave from "../Svgs/Wave/Wave";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="ff-lato-bold">
              Passionate <strong>Frontend Developer</strong> Who create design
              which brings value to your product
            </h1>
            <a
              className="btn primary-btn btn-cta text-white"
              href="https://www.linkedin.com/in/santhanakrishnan96/"
              target="_blank"
            >
              Let's Talk
            </a>
          </div>
          <div className="col">
            <div className="image">
              <InspirationLogo />
            </div>
          </div>
        </div>
      </div>
      <div className="wave">
        <Wave className="invert" />
        <Wave className="normal" />
      </div>
    </section>
  );
};

export default HeroSection;
