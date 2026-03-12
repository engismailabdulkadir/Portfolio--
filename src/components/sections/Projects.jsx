import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-slate-900/60 py-24">
      <div className="page-shell">
        <SectionTitle
          eyebrow="Projects"
          title="Projects I have built across management systems and mobile applications."
          description="A simple overview of key projects and the main technologies used in each one."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30"
            >
              <div className={`h-44 bg-gradient-to-br ${project.accent} p-5`}>
                <div className="flex h-full items-end rounded-[1.5rem] border border-white/15 bg-slate-950/55 p-5">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
