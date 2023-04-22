import logo from "./logo.svg";
import "./App.css";
import Headers from "./components/Headers/Headers";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Headers />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
