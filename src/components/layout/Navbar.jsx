import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import useActiveSection from "../../hooks/useActiveSection";
import { cn } from "../../utils/cn";

function Navbar({ links, theme, toggleTheme }) {
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
          "transition hover:text-slate-950 dark:hover:text-white",
          activeSection === link.id
            ? "text-slate-950 dark:text-white"
            : "text-slate-600 dark:text-slate-300",
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
        scrolled
          ? "border-b border-slate-200 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85"
          : "bg-transparent",
      )}
    >
      <nav className="page-shell flex items-center justify-between py-3">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-[0.28em] text-slate-900 dark:text-white"
        >
          Ismail Dev
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {renderLinks()}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-slate-300 bg-white/80 p-2 text-slate-800 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-full border border-slate-300 bg-white/70 p-2 text-slate-900 md:hidden dark:border-white/10 dark:bg-transparent dark:text-white"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-6 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-5">
            {renderLinks(true)}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
