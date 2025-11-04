import "./contactForm.css";
import { useState, useEffect, useRef } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import { set } from "react-hook-form";

// Variants para la animación del icono
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.15 } },
};

export function ContactForm() {
  const nombreRef = useRef();

  const [showToast, setShowToast] = useState(false);
  const [isError, setIsError] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [nombre, setNombre] = useState("");
  const [validNombre, setValidNombre] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [mensaje, setMensaje] = useState("");
  const [validMensaje, setValidMensaje] = useState(false);

  const NAME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,40}$/;
  const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const MENSAJE_REGEX = /^.{3,500}$/;

  useEffect(() => {
    nombreRef.current.focus();
  }, []);

  useEffect(() => {
    setValidNombre(NAME_REGEX.test(nombre));
  }, [nombre]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidMensaje(MENSAJE_REGEX.test(mensaje));
  }, [mensaje]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xwpwddra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nombre,
          email: email,
          message: mensaje,
        }),
      });

      if (response.ok) {
        setShowToast(true);
        setIsError(false);
        setToastMessage("¡Mensaje enviado con éxito!");
      } else {
        alert("Ocurrió un error al enviar el mensaje.");
        setShowToast(true);
        setIsError(true);
        setToastMessage("Error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error al enviar el mensaje.");
      setShowToast(true);
      setIsError(true);
      setToastMessage("Error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setNombre("");
      setEmail("");
      setMensaje("");
    }
  };

  return (
    <div className="containerForm">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="nombre">
              Nombre:
              <AnimatePresence mode="wait">
                {validNombre && (
                  <motion.span
                    key="nombre-ok"
                    className="valid-icon"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <FaCheck />
                  </motion.span>
                )}
                {!validNombre && nombre && (
                  <motion.span
                    key="nombre-error"
                    className="invalid-icon"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <FaTimes />
                  </motion.span>
                )}
              </AnimatePresence>
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              ref={nombreRef}
              autoComplete="off"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">
              Correo Electrónico:
              <AnimatePresence mode="wait">
                {validEmail && (
                  <motion.span
                    key="email-ok"
                    className="valid-icon"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <FaCheck />
                  </motion.span>
                )}
                {!validEmail && email && (
                  <motion.span
                    key="email-error"
                    className="invalid-icon"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <FaTimes />
                  </motion.span>
                )}
              </AnimatePresence>
            </label>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="mensaje">
            Mensaje:
            <AnimatePresence mode="wait">
              {validMensaje && (
                <motion.span
                  key="mensaje-ok"
                  className="valid-icon"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <FaCheck />
                </motion.span>
              )}
              {!validMensaje && mensaje && (
                <motion.span
                  key="mensaje-error"
                  className="invalid-icon"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <FaTimes />
                </motion.span>
              )}
            </AnimatePresence>
          </label>
          <textarea
            placeholder="Tu mensaje"
            rows={3}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>

        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={!validNombre || !validEmail || !validMensaje}
        >
          Contactar
        </motion.button>
      </form>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg={isError ? "danger" : "success"}
        >
          <Toast.Header>
            <strong className="me-auto">
              {isError ? "Error" : "satisfacción"}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
