import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

export function PageHeader({
  title,
  description,
  image,
  children,
}: PageHeaderProps) {
  return (
    <div className="relative">
      {image && (
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      <div
        className={`relative container mx-auto px-4 py-16 md:py-24 ${
          image ? "text-white" : ""
        }`}
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
