import "../styles/footer.css";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="footer-name">
        <p>Desarrollado por Ciro Schapert</p>
      </div>
      <div className="footer-social">
        <p><AiFillLinkedin /></p>
        <p><AiFillGithub /></p>
      </div>
    </footer>
  );
};

export default Footer;
