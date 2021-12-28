import "./ImageCard.css";

function ImageCard(props) {
  return (
    <div className="img-container">
      <img
        alt="mainImage"
        src={
          "https://ritikasinghin.files.wordpress.com/2021/08/bacf3957-da78-4897-82fa-2be2836bc93e-4.jpg?w=754"
        }
      />
    </div>
  );
}

export default ImageCard;
