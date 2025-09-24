import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" Component={Intro} />
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
