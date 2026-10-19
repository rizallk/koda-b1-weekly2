import { Link, useLocation } from 'react-router';
import Button from './Button';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.getElementById('nav');
      if (!navElement) return;

      if (window.scrollY > 0) {
        navElement.classList.add('shadow');
      } else {
        navElement.classList.remove('shadow');
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActiveClassName = (path) => {
    return path === pathname
      ? 'bg-gray-100 px-4 py-3 rounded-md'
      : 'px-4 py-3 rounded-md';
  };

  function menuClick() {
    setIsToggleActive(false);
    window.scrollTo(0, 0);
  }

  return (
    <nav
      id="nav"
      className="border-b border-b-gray-100 fixed top-0 w-full bg-white z-50 h-18"
    >
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-center container mx-auto px-4 h-18">
          <h1 className="text-lg font-bold">Alex Carter</h1>
          <div className="flex text-sm font-medium">
            <Link to="/" className={isActiveClassName('/')}>
              Home
            </Link>
            <Link to="/about" className={isActiveClassName('/about')}>
              About
            </Link>
            <Link to="/projects" className={isActiveClassName('/projects')}>
              Projects
            </Link>
            <Link to="/experience" className={isActiveClassName('/experience')}>
              Experience
            </Link>
            <Link to="/contact" className={isActiveClassName('/contact')}>
              Contact
            </Link>
            <Button className="font-semibold">Hire Me</Button>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile */}
      <div className={`block lg:hidden`}>
        <div className="flex justify-between items-center container mx-auto px-4 h-18 relative">
          <h1 className="text-lg font-bold">Alex Carter</h1>
          {isToggleActive ? (
            <img
              className="cursor-pointer"
              src="icons/close.png"
              alt="Toggle"
              onClick={() => setIsToggleActive(false)}
            />
          ) : (
            <img
              className="cursor-pointer"
              src="icons/toggle.png"
              alt="Toggle"
              onClick={() => setIsToggleActive(true)}
            />
          )}
          <div
            className={`${isToggleActive ? 'flex' : 'hidden'} flex-col text-sm font-medium bg-white border-b border-l border-r border-gray-100 rounded-b-lg p-4 absolute right-0 left-0 top-16.25`}
          >
            <Link to="/" className={isActiveClassName('/')} onClick={menuClick}>
              Home
            </Link>
            <Link
              to="/about"
              className={isActiveClassName('/about')}
              onClick={menuClick}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={isActiveClassName('/projects')}
              onClick={menuClick}
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className={isActiveClassName('/experience')}
              onClick={menuClick}
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className={isActiveClassName('/contact')}
              onClick={menuClick}
            >
              Contact
            </Link>
            <Button className="font-semibold">Hire Me</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
