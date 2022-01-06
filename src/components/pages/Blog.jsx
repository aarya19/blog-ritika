import MainBody from "../layout/MainBody";
import BlogCard from "../blogElements/BlogCard";
import Slider from "react-slick";
import "../blogElements/BlogCard.css";

function Blog(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <MainBody>
      <Slider {...settings} className="blog-card-carousel">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Slider>
    </MainBody>
  );
}

export default Blog;
