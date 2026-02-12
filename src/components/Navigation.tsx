import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Siddha', href: '#about' },
    { label: 'Doctor', href: '#doctor' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Medicines', href: '#medicines' },
    { label: 'Book Appointment', href: '#appointment' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Sunflower Siddha Clinic" className="h-12" />
            <div>
              <h1 className="text-xl font-bold text-green-800">
                Sunflower Siddha Clinic
              </h1>
              <p className="text-xs text-green-600">
                20+ Years of Excellence
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">

            {/* LEFT MENU */}
            {navItems.slice(0, 3).map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                {item.label}
              </button>
            ))}

            {/* 🔐 ADMIN CENTER BUTTON */}
            <button
              onClick={() => navigate('/admin/login')}
              className="px-6 py-2 rounded-full border-2 border-red-500 text-red-600 font-bold
                         hover:bg-red-500 hover:text-white transition shadow-md"
            >
              Admin Login
            </button>

            {/* RIGHT MENU */}
            {navItems.slice(3).map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">

          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-gray-700 py-2"
            >
              {item.label}
            </button>
          ))}

          {/* 🔐 MOBILE ADMIN BUTTON */}
          <button
            onClick={() => {
              navigate('/admin/login');
              setIsOpen(false);
            }}
            className="w-full mt-3 border-2 border-red-500 text-red-600 font-bold py-2 rounded-full"
          >
            Admin Login
          </button>

        </div>
      )}
    </nav>
  );
}
