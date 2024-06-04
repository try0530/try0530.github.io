import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
// import Educations from "./components/Educations/Educations";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Works />
      {/* <Educations /> */}
      <Footer />
    </div>
  );
}

export default App;
