import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
      <SocialLinks/>
    </div>
   );
}

export default App;
