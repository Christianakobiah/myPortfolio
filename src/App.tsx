import NavBar from "./components/NavBar";
import About from "./components/About";
import MyPortfolio from "./components/MyPortfolio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Message from "./components/Message";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    
    <div className="overflow-x-hidden">
      <NavBar />
      <About />
      <MyPortfolio />
      <Skills />
      <Experience />
      <Message />
      <Contact />
      <Footer />
      </div>
    
  );
}

export default App;

