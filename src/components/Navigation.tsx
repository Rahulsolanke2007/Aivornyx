import React, { useState } from "react";
import { Menu, X, Home, Settings, Info, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Derive currentPage from the URL pathname
  const currentPage = location.pathname.slice(1) || "home";

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Settings },
    { id: "about", label: "About", icon: Info },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (pageId) => {
    setMobileMenuOpen(false);
    navigate(`/${pageId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-8">
          <div 
            className="relative flex items-center cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            {/* Enhanced background with better contrast */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300"></div>
            
            {/* Logo container with white background for better visibility */}
            <div className="relative bg-white rounded-lg p-2 shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300">
              <img
                src="https://res.cloudinary.com/drzydaw9o/image/upload/v1760727257/Aivornyx_logo_edited_yaikur.png"
                alt="Aivornyx Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            
            {/* Optional: Add brand name next to logo */}
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent hidden lg:block">
              Aivornyx
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center space-x-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? "text-white bg-gradient-to-r from-[#00dbde] to-[#fc00ff] shadow-md"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button
            className="hidden md:block px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
            onClick={() => handleNavClick("contact")}
          >
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-300"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white p-5 space-y-2 shadow-xl border-t border-gray-100 rounded-b-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-3 w-full px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-[#00dbde] to-[#fc00ff] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full flex items-center justify-center space-x-2 px-5 py-3.5 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white rounded-xl hover:scale-105 transition-all duration-300 mt-3 font-bold shadow-md"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;