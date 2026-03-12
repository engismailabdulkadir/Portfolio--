import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import { profile } from "../../data/site";

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="page-shell">
        <SectionTitle
          eyebrow="About Me"
          title="A growing developer focused on useful software and long-term engineering depth."
          description="I enjoy turning ideas into systems that are practical, well-structured, and pleasant to use."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-gradient-to-br from-white/8 to-white/4">
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Background</h3>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{profile.shortBio}</p>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              As a Computer Science student, I have been building management systems, API-backed
              applications, and mobile experiences that solve operational problems in healthcare and
              education.
            </p>
          </Card>

          <div className="grid gap-6">
            <Card>
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Career Objective</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{profile.goal}</p>
            </Card>
            <Card>
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">What I bring</h3>
              <div className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/5">Structured frontend implementation</div>
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/5">Practical backend problem solving</div>
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/5">Flutter mobile UI development</div>
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/5">Clean project architecture and delivery</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
