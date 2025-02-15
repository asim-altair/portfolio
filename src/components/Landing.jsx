import "../css/landing.css";

const Landing = () => {
  return (
    <div className="container">
      <div>
        <div className="heading-container">
          <h1 className="main-heading">Hello There!</h1>
          <h1 className="main-heading name">I'M ASIM</h1>
        </div>
        <p className="intro">
          i am junior developer focused on learning and building functional
          applications while expanding my skill set daily.
        </p>
        <button className="btn1">PORTFOLIO</button>
        <button className="btn2">READ MORE</button>
      </div>
      <div className="img-container">
        <img src="/profile.png" alt="" />
      </div>
    </div>
  );
};

export default Landing;
