import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/LogoMicrowaveHouse.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Onde Estamos', path: '/onde-estamos' },
    { label: 'Contato', path: '/contato' },
    { label: 'Fotos', path: '/fotos' },
  ];

  return (
    <header className="w-full bg-background text-primary shadow-md h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-primary"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-background text-primary px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
