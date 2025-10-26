
// import React, { useState, useEffect } from "react";
// import { Menu, X, Home, Settings, Info, Mail } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Navigation: React.FC = () => {
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState("home");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY < lastScrollY) {
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setIsVisible(false);
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const navItems = [
//     { id: "home", label: "Home", icon: Home },
//     { id: "services", label: "Services", icon: Settings },
//     { id: "about", label: "About", icon: Info },
//     { id: "contact", label: "Contact", icon: Mail },
//   ];

//   const handleNavClick = (pageId: string) => {
//     setCurrentPage(pageId);
//     setMobileMenuOpen(false);
//     navigate(`/${pageId}`);
//   };

//   return (
//     <>
//       <nav
//         className={`fixed inset-x-0 top-10 z-50 flex justify-center transition-all duration-300 ${
//           isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div className="mx-auto max-w-fit px-4">
//           <div className="flex items-center justify-center space-x-1 rounded-full border border-white/20 bg-white/10 px-8 py-3 shadow-lg backdrop-blur-md dark:border-white/[0.2] dark:bg-black/40">
            
//               {/* <div className="flex-shrink-0 mr-4">
//                 <img
//                   src="https://res.cloudinary.com/drzydaw9o/image/upload/v1760727257/Aivornyx_logo_edited_yaikur.png" // Replace with your logo path
//                   alt="Aivornyx Logo"
//                   className="h-8 w-auto" // Adjust height/width as needed
//                 />
//               </div> */}
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-1">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => handleNavClick(item.id)}
//                   className={`relative flex items-center space-x-1 text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 ${
//                     currentPage === item.id
//                       ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900"
//                       : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
//                   }`}
//                 >
//                   <item.icon className="h-4 w-4" />
//                   <span className="hidden sm:block">{item.label}</span>
//                 </button>
//               ))}
//             </div>

//             {/* Separator */}
//             <div className="hidden md:block h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2" />

//             {/* Get Started Button */}
//             <button
//               className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
//               onClick={() => navigate("/contact")}
//             >
//               Get Started
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
//             >
//               {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 dark:bg-black/40 dark:border-white/[0.2] rounded-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => handleNavClick(item.id)}
//                   className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
//                     currentPage === item.id
//                       ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
//                       : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
//                   }`}
//                 >
//                   <item.icon className="h-4 w-4" />
//                   <span>{item.label}</span>
//                 </button>
//               ))}
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 mt-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
//               >
//                 <span className="text-sm font-medium">Get Started</span>
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navigation;
// import React, { useState } from "react";
// import { Menu, X, Home, Settings, Info, Mail } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Navigation: React.FC = () => {
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState("home");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { id: "home", label: "Home", icon: Home },
//     { id: "services", label: "Services", icon: Settings },
//     { id: "about", label: "About", icon: Info },
//     { id: "contact", label: "Contact", icon: Mail },
//   ];

//   const handleNavClick = (pageId: string) => {
//     setCurrentPage(pageId);
//     setMobileMenuOpen(false);
//     navigate(`/${pageId}`);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         {/* Left Section - Logo */}
//         <div className="flex items-center space-x-4">
//           <img
//             src="https://res.cloudinary.com/drzydaw9o/image/upload/v1760727257/Aivornyx_logo_edited_yaikur.png"
//             alt="Aivornyx Logo"
//             className="h-12 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105 drop-shadow-md"
//             onClick={() => navigate("/")}
//           />

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`relative flex items-center space-x-1 text-sm font-medium px-3 py-2 rounded-full transition-all duration-300 ${
//                   currentPage === item.id
//                     ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
//                     : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 <item.icon className="h-4 w-4" />
//                 <span className="hidden sm:block">{item.label}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Section - Get Started + Mobile Toggle */}
//         <div className="flex items-center space-x-4">
//           <button
//             className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
//             onClick={() => navigate("/contact")}
//           >
//             Get Started
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
//           >
//             {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl p-4 space-y-2 shadow-lg">
//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => handleNavClick(item.id)}
//               className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
//                 currentPage === item.id
//                   ? "bg-indigo-600 text-white"
//                   : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//             >
//               <item.icon className="h-4 w-4" />
//               <span>{item.label}</span>
//             </button>
//           ))}
//           <button
//             onClick={() => navigate("/contact")}
//             className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 mt-2"
//           >
//             <span className="text-sm font-medium">Get Started</span>
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import { Menu, X, Home, Settings, Info, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Settings },
    { id: "about", label: "About", icon: Info },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false); // Close the mobile menu on navigation
    navigate(`/${pageId}`); // Navigate to the selected page
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-8">
          <div className="relative flex items-center">
            {/* Glow behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] blur-xl opacity-20 rounded-full"></div>
            <img
              src="https://res.cloudinary.com/drzydaw9o/image/upload/v1760727257/Aivornyx_logo_edited_yaikur.png"
              alt="Aivornyx Logo"
              className="relative h-12 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105 drop-shadow-lg"
              onClick={() => handleNavClick("home")} // Click on logo navigates to home
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)} // Handle navigation on click
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
            onClick={() => handleNavClick("contact")} // Navigate to contact
          >
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Toggle mobile menu
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
                onClick={() => handleNavClick(item.id)} // Handle navigation on click
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
            onClick={() => handleNavClick("contact")} // Navigate to contact on button click
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

