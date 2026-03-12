import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../common/Button";
import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import { profile } from "../../data/site";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="page-shell">
        <SectionTitle
          eyebrow="Contact"
          title="Let&apos;s discuss a project, role, or collaboration."
          description="Open to freelance opportunities, junior developer roles, and practical software projects."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <h3 className="font-display text-2xl font-semibold text-white">Contact Details</h3>
            <div className="mt-6 space-y-5 text-slate-300">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-brand-300" size={18} />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href={`mailto:${profile.email}`} className="transition hover:text-white">
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-brand-300" size={18} />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a href={`tel:${profile.phone}`} className="transition hover:text-white">
                    {profile.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-brand-300" size={18} />
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p>{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Social Links</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-brand-300/40 hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-white/8 to-white/4">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Name</span>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Email</span>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Message</span>
                <textarea
                  required
                  rows="6"
                  placeholder="Tell me about your project or opportunity."
                  className="w-full rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand-300"
                />
              </label>
              <Button type="submit">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
