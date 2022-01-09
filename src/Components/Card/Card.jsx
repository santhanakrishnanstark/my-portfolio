import "./Card.css";

const Card = ({ image, title, children }) => {
  return (
    <div className="card">
      {image}
      <h3 className="card-title">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
