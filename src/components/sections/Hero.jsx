import { ArrowRight, Download, Mail } from "lucide-react";
import Button from "../common/Button";
import { profile } from "../../data/site";
import profilePlaceholder from "../../assets/images/image.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(43,114,248,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_26%)] pt-28 scroll-mt-24 dark:bg-hero-grid"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] dark:opacity-20" />
      <div className="page-shell relative grid items-center gap-12 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
            {profile.heroTag}
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-6xl">
            Hi, I&apos;m Ismail Abdulkadir Ali
          </h1>
          <p className="mt-5 text-xl font-semibold text-amber-600 dark:text-amber-300 md:text-2xl">
            Frontend &amp; Backend Developer
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I build modern web applications with clean user experiences, scalable backend
            systems, and a strong focus on practical problem solving.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects" icon={ArrowRight}>
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" icon={Mail}>
              Contact Me
            </Button>
            <Button href="/Ismail-Abdulkadir-Ali-CV.pdf" variant="secondary" icon={Download}>
              Download CV
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">4+</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Major portfolio projects completed</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">3</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Core tracks: web, mobile, backend</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">100%</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Focused on real-world problem solving</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-brand-500/20 via-emerald-400/10 to-cyan-400/20 blur-3xl dark:from-brand-500/30 dark:via-emerald-400/10 dark:to-cyan-400/25" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white/70 p-5 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/75">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.12),transparent_28%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_32%)] dark:bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.18),transparent_32%)]" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100/80 p-4 dark:border-white/10 dark:bg-slate-950/70">
              <div className="absolute left-4 top-4 rounded-full border border-emerald-500/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
                Portfolio Photo
              </div>
              <img
                src={profilePlaceholder}
                alt="Profile placeholder for Ismail Abdulkadir Ali"
                className="h-[420px] w-full rounded-[1.4rem] object-cover object-center"
              />
            </div>
            <div className="relative mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Focus</p>
                <p className="mt-2 text-sm text-slate-900 dark:text-white">Modern apps with clean UX and solid backend logic</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Base</p>
                <p className="mt-2 text-sm text-slate-900 dark:text-white">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
