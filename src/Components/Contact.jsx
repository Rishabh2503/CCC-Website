const newModal = ({ closePop }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closePop}></div>
      <div className="modal-contain">
        <div id="title-cont">
          <span>Contact </span>
          <span className="inline">Us</span>
        </div>
        <div>
          <label>Name</label>
          <div>
            <input placeholder="Enter your name" />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input placeholder="Enter your email" />
          </div>
        </div>
        <div>
          <label>Your Message</label>
          <div>
            <input placeholder="Enter your message" />
          </div>
        </div>
        <div id="btn-cont">
        <span id="btn-1">Send</span>
          <span id="btn-2" onClick={closePop}>Cancel</span>
        </div>
      </div>
    </>
  );
};

export default newModal;
