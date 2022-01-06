import ImageCard from "../homePageElements/ImageCard";
import LeftMargin from "../homePageElements/LeftMargin";
import NameCard from "../homePageElements/NameCard";
import SocialMediaBlock from "../homePageElements/SocialMediaBlock";

import MainBody from "../layout/MainBody";

function HomePage(props) {
  return (
    <MainBody>
      <ImageCard />
      <NameCard />
      <LeftMargin />
      <SocialMediaBlock />
    </MainBody>
  );
}

export default HomePage;
