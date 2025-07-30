

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-700">YourBrand</h1>
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-indigo-600 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>
        </div>
        <a
          href="#"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
        >
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
            Launch Faster with Minimal Effort
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            A clean and modern landing page template using Vite + TailwindCSS +
            React. Perfect for SaaS, apps, and portfolios.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/featured/?startup,technology"
          alt="Hero"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-10">Features Built for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              title: "Instant Setup",
              desc: "Deploy in seconds using Vite's lightning-fast dev server.",
            },
            {
              title: "Mobile Friendly",
              desc: "Looks great on any screen size, from phones to desktops.",
            },
            {
              title: "Easy to Customize",
              desc: "Tailwind lets you tweak anything without leaving your HTML.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-indigo-700">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-indigo-600 text-white">
        <h4 className="text-3xl font-bold mb-4">Ready to Get Started?</h4>
        <p className="mb-6">
          Build your project faster with this ready-to-use template.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Start Now
        </a>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="py-8 bg-gray-100 text-center text-sm text-gray-500"
      >
        <p>Made with ❤️ using Vite + TailwindCSS</p>
        <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
