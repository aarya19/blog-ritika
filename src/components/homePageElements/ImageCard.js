import "./ImageCard.css";

function ImageCard(props) {
  return (
    <div className="img-container">
      <img
        alt="mainImage"
        src={
          "https://res.cloudinary.com/aaryaprasannan/image/upload/v1626926927/PopArt/BeforeSunrise1995.jpg"
        }
      />
    </div>
  );
}

export default ImageCard;
