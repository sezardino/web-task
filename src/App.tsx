import "./App.css";
import TopBar from "./components/topBar";
import Contact from "./sections/contact";
import CTA from "./sections/CTA";
import Features from "./sections/features";
import Intro from "./sections/intro";
import Technology from "./sections/technology";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Intro />
      <Features />
      <Technology />
      <CTA />
      <Contact />
    </div>
  );
}

export default App;
