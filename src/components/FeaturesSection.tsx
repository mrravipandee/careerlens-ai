'use client';

import { Target, FileCheck, Briefcase, TrendingUp, GraduationCap, Star, CheckCircle, ArrowRight, Zap, Shield, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "ATS Score",
      description: "Get instant ATS compatibility score to ensure your resume passes through automated screening systems",
      benefits: ["Keyword optimization", "Formatting analysis", "Compatibility score", "Improvement tips"],
      stats: "95% pass rate",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      delay: "0"
    },
    {
      icon: FileCheck,
      title: "Resume Feedback",
      description: "Comprehensive analysis of your resume with actionable feedback on content, structure, and impact",
      benefits: ["Content quality", "Structure review", "Impact analysis", "Grammar check"],
      stats: "40+ points checked",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      delay: "100"
    },
    {
      icon: Briefcase,
      title: "Job Matching",
      description: "Smart job matching based on your skills, experience, and career preferences",
      benefits: ["Skill-based matching", "Company culture fit", "Salary insights", "Location preferences"],
      stats: "10K+ job matches",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      delay: "200"
    },
    {
      icon: TrendingUp,
      title: "Career Path Suggestions",
      description: "Personalized career roadmaps and growth opportunities based on your profile and market trends",
      benefits: ["Growth trajectories", "Industry trends", "Skill development", "Promotion paths"],
      stats: "50+ career paths",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      delay: "300"
    },
    {
      icon: GraduationCap,
      title: "Courses & Certifications",
      description: "Curated learning resources and certifications to bridge skill gaps and advance your career",
      benefits: ["Skill gap analysis", "Recommended courses", "Certification paths", "Learning timeline"],
      stats: "500+ courses",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      delay: "400"
    },
    {
      icon: Users,
      title: "Career Community",
      description: "Connect with mentors and peers in your industry for guidance and networking opportunities",
      benefits: ["Expert mentorship", "Peer networking", "Industry insights", "Career support"],
      stats: "25K+ members",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      delay: "500"
    }
  ];

  const highlights = [
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "Get comprehensive feedback in under 60 seconds"
    },
    {
      icon: Shield,
      title: "Data Privacy",
      description: "Your resume and data are completely secure and private"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "98% of users improve their resume score by 40% or more"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Star className="w-4 h-4" />
            Powerful Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Everything You Need to 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Advance Your Career
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform provides comprehensive career guidance, from resume optimization 
            to personalized career development plans.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={feature.delay}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-secondary mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-secondary">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-primary">
                      {feature.stats}
                    </span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.color} -z-10`}>
                  <div className="w-full h-full bg-white rounded-2xl m-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={highlight.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">
                  {highlight.title}
                </h4>
                <p className="text-secondary">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Ready to Unlock Your Career Potential?
            </h3>
            <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Join professionals who have transformed their careers with our AI-powered platform. 
              Get started in seconds - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Free Analysis
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-background transition-all duration-200">
                View Sample Report
                <FileCheck className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-secondary mt-6">
              ✅ No credit card required • ⚡ Instant results • 🔒 100% private
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;