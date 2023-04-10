import { AnimatePresence } from "framer-motion";
import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Matchup from "./pages/Matchup";
import Vote from "./pages/Vote";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));

function App() {
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Suspense fallback={""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route
                path="projects/single-project"
                element={<ProjectSingle />}
              />

              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
