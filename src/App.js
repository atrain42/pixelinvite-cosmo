import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Home, Registry, Contact, Success } from "./layout";

import { AnimatePresence } from "framer-motion";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 4000);
  }

  return (
    !loading && (
      <Router>
        <ScrollToTop />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/rsvp" element={<Contact />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </AnimatePresence>
      </Router>
    )
  );
}

export default App;
