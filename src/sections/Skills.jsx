import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiSupabase,
  SiVercel,
  SiMongodb,
} from "react-icons/si";
import { SiFirebase } from "react-icons/si";
export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC", small: true },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },

    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", small: true },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },

    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", small: true },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ];

  return (
    <section className="w-full py-20 bg-black text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[320px] h-[320px] bg-purple-600/20 blur-[130px]" />
        <div className="absolute bottom-1/4 right-0 w-[320px] h-[320px] bg-cyan-500/20 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </h2>

        <p className="text-center mt-3 mb-14 text-white/70">
          Modern Applications • Modern Technologies
        </p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
  {skills.map((skill, i) => {
    const Icon = skill.icon;

    return (
      <div
        key={i}
        className="group relative rounded-2xl p-[1px] transition-all duration-300
                   hover:-translate-y-1"
      >
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
                        from-[#1CD8D2]/40 via-transparent to-purple-500/40
                        opacity-30 group-hover:opacity-80 transition" />

        {/* Card */}
        <div
          className="relative bg-[#0f0f14] rounded-2xl
                     flex flex-col items-center justify-center gap-4
                     p-5 h-[150px]
                     border border-white/10
                     transition-all duration-300
                     group-hover:border-white/20
                     group-hover:shadow-lg group-hover:shadow-black/40"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                       transition duration-300 blur-xl"
            style={{
              background: `radial-gradient(circle, ${skill.color}33, transparent 65%)`,
            }}
          />

          {/* Icon */}
          <div
            className="relative w-20 h-20 rounded-full
                       flex items-center justify-center
                       transition-transform duration-[400ms]
                       ease-[cubic-bezier(0.4,0,0.2,1)]
                       group-hover:rotate-[360deg]"
          >
            <Icon size={59} style={{ color: skill.color }} />
          </div>

          {/* Text */}
          <span className="text-lg font-medium tracking-wide text-gray-300">
            {skill.name}
          </span>
        </div>
      </div>
    );
  })}
</div>


      </div>
    </section>
  );
}
