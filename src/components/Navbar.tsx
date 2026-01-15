import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", to: "/project-details" },
    { name: "Skills", to: { pathname: "/", hash: "#skills" } },
    { name: "Resume", href: "https://drive.google.com/file/d/1-BfwOb6jkLWPpeTrBcyh59MKfcXLeWLX/view?usp=share_link", external: true },
    { name: "Contact", to: { pathname: "/", hash: "#contact" } },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-heading text-xl font-bold text-foreground hover:text-primary transition-colors">
            Raju Kotturi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <span key={link.name}>
                {"external" in link ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                  >
                    {link.name}
                  </Link>
                )}
              </span>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in-up">
            {navLinks.map((link) => (
              <span key={link.name}>
                {"external" in link ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
