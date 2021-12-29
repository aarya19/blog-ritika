import MainBody from "../layout/MainBody";
import Header from "../layout/Header";
import BookingForm from "../bookSessionElements/BookingForm";

function BookASession(props) {
  return (
    <MainBody>
      <Header book={true}></Header>
      <BookingForm></BookingForm>
    </MainBody>
  );
}

export default BookASession;
