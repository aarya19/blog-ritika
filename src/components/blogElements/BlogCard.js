import "./BlogCard.css";

function BlogCard(props) {
  return (
    <div className="blog-card-container">
      <div className="blog-img-container">
        <img
          src={
            "https://ritikasinghin.files.wordpress.com/2021/08/bacf3957-da78-4897-82fa-2be2836bc93e-4.jpg?w=754"
          }
        ></img>
      </div>
      <p>December 19, 2021</p>
      <div>
        <h2>Title of the Blog</h2>
        <p>
          This article has talks about Mental Health which is vital for a
          healthy life. This article has talks about Mental Health which is
          vital for a healthy life. This article has talks about Mental Health
          which is vital for a healthy life.
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
