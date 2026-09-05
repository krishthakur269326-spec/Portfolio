import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectSection = () => {
  const projects = [
    {
      icon: "🛒",
      tool1: "REACT",
      tool2: "NODE.JS",
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN platform with authentication, products, cart, checkout, orders, and payment integration via eSewa.",
      link: "https://e-commerce-frontend-okdi.onrender.com/",
      bgcolor1: "#1a1a3e",
      bgcolor2: "#0f0f23",
    },
    {
      icon: "🎬",
      tool1: "REACT",
      tool2: "AI API",
      title: "AI Movie Recommender",
      description:
        "Smart movie recommendation engine that analyzes user preferences and moods to deliver hyper-personalized film suggestions.",
      link: "https://moodpick-si8k.onrender.com/",
      bgcolor1: "#1a1f2c",
      bgcolor2: "#0f1319",
    },
    {
      icon: "💪",
      tool1: "REACT",
      tool2: "TAILWIND CSS",
      title: "Static Gym Website",
      description:
        "Responsive gym website showcasing membership plans, events, gallery, and contact features with modern UI design.",
      link: "https://gym-website2-iota.vercel.app/",
      bgcolor1: "#1a2f1a",
      bgcolor2: "#0f1a0f",
    },
  ];

  return (
    <section id="projects" className="bg-black py-8 px-6 md:px-12 lg:px-20">
      <div
        data-aos="fade-right"
        className="flex flex-col md:justify-between gap-8"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-gray-700"></span>
            Selected Work
          </p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-white">
            Recent Projects
          </h2>
        </div>
        <div className="flex justify-end text-[#fafafa]/50 underline underline-offset-8 mb-8">
          <a href="#" className="hover:text-white">
            View all projects →
          </a>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="card bg-[#161616] border border-[#ffffff14] rounded-[20px] overflow-hidden transition-[border-color,transform] duration-300"
            >
              <div className="h-50 relative overflow-hidden">
                <div
                  className="w-full h-full flex items-center justify-center text-[48px] transition-transform duration-500 ease"
                  style={{
                    background: `linear-gradient(135deg, ${project.bgcolor1}, ${project.bgcolor2})`,
                  }}
                >
                  {project.icon}
                </div>
                <div
                  className={`absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(22,22,22,0.8))]`}
                ></div>
                <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                  <span className="px-2.5 py-1 bg-[rgba(11,11,11,0.8)] backdrop-blur-sm border border-[#ffffff14] rounded-full text-[10px] font-medium text-[#A0A0A0] uppercase tracking-[0.04em]">
                    {project.tool1}
                  </span>
                  <span className="px-2.5 py-1 bg-[rgba(11,11,11,0.8)] backdrop-blur-sm border border-[#ffffff14] rounded-full text-[10px] font-medium text-[#A0A0A0] uppercase tracking-[0.04em]">
                    {project.tool2}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col items-start">
                <h1 className="text-[17px] font-semibold tracking-[-0.02em] mb-2 text-white">
                  {project.title}
                </h1>
                <p className="text-[13px] text-gray-400 leading-[1.6] mb-4">
                  {project.description}
                </p>
                <a
                  href={`${project.link}`}
                  className="text-[grey] hover:text-white transition"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
