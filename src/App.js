import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";
import NavbarComponent from "./components/NavbarComponent";
import NotACityComponent from "./components/NotACityComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        {/* <Route path="/" element={<MainComponent />} /> */}
        <Route path="/:id" element={<MainComponent />} />
        <Route path="*" element={<NotACityComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
