import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Privelleges from "./Components/Privelleges";
import Footer from "./Components/Footer";
import Events from "./Components/Events";
import Articles from "./Components/Articles";
import Member from "./Components/Member";

function App() {
  return (
    <div className="App">
      <Home />
      <div className="container">
        <About />
        <Member/>
        <Work />
        <Privelleges />
        <Articles />
        <Events />
      </div>
      <Footer />
    </div>
  );
}

export default App;
