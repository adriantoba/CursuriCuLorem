import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";

import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter basename="/GermanaCuClaudiu">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
