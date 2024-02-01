import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Events from "./Components/Events";
import Member from "./Components/Member";
import { Helmet } from 'react-helmet';

function App() {

  
  return (
    <div className="App">
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="ForbesWoman" />
        <meta name="keywords" content="forbes, forbeswoman, woman" />
        <meta name="author" content="Forbes" />
        <meta property="og:title" content="ForbesWoman" />
        <meta property="og:description" content="ForbesWoman" />
      </Helmet>
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
