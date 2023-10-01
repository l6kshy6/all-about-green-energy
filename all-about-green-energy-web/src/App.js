import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
