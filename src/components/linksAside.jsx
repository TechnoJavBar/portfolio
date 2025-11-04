import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import "./linksAside.css";

export function LinksAside() {
  return (
    <motion.aside
      className="aside"
      initial={{
        opacity: 0.2,
      }}
    >
      <ul>
        <li>
          <a href="https://github.com/TechnoJavBar">
            <FaGithub className="FaGithub" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin className="FaLinkedin" />
          </a>
        </li>
        {/*www.linkedin.com/in/antonio-javier-barranca-jiménez-064408307 */}
        <li>
          <a href="#">
            <FaInstagram className="FaInstagram" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61573184274798">
            <FaFacebook className="FaFacebook" />
          </a>
        </li>
      </ul>
    </motion.aside>
  );
}
