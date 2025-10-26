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
