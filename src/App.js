//import {Routes, Route} from 'react-router-dom';
import useScript from "./pages/UseScript";

// COMPONENTS
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

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
    </>
  )

}

export default App;
