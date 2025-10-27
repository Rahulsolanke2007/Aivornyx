import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@aivornyx.com',
      link: 'mailto:contact@aivornyx.com',
    },
    {
  icon: 'Phone',
  title: 'Phone',
  value: '+91 77758 3028, +91 77758 3029, +91 77758 3030, +91 77758 3031',
  link: 'tel:+91 77758 3028, +91 77758 3029, +91 77758 3030, +91 77758 3031'
}
,
    {
      icon: MapPin,
      title: 'Location',
      value: 'Pune , Maharashtra',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#f8fafc]">
      {/* Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00dbde] to-[#fc00ff] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#4facfe] to-[#00f2fe] rounded-full blur-3xl" />
      </div>

      <section className="px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00dbde] to-[#fc00ff] bg-clip-text text-transparent mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-[#475569] max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Let's start a conversation about your goals and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-[#475569] mb-8 leading-relaxed">
                We're here to answer your questions and discuss how AI can accelerate your business growth. Reach out
                through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#00dbde] hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0f172a] mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[#475569] hover:text-[#00dbde] transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[#475569]">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] text-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3">
                  Business Hours
                </h3>
                <p className="text-white/90">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                </p>
                <p className="text-white/90">
                  Weekend: By appointment only
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-[#e2e8f0] p-8">
                <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="py-12 text-center animate-fadeIn">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00dbde] to-[#fc00ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <CheckCircle className="text-white" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#475569]">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#00dbde] focus:border-transparent transition-all duration-300 bg-[#f8fafc]"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#00dbde] focus:border-transparent transition-all duration-300 bg-[#f8fafc]"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#00dbde] focus:border-transparent transition-all duration-300 bg-[#f8fafc]"
                        placeholder="Company Inc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#00dbde] focus:border-transparent transition-all duration-300 bg-[#f8fafc]"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0f172a] mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#00dbde] focus:border-transparent transition-all duration-300 resize-none bg-[#f8fafc]"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg font-bold"
                    >
                      Send Message
                      <Send size={20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
