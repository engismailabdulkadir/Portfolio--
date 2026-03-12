import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import { skillGroups } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-slate-900/60 py-24">
      <div className="page-shell">
        <SectionTitle
          eyebrow="Skills"
          title="Technical strengths across frontend, backend, mobile, and database work."
          description="A balanced toolkit for building complete software products with clean interfaces and reliable functionality."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-6 space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-brand-400 to-emerald-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
