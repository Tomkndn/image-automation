const TeamSection = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Full-stack developer with 10+ years building scalable applications",
      social: { twitter: "#", github: "#", linkedin: "#" }
    },
    {
      name: "Sarah Kim",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b665?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "UI/UX expert passionate about creating beautiful, functional interfaces",
      social: { twitter: "#", dribbble: "#", linkedin: "#" }
    },
    {
      name: "Mike Chen",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Infrastructure specialist ensuring reliable, scalable deployments",
      social: { twitter: "#", github: "#", linkedin: "#" }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Meet the Team
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The passionate developers and designers behind LaunchNow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 text-center"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full ring-2 ring-white"></div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
              <p className="text-slate-600 leading-relaxed mb-6">{member.bio}</p>
              
              <div className="flex justify-center gap-4">
                {Object.entries(member.social).map(([platform, url], idx) => (
                  <a
                    key={idx}
                    href={url}
                    className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-200 hover:scale-110"
                  >
                    <span className="text-sm font-semibold capitalize">{platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 hover:scale-105 transition-all duration-200 shadow-lg">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};


export default TeamSection;