import "./App.css";
import GKHead from "./components/GKHead";
import GkHome from "./components/GkHome";
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
      <div id="gkHome">
        <GkHome />
      </div>
    </div>
  );
}

export default App;
