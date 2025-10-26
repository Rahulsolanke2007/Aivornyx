// import React, { useState, useEffect, FC, useRef } from "react";
// import {
//   MessageSquare,
//   Database,
//   Brain,
//   Eye,
//   Workflow,
//   ArrowRight,
//   CheckCircle2,
//   Sparkles,
//   LucideIcon,
// } from "lucide-react";

// interface Capability {
//   icon: LucideIcon;
//   title: string;
//   description: string;
// }

// interface UseCase {
//   title: string;
//   description: string;
// }

// const HomePage: FC = () => {
//   const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

//   // Store which elements are visible
//   const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     // Mouse animation effect
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);

//     // Create an intersection observer for scroll reveal
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const target = entry.target as HTMLElement;
//           const id = target.getAttribute("data-reveal") || "";
//           if (entry.isIntersecting) {
//             setVisibleSections((prev) => ({ ...prev, [id]: true }));
//           } else {
//             // If you want re-trigger on scroll back up — remove this `else` to make it reveal once
//             setVisibleSections((prev) => ({ ...prev, [id]: false }));
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const revealElements = document.querySelectorAll("[data-reveal]");
//     revealElements.forEach((el) => observerRef.current?.observe(el));

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       revealElements.forEach((el) => observerRef.current?.unobserve(el));
//     };
//   }, []);

//   const capabilities: Capability[] = [
//     { icon: MessageSquare, title: "AI-ML Solutions", description: "Custom models that automate complex processes and drive efficiency" },
//     { icon: Database, title: "Data & MLOps", description: "Large-scale data handling with robust, automated pipelines" },
//     { icon: Sparkles, title: "Generative AI", description: "Intelligent chatbots, automation, and instant data insights" },
//     { icon: Brain, title: "Business Intelligence", description: "Predictive analytics and customer segmentation for growth" },
//     { icon: Eye, title: "Computer Vision", description: "Advanced image processing and high-accuracy OCR extraction" },
//     { icon: Workflow, title: "Process Automation", description: "Intelligent automation reducing costs and accelerating ROI" },
//   ];

//   const useCases: UseCase[] = [
//     { title: "Healthcare", description: "Patient analysis & diagnostic assistance" },
//     { title: "Finance", description: "Fraud detection & risk assessment" },
//     { title: "E-Commerce", description: "Personalization & forecasting" },
//     { title: "Manufacturing", description: "Quality control & optimization" },
//   ];

//   const reasons: string[] = [
//     "Industry-specific solutions for your unique challenges",
//     "End-to-end support from strategy to deployment",
//     "Proven track record with measurable ROI",
//     "Cutting-edge tech with scalable architecture",
//   ];

//   return (
//     <div className="overflow-hidden bg-white text-gray-900">
//       <style>{`
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .reveal {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }
//         .reveal.visible {
//           opacity: 1;
//           transform: translateY(0);
//           animation: slideInUp 0.6s ease-out forwards;
//         }
//       `}</style>

//       {/* Floating background following cursor */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
//         <div
//           className="absolute w-96 h-96 bg-gray-200 rounded-full blur-3xl"
//           style={{
//             left: `${mousePosition.x - 192}px`,
//             top: `${mousePosition.y - 192}px`,
//             transition: "all 0.3s ease-out",
//           }}
//         />
//       </div>

//       {/* HERO */}
//      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 bg-white">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//     {/* Left Column */}
//     <div
//       data-reveal="hero-left"
//       className={`reveal ${visibleSections["hero-left"] ? "visible" : ""} flex flex-col justify-center`}
//     >
//       <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
//         Aivornyx - Accelerating your journey from idea to impact with AI
//       </h1>

//       <p className="text-xl text-gray-600 mb-8">
//         More than just AI, this is your competitive advantage. AI, ML, Generative AI, and Computer Vision deployed to streamline operations and deliver critical insights.
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4">
//         <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-bold flex items-center gap-2 hover:bg-gray-800 transition-all duration-300">
//           Discover Our Solutions <ArrowRight size={20} />
//         </button>
//         <button className="px-8 py-3 bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded-lg font-bold transition-all duration-300">
//           Book an AI Strategy Call
//         </button>
//       </div>
//     </div>

//     {/* Right Column */}
//     <div
//       data-reveal="hero-video"
//       className={`reveal ${visibleSections["hero-video"] ? "visible" : ""} flex justify-center lg:justify-end`}
//     >
//       <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg">
//         <iframe
//           width="100%"
//           height="100%"
//           src="https://www.youtube.com/embed/ILyXfchUreY"
//           title="Aivornyx Demo Video"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   </div>

//   {/* Small Rounded Rectangular Logo Button */}
//   <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 z-20">
//     <button className="flex items-center justify-center gap-2 px-5 md:px-6 py-2 md:py-3 bg-gradient-to-r from-red-500 to-orange-400 rounded-xl shadow-lg text-white font-semibold hover:scale-105 transition-transform duration-300 animate-float">
//       <img
//         src="https://res.cloudinary.com/drzydaw9o/image/upload/v1760727257/Aivornyx_logo_edited_yaikur.png"
//         alt="Aivornyx Logo"
//         className="w-6 md:w-8 object-contain"
//       />
//       <span className="text-sm md:text-base">Aivornyx</span>
//     </button>
//   </div>

//   {/* Floating Animation */}
//   <style jsx>{`
//     @keyframes float {
//       0% { transform: translateY(0); }
//       50% { transform: translateY(-6px); }
//       100% { transform: translateY(0); }
//     }
//     .animate-float {
//       animation: float 3s ease-in-out infinite;
//     }
//   `}</style>
// </section>

//       {/* CAPABILITIES */}
//     {/* OUR CORE CAPABILITIES — STATIC CARD GRID */}
// <section className="py-32 px-4 bg-white relative">
//   <div className="max-w-7xl mx-auto mb-16 text-center">
//     <h2 className="text-5xl font-black mb-4">Our Core Capabilities</h2>
//     <p className="text-gray-600 text-xl max-w-2xl mx-auto">
//       Transforming industries with precision-built AI solutions
//     </p>
//   </div>

//   <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//     {capabilities.map((cap, idx) => (
//       <div
//         key={idx}
//         className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group relative overflow-hidden"
//       >
//         {/* Accent Hover Glow */}
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//         {/* Icon */}
//         <div className="relative z-10 w-14 h-14 bg-gray-900 text-white flex items-center justify-center rounded-lg mb-5 group-hover:scale-110 transition-transform duration-300">
//           <cap.icon size={28} />
//         </div>

//         {/* Title */}
//         <h3 className="relative z-10 text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">
//           {cap.title}
//         </h3>

//         {/* Description */}
//         <p className="relative z-10 text-gray-600 leading-relaxed">
//           {cap.description}
//         </p>
//       </div>
//     ))}
//   </div>
// </section>


//       {/* USE CASES */}
//       <section className="py-32 px-4 bg-white" data-reveal="usecases">
//         <div className={`max-w-7xl mx-auto text-center mb-16 reveal ${visibleSections["usecases"] ? "visible" : ""}`}>
//           <h2 className="text-5xl font-black mb-4">Industry Applications</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {useCases.map((useCase, idx) => (
//             <div
//               key={idx}
//               data-reveal={`use-${idx}`}
//               className={`reveal ${visibleSections[`use-${idx}`] ? "visible" : ""} p-8 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-xl transition-all`}
//             >
//               <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
//               <p className="text-gray-600">{useCase.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-32 px-4 bg-gray-900 text-white text-center" data-reveal="cta">
//         <div className={`reveal ${visibleSections["cta"] ? "visible" : ""}`}>
//           <h2 className="text-5xl font-black mb-6">Ready to Transform?</h2>
//           <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
//             Let's discuss how AI can accelerate your growth and deliver the competitive edge you deserve
//           </p>
//           <button className="group px-10 py-5 bg-white text-gray-900 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3">
//             Start Your AI Journey
//             <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//           </button>
//         </div>
//       </section>

//       <footer className="py-12 px-4 border-t border-gray-200 bg-white text-center text-gray-600">
//         © 2025 Aivornyx. Accelerating ideas into impact.
//       </footer>
//     </div>
//   );
// };

// export default HomePage

//Updated one 

// import React, { useState, useEffect, FC, useRef } from "react";
// import {
//   MessageSquare,
//   Database,
//   Brain,
//   Eye,
//   Workflow,
//   ArrowRight,
//   Sparkles,
//   LucideIcon,
// } from "lucide-react";

// interface Capability {
//   icon: LucideIcon;
//   title: string;
//   description: string;
// }

// interface UseCase {
//   title: string;
//   description: string;
// }

// const HomePage: FC = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);

//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const id = (entry.target as HTMLElement).getAttribute("data-reveal") || "";
//           if (entry.isIntersecting) {
//             setVisibleSections((prev) => ({ ...prev, [id]: true }));
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const revealElements = document.querySelectorAll("[data-reveal]");
//     revealElements.forEach((el) => observerRef.current?.observe(el));

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       revealElements.forEach((el) => observerRef.current?.unobserve(el));
//     };
//   }, []);

//   const capabilities: Capability[] = [
//     { icon: MessageSquare, title: "AI-ML Solutions", description: "Custom models that automate complex processes and drive efficiency." },
//     { icon: Database, title: "Data & MLOps", description: "Scalable pipelines ensuring seamless data operations and management." },
//     { icon: Sparkles, title: "Generative AI", description: "Intelligent chatbots and creative automation with generative intelligence." },
//     { icon: Brain, title: "Business Intelligence", description: "Predictive analytics and insights to drive strategic decisions." },
//     { icon: Eye, title: "Computer Vision", description: "High-accuracy OCR and image recognition for real-world automation." },
//     { icon: Workflow, title: "Process Automation", description: "Smart workflows that enhance speed and reduce human dependency." },
//   ];

//   const useCases: UseCase[] = [
//     { title: "Healthcare", description: "AI for patient diagnostics and predictive care." },
//     { title: "Finance", description: "Fraud detection and financial risk assessment." },
//     { title: "E-Commerce", description: "Personalized shopping and trend forecasting." },
//     { title: "Manufacturing", description: "Automation and visual inspection systems." },
//   ];

//   return (
//     <div className="overflow-hidden bg-[#f8fafc] text-[#0f172a] font-inter">
//       {/* Floating cursor background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-white" />
//         <div
//           className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full blur-3xl"
//           style={{
//             left: `${mousePosition.x - 200}px`,
//             top: `${mousePosition.y - 200}px`,
//             transition: "all 0.3s ease-out",
//           }}
//         />
//       </div>

//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left */}
//           <div
//             data-reveal="hero-left"
//             className={`reveal ${visibleSections["hero-left"] ? "visible" : ""}`}
//           >
//             <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
//               Accelerating your journey from idea to impact with AI
//             </h1>
//             <p className="text-lg text-[#e0e7ff] mb-8">
//               Beyond AI — We empower innovation with ML, Generative AI, and Computer Vision
//               to help you build faster, smarter, and better.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="px-8 py-3 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-all">
//                 Discover Our Solutions <ArrowRight size={20} />
//               </button>
//               <button className="px-8 py-3 bg-white text-[#0f172a] rounded-lg font-bold flex items-center gap-2 hover:bg-[#f8fafc] transition-all">
//                 Book an AI Strategy Call
//               </button>
//             </div>
//           </div>

//           {/* Right */}
//           <div
//             data-reveal="hero-video"
//             className={`reveal ${visibleSections["hero-video"] ? "visible" : ""} flex justify-center`}
//           >
//             <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src="https://www.youtube.com/embed/ILyXfchUreY"
//                 title="Aivornyx Demo Video"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>

//         {/* Floating Brand Button */}
//         <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2">
//           <button className="flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-[#4facfe] to-[#667eea] rounded-xl shadow-lg text-white font-semibold hover:scale-105 transition-transform duration-300 animate-float">
//             <img
//               src="https://res.cloudinary.com/drzydaw9o/image/upload/v1760727257/Aivornyx_logo_edited_yaikur.png"
//               alt="Aivornyx Logo"
//               className="w-7 h-7 object-contain"
//             />
//             <span>Aivornyx</span>
//           </button>
//         </div>

//         <style jsx>{`
//           @keyframes float {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-6px); }
//           }
//           .animate-float { animation: float 3s ease-in-out infinite; }
//         `}</style>
//       </section>

//       {/* CORE CAPABILITIES */}
//       <section className="py-32 px-6 bg-white">
//         <div className="max-w-7xl mx-auto mb-16 text-center">
//           <h2 className="text-5xl font-extrabold text-[#0f172a] mb-4">Our Core Capabilities</h2>
//           <p className="text-lg text-[#334155] max-w-2xl mx-auto">
//             Transforming industries with precision-built AI solutions
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//           {capabilities.map((cap, idx) => (
//             <div
//               key={idx}
//               className="bg-gradient-to-br from-white to-[#f8fafc] border border-[#e2e8f0] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group"
//             >
//               <div className="w-14 h-14 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white flex items-center justify-center rounded-lg mb-5 group-hover:scale-110 transition-transform">
//                 <cap.icon size={26} />
//               </div>
//               <h3 className="text-2xl font-bold text-[#0f172a] mb-3">{cap.title}</h3>
//               <p className="text-[#475569] leading-relaxed">{cap.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* USE CASES */}
//       <section className="py-32 px-6 bg-[#f8fafc]" data-reveal="usecases">
//         <div
//           className={`max-w-7xl mx-auto text-center mb-16 reveal ${
//             visibleSections["usecases"] ? "visible" : ""
//           }`}
//         >
//           <h2 className="text-5xl font-extrabold text-[#0f172a] mb-4">Industry Applications</h2>
//           <p className="text-[#334155] text-lg">
//             Real-world impact across industries and use cases
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {useCases.map((useCase, idx) => (
//             <div
//               key={idx}
//               className="p-8 rounded-2xl border border-[#e2e8f0] bg-white hover:shadow-lg hover:border-[#667eea] transition-all"
//             >
//               <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{useCase.title}</h3>
//               <p className="text-[#475569]">{useCase.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-32 px-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-center">
//         <h2 className="text-5xl font-extrabold mb-6">Ready to Transform?</h2>
//         <p className="text-xl text-[#e0e7ff] mb-10 max-w-2xl mx-auto">
//           Let’s discuss how AI can accelerate your growth and redefine your business potential.
//         </p>  
//         <button className="group px-10 py-5 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg inline-flex items-center gap-3">
//           Start Your AI Journey
//           <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//         </button>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-10 px-6 bg-white border-t border-[#e2e8f0] text-center text-[#64748b] text-sm">
//         © 2025 Aivornyx — Accelerating Ideas into Impact.
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  Database,
  Brain,
  Eye,
  Workflow,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState({});
  const observerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-reveal") || "";
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      revealElements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, []);

  const capabilities = [
    { icon: MessageSquare, title: "AI-ML Solutions", description: "Custom models that automate complex processes and drive efficiency." },
    { icon: Database, title: "Data & MLOps", description: "Scalable pipelines ensuring seamless data operations and management." },
    { icon: Sparkles, title: "Generative AI", description: "Intelligent chatbots and creative automation with generative intelligence." },
    { icon: Brain, title: "Business Intelligence", description: "Predictive analytics and insights to drive strategic decisions." },
    { icon: Eye, title: "Computer Vision", description: "High-accuracy OCR and image recognition for real-world automation." },
    { icon: Workflow, title: "Process Automation", description: "Smart workflows that enhance speed and reduce human dependency." },
  ];

  const useCases = [
    { title: "Healthcare", description: "AI for patient diagnostics and predictive care." },
    { title: "Finance", description: "Fraud detection and financial risk assessment." },
    { title: "E-Commerce", description: "Personalized shopping and trend forecasting." },
    { title: "Manufacturing", description: "Automation and visual inspection systems." },
  ];

  return (
    <div className="overflow-hidden bg-[#f8fafc] text-[#0f172a] font-inter">
      {/* Floating cursor background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-white" />
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-[#00dbde] to-[#fc00ff] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div
            data-reveal="hero-left"
            className={`reveal ${visibleSections["hero-left"] ? "visible" : ""}`}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
              Accelerating your journey from idea to impact with AI
            </h1>
            <p className="text-lg text-[#e0e7ff] mb-8">
              Beyond AI — We empower innovation with ML, Generative AI, and Computer Vision
              to help you build faster, smarter, and better.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/services")}
                className="px-8 py-3 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-all"
              >
                Discover Our Solutions <ArrowRight size={20} />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3 bg-white text-[#0f172a] rounded-lg font-bold flex items-center gap-2 hover:bg-[#f8fafc] transition-all"
              >
                Book an AI Strategy Call
              </button>
            </div>
          </div>

          {/* Right — Image instead of video */}
          <div
            data-reveal="hero-image"
            className={`reveal ${visibleSections["hero-image"] ? "visible" : ""} flex justify-center`}
          >
            <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/drzydaw9o/image/upload/v1761490819/Aviornyx_updated_znjtts.png" // Replace with your own image
                alt="AI Innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-5xl font-extrabold text-[#0f172a] mb-4">Our Core Capabilities</h2>
          <p className="text-lg text-[#334155] max-w-2xl mx-auto">
            Transforming industries with precision-built AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-[#f8fafc] border border-[#e2e8f0] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] flex items-center justify-center rounded-lg mb-5 group-hover:scale-110 transition-transform">
                  {/* Icon color changed to white */}
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3">{cap.title}</h3>
                <p className="text-[#475569] leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-32 px-6 bg-[#f8fafc]" data-reveal="usecases">
        <div
          className={`max-w-7xl mx-auto text-center mb-16 reveal ${
            visibleSections["usecases"] ? "visible" : ""
          }`}
        >
          <h2 className="text-5xl font-extrabold text-[#0f172a] mb-4">Industry Applications</h2>
          <p className="text-[#334155] text-lg">
            Real-world impact across industries and use cases
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-[#e2e8f0] bg-white hover:shadow-lg hover:border-[#00dbde] transition-all"
            >
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{useCase.title}</h3>
              <p className="text-[#475569]">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] text-white text-center">
        <h2 className="text-5xl font-extrabold mb-6">Ready to Transform?</h2>
        <p className="text-xl text-[#e0e7ff] mb-10 max-w-2xl mx-auto">
          Let's discuss how AI can accelerate your growth and redefine your business potential.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="group px-10 py-5 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg inline-flex items-center gap-3"
        >
          Start Your AI Journey
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 bg-white border-t border-[#e2e8f0] text-center text-[#64748b] text-sm">
        © 2025 Aivornyx — Accelerating Ideas into Impact.
      </footer>
    </div>
  );
};

export default HomePage;
