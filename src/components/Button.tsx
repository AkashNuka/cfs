import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  arrow = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-200 rounded group";

  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary-dark text-white hover:scale-105 active:scale-95",
    outline:
      "border-2 border-white/30 text-white hover:border-primary hover:text-primary bg-transparent",
    ghost:
      "text-muted hover:text-white bg-transparent",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      <span style={{ fontFamily: "var(--font-oswald)" }}>{children}</span>
      {arrow && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
