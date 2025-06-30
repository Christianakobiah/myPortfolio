import { useState } from "react";
import Hero from "./Hero";
import abstract from "../assets/img/abstract5.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ backgroundImage: `url(${abstract})` }}
      className="bg-no-repeat bg-cover h-screen"
    >
      <section className="py-3">
        <div className="space-y-5 border-2 border-[rgba(255,255,255,0.2)] rounded-2xl h-screen w-[80%] m-auto mb-4 bg-[rgba(255,255,255,0.1)] my-5">
          <nav className="flex flex-row justify-between items-center p-6 z-[100] translate-y-[30px]">
            <a
              href="#"
              className="text-white text-xl font-bold italic hover:text-[#CE1ED0] "
            >
              K.CHRISTIANA
            </a>

            {/* Hamburger button */}
            <div className="md:hidden pr-5"> 
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white border px-2 py-1 rounded-md ml-17"
                aria-label="Toggle navigation menu"
              >
                Menu
              </button>
            </div>

            {/* Desktop Navigation Links:*/}
            <div className="hidden md:flex pr-2 space-x-6 text-white z-10">
              <a href="#home" className="nav-link hover:text-[#CE1ED0] transition-colors">
                Home
              </a>
              <a href="#about" className="nav-link hover:text-[#CE1ED0] transition-colors">
                About
              </a>
              <a href="#portfolio" className="nav-link hover:text-[#CE1ED0] transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="nav-link hover:text-[#CE1ED0] transition-colors">
                Contact
              </a>
              <a href="mailto:kobiahchristiana@gmail.com" className="nav-link hover:text-[#CE1ED0] transition-colors">
                Hire Me
              </a>
            </div>
          </nav>

          {/* Mobile Menu (conditionally rendered) */}
          {menuOpen && (
            <div
              id="mobile-menu"
              className="block md:hidden px-4 pb-4 text-white text-center space-y-2 mt-4 ml-38"
            >
              <a
                href="#home"
                className="block py-2 hover:text-[#CE1ED0] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block py-2 hover:text-[#CE1ED0] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#portfolio"
                className="block py-2 hover:text-[#CE1ED0] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block py-2 hover:text-[#CE1ED0] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="mailto:kobiahchristiana@gmail.com"
                className="block py-2 hover:text-[#CE1ED0] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          )}

          <Hero />
        </div>
      </section>
    </header>
  );
}