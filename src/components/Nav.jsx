import "../css/nav.css";
import MenuButton from "./MenuButton";

const Nav = () => {
  return (
    <div className="nav">
      <div className="intro">
        <img src="/profile.png" alt="" />
        <h3>Muhammad Asim</h3>
        <p>altairasim@gmail.com</p>
      </div>
      <div className="buttons">
        <MenuButton title={"Home"} icon={"fa-solid fa-house fa-lg"} />
        <MenuButton title={"Projects"} icon={"fa-solid fa-list-check"} />
        <MenuButton title={"Contact"} icon={"fa-solid fa-address-book"} />
        <MenuButton title={"About"} icon={"fa-solid fa-circle-info"} />
      </div>
      <div className="social">
        <a href="">
          <i className="fa-brands fa-github fa-lg"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-linkedin fa-lg"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-facebook fa-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default Nav;
