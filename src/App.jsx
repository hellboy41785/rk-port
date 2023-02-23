import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Works from "./pages/Works";
import Contacts from "./pages/Contacts";
import Loader from "./components/Loader";
import "@fontsource/fira-code";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import SideBar from "./components/Sidebar";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const location = useLocation();
  return (
    <div className="App flex flex-col items-center">
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Navbar
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        setLoading={setLoading}
        loading={loading}
      />
      <Loader loading={loading} setLoading={setLoading} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </AnimatePresence>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
