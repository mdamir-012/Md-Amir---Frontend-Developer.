import "./App.css";
import IdoEvent from "./Components/IdoEvent";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Intro />
      <IdoEvent/>
    </div>
  );
}

export default App;
