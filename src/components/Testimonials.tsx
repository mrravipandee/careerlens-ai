'use client';

import { useState } from 'react';
import { Star, Quote, GraduationCap, Briefcase, Award, MapPin, Calendar } from 'lucide-react';

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'students' | 'freshers'>('all');

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Computer Science Student",
      college: "IIT Delhi",
      location: "New Delhi",
      image: "PS",
      rating: 5,
      content: "As a final year student, I was struggling with resume formatting. CareerAI not only optimized my resume but also helped me discover internship opportunities I never knew about. Landed 3 interviews in 2 weeks!",
      result: "Got internship at Microsoft",
      category: "students",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Fresh Graduate",
      degree: "B.Tech Mechanical",
      location: "Bangalore",
      image: "RK",
      rating: 5,
      content: "Being a fresher with no work experience, I didn't know how to showcase my projects. The AI analysis highlighted my skills perfectly and suggested relevant job roles. Received my first offer in 3 weeks!",
      result: "Placed at Tata Motors",
      category: "freshers",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "MBA Student",
      college: "XLRI Jamshedpur",
      location: "Jamshedpur",
      image: "AP",
      rating: 5,
      content: "The career path suggestions were incredibly accurate. It helped me pivot from marketing to product management with specific course recommendations. The ATS score improvement was a game-changer!",
      result: "Product Manager Intern at Flipkart",
      category: "students",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Fresh Graduate",
      degree: "B.Com Honors",
      location: "Mumbai",
      image: "VS",
      rating: 5,
      content: "As a commerce graduate, I was confused about career options. CareerAI's assessment matched me with fintech roles I never considered. The resume feedback helped me highlight my analytical skills effectively.",
      result: "Business Analyst at FinTech Startup",
      category: "freshers",
      date: "2 months ago"
    },
    {
      id: 5,
      name: "Sneha Reddy",
      role: "Final Year Student",
      college: "BITS Pilani",
      location: "Hyderabad",
      image: "SR",
      rating: 5,
      content: "The free access was a blessing! As a student on a budget, I couldn't afford premium services. CareerAI provided detailed insights that helped me secure a campus placement with Amazon.",
      result: "SDE Role at Amazon",
      category: "students",
      date: "1 month ago"
    },
    {
      id: 6,
      name: "Arjun Mehta",
      role: "Recent Graduate",
      degree: "B.Sc Computer Science",
      location: "Pune",
      image: "AM",
      rating: 5,
      content: "Being from a tier-2 college, I was worried about job opportunities. The AI suggested certifications that made my profile stand out. Got selected in a pool of IIT graduates!",
      result: "Software Developer at Tech Mahindra",
      category: "freshers",
      date: "3 weeks ago"
    }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  const stats = [
    { number: "85%", label: "Students Got Interviews" },
    { number: "2.3x", label: "Higher Response Rate" },
    { number: "50K+", label: "Students Helped" },
    { number: "4.9/5", label: "Student Rating" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Quote className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Loved by 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Students & Freshers
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover how students and recent graduates transformed their careers with our 
            AI-powered guidance and resume optimization.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-secondary text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Stories', icon: Briefcase, count: testimonials.length },
            { id: 'students', label: 'Students', icon: GraduationCap, count: testimonials.filter(t => t.category === 'students').length },
            { id: 'freshers', label: 'Freshers', icon: Award, count: testimonials.filter(t => t.category === 'freshers').length }
          ].map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'border-primary bg-primary text-white shadow-lg'
                    : 'border-gray-300 text-secondary hover:border-primary hover:bg-primary/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-semibold">{category.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-white text-primary'
                    : 'bg-primary text-white'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="text-primary/20 group-hover:text-primary/30 transition-colors duration-300">
                <Quote className="w-8 h-8 mb-4" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-secondary mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>

              {/* Result Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                <div className="flex items-center gap-2 text-green-700 text-sm font-semibold">
                  <Award className="w-4 h-4" />
                  {testimonial.result}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-secondary text-sm mb-1">{testimonial.role}</p>
                      {testimonial.college && (
                        <p className="text-secondary/70 text-xs flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          {testimonial.college}
                        </p>
                      )}
                      {testimonial.degree && (
                        <p className="text-secondary/70 text-xs">{testimonial.degree}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Location & Date */}
                  <div className="flex items-center gap-4 mt-2 text-xs text-secondary/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Student Success Highlights */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Why Students & Freshers Love CareerAI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Zero Experience Needed",
                description: "Perfect for students with limited work history"
              },
              {
                icon: Briefcase,
                title: "Internship Ready",
                description: "Optimize your resume for internship applications"
              },
              {
                icon: Award,
                title: "Campus Placement Prep",
                description: "Get ready for campus recruitment drives"
              },
              {
                icon: MapPin,
                title: "Tier-2/3 City Focus",
                description: "Special guidance for students from smaller cities"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                  <p className="text-secondary text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Start Your Success Story Today
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students and freshers who have transformed their careers with our free AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                <GraduationCap className="w-5 h-5" />
                Upload Student Resume
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-200">
                <Briefcase className="w-5 h-5" />
                View Fresher Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;