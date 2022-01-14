import "./Card.css";

const Card = ({ image, imageComponent, title, subTitle, linkTo, children }) => {
  return (
    <div className="card">
      {imageComponent}
      {image && <img src={image.src} alt={image.alt} />}
      {title && <h3 className="card-title">{title}</h3>}
      {subTitle && linkTo ? (
        <a href={linkTo} target="_blank">
          <h4 className="sub-title">{subTitle}</h4>
        </a>
      ) : (
        <h4 className="sub-title">{subTitle}</h4>
      )}
      {children}
    </div>
  );
};

export default Card;
