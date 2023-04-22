import logo from "./logo.svg";
import "./App.css";
import Headers from "./components/Headers/Headers";
import Footer from "./components/Footer/Footer";

import AllRoutes from "./Router/AllRoutes";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
  return (
    <div id="course" className="App">
           <Headers />
           <AllRoutes/>
          <Footer />
          <ScrollUp/>
         
    </div>
  );
}

export default App;
