import { cn } from "../../utils/cn";

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
