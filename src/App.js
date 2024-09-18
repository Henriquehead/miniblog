import "./App.css";

//Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

import {
  BrowserRouter,
  Routes,
  Router,
  Navigate,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Registrer from "./Pages/Registrer/Registrer";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrer" element={<Registrer />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
