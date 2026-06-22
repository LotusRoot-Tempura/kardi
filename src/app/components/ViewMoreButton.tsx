import { Link } from "react-router";

type ViewMoreButtonProps = {
  to: string;
  tone: "dark" | "light";
  className?: string;
  external?: boolean;
};

export function ViewMoreButton({ to, tone, className = "", external = false }: ViewMoreButtonProps) {
  const buttonClassName = `inline-flex items-center justify-center border-2 px-6 py-4 font-display text-2xl uppercase leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current md:text-4xl ${
    tone === "dark" ? "border-black text-black hover:bg-black hover:text-white" : "border-white text-white hover:bg-white hover:text-black"
  } ${className}`;

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={buttonClassName}>
        View More
      </a>
    );
  }

  return (
    <Link to={to} className={buttonClassName}>
      View More
    </Link>
  );
}
