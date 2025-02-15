import Landing from "./components/Landing";
import Nav from "./components/Nav";
import "./css/app.css";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <div className="dots">
        <p>.................................................................</p>
        <span className="bar"></span>
      </div>
    </>
  );
}

export default App;
