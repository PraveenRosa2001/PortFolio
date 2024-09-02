import Navbar from "./components/NavBar/navbar.js"
import Intro from "./components/Intro/intro.js"
import Skills from "./components/Skills/skills.js"
import Works from "./components/Works/works.js"
import Contact from "./components/Contact/contact.js"
import Footer from "./components/Footer/footer.js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
