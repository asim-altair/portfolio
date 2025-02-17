import "../css/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="headding-contact">
        <h1>Contact Me</h1>
        <p>
          I’m always happy to hear from you! If you have any questions,
          comments, or just want to chat, don’t hesitate to reach out.
        </p>
      </div>
      <div className="contact-holder">
        <div className="contact-means">
          <div className="mean">
            <i className="fa-solid fa-phone fa-2x"></i>
            <div>
              <h6>Phone</h6>
              <p>+923061902209</p>
            </div>
          </div>
          <div className="mean">
            <i class="fa-solid fa-envelope fa-2x"></i>
            <div>
              <h6>Email</h6>
              <p>altairasim@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="message">
          <h3>Send Message</h3>
          <input type="text" name="" id="" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Message" />
          <button>Send</button>
        </div>
      </div>
      <div className="bottom-line-contact">
        <p>
          .........................................................................
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
