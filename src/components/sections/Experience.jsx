import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import { experience } from "../../data/site";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="page-shell">
        <SectionTitle
          eyebrow="Resume"
          title="Education, project experience, and professional direction."
          description="A concise timeline showing how my foundation and practical work are progressing together."
        />

        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <Card key={item.title} className="relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-400 to-emerald-400" />
              <div className="pl-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-brand-200">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-slate-300">{item.org}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-5 leading-7 text-slate-300">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
