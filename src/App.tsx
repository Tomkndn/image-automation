

const App = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-5 shadow-sm sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold text-indigo-700">LaunchNow</h1>
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
          className="bg-indigo-600 text-white px-5 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
        >
          Sign Up
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center px-6 py-24 max-w-7xl mx-auto gap-10">
        <div className="md:w-1/2 text-center md:text-left animate-fade-in">
          <h2 className="text-5xl font-extrabold text-indigo-700 mb-4 leading-tight">
            Build Fast. Launch Faster.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Supercharge your development workflow with our production-ready
            starter kit. Built with Vite, React & Tailwind.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Try it Free
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
            >
              Explore Features
            </a>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/featured/?startup,office"
          alt="Hero"
          className="w-full md:w-1/2 rounded-xl shadow-md animate-fade-in"
        />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 text-center">
        <h3 className="text-4xl font-bold mb-12">What You Get</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              title: "⚡ Lightning Fast",
              desc: "Vite ensures super-fast local development and HMR.",
            },
            {
              title: "📱 Mobile First",
              desc: "Designed to look amazing on any screen size.",
            },
            {
              title: "🧠 Developer Friendly",
              desc: "Component-first, easy to extend, built for speed.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition animate-fade-in"
            >
              <h4 className="text-xl font-semibold mb-2 text-indigo-700">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white text-center">
        <h3 className="text-4xl font-bold mb-12">Simple Pricing</h3>
        <div className="flex flex-col md:flex-row justify-center gap-10 px-6 max-w-6xl mx-auto">
          {[
            {
              plan: "Free",
              price: "₹0",
              features: ["1 Project", "Basic Components", "Community Support"],
            },
            {
              plan: "Pro",
              price: "₹499/mo",
              features: [
                "Unlimited Projects",
                "All Components",
                "Priority Support",
              ],
            },
            {
              plan: "Enterprise",
              price: "₹Contact",
              features: ["Custom Needs", "Dedicated Team", "SLA & Uptime"],
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className="border rounded-xl p-8 shadow hover:shadow-md transition w-full md:w-1/3"
            >
              <h4 className="text-xl font-semibold mb-2 text-indigo-700">
                {pkg.plan}
              </h4>
              <p className="text-3xl font-bold mb-4">{pkg.price}</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50 text-center">
        <h3 className="text-4xl font-bold mb-6">Let’s Connect</h3>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Have questions, custom needs, or feedback? Drop us a message.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white text-center text-gray-500 text-sm border-t">
        <p>
          &copy; {new Date().getFullYear()} LaunchNow. Built with 💙 using Vite
          + React + TailwindCSS
        </p>
      </footer>
    </div>
  );
};

export default App;
