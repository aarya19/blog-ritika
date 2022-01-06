import './home.css';

import LeftMargin from "./elements/LeftMargin";
import NameCard from "./elements/NameCard";
import SocialMediaBlock from "./elements/SocialMediaBlock";

function Home() {
  return (
    <div className="home">
    <div className="img-card-container">
      <img
        alt="mainImage"
        src={
          "https://ritikasinghin.files.wordpress.com/2021/08/bacf3957-da78-4897-82fa-2be2836bc93e-4.jpg?w=754"
        }
      />
    </div>      
    <NameCard />
      <LeftMargin />
      <SocialMediaBlock />
    </div>
  );
}

export default Home;
