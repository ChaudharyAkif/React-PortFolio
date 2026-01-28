import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import projectimg1 from "../assets/project1.png";
import projectimg2 from "../assets/project2.png";
import projectimg3 from "../assets/project3.png";
const projects = [
  {
    title: "E Commerce",
    duration: "2024",
    description: "Next-gen web experience with immersive motion, modern UI, and optimized performance.",
    tech: ["React", "NodeJs", "Tailwind", "Framer Motion","Ant Design,Supabase,,Stripe"],
    color: "from-blue-500 to-cyan-400",
    image:projectimg1,
    link: "https://digital-bazar-u3ya.vercel.app/"
  },
  {
    title: "FoodPoint",
    duration: "2024",
    description: "FoodPoint Next Level Project ",
    tech: ["React", "TypeScript", "Node","Tailwind"],
    color: "from-purple-500 to-pink-500",
    image: projectimg2,
    link: "https://food-point-frontend.vercel.app/"
  },
  {
    title: "Donate Charity",
    duration: "2024",
    description: "Real-time analytics dashboard with interactive charts and clean data flow.",
    tech: ["React", "TailwindCss", "Node.js", "Express"],
    color: "from-emerald-500 to-teal-400",
    image: projectimg3,
    link: "https://donate-hub-frontend.vercel.app/"
  }
];

function ProjectItem({ project, start, end, scrollYProgress, index }) {
  const itemRef = useRef(null);
  
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  const y = useTransform(scrollYProgress, [start, end], [60, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const glowOpacity = useTransform(scrollYProgress, [start, end], [0, 0.15]);

  return (
    <motion.div 
      ref={itemRef}
      className="relative flex items-start gap-6 lg:gap-8"
      style={{ opacity }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          className={`absolute inset-0 rounded-full blur-xl bg-gradient-to-r ${project.color}`}
          style={{ opacity: glowOpacity }}
        />
        <motion.div
          className={`relative w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r ${project.color} shadow-xl border-2 border-white/20`}
          style={{ scale }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>

      <motion.div
        style={{ y, scale }}
        className="relative group bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 lg:p-8 w-full shadow-2xl overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgb(255,255,255)_1px,transparent_0)] bg-[length:20px_20px]" />
        
        <div className="relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium mt-2 lg:mt-0`}>
              {project.duration}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <div className="lg:w-2/3">
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 text-xs bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm"> <img src={project.image}/> </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              View Project
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const ProjectTimeline = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start 30%", "end 70%"],
  });

  const lineHeight = useTransform(timelineScroll, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative bg-black text-white py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-4">
            PROJECTS
          </span> */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
Some Projects I've Done
          </h2>
       
        </motion.div>

        <div 
          ref={timelineRef} 
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px]">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-white to-transparent origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-24">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`flex ${idx % 2 === 0 ? "justify-start lg:pr-1/2" : "justify-end lg:pl-1/2"}`}
              >
                <ProjectItem
                  project={project}
                  start={idx / projects.length}
                  end={(idx + 1) / projects.length}
                  scrollYProgress={timelineScroll}
                  index={idx}
                />
              </div>
            ))}
          </div>
        </div>

 
      </div>
    </section>
  );
};

export default ProjectTimeline;