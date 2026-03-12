import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-slate-900/60 py-24">
      <div className="page-shell">
        <SectionTitle
          eyebrow="Testimonials"
          title="Feedback that reflects reliability, curiosity, and execution."
          description="Sample testimonials showing how collaborators and stakeholders might describe working with me."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="h-full">
              <p className="text-lg leading-8 text-slate-200">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-display text-lg font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
