import "./App.css";
import IDOeventSection from "./Components/IDOeventSection";
import Navbar from "./Components/Navbar";
import  IntroductionSection  from "./Components/IntroductionSection";
import  TokenSection  from "./Components/TokenSection";


function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroductionSection />
      <IDOeventSection />
      <TokenSection />
      
    </div>
  );
}

export default App;
