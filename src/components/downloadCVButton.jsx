import "./downloadCVButton.css";
import { motion } from "framer-motion";
import { MdFileDownload } from "react-icons/md";
import pdfFile from "/AntonioJavierBarrancaJimenez.pdf";

export function DonwloadCVButton() {
  //Motion Values
  const spanVariants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    hover: {
      opacity: 1,
      x: 0,
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      borderRadius: "50px",
    },
    tap: {
      scale: 0.9,
    },
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "AntonioJavierBarrancaJimenezCV.pdf";
    link.click();
  };

  return (
    <motion.button
      className="download-cv-button"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={handleDownload}
    >
      <motion.span variants={spanVariants}>
        <MdFileDownload />
      </motion.span>
      descargar CV
    </motion.button>
  );
}
