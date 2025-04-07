import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryItemProps {
  src: string;
  alt: string;
  className?: string;
}

export function GalleryItem({ src, alt, className }: GalleryItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className={cn(
            "relative aspect-square overflow-hidden rounded-md cursor-pointer group",
            className
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </DialogContent>
    </Dialog>
  );
}
