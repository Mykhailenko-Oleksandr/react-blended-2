import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  onModalOpen: (value: Photo) => void;
}

export default function PhotosGallery({
  photos,
  onModalOpen,
}: PhotosGalleryProps) {
  return (
    <Grid>
      {photos.map(({ id, avg_color, alt, src }) => {
        return (
          <li key={id} onClick={() => onModalOpen({ id, avg_color, alt, src })}>
            <PhotosGalleryItem
              avg_color={avg_color}
              alt={alt}
              src={src}
              id={""}
            />
          </li>
        );
      })}
    </Grid>
  );
}
