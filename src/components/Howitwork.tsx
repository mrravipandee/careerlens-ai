'use client';

import { Upload, Brain, FileText, Sparkles, ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Upload Your Resume",
      description: "Simply drag and drop your resume or upload it directly. We support PDF, DOC, and DOCX formats.",
      icon: Upload,
      features: ["Secure upload", "Multiple formats", "Instant processing"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      step: 2,
      title: "AI Analysis & Processing",
      description: "Our advanced AI scans your resume for key skills, experience, and optimization opportunities.",
      icon: Brain,
      features: ["ATS optimization", "Skill extraction", "Gap analysis"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      step: 3,
      title: "Get Detailed Report & Career Advice",
      description: "Receive comprehensive insights and personalized career recommendations based on your profile.",
      icon: FileText,
      features: ["Match scores", "Career paths", "Learning resources"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Simple & Effective
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Get from resume upload to career insights in just three simple steps. 
            Our AI-powered platform does the heavy lifting for you.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.step}
                className="relative group"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-200 -z-10">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                {/* Step Card */}
                <div className={`relative bg-white rounded-2xl p-8 border-2 ${step.borderColor} shadow-sm hover:shadow-xl transition-all duration-500 group-hover:scale-105 h-full flex flex-col`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-secondary mb-6 leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-secondary">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Icon className="w-full h-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-primary mb-2">Lightning Fast</h4>
            <p className="text-secondary text-sm">Get results in under 60 seconds</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-primary mb-2">100% Secure</h4>
            <p className="text-secondary text-sm">Your data is encrypted and private</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-primary mb-2">AI-Powered</h4>
            <p className="text-secondary text-sm">Advanced algorithms for accurate insights</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream jobs with our AI-powered career guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Upload Your Resume
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-200">
              Watch Demo
              <FileText className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;