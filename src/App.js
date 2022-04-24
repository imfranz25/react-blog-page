//import {Routes, Route} from 'react-router-dom';
import useScript from "./pages/UseScript";

// COMPONENTS
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";

function App() {

  // CUSTOME JS -> CONFIGS
  useScript('./functions/p-slider.js');
  useScript('./functions/type-writer.js');
  useScript('./functions/main.js');

  return (
    <>
      {/* <!-- Particles (BG) --> */}
	    <div id="particles"></div>
      {/* Components */}
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
      <button class="m-5 bg-warning border-0 p-0 rounded d-none" id="nav-home">
        <a href="#home" class="px-3"><i class="fa fa-arrow-up text-light py-2 my-1" rel="noreferrer"></i></a>
      </button>
    </>
  )

}

export default App;
