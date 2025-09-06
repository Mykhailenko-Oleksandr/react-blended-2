import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
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
      {photos.map((photo) => {
        return (
          <GridItem key={photo.id} onModalOpen={() => onModalOpen(photo)}>
            <PhotosGalleryItem photoEl={photo} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
