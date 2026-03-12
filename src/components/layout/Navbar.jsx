import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import useActiveSection from "../../hooks/useActiveSection";
import { cn } from "../../utils/cn";

function Navbar({ links }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(links.map((link) => link.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const renderLinks = (mobile = false) =>
    links.map((link) => (
      <a
        key={link.id}
        className={cn(
          "transition hover:text-white",
          activeSection === link.id ? "text-white" : "text-slate-300",
          mobile ? "text-lg font-medium" : "text-sm",
        )}
        href={`#${link.id}`}
        onClick={() => setOpen(false)}
      >
        {link.label}
      </a>
    ));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled ? "bg-slate-950/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="page-shell flex items-center justify-between py-3">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-[0.28em] text-white"
        >
          Ismail Dev
        </a>

        <div className="hidden items-center gap-8 md:flex">{renderLinks()}</div>

        <button
          aria-label="Toggle menu"
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">{renderLinks(true)}</div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
