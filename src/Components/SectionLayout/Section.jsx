import "./Section.css";

const Section = ({ children, className, title }) => {
  const classList = className ? "section " + className : "section";
  return (
    <section className={classList}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
