import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/home";

function App() {
  const location = useLocation();
  const navHome = location.pathname == "/" || location.pathname == "/home";
  return (
    <div className="App">
      {navHome ? null : <Header navHome={false} />}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {navHome ? <Header navHome={true} /> : null}
    </div>
  );
}

export default App;
