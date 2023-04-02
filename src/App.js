import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Root from "./components/utilities/root/Root";
import Homepage from "./components/homepage/Homepage";
import Works from "./components/works/Works";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
