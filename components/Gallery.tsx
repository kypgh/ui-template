// components/Gallery.tsx
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface GalleryProps {
  images: string[];
  title?: string;
  description?: string;
}

export function Gallery({ images, title, description }: GalleryProps) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((imagePath) => ({
    src: imagePath,
  }));

  return (
    <div>
      {(title || description) && (
        <div className="mb-6 text-center">
          {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-200 hover:scale-105"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Thumbnails, Zoom]}
      />
    </div>
  );
}
