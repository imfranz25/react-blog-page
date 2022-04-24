//import {Routes, Route} from 'react-router-dom';
import useScript from "./components/UseScript";

// COMPONENTS
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

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
    </>
  )

}

export default App;
