const IntegrationsSection = () => {
  const integrations = [
    { name: "Stripe", logo: "💳", category: "Payments" },
    { name: "Firebase", logo: "🔥", category: "Backend" },
    { name: "Vercel", logo: "▲", category: "Deployment" },
    { name: "Supabase", logo: "⚡", category: "Database" },
    { name: "Auth0", logo: "🔐", category: "Authentication" },
    { name: "Mailgun", logo: "📧", category: "Email" },
    { name: "Cloudinary", logo: "☁️", category: "Media" },
    { name: "Algolia", logo: "🔍", category: "Search" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Seamless Integrations
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Pre-configured integrations with the tools you already love
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className="group bg-slate-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-indigo-100"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {integration.logo}
              </div>
              <h3 className="font-bold text-slate-900 mb-1">
                {integration.name}
              </h3>
              <p className="text-sm text-slate-500">{integration.category}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-12 text-center border border-indigo-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Need a Custom Integration?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Our team can help you integrate with any service or API
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Request Integration
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;