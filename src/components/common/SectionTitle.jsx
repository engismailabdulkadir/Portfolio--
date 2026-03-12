function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <span className="inline-flex rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

export default SectionTitle;
