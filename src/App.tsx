
const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-50 py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
          Launch Your Next Big Idea
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          A simple and modern landing page built with Vite + TailwindCSS. Fast,
          responsive, and easy to customize.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
            <p className="text-gray-600">
              Launch in minutes with our lightweight Vite + Tailwind stack.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
            <p className="text-gray-600">
              Works beautifully on desktops, tablets, and phones.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Easy to Customize</h3>
            <p className="text-gray-600">
              Minimal design, easily extendable for your use case.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-50 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourProjectName. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
