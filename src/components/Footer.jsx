import { GraduationCap } from "lucide-react";

const BRAND = "Edusaas";

function Logo() {
  return (
    <a href="#top" className="logo">
      <span className="logo-icon">
        <GraduationCap size={16} />
      </span>

      {BRAND}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <Logo />

        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>

        <small>
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
