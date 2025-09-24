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
<<<<<<< HEAD
      <h1>This is a Heading</h1>
=======
>>>>>>> c6d68d36fa4cbec1158409ba63957665446eff27
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
