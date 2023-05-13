const NewModal = ({ closePop }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closePop}></div>
      <div className="modal-contain">
        <div id="title-cont">
          <span>Contact </span>
          <span className="inline">Us</span>
        </div>
        <div className="inp_ut">
          <label>Name</label>
          <div>
            <input placeholder="Enter your name" required />
          </div>
          <p className="valid" id="invalidName">
            Only alphabets are allowed.
          </p>
        </div>
        <div className="inp_ut">
          <label>Email</label>
          <div>
            <input placeholder="Enter your email" required />
          </div>
          <p className="valid" id="invalidEmail">
            Enter valid email address.
          </p>
        </div>
        <div className="inp_ut">
          <label>Your Message</label>
          <div>
            <input placeholder="Enter your message" />
          </div>
        </div>
        <div id="btn-cont">
          <span id="btn-1">Send</span>
          <span id="btn-2" onClick={closePop}>
            Cancel
          </span>
        </div>
      </div>
    </>
  );
};

export default NewModal;
