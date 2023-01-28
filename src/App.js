// import Navbar from "./scence/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./scence/Hero";
import Contact from "./scence/Contact"
import Footer from "./scence/Footer"
import Skill from "./scence/Skill"
import Navbar from "./scence/Navbar"
import "./index.css"
function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <hr />
    <Hero/>
    <Contact/>
    <Skill/>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
