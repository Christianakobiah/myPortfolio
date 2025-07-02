import NavBar from "./components/NavBar";
import About from "./components/About";
import MyPortfolio from "./components/MyPortfolio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Message from "./components/Message";
import Footer from "./components/Footer";


function App() {
  return (
    
    <div className="overflow-x-hidden">
      <NavBar />
      <About />
      <MyPortfolio />
      <Skills />
      <Experience />
      <Education />
      <Message />
      <Footer />
      </div>
    
  );
}

export default App;

