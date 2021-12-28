import Header from "../layout/Header";
import ImageCard from "../homePageElements/ImageCard";
import LeftMargin from "../homePageElements/LeftMargin";
import NameCard from "../homePageElements/NameCard";

import MainBody from "../layout/MainBody";

function HomePage(props) {
  return (
    <MainBody>
      <Header home={true}></Header>
      <ImageCard></ImageCard>
      <NameCard></NameCard>
      <LeftMargin></LeftMargin>
    </MainBody>
  );
}

export default HomePage;
