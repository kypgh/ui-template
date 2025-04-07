import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function Section({
  title,
  description,
  children,
  className,
  titleClassName,
  descriptionClassName,
}: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      {(title || description) && (
        <div className="mb-8 md:mb-12 text-center">
          {title && (
            <h2
              className={cn(
                "text-3xl font-bold tracking-tight",
                titleClassName
              )}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className={cn(
                "mt-4 text-lg text-muted-foreground mx-auto max-w-3xl",
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
