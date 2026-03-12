import { Database, LayoutDashboard, Server, Smartphone } from "lucide-react";
import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/services";

const icons = {
  layout: LayoutDashboard,
  server: Server,
  smartphone: Smartphone,
  database: Database,
};

function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24">
      <div className="page-shell">
        <SectionTitle
          eyebrow="Services"
          title="Focused development services for web, mobile, backend, and database projects."
          description="Built for clients, startups, and teams that need thoughtful execution with room to scale."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <Card
                key={service.title}
                className="group transition duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-slate-50 dark:hover:bg-white/8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200 transition group-hover:bg-brand-500/25">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
