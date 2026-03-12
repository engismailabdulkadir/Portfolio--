import { cn } from "../../utils/cn";

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
