import { profile } from "../../data/site";

function Footer({ links }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="page-shell grid gap-10 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-white">{profile.name}</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{profile.shortBio}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
            Quick Links
          </h4>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
            Social
          </h4>
          <div className="mt-4 flex gap-4 text-sm text-slate-400">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-500 sm:px-8 lg:px-12">
        Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
