import InspirationLogo from "../Svgs/InspirationLogo/InspirationLogo";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col left">
            <h1 className="ff-lato-bold">
              Passionate <strong>Frontend Developer</strong> Who creates a
              design that brings value to your product.
            </h1>
            <p className="text-secondary description">
              Hi There &#128075; I am Santhanakrishnan, I design & code
              beautiful simple things, and I love what I do.
            </p>
            <a
              className="btn primary-btn btn-cta text-white"
              href="https://www.linkedin.com/in/santhanakrishnan96/"
              target="_blank"
              rel="noreferrer"
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
    </section>
  );
};

export default HeroSection;
