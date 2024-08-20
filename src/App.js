import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/posts/Posts";
import About from "./components/About";
import Recipes from "./components/Recipes";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
