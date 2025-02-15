import "../css/nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <i className="fa-solid fa-code logo"></i>
      <ol className="menu">
        <li className="menu-item">
          <a href="">HOME</a>
        </li>
        <li className="menu-item">
          <a href="">PORTFOLIO</a>
        </li>
        <li className="menu-item">
          <a href="">ABOUT</a>
        </li>
        <li className="menu-item">
          <a href="">CONTACT</a>
        </li>
      </ol>
    </div>
  );
};

export default Nav;
