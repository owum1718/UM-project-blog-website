import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
