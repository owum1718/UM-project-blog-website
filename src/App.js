import "./App.css";
import GKHead from "./components/GKHead";
import GkNavBar from "./components/GkNavBar";

function App() {
  return (
    <div className="App">
      <GKHead />
      <div className="gkNavBar">
        <GkNavBar name="Home" />
        <GkNavBar name="Posts" />
        <GkNavBar name=" Recipes" />
        <GkNavBar name="About" />
      </div>
    </div>
  );
}

export default App;
