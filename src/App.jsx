import "./App.css";
import { Header } from "./components/header.jsx";
import { Routes, Route } from "react-router-dom";
import { WelcomeScreen } from "./pages/welcomeScreen.jsx";
import { AboutMePage } from "./pages/aboutMePage.jsx";
import { SkillsScreen } from "./pages/skillsScreen.jsx";
import { ProjectsScreen } from "./pages/projectsScreen.jsx";
import { ContactScreen } from "./pages/contactScreen.jsx";
import { ConfigurationScreen } from "./pages/configurationScreen.jsx";

function App() {
  return (
    <main className="main">
      <Header />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/skills" element={<SkillsScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/config" element={<ConfigurationScreen />} />
      </Routes>
    </main>
  );
}

export default App;
