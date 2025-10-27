import React, { useState } from "react";
import { Target, Users, Award, Zap, X, Linkedin, Mail } from "lucide-react";

const FounderCard = ({ founder, onClick }) => {
  return (
    <div
      onClick={() => onClick(founder)}
      className="group cursor-pointer bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#e2e8f0] hover:border-[#00dbde] transform hover:-translate-y-2"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
          <p className="text-sm text-white/90 font-medium">{founder.role}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-[#475569] leading-relaxed line-clamp-3">
          {founder.tagline}
        </p>
        <div className="mt-4 flex items-center text-sm font-semibold text-transparent bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text group-hover:translate-x-1 transition-transform duration-300">
          Read More →
        </div>
      </div>
    </div>
  );
};

const FounderModal = ({ founder, onClose }) => {
  if (!founder) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Header with Image */}
          <div className="relative h-64 bg-gradient-to-br from-[#00dbde] to-[#fc00ff] overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group z-10"
            >
              <X className="text-white group-hover:rotate-90 transition-transform duration-300" size={20} />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-white pb-2 flex-1">
                <h2 className="text-3xl font-bold mb-1">{founder.name}</h2>
                <p className="text-lg text-white/90 mb-3">{founder.role}</p>
                <div className="flex gap-3">
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {founder.email && (
                    <a
                      href={`mailto:${founder.email}`}
                      className="w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-[#00dbde] to-[#fc00ff] rounded-full"></span>
                Vision & Message
              </h3>
              <p className="text-lg text-[#334155] leading-relaxed whitespace-pre-line">
                {founder.message}
              </p>
            </div>

            {founder.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {founder.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-[#f8fafc] to-white rounded-xl border border-[#e2e8f0]"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#64748b]">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {founder.expertise && (
              <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-2xl p-6 border border-[#e2e8f0]">
                <h4 className="text-lg font-bold text-[#0f172a] mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {founder.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-lg text-sm text-[#475569] border border-[#e2e8f0] hover:border-[#00dbde] transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

const FoundersSection = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const founders = [
    {
      name: "Sushant Kabra",
      role: "Co-Founder",
      image: "https://res.cloudinary.com/drzydaw9o/image/upload/v1761494743/sushant_bbj7hu.jpg",
      tagline: "Pioneering AI innovation to transform businesses and create lasting impact through intelligent solutions.",
      message: `I founded Aivornyx with a conviction that artificial intelligence should be more than just a technological capability—it should be a catalyst for meaningful transformation.

Throughout my journey, I've witnessed firsthand how the right AI solutions can revolutionize operations, unlock hidden potential, and create competitive advantages that seemed impossible just years ago.

Our mission is simple yet ambitious: to democratize access to world-class AI technology and ensure every business, regardless of size, can harness its transformative power. We've helped over 50+ companies achieve remarkable results, but what drives me most is seeing the tangible impact on their teams, their customers, and their bottom line.

At Aivornyx, we don't just build AI—we build partnerships, trust, and sustainable success. Every solution we create is designed with your unique challenges in mind, backed by deep technical expertise and an unwavering commitment to excellence.

The future belongs to those who embrace intelligent innovation. Let's build that future together.`,
      stats: [
        { value: "50+", label: "Companies" },
        { value: "40%", label: "Efficiency Gain" },
        { value: "10+", label: "Years Experience" },
        { value: "95%", label: "Client Retention" },
      ],
      expertise: ["AI Strategy", "Business Transformation", "Enterprise Solutions", "Leadership"],
      linkedin: "https://www.linkedin.com/in/sushant-kabra-657483259",
      email: "siddheshpohare@gmail.com ",
    },
    {
      name: "Khelesh Patil",
      role: "Co-Founder",
      image: "https://res.cloudinary.com/drzydaw9o/image/upload/v1761494737/khelesh_w2cmwp.jpg",
      tagline: "Leading technical innovation with a passion for cutting-edge machine learning and scalable architecture.",
      message: `Technology is only as powerful as its application. At Aivornyx, I lead our technical vision with one clear goal: building AI solutions that are not just intelligent, but practical, scalable, and transformative.

With over a decade of experience in machine learning and enterprise architecture, I've seen technology trends come and go. What remains constant is the need for robust, reliable systems that deliver real business value.

Our technical team is obsessed with excellence. We leverage the latest advancements in deep learning, natural language processing, and computer vision—but we never lose sight of what matters most: solving real problems for real people.

Every line of code we write, every model we train, and every system we deploy is engineered with precision, tested rigorously, and optimized for performance. We're not just building for today; we're architecting the foundation for your future growth.

Innovation without execution is just imagination. Let's turn your vision into reality.`,
      stats: [
        { value: "200+", label: "Models Deployed" },
        { value: "99.9%", label: "Uptime" },
        { value: "15+", label: "Patents Filed" },
        { value: "30+", label: "Team Members" },
      ],
      expertise: ["Machine Learning", "Cloud Architecture", "MLOps", "System Design"],
      linkedin: "https://linkedin.com/in/khelesh-patil",
      email: "kheleshpatil@gmail.com",
    },
    {
      name: "Siddhesh Pohare",
      role: "Co-Founder",
      image: "https://res.cloudinary.com/drzydaw9o/image/upload/v1761494737/siddhesh_rg789p.jpg",
      tagline: "Transforming raw data into actionable insights through advanced analytics and predictive modeling.",
      message: `Data tells stories—powerful stories that can reshape industries, redefine strategies, and reveal opportunities hidden in plain sight.

As Chief Data Scientist at Aivornyx, I lead a team of exceptional data professionals who are passionate about extracting meaning from complexity. We don't just analyze data; we unlock its potential to drive decision-making, predict outcomes, and create competitive advantages.

My approach combines rigorous statistical methodology with creative problem-solving. Whether it's building predictive models that forecast market trends, developing recommendation systems that enhance customer experience, or creating anomaly detection algorithms that protect assets, we bring scientific precision to every challenge.

The beauty of data science lies in its versatility. From healthcare to finance, from retail to manufacturing, the principles remain the same: ask the right questions, apply the right methods, and let the data guide you to insights that matter.

With over 10 million documents processed and countless patterns discovered, we've proven that data, when handled with expertise and care, becomes the most valuable asset any organization can possess.`,
      stats: [
        { value: "10M+", label: "Documents Processed" },
        { value: "85%", label: "Accuracy Rate" },
        { value: "12+", label: "Industries Served" },
        { value: "500+", label: "Models Trained" },
      ],
      expertise: ["Data Science", "Predictive Analytics", "Deep Learning", "Statistical Modeling"],
      linkedin: "https://www.linkedin.com/in/sushant-kabra-657483259",
      email: "sushantkabra2733@gmail.com",
    },
    {
      name: "Tejas Ubale",
      role: "Co-Founder",
      image: "https://res.cloudinary.com/drzydaw9o/image/upload/v1761494737/Tejas_jvoprr.jpg",
      tagline: "Ensuring every client achieves measurable success through dedicated partnership and strategic guidance.",
      message: `Success isn't just about implementing technology—it's about transformation, partnership, and achieving outcomes that exceed expectations.

As VP of Client Success, I have the privilege of working closely with our clients throughout their AI journey. From the initial consultation to post-deployment optimization, my team and I are committed to ensuring every engagement delivers measurable, meaningful results.

What sets Aivornyx apart isn't just our technical prowess—it's our dedication to understanding your unique challenges, your goals, and your vision. We don't believe in one-size-fits-all solutions. Every engagement is tailored, every strategy is customized, and every outcome is measured against your specific success criteria.

Our 95% client satisfaction rate and long-term partnerships aren't accidents—they're the result of relentless focus on your success. When you win, we win. When you grow, we grow. That's the foundation of true partnership.

I'm proud to lead a team that doesn't just support our clients—we champion them. We celebrate your victories, learn from challenges together, and continuously strive to deliver value that transforms your business.

Your success is our mission. Let's achieve it together.`,
      stats: [
        { value: "95%", label: "Satisfaction Rate" },
        { value: "$5M+", label: "Cost Savings" },
        { value: "3.5x", label: "Avg. ROI" },
        { value: "24/7", label: "Support" },
      ],
      expertise: ["Client Relations", "Strategic Consulting", "Change Management", "ROI Optimization"],
      linkedin: "https://www.linkedin.com/in/tejas-ubale-b41503253",
      email: "tejasubale41@gmail.com ",
    },
  ];

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto">
              Visionaries driving innovation and excellence in AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                founder={founder}
                onClick={setSelectedFounder}
              />
            ))}
          </div>
        </div>
      </section>

      <FounderModal
        founder={selectedFounder}
        onClose={() => setSelectedFounder(null)}
      />
    </>
  );
};

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We are committed to accelerating your journey from idea to impact through transformative AI solutions.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our success. We partner closely with you to understand and solve your unique challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver industry-leading solutions built on cutting-edge technology and proven methodologies.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We stay at the forefront of AI advancement to bring you the most effective and efficient solutions.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* About Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] to-white py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent mb-6">
              About Aivornyx
            </h1>
            <p className="text-xl md:text-2xl text-[#475569] max-w-4xl mx-auto leading-relaxed">
              More than just AI, this is your competitive advantage
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-12 md:p-16 border border-[#e2e8f0] space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed text-[#334155] font-light">
                Aivornyx stands at the forefront of artificial intelligence innovation, architecting transformative 
                solutions that redefine operational excellence. Our expertise spans{" "}
                <span className="font-semibold bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent">Generative AI</span>,{" "}
                <span className="font-semibold bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">Custom Machine Learning</span>, and{" "}
                <span className="font-semibold bg-gradient-to-r from-[#00dbde] to-[#4facfe] bg-clip-text text-transparent">Computer Vision</span> technologies—each meticulously engineered to deliver quantifiable business impact.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-[#475569] font-light">
                Our multidisciplinary team synthesizes deep technical mastery with strategic business intelligence, crafting solutions that transcend conventional technology implementations. We don't merely deploy AI—we engineer sustainable competitive advantages that propel organizations into new paradigms of possibility.
              </p>
              <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-2xl p-8 border border-[#e2e8f0]">
                <p className="text-xl md:text-2xl leading-relaxed text-[#334155] font-light italic">
                  "From intelligent automation to predictive analytics, from sophisticated document intelligence to advanced visual recognition systems—we deliver the AI capabilities that define market leadership in an era of exponential technological evolution."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#e2e8f0] hover:border-[#00dbde] transform hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3">{value.title}</h3>
                  <p className="text-lg text-[#475569] leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-[#00dbde] to-[#fc00ff] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            We follow a proven methodology to ensure successful AI implementation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Discover", "Design", "Develop", "Deploy"].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white text-[#0f172a] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{phase}</h3>
                <p className="text-white/80 text-sm">
                  {index === 0 && "Understand your challenges and opportunities"}
                  {index === 1 && "Create tailored AI solutions"}
                  {index === 2 && "Build and train robust models"}
                  {index === 3 && "Implement and optimize for production"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <FoundersSection />
    </div>
  );
};

export default AboutPage;