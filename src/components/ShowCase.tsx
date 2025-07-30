import { ArrowRight } from "lucide-react";

export default function ShowcaseSection(){
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Modern shopping experience with cart, payments, and admin dashboard",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Stripe", "Firebase"],
      liveUrl: "#",
      category: "E-commerce",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Analytics dashboard with real-time data and team collaboration",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["Next.js", "Chart.js", "PostgreSQL"],
      liveUrl: "#",
      category: "SaaS",
    },
    {
      title: "Social Media App",
      description: "Connect, share, and discover with a modern social platform",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tags: ["React Native", "GraphQL", "AWS"],
      liveUrl: "#",
      category: "Social",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/50 to-purple-900/50"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-indigo-200 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Built with LaunchNow
          </div>
          <h2 className="text-5xl font-bold mb-6 text-white">
            Real Projects, Real Results
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See what developers have built using our starter kit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-slate-300 px-2 py-1 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-indigo-300 hover:text-white font-medium group-hover:gap-3 transition-all duration-200">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};
