import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Work from "./pages/Work.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Work" element={<Work />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
