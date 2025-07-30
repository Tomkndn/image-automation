const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Setup Time",
      us: "5 minutes",
      others: "2-3 hours",
      icon: "⚡",
    },
    {
      feature: "Components",
      us: "50+ Ready-made",
      others: "Build from scratch",
      icon: "🧩",
    },
    {
      feature: "Documentation",
      us: "Comprehensive guides",
      others: "Basic README",
      icon: "📚",
    },
    {
      feature: "Support",
      us: "24/7 Priority support",
      others: "Community only",
      icon: "🎯",
    },
    {
      feature: "Updates",
      us: "Monthly releases",
      others: "Irregular updates",
      icon: "🔄",
    },
    {
      feature: "TypeScript",
      us: "Full TypeScript support",
      others: "Limited or none",
      icon: "📘",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Why Choose LaunchNow?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we stack up against other solutions
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
            <div className="text-center">
              <span className="text-2xl">🚀</span>
              <h3 className="font-bold text-lg mt-2">Feature</h3>
            </div>
            <div className="text-center border-l border-white/20">
              <span className="text-2xl">✨</span>
              <h3 className="font-bold text-lg mt-2">LaunchNow</h3>
            </div>
            <div className="text-center border-l border-white/20">
              <span className="text-2xl">🔧</span>
              <h3 className="font-bold text-lg mt-2">Others</h3>
            </div>
          </div>

          {comparisons.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 p-6 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors duration-200 ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-slate-900">
                  {item.feature}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.us}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.others}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200">
            Experience the Difference
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;