import CardProject from "./CardProject";
import "../css/portfolio.css";

const Portfolio = () => {
  return (
    <>
      <h1 className="projects-headding">My Projects</h1>
      <div className="projects">
        <div className="projects-container">
          <CardProject
            image={"/game.jpg"}
            tags={["Unity", "C#"]}
            title={"Artillery 3D Android Game"}
          />
          <CardProject
            image={"/game.jpg"}
            tags={["Unity", "C#"]}
            title={"Artillery 3D Android Game"}
          />
          <CardProject
            image={"/game.jpg"}
            tags={["Unity", "C#"]}
            title={"Artillery 3D Android Game"}
          />
          <CardProject
            image={"/game.jpg"}
            tags={["Unity", "C#"]}
            title={"Artillery 3D Android Game"}
          />
        </div>
        <div className="bottom-line-portfolio">
          <p>
            .........................................................................
          </p>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
