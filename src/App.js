import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/posts/Posts";
import About from "./components/About";
import Recipes from "./components/Recipes";
import PostRecipe2 from "./components/posts/PostRecipe2";
import PostRecipe3 from "./components/posts/PostRecipe3";
import PostRecipe from "./components/posts/PostRecipe";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/post1" element={<PostRecipe/>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
        <Route path="/post2" element={<PostRecipe2/>}></Route>
        <Route path="/post3" element={<PostRecipe3/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
