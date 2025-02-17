import "../css/landing.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="heading">
        <p className="responsive">Rsponsive</p>
        <p className="efficient">Efficient</p>
        <p className="fast">Fast</p>
        <p className="optimized">Optimized</p>
        <p className="maintainable">Maintainable</p>
        <p className="user-friendly">User-Friendly</p>
        <h1>Bringing Ideas To Life With Code</h1>
        <div className="dots"></div>
        <p>
          "i am junior developer focused on learning and building functional
          applications while expanding my skill set daily."
        </p>
      </div>
      <div className="skills">
        <i className="fa-brands fa-react fa-3x skill react"></i>
        <i className="fa-brands fa-js fa-3x skill js"></i>
        <i class="fa-brands fa-css3-alt fa-3x skill css"></i>
        <i class="fa-brands fa-html5 fa-3x skill html"></i>
        <i class="fa-brands fa-git-alt fa-3x skill git"></i>
        <i class="fa-brands fa-github fa-3x skill github"></i>
        <i class="fa-brands fa-unity fa-3x skill unity"></i>
        <img src="./c.png" alt="" className="skill c" />
        <i className="fa-solid fa-code fa-3x skill"></i>
      </div>
      <div className="bottom-line">
        <p>
          .........................................................................
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Landing;
