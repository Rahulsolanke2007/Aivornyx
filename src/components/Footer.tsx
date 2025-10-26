// // import React from 'react';
// // import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

// // const Footer: React.FC = () => {
// //   const currentYear = new Date().getFullYear();

// //   const footerLinks = {
// //     company: [
// //       { label: 'About Us', href: '#' },
// //       { label: 'Careers', href: '#' },
// //       { label: 'Blog', href: '#' },
// //       { label: 'Contact', href: '#' },
// //     ],
// //     services: [
// //       { label: 'Generative AI', href: '#' },
// //       { label: 'Custom AI & ML', href: '#' },
// //       { label: 'Computer Vision', href: '#' },
// //       { label: 'Consulting', href: '#' },
// //     ],
// //     resources: [
// //       { label: 'Case Studies', href: '#' },
// //       { label: 'Documentation', href: '#' },
// //       { label: 'White Papers', href: '#' },
// //       { label: 'FAQ', href: '#' },
// //     ],
// //   };

// //   const socialLinks = [
// //     { icon: Linkedin, href: '#', label: 'LinkedIn' },
// //     { icon: Twitter, href: '#', label: 'Twitter' },
// //     { icon: Github, href: '#', label: 'Github' },
// //     { icon: Mail, href: 'mailto:contact@aivornyx.com', label: 'Email' },
// //   ];

// //   return (
// //     <footer className="bg-gray-900 text-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
// //           <div className="lg:col-span-2">
// //             <h3 className="text-2xl font-bold mb-4">Aivornyx</h3>
// //             <p className="text-gray-400 mb-6 leading-relaxed">
// //               Accelerating your journey from idea to impact with cutting-edge AI solutions. Transform your business
// //               with artificial intelligence, machine learning, and computer vision.
// //             </p>
// //             <div className="flex gap-4">
// //               {socialLinks.map((social, index) => (
// //                 <a
// //                   key={index}
// //                   href={social.href}
// //                   aria-label={social.label}
// //                   className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
// //                 >
// //                   <social.icon size={20} />
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           <div>
// //             <h4 className="text-lg font-bold mb-4">Company</h4>
// //             <ul className="space-y-3">
// //               {footerLinks.company.map((link, index) => (
// //                 <li key={index}>
// //                   <a
// //                     href={link.href}
// //                     className="text-gray-400 hover:text-white transition-colors duration-300"
// //                   >
// //                     {link.label}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div>
// //             <h4 className="text-lg font-bold mb-4">Services</h4>
// //             <ul className="space-y-3">
// //               {footerLinks.services.map((link, index) => (
// //                 <li key={index}>
// //                   <a
// //                     href={link.href}
// //                     className="text-gray-400 hover:text-white transition-colors duration-300"
// //                   >
// //                     {link.label}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div>
// //             <h4 className="text-lg font-bold mb-4">Resources</h4>
// //             <ul className="space-y-3">
// //               {footerLinks.resources.map((link, index) => (
// //                 <li key={index}>
// //                   <a
// //                     href={link.href}
// //                     className="text-gray-400 hover:text-white transition-colors duration-300"
// //                   >
// //                     {link.label}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>

// //         <div className="pt-8 border-t border-gray-800">
// //           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
// //             <p className="text-gray-400 text-sm">
// //               {currentYear} Aivornyx. All rights reserved.
// //             </p>
// //             <div className="flex gap-6">
// //               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
// //                 Privacy Policy
// //               </a>
// //               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
// //                 Terms of Service
// //               </a>
// //               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
// //                 Cookie Policy
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;
// import React from "react";
// import { Mail, Linkedin, Twitter, Github } from "lucide-react";

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     company: [
//       { label: "About Us", href: "#" },
//       { label: "Careers", href: "#" },
//       { label: "Blog", href: "#" },
//       { label: "Contact", href: "#" },
//     ],
//     services: [
//       { label: "Generative AI", href: "#" },
//       { label: "Custom AI & ML", href: "#" },
//       { label: "Computer Vision", href: "#" },
//       { label: "Consulting", href: "#" },
//     ],
//     resources: [
//       { label: "Case Studies", href: "#" },
//       { label: "Documentation", href: "#" },
//       { label: "White Papers", href: "#" },
//       { label: "FAQ", href: "#" },
//     ],
//   };

//   const socialLinks = [
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Github, href: "#", label: "Github" },
//     { icon: Mail, href: "mailto:contact@aivornyx.com", label: "Email" },
//   ];

//   return (
//     <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white overflow-hidden">
//       {/* Accent Blur Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%)]"></div>

//       <div className="relative max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
//           {/* Brand Section */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center gap-3 mb-5">
//               <img
//                 src="https://res.cloudinary.com/drzydaw9o/image/upload/v1760727257/Aivornyx_logo_edited_yaikur.png"
//                 alt="Aivornyx Logo"
//                 className="h-10 w-auto object-contain drop-shadow-lg"
//               />
//               <h3 className="text-2xl font-extrabold tracking-wide">Aivornyx</h3>
//             </div>

//             <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
//               Accelerating your journey from idea to impact with cutting-edge AI solutions. 
//               Transform your business with Artificial Intelligence, Machine Learning, and Computer Vision.
//             </p>

//             <div className="flex gap-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   aria-label={social.label}
//                   className="w-10 h-10 bg-gray-800/60 border border-gray-700 rounded-lg flex items-center justify-center 
//                             hover:bg-indigo-600 hover:border-indigo-500 hover:scale-110 transition-all duration-300"
//                 >
//                   <social.icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Footer Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Company</h4>
//             <ul className="space-y-3">
//               {footerLinks.company.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">Services</h4>
//             <ul className="space-y-3">
//               {footerLinks.services.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">Resources</h4>
//             <ul className="space-y-3">
//               {footerLinks.resources.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-gray-400 text-sm">
//             © {currentYear} <span className="font-semibold text-white">Aivornyx</span>. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-sm">
//             <a
//               href="#"
//               className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
//             >
//               Terms of Service
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
//             >
//               Cookie Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
    services: [
      { label: "Generative AI", href: "#" },
      { label: "Custom AI & ML", href: "#" },
      { label: "Computer Vision", href: "#" },
      { label: "Consulting", href: "#" },
    ],
    resources: [
      { label: "Case Studies", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "White Papers", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Mail, href: "mailto:contact@aivornyx.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-[#0f172a] text-white overflow-hidden">
      {/* Gradient Accent Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00dbde]/20 to-[#fc00ff]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tl from-[#4facfe]/20 to-[#00f2fe]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] blur-lg opacity-30 rounded-full"></div>
                <img
                  src="https://res.cloudinary.com/drzydaw9o/image/upload/v1760727257/Aivornyx_logo_edited_yaikur.png"
                  alt="Aivornyx Logo"
                  className="relative h-10 w-auto object-contain drop-shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-extrabold tracking-wide">Aivornyx</h3>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Accelerating your journey from idea to impact with cutting-edge AI solutions. 
              Transform your business with Artificial Intelligence, Machine Learning, and Computer Vision.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center 
                              hover:bg-gradient-to-r hover:from-[#00dbde] hover:to-[#fc00ff] hover:border-transparent hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#00dbde] to-[#4facfe] bg-clip-text text-transparent">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00dbde] to-transparent"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-gray-400 text-sm">
            © {currentYear}{" "}
            <span className="font-bold bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent">
              Aivornyx
            </span>
            . All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-[#00dbde] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#00dbde] transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#00dbde] transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
