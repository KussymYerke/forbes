import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Events from "./Components/Events";
import Member from "./Components/Member";

function App() {

  
  return (
    <div className="App">
      <Home />
      <div className="container">
        <About />
        <Member/>
        <Work />
        <Testimonial />
        <Contact />
        <Events />
      </div>
      <Footer />
    </div>
  );
}

export default App;
