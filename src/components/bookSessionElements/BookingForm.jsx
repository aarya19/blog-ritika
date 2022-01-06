import "./BookingForm.css";

function BookingForm(props) {
  return (
    <div className="form-container">
      <h1>Personal Details</h1>

      <form>
        <div className="form-inputs">
          <input type={"text"} placeholder="First Name"></input>

          <input type={"text"} placeholder="Last Name"></input>

          <input type={"number"} placeholder="Phone number"></input>

          <input type={"email"} placeholder="Email id"></input>

          <input type={"text"} placeholder="Address"></input>

          <input type={"number"} placeholder="Age"></input>
        </div>

        <div className="form-text-input">
          <h2>
            Please mention any details you would like me to know prior to the
            session:
          </h2>
          <input type={"textarea"}></input>
          <button typeof="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
