import logo from "./logo.svg";
import "./App.css";
import Headers from "./components/Headers/Headers";
import Footer from "./components/Footer/Footer";

import AllRoutes from "./Router/AllRoutes";

function App() {
  return (
    <div className="App">
           <Headers />
           <AllRoutes/>
          <Footer />
    </div>
  );
}

export default App;
