import "./App.css";
import { Header } from "./components/header.jsx";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/welcome.jsx";
import { AboutMePage } from "./pages/aboutMePage.jsx";
import { SkillsPage } from "./pages/skillsPage.jsx";
import { ProjectsPage } from "./pages/projectsPage.jsx";
import { ContactPage } from "./pages/contactPage.jsx";

function App() {
  return (
    <main className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default App;
