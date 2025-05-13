import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page2";
import Page2 from "./Pages/Page3";
import Page3 from "./Pages/Page4";
import Page4 from "./Pages/Page5";
import Page5 from "./Pages/Page1";
import Header from "./Components/Header";

import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter basename="/CursuriCuLorem">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-3" element={<Page3 />} />
        <Route path="/page-4" element={<Page4 />} />
        <Route path="/page-5" element={<Page5 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
