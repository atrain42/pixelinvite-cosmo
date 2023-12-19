import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Home, Registry, Contact, Success, Thanks } from "./layout";

import { AnimatePresence } from "framer-motion";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/rsvp" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
