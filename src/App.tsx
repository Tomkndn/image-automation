import { useState, useEffect } from "react";
import {
  ChevronDown,
  Zap,
  Smartphone,
  Brain,
  Check,
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Rocket,
} from "lucide-react";
import ShowcaseSection from "./components/ShowCase";
import TeamSection from "./components/Team";
import IntegrationsSection from "./components/Partners";
import ComparisonSection from "./components/Comparison";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setIsDarkModeEnabled(true)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Dark Mode Enabled:", isDarkModeEnabled);
    if (isDarkModeEnabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkModeEnabled]);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Vite ensures super-fast local development and HMR for instant feedback.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      desc: "Responsive design that looks stunning on every device and screen size.",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Brain,
      title: "Developer Friendly",
      desc: "Component-first architecture, easy to extend, built for productivity.",
      color: "from-green-400 to-teal-500",
    },
  ];

  const stats = [
    { number: "10K+", label: "Developers" },
    { number: "500+", label: "Projects Built" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div
      className={`${
        isDarkModeEnabled ? "dark" : ""
      } bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white overflow-x-hidden`}
    >
      {/* Enhanced Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:bg-slate-900/90 dark:border-slate-700/50"
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
              <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-300">
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
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50 dark:bg-slate-900/95 dark:border-slate-700/50">
            <div className="px-6 py-4 space-y-4">
              {["Features", "Pricing", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors font-medium"
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

      {/* Temporary Debugging Indicator */}
      <div className="fixed top-20 right-6 z-50 p-2 bg-gray-200 dark:bg-gray-700 rounded-md text-xs font-mono">
        Dark Mode: {isDarkModeEnabled ? "ON" : "OFF"}
      </div>

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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200/50 dark:border-indigo-700/50 rounded-full px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300">
                <Star className="w-4 h-4 fill-current" />
                Trusted by 10K+ developers
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                {/* <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                  Supercharge Your
                </span> */}
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  Launch
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
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
                <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:border-indigo-700 dark:hover:text-indigo-400 dark:hover:bg-slate-800 transition-all duration-200">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-slate-700">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </div>
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
              <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 animate-bounce delay-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 animate-bounce delay-700">
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
      <section
        id="features"
        className="py-24 bg-white dark:bg-slate-900 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Why Choose LaunchNow?
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
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
                  className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
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
        className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
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
                    : "bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700"
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
                      pkg.popular
                        ? "text-white"
                        : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {pkg.plan}
                  </h3>
                  <div className="mb-4">
                    <span
                      className={`text-4xl font-bold ${
                        pkg.popular
                          ? "text-white"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    {pkg.period !== "contact us" && (
                      <span
                        className={`text-sm ${
                          pkg.popular
                            ? "text-indigo-100"
                            : "text-slate-500 dark:text-slate-400"
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
                          pkg.popular
                            ? "text-indigo-100"
                            : "text-slate-600 dark:text-slate-300"
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
      <section className="py-24 bg-white dark:bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-12 md:p-16 border border-indigo-100 dark:border-indigo-700">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Stay in the Loop
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Get the latest updates, new components, and developer tips
                delivered straight to your inbox
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
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

      <ShowcaseSection />
      <TeamSection />
      <IntegrationsSection />
      <ComparisonSection />

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
              <p className="text-slate-400 dark:text-slate-300 mb-6 max-w-md">
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
              <ul className="space-y-2 text-slate-400 dark:text-slate-300">
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
              <ul className="space-y-2 text-slate-400 dark:text-slate-300">
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

          <div className="border-t border-slate-800 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 dark:text-slate-300 text-sm">
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
