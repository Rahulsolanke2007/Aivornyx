
import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  FileText,
  Lightbulb,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  ScanEye,
  Image,
  Workflow,
  X,
  Star,
} from "lucide-react";

const ServicesPage = () => {
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [currentStory, setCurrentStory] = useState(0);

  const pillars = [
    {
      id: "generative",
      title: "Generative AI",
      gradient: "from-[#00dbde] to-[#fc00ff]",
      description:
        "Harness the creativity of large language models to automate conversations, summarization, and content creation.",
      services: [
        {
          icon: MessageSquare,
          title: "Intelligent Chatbots & Conversational AI",
          description:
            "AI chatbots for customer support and operations with natural language understanding and context awareness.",
        },
        {
          icon: FileText,
          title: "Automated Document Processing",
          description:
            "Summarize reports, extract key insights, and generate documents using advanced NLP.",
        },
        {
          icon: Lightbulb,
          title: "Content Generation & Summarization",
          description:
            "Deploy AI models for marketing copy, reports, and automated article summarization.",
        },
      ],
    },
    {
      id: "custom-ml",
      title: "Custom AI & Machine Learning",
      gradient: "from-[#4facfe] to-[#00f2fe]",
      description:
        "Leverage your enterprise data for predictive analytics, personalization, and real-time business insights.",
      services: [
        {
          icon: TrendingUp,
          title: "Predictive Analytics",
          description:
            "Forecast sales, predict demand, and assess risks using tailored ML models.",
        },
        {
          icon: Target,
          title: "Recommendation Systems",
          description:
            "Deliver personalized recommendations to boost engagement and conversions.",
        },
        {
          icon: BarChart3,
          title: "Business Intelligence Augmentation",
          description:
            "Enhance BI tools with AI for predictive dashboards and automated insight generation.",
        },
        {
          icon: Users,
          title: "Customer Segmentation",
          description:
            "Cluster customers by behavior and demographics for smarter targeting.",
        },
      ],
    },
    {
      id: "computer-vision",
      title: "Computer Vision & Document Intelligence",
      gradient: "from-[#00dbde] via-[#4facfe] to-[#00f2fe]",
      description:
        "Transform images and documents into actionable insights using computer vision and document AI.",
      services: [
        {
          icon: ScanEye,
          title: "Optical Character Recognition (OCR)",
          description:
            "Extract structured data from invoices, receipts, and forms using AI-based OCR.",
        },
        {
          icon: Image,
          title: "Advanced Image Processing",
          description:
            "Detect objects, classify visuals, and ensure quality control in manufacturing.",
        },
        {
          icon: Workflow,
          title: "Process Automation with Vision",
          description:
            "Automate workflows through visual inspection and anomaly detection.",
        },
      ],
    },
  ];

  const successStories = [
    {
      id: 1,
      title: "AI-Powered Support Automation",
      company: "TechNova Solutions",
      description:
        "Reduced response time by 70% with a multilingual chatbot built on Aivornyx's Generative AI framework.",
    },
    {
      id: 2,
      title: "Predictive Sales Insights",
      company: "FutureEdge Retail",
      description:
        "Achieved 40% better sales forecasting accuracy using our Custom ML analytics pipeline.",
    },
    {
      id: 3,
      title: "Smart Document Intelligence",
      company: "FinX Systems",
      description:
        "Automated document validation and extraction with 99% OCR accuracy using our Vision AI suite.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (pillar) => setSelectedPillar(pillar);
  const closeModal = () => setSelectedPillar(null);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-32 pb-20 px-6 relative overflow-hidden text-[#0f172a]">
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00dbde] to-[#fc00ff] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#4facfe] to-[#00f2fe] rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent">
          Our Capabilities
        </h1>
        <p className="text-lg md:text-xl text-[#334155] max-w-3xl mx-auto leading-relaxed">
          Discover how Aivornyx empowers enterprises through AI-driven automation, learning systems,
          and computer vision excellence.
        </p>
      </div>

      {/* Service Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            onClick={() => openModal(pillar)}
            className={`group cursor-pointer bg-gradient-to-br ${pillar.gradient} text-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
              {pillar.title}
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              {pillar.description}
            </p>
            <div className="mt-6 inline-flex items-center text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
              Learn More →
            </div>
          </div>
        ))}
      </div>

      {/* Success Stories Carousel */}
      <div className="relative max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0f172a]">
          Success Stories
        </h2>
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center transition-all duration-700 ease-in-out animate-fadeStory border border-gray-100">
          <div className="w-16 h-16 mx-auto mb-6 bg-cyan-500 rounded-full flex items-center justify-center">
            <Star className="text-white" size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
            {successStories[currentStory].title}
          </h3>
          <p className="text-[#475569] text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
            {successStories[currentStory].description}
          </p>
          <p className="text-sm text-[#64748b] font-semibold">
            — {successStories[currentStory].company}
          </p>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {successStories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStory(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentStory 
                    ? "w-8 bg-gradient-to-r from-[#00dbde] to-[#fc00ff]" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPillar && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4 md:px-6"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-8 md:p-12 overflow-y-auto max-h-[85vh] animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close Modal"
              className="absolute top-6 right-6 text-[#64748b] hover:text-[#0f172a] transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
            >
              <X size={24} />
            </button>

            <h2
              className={`text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r ${selectedPillar.gradient} text-transparent bg-clip-text`}
            >
              {selectedPillar.title}
            </h2>
            <p className="text-[#475569] text-base md:text-lg mb-12 leading-relaxed">
              {selectedPillar.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {selectedPillar.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl p-6 border border-[#e2e8f0] hover:shadow-xl hover:border-[#cbd5e1] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-[#00dbde] to-[#fc00ff] text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-[#0f172a] leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#64748b] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeStory {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeStory {
          animation: fadeStory 0.6s ease-in-out forwards;
        }

        @keyframes modalFadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-modal {
          animation: modalFadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;

