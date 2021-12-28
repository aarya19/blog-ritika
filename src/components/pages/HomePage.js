import HomeHeader from "../homePageElements/HomeHeader";
import ImageCard from "../homePageElements/ImageCard";
import LeftMargin from "../homePageElements/LeftMargin";
import NameCard from "../homePageElements/NameCard";

import MainBody from "../layout/MainBody";

function HomePage(props) {
  return (
    <MainBody>
      <HomeHeader></HomeHeader>
      <ImageCard></ImageCard>
      <NameCard></NameCard>
      <LeftMargin></LeftMargin>
    </MainBody>
  );
}

export default HomePage;
