import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import "./css/app.css";

function App() {
  return (
    <div className="main-container">
      <Nav />
      <Landing />
      <Portfolio />
      <Contact />
      <About />
    </div>
  );
}

export default App;
