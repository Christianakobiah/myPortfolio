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
          <nav className="flex flex-row justify-between p-6 z-[100] translate-y-[30px]">
            <a
              href="#"
              className="text-[#CE1ED0] text-lg font-bold pl-5 italic hover:text-white"
            >
              K.CHRISTIANA
            </a>

            <div className="lg:hidden pr-5">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white border px-2 py-1 rounded-md"
              >
                Menu
              </button>
            </div>

            <div className="pr-5 hidden lg:flex space-x-6 text-white z-10">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
              <a href="#hire" className="nav-link">
                Hire Me
              </a>
            </div>
          </nav>

          {/* Mobile Menu
          {menuOpen && (
            <div id="mobile-menu" className="lg:hidden px-4 pb-4">
              <a href="#home" className="block py-2 hover:text-green-600">
                Home
              </a>
              <a href="#about" className="block py-2 hover:text-green-600">
                About
              </a>
              <a href="#skills" className="block py-2 hover:text-green-600">
                Skills
              </a>
              <a href="#contact" className="block py-2 hover:text-green-600">
                Contact
              </a>
            </div>
          )} */}

          <Hero />
        </div>
      </section>
    </header>
  );
}
