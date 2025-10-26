
// import React, { useState, useEffect } from 'react';
// import {
//   MessageSquare,
//   FileText,
//   Lightbulb,
//   TrendingUp,
//   Target,
//   BarChart3,
//   Users,
//   Cog,
//   ScanEye,
//   Image,
//   Workflow,
//   ChevronDown,
//   ChevronUp,
// } from 'lucide-react';

// const ServicesPage: React.FC = () => {
//   const [expandedPillar, setExpandedPillar] = useState<string | null>('generative');
//   const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

//   const togglePillar = (pillar: string) => {
//     setExpandedPillar(expandedPillar === pillar ? null : pillar);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll('[data-reveal]');
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         const id = el.getAttribute('data-reveal') || '';
//         if (rect.top < window.innerHeight * 0.85) {
//           setVisibleSections((prev) => ({ ...prev, [id]: true }));
//         }
//       });
//     };
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // trigger on mount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//    const pillars = [
//     {
//       id: 'generative',
//       title: 'Generative AI',
//       subtitle: 'Harness the power of Large Language Models',
//       description:
//         'We help you build generative solutions that understand context and communicate effectively to create, summarize, and automate your business processes.',
//       gradient: 'from-blue-600 to-cyan-600',
//       services: [
//         {
//           icon: MessageSquare,
//           title: 'Intelligent Chatbots & Conversational AI',
//           description:
//             'Custom-built chatbots for customer support, internal helpdesks, and lead generation, providing instant, accurate responses 24/7.',
//           features: [
//             'Natural language understanding',
//             'Multi-channel deployment',
//             'Context-aware conversations',
//             'Seamless human handoff',
//           ],
//         },
//         {
//           icon: FileText,
//           title: 'Automated Document Processing',
//           description:
//             'AI-driven solutions for summarizing long reports, extracting key information from contracts, generating documentation, and automating data entry.',
//           features: [
//             'Intelligent document summarization',
//             'Key information extraction',
//             'Automated report generation',
//             'Contract analysis and review',
//           ],
//         },
//         {
//           icon: Lightbulb,
//           title: 'Content Generation & Summarization',
//           description:
//             'Deploy models to generate marketing copy, reports, and communications, or to provide concise summaries of extensive documents and articles.',
//           features: [
//             'Marketing content creation',
//             'Report automation',
//             'Article summarization',
//             'Multi-format content generation',
//           ],
//         },
//       ],
//     },
//     {
//       id: 'custom-ml',
//       title: 'Custom AI & Machine Learning',
//       subtitle: 'Turn data into your most powerful asset',
//       description:
//         'We build and train custom models to uncover insights, predict outcomes, and drive intelligent decision-making across your organization.',
//       gradient: 'from-violet-600 to-purple-600',
//       services: [
//         {
//           icon: TrendingUp,
//           title: 'Predictive Analytics',
//           description:
//             'Develop models for sales forecasting, demand prediction, risk assessment, and identifying future trends in your market.',
//           features: [
//             'Sales forecasting',
//             'Demand prediction',
//             'Risk assessment models',
//             'Trend analysis',
//           ],
//         },
//         {
//           icon: Target,
//           title: 'Recommendation Systems',
//           description:
//             'Increase engagement and sales by implementing sophisticated recommendation engines for e-commerce, content platforms, and service industries.',
//           features: [
//             'Personalized product recommendations',
//             'Content discovery optimization',
//             'Collaborative filtering',
//             'Real-time recommendations',
//           ],
//         },
//         {
//           icon: BarChart3,
//           title: 'Business Intelligence Augmentation',
//           description:
//             'Supercharge your BI tools with AI to uncover deeper insights, automate report generation, and identify patterns that traditional analytics miss.',
//           features: [
//             'Automated insight generation',
//             'Anomaly detection',
//             'Predictive dashboards',
//             'Natural language queries',
//           ],
//         },
//         {
//           icon: Users,
//           title: 'Customer Segmentation',
//           description:
//             'Utilize ML algorithms to group customers based on behavior, demographics, and purchasing patterns for hyper-personalized marketing and service.',
//           features: [
//             'Behavioral segmentation',
//             'Demographic analysis',
//             'Purchase pattern recognition',
//             'Lifetime value prediction',
//           ],
//         },
//         {
//           icon: Cog,
//           title: 'End-to-End Model Lifecycle',
//           description:
//             'We manage the entire process: from custom model generation and training on large datasets to deployment and ongoing MLOps.',
//           features: [
//             'Model development',
//             'Training pipeline automation',
//             'Deployment and monitoring',
//             'Continuous optimization',
//           ],
//         },
//       ],
//     },
//     {
//       id: 'computer-vision',
//       title: 'Computer Vision & Document Intelligence',
//       subtitle: 'Enable systems to see and understand',
//       description:
//         'We specialize in extracting and interpreting information from images and documents, turning visual data into actionable insights.',
//       gradient: 'from-emerald-600 to-teal-600',
//       services: [
//         {
//           icon: ScanEye,
//           title: 'Optical Character Recognition (OCR)',
//           description:
//             'High-accuracy data extraction from invoices, receipts, forms, and scanned documents, turning unstructured images into structured, usable data.',
//           features: [
//             'Multi-language support',
//             'Handwriting recognition',
//             'Table extraction',
//             'Document classification',
//           ],
//         },
//         {
//           icon: Image,
//           title: 'Advanced Image Processing',
//           description:
//             'Solutions for image classification, object detection, quality control in manufacturing, and analysis of visual data for various industries.',
//           features: [
//             'Object detection and tracking',
//             'Image classification',
//             'Defect detection',
//             'Visual quality inspection',
//           ],
//         },
//         {
//           icon: Workflow,
//           title: 'Process Automation with Vision',
//           description:
//             'Combine Computer Vision and ML to automate visual tasks, from monitoring production lines to processing and routing physical documents digitally.',
//           features: [
//             'Production line monitoring',
//             'Document routing automation',
//             'Visual inspection systems',
//             'Real-time anomaly detection',
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-24 pb-20 bg-white">
//       {/* Header */}
//       <section
//         className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white py-20 text-center"
//         data-reveal="header"
//       >
//         <div className={`${visibleSections['header'] ? 'animate-fadeUp' : 'opacity-0'}`}>
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             Our Services
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             At Aivornyx, we provide end-to-end AI solutions tailored to your unique business
//             challenges. Our expertise spans three core pillars: Generative AI, Custom AI/ML, and Computer Vision.
//           </p>
//         </div>
//       </section>

//       {/* Services Pillars */}
//       <section className="px-4 sm:px-6 lg:px-8 py-16 space-y-8">
//         <div className="max-w-7xl mx-auto space-y-8">
//           {pillars.map((pillar) => (
//             <div
//               key={pillar.id}
//               data-reveal={`pillar-${pillar.id}`}
//               className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl ${
//                 visibleSections[`pillar-${pillar.id}`] ? 'animate-fadeUp' : 'opacity-0 translate-y-10'
//               }`}
//             >
//               {/* Pillar Header */}
//               <button
//                 onClick={() => togglePillar(pillar.id)}
//                 className={`w-full p-8 text-left transition-all duration-300 ${
//                   expandedPillar === pillar.id ? `bg-gradient-to-r ${pillar.gradient}` : 'bg-white hover:bg-gray-50'
//                 }`}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex-1">
//                     <h2
//                       className={`text-3xl md:text-4xl font-bold mb-2 ${
//                         expandedPillar === pillar.id ? 'text-white' : 'text-gray-900'
//                       }`}
//                     >
//                       {pillar.title}
//                     </h2>
//                     <p
//                       className={`text-lg md:text-xl ${
//                         expandedPillar === pillar.id ? 'text-white/90' : 'text-gray-600'
//                       }`}
//                     >
//                       {pillar.subtitle}
//                     </p>
//                   </div>
//                   <div className={`ml-4 ${expandedPillar === pillar.id ? 'text-white' : 'text-gray-900'}`}>
//                     {expandedPillar === pillar.id ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
//                   </div>
//                 </div>
//               </button>

//               {/* Pillar Details */}
//               {expandedPillar === pillar.id && (
//                 <div className="p-8 bg-gray-50">
//                   <p className="text-lg text-gray-700 mb-8 leading-relaxed">{pillar.description}</p>

//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                     {pillar.services.map((service, index) => (
//                       <div
//                         key={index}
//                         className={`bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 group ${
//                           visibleSections[`pillar-${pillar.id}`] ? `animate-fadeUp delay-${index * 100}` : 'opacity-0 translate-y-6'
//                         }`}
//                       >
//                         <div className="flex items-start gap-4 mb-4">
//                           <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                             <service.icon className="text-white" size={24} />
//                           </div>
//                           <div className="flex-1">
//                             <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
//                           </div>
//                         </div>
//                         <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
//                         <div className="space-y-2">
//                           {service.features.map((feature, featureIndex) => (
//                             <div key={featureIndex} className="flex items-center gap-2">
//                               <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
//                               <span className="text-sm text-gray-700">{feature}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section
//         className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-900 to-gray-800"
//         data-reveal="cta"
//       >
//         <div
//           className={`max-w-4xl mx-auto text-center text-white ${
//             visibleSections['cta'] ? 'animate-fadeUp' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Let's discuss which AI solution is right for your business
//           </p>
//           <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg font-medium shadow-lg">
//             Schedule a Consultation
//           </button>
//         </div>
//       </section>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes fadeUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeUp {
//           animation: fadeUp 0.8s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesPage;
// import React, { useState, useEffect } from "react";
// import {
//   MessageSquare,
//   FileText,
//   Lightbulb,
//   TrendingUp,
//   Target,
//   BarChart3,
//   Users,
//   ScanEye,
//   Image,
//   Workflow,
//   X,
//   Star,
// } from "lucide-react";

// const ServicesPage: React.FC = () => {
//   const [selectedPillar, setSelectedPillar] = useState<any | null>(null);
//   const [currentStory, setCurrentStory] = useState(0);

//   const pillars = [
//     {
//       id: "generative",
//       title: "Generative AI",
//       gradient: "from-indigo-600 via-blue-500 to-cyan-400",
//       description:
//         "Harness the creativity of large language models to automate conversations, summarization, and content creation.",
//       services: [
//         {
//           icon: MessageSquare,
//           title: "Intelligent Chatbots & Conversational AI",
//           description:
//             "AI chatbots for customer support and operations with natural language understanding and context awareness.",
//         },
//         {
//           icon: FileText,
//           title: "Automated Document Processing",
//           description:
//             "Summarize reports, extract key insights, and generate documents using advanced NLP.",
//         },
//         {
//           icon: Lightbulb,
//           title: "Content Generation & Summarization",
//           description:
//             "Deploy AI models for marketing copy, reports, and automated article summarization.",
//         },
//       ],
//     },
//     {
//       id: "custom-ml",
//       title: "Custom AI & Machine Learning",
//       gradient: "from-purple-600 via-fuchsia-500 to-pink-400",
//       description:
//         "Leverage your enterprise data for predictive analytics, personalization, and real-time business insights.",
//       services: [
//         {
//           icon: TrendingUp,
//           title: "Predictive Analytics",
//           description:
//             "Forecast sales, predict demand, and assess risks using tailored ML models.",
//         },
//         {
//           icon: Target,
//           title: "Recommendation Systems",
//           description:
//             "Deliver personalized recommendations to boost engagement and conversions.",
//         },
//         {
//           icon: BarChart3,
//           title: "Business Intelligence Augmentation",
//           description:
//             "Enhance BI tools with AI for predictive dashboards and automated insight generation.",
//         },
//         {
//           icon: Users,
//           title: "Customer Segmentation",
//           description:
//             "Cluster customers by behavior and demographics for smarter targeting.",
//         },
//       ],
//     },
//     {
//       id: "computer-vision",
//       title: "Computer Vision & Document Intelligence",
//       gradient: "from-emerald-600 via-teal-500 to-cyan-400",
//       description:
//         "Transform images and documents into actionable insights using computer vision and document AI.",
//       services: [
//         {
//           icon: ScanEye,
//           title: "Optical Character Recognition (OCR)",
//           description:
//             "Extract structured data from invoices, receipts, and forms using AI-based OCR.",
//         },
//         {
//           icon: Image,
//           title: "Advanced Image Processing",
//           description:
//             "Detect objects, classify visuals, and ensure quality control in manufacturing.",
//         },
//         {
//           icon: Workflow,
//           title: "Process Automation with Vision",
//           description:
//             "Automate workflows through visual inspection and anomaly detection.",
//         },
//       ],
//     },
//   ];

//   const successStories = [
//     {
//       id: 1,
//       title: "AI-Powered Support Automation",
//       company: "TechNova Solutions",
//       description:
//         "Reduced response time by 70% with a multilingual chatbot built on Aivornyx’s Generative AI framework.",
//     },
//     {
//       id: 2,
//       title: "Predictive Sales Insights",
//       company: "FutureEdge Retail",
//       description:
//         "Achieved 40% better sales forecasting accuracy using our Custom ML analytics pipeline.",
//     },
//     {
//       id: 3,
//       title: "Smart Document Intelligence",
//       company: "FinX Systems",
//       description:
//         "Automated document validation and extraction with 99% OCR accuracy using our Vision AI suite.",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentStory((prev) => (prev + 1) % successStories.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [successStories.length]);

//   const openModal = (pillar: any) => setSelectedPillar(pillar);
//   const closeModal = () => setSelectedPillar(null);

//   return (
//     <div className="min-h-screen bg-white pt-32 pb-20 px-6 relative overflow-hidden">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
//           Our Capabilities
//         </h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//           Discover how Aivornyx empowers enterprises through AI-driven automation, learning systems,
//           and computer vision excellence.
//         </p>
//       </div>

//       {/* Service Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//         {pillars.map((pillar) => (
//           <div
//             key={pillar.id}
//             onClick={() => openModal(pillar)}
//             className={`cursor-pointer bg-gradient-to-br ${pillar.gradient} text-white rounded-3xl shadow-xl p-10 transform transition-all hover:scale-105 hover:shadow-2xl`}
//           >
//             <h2 className="text-3xl font-bold mb-4">{pillar.title}</h2>
//             <p className="text-white/90 text-base leading-relaxed">{pillar.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Success Stories Carousel */}
//       <div className="max-w-4xl mx-auto mt-24 relative">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
//           Success Stories
//         </h2>
//         <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md p-10 text-center transition-all duration-700 ease-in-out">
//           <Star className="mx-auto mb-4 text-yellow-400" size={36} />
//           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//             {successStories[currentStory].title}
//           </h3>
//           <p className="text-gray-600 mb-4">
//             {successStories[currentStory].description}
//           </p>
//           <p className="text-sm text-gray-500 italic">
//             — {successStories[currentStory].company}
//           </p>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedPillar && (
//         <div
//           className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6"
//           onClick={closeModal}
//         >
//           <div
//             className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full p-10 overflow-y-auto max-h-[80vh] animate-fadeUp"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
//             >
//               <X size={28} />
//             </button>

//             <h2
//               className={`text-4xl font-bold mb-4 bg-gradient-to-r ${selectedPillar.gradient} text-transparent bg-clip-text`}
//             >
//               {selectedPillar.title}
//             </h2>
//             <p className="text-gray-600 mb-10">{selectedPillar.description}</p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {selectedPillar.services.map((service: any, index: number) => (
//                 <div
//                   key={index}
//                   className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-gray-400 transition-all duration-300"
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white w-10 h-10 rounded-lg flex items-center justify-center">
//                       <service.icon size={20} />
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900">
//                       {service.title}
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes fadeUp {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeUp {
//           animation: fadeUp 0.6s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesPage;
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

