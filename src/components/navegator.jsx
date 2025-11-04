import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./navegator.css"; // estilos base con gradiente

const buttonsVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: {
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export function Navegator() {
  const navItems = [
    { path: "/", name: "Inicio" },
    { path: "/about", name: "Sobre mí" },
    { path: "/skills", name: "Habilidades" },
    { path: "/projects", name: "Proyectos" },
    { path: "/contact", name: "Contacto" },
  ];

  return (
    <Navbar expand="lg" bg="transparent" variant="dark">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="gradient-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                className="nav-item"
                variants={buttonsVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Nav.Link as={Link} to={item.path} className="gradient-link">
                  {item.name}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
