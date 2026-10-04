import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

const BRAND = "Edusaas";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container nav">
        <Logo />

        <nav className={open ? "menu open" : "menu"}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}

          <div className="menu-actions">
            <a href="#login" className="login" onClick={close}>
              Login
            </a>

            <a href="#start" className="btn small" onClick={close}>
              Start Free Trial
            </a>
          </div>
        </nav>

        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
