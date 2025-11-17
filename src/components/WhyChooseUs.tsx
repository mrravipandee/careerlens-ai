'use client';

import { Crown, Target, Zap, Award, CheckCircle, Sparkles, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Crown,
      title: "Completely Free",
      description: "No hidden fees, no premium walls. Get full access to all our AI-powered features without spending a dime.",
      highlights: ["No credit card required", "Unlimited resume analysis", "Full feature access", "Zero commitments"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      delay: "0"
    },
    {
      icon: Target,
      title: "Highly Accurate",
      description: "Our AI is trained on millions of successful resumes and job descriptions to provide precise, actionable insights.",
      highlights: ["95% accuracy rate", "Real-time analysis", "Industry-specific insights", "Continuous improvements"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      delay: "100"
    },
    {
      icon: Zap,
      title: "Incredibly Powerful",
      description: "Advanced AI algorithms that go beyond basic checks to provide deep career guidance and personalized recommendations.",
      highlights: ["Advanced NLP technology", "Multi-factor analysis", "Personalized career paths", "Smart job matching"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      delay: "200"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Resumes Analyzed" },
    { number: "98%", label: "User Satisfaction" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "2M+", label: "Career Insights" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "This platform helped me land a 40% salary increase. The AI analysis spotted gaps I never would have found myself!",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Manager",
      content: "Completely free and incredibly accurate. I got multiple interview calls within a week of optimizing my resume.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Product Designer",
      content: "The career path suggestions were spot-on. I discovered new opportunities I never knew existed in my field.",
      avatar: "PP",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Award className="w-4 h-4" />
            Trusted by Thousands
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              CareerAI?
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            We&apos;re revolutionizing career guidance by making professional AI-powered tools 
            accessible to everyone, completely free.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={feature.delay}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-secondary mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-sm text-secondary">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.color} -z-10`}>
                  <div className="w-full h-full bg-white rounded-2xl m-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                
                key={testimonial.name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-secondary mb-6 italic">&quot;{testimonial.content}&quot;</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-secondary text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            See the Difference
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-6 text-primary font-semibold">Features</th>
                  <th className="text-center py-4 px-6 text-primary font-semibold">CareerAI</th>
                  <th className="text-center py-4 px-6 text-secondary font-semibold">Other Platforms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Free Access", careerai: "✓", others: "Limited" },
                  { feature: "AI Analysis", careerai: "Advanced", others: "Basic" },
                  { feature: "Career Guidance", careerai: "Personalized", others: "Generic" },
                  { feature: "Job Matching", careerai: "Smart AI", others: "Keyword-based" },
                  { feature: "Course Recommendations", careerai: "Included", others: "Premium" },
                  { feature: "Data Privacy", careerai: "100% Secure", others: "Varies" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="py-4 px-6 text-secondary font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        {row.careerai}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center text-secondary">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-primary mb-2">
                Ready to Transform Your Career?
              </h4>
              <p className="text-secondary">
                Join thousands of successful professionals who found their dream jobs with CareerAI.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
              <Sparkles className="w-5 h-5" />
              Start Free Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;