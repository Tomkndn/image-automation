import { useState, useEffect } from 'react';
import { ChevronDown, Zap, Smartphone, Brain, Check, Menu, X, ArrowRight, Star, Users, Rocket } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Vite ensures super-fast local development and HMR for instant feedback.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      desc: "Responsive design that looks stunning on every device and screen size.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Brain,
      title: "Developer Friendly",
      desc: "Component-first architecture, easy to extend, built for productivity.",
      color: "from-green-400 to-teal-500"
    },
  ];

  const stats = [
    { number: "10K+", label: "Developers" },
    { number: "500+", label: "Projects Built" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 overflow-x-hidden">
      {/* Enhanced Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                LaunchNow
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6 text-sm text-slate-600">
                {["Features", "Pricing", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-indigo-600 transition-colors duration-200 font-medium relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
                Sign Up Free
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50">
            <div className="px-6 py-4 space-y-4">
              {["Features", "Pricing", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-600 hover:text-indigo-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium">
                Sign Up Free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 pt-32">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            {/* Enhanced Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 rounded-full px-4 py-2 text-sm font-medium text-indigo-700">
                <Star className="w-4 h-4 fill-current" />
                Trusted by 10K+ developers
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Supercharge Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  Launch
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Build modern applications at lightning speed with our
                battle-tested Vite + Tailwind setup. Perfect for startups,
                hackathons, and MVPs that need to ship fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 pt-8 border-t border-slate-200">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-slate-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="lg:w-1/2 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                  alt="Modern workspace with multiple screens showing code"
                  className="relative w-full rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 animate-bounce delay-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 animate-bounce delay-700">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium">10K+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Why Choose LaunchNow?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to build, ship, and scale modern applications
              with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section
        id="pricing"
        className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                plan: "Starter",
                price: "₹0",
                period: "forever",
                features: [
                  "1 Project",
                  "Basic Components",
                  "Community Support",
                  "Core Templates",
                ],
                popular: false,
              },
              {
                plan: "Pro",
                price: "₹499",
                period: "month",
                features: [
                  "Unlimited Projects",
                  "All Components",
                  "Priority Support",
                  "Advanced Templates",
                  "Custom Themes",
                ],
                popular: true,
              },
              {
                plan: "Enterprise",
                price: "Custom",
                period: "contact us",
                features: [
                  "Everything in Pro",
                  "Dedicated Team",
                  "SLA & Uptime",
                  "Custom Development",
                  "White-label Solution",
                ],
                popular: false,
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl scale-105"
                    : "bg-white shadow-lg hover:shadow-2xl border border-slate-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      pkg.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {pkg.plan}
                  </h3>
                  <div className="mb-4">
                    <span
                      className={`text-4xl font-bold ${
                        pkg.popular ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    {pkg.period !== "contact us" && (
                      <span
                        className={`text-sm ${
                          pkg.popular ? "text-indigo-100" : "text-slate-500"
                        }`}
                      >
                        /{pkg.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check
                        className={`w-5 h-5 ${
                          pkg.popular ? "text-green-300" : "text-green-500"
                        }`}
                      />
                      <span
                        className={
                          pkg.popular ? "text-indigo-100" : "text-slate-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? "bg-white text-indigo-600 hover:bg-indigo-50 hover:scale-105"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"
                  }`}
                >
                  {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Ready to transform your ideas into reality? Get in touch with our
              team.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white resize-none"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-pink-400 to-indigo-500 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Loved by Developers Worldwide
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See what our community has to say about their experience with
              LaunchNow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Senior Frontend Developer",
                company: "TechStart Inc.",
                avatar:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b665?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                content:
                  "LaunchNow cut our development time by 60%. The setup is incredibly smooth and the components are production-ready from day one.",
                rating: 5,
              },
              {
                name: "Marcus Rodriguez",
                role: "Full Stack Developer",
                company: "Startup Labs",
                avatar:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                content:
                  "As someone who's built 20+ MVPs, this is hands down the best starter kit I've used. The developer experience is phenomenal.",
                rating: 5,
              },
              {
                name: "Emily Watson",
                role: "Product Manager",
                company: "InnovateCorp",
                avatar:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                content:
                  "Our team shipped 3 products this quarter using LaunchNow. The consistency and quality across projects is amazing.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 relative"
              >
                {/* Quote decoration */}
                <div className="absolute top-4 right-6 text-6xl text-indigo-100 font-serif">
                  "
                </div>

                <div className="relative">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-100"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-indigo-600 font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80",
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80",
                  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80",
                ].map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt={`User ${idx + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
              </div>
              <div className="text-left">
                <p className="text-slate-900 font-semibold">
                  Join 10,000+ developers
                </p>
                <p className="text-slate-600 text-sm">
                  Building the future with LaunchNow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Get Started in Minutes
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined process gets you from idea to deployment faster
              than ever
            </p>
          </div>

          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Clone & Setup",
                  description:
                    "Clone the repository and run our one-command setup script",
                  icon: "🚀",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  step: "02",
                  title: "Customize",
                  description:
                    "Modify components, colors, and layouts to match your brand",
                  icon: "🎨",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  step: "03",
                  title: "Build Features",
                  description:
                    "Add your business logic using our pre-built components",
                  icon: "⚡",
                  color: "from-green-500 to-teal-500",
                },
                {
                  step: "04",
                  title: "Deploy",
                  description:
                    "Push to production with our optimized build configuration",
                  icon: "🌟",
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="text-center">
                    <div
                      className={`relative mx-auto w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xs font-bold text-slate-700">
                          {item.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Built with Modern Technologies
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              We use the latest and most reliable tools to ensure your projects
              are future-proof
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", logo: "⚛️", description: "Component-based UI" },
              {
                name: "Vite",
                logo: "⚡",
                description: "Lightning fast builds",
              },
              {
                name: "Tailwind",
                logo: "🎨",
                description: "Utility-first CSS",
              },
              { name: "TypeScript", logo: "📘", description: "Type-safe code" },
              {
                name: "Node.js",
                logo: "🟢",
                description: "JavaScript runtime",
              },
              { name: "Vercel", logo: "▲", description: "Instant deployment" },
            ].map((tech, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/10"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h3 className="font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-indigo-200">{tech.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white font-medium">
                Always up-to-date with latest versions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about LaunchNow
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What's included in the starter kit?",
                answer:
                  "LaunchNow includes a complete Vite + React + Tailwind setup with pre-built components, routing, state management, authentication templates, and deployment configurations.",
              },
              {
                question: "Do I need to know React to use this?",
                answer:
                  "Basic React knowledge is recommended. However, our comprehensive documentation and examples make it easy for developers with JavaScript experience to get started quickly.",
              },
              {
                question: "Can I use this for commercial projects?",
                answer:
                  "Absolutely! LaunchNow is designed for both personal and commercial use. Build and sell as many projects as you want with our Pro and Enterprise plans.",
              },
              {
                question: "How often do you update the components?",
                answer:
                  "We release updates monthly with new components, bug fixes, and improvements. All updates are backward compatible and include migration guides when needed.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We provide community support for free users, priority email support for Pro users, and dedicated Slack channels for Enterprise customers.",
              },
              {
                question: "Can I customize the design system?",
                answer:
                  "Yes! The entire design system is built with CSS custom properties and Tailwind configuration, making it easy to customize colors, spacing, typography, and more.",
              },
            ].map((faq, i) => {
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-8">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-6">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Join thousands of developers who have accelerated their
              development workflow
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Active Developers", icon: "👥" },
              { number: "50,000+", label: "Projects Built", icon: "🚀" },
              { number: "99.9%", label: "Uptime", icon: "⚡" },
              { number: "24/7", label: "Support", icon: "💬" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-indigo-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Ready to join them?</h3>
                <p className="text-indigo-100">
                  Start building your next project today
                </p>
              </div>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 hover:scale-105 transition-all duration-200 shadow-lg">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 md:p-16 border border-indigo-100">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Stay in the Loop
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Get the latest updates, new components, and developer tips
                delivered straight to your inbox
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-slate-900"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Weekly updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  LaunchNow
                </h1>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Empowering developers to build faster, ship sooner, and scale
                with confidence. Join thousands of developers who trust
                LaunchNow.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "GitHub", "Discord"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                {["Features", "Pricing", "Documentation", "API"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                {["Help Center", "Contact", "Status", "Community"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} LaunchNow. Built with ❤️ using Vite +
              React + Tailwind CSS
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;