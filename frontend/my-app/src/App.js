import "./App.css";
import IDOeventSection from "./Components/IDOeventSection";
import Navbar from "./Components/Navbar";
import  IntroductionSection  from "./Components/IntroductionSection";
import  TokenSection  from "./Components/TokenSection";
import  FaqSection  from "./Components/FaqSection";
import  FooterSection  from "./Components/FooterSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroductionSection />
      <IDOeventSection />
      <TokenSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

export default App;
