import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navItems, portfolioLinks } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const portfolioActive = location.pathname.startsWith('/portfolio');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
        isScrolled ? 'border-b border-paper/10 bg-ink/82 shadow-editorial backdrop-blur-xl' : 'bg-ink/28 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-playfair text-2xl font-semibold tracking-wide text-paper">
          Adwika Portfolio
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.16em] lg:flex">
          {navItems.slice(0, 3).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="group relative py-8">
            <NavLink to="/portfolio" className={`nav-link ${portfolioActive ? 'active' : ''}`}>
              Portfolio
              <ChevronDown size={14} />
            </NavLink>
            <div className="pointer-events-none absolute right-0 top-[4.4rem] w-56 translate-y-2 border border-paper/10 bg-charcoal p-2 opacity-0 shadow-editorial transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {portfolioLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-xs uppercase tracking-[0.14em] transition hover:bg-forest/28 hover:text-paper ${
                      isActive ? 'bg-forest/30 text-paper' : 'text-paper/62'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {navItems.slice(3).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-paper/12 text-paper transition hover:border-forest-hover hover:text-forest-hover lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`border-t border-paper/10 bg-ink/96 px-5 pb-6 pt-4 backdrop-blur-xl transition lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2 text-sm font-semibold uppercase tracking-[0.16em]">
          {[...navItems.slice(0, 3), ...portfolioLinks, ...navItems.slice(3)].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `border border-transparent px-4 py-3 transition ${
                  isActive ? 'border-forest/60 bg-forest/20 text-paper' : 'text-paper/64 hover:text-paper'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
