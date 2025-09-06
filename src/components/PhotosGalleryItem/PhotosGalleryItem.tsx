import type { Photo } from "../../types/photo";

import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  photoEl: Photo;
}

export default function PhotosGalleryItem({ photoEl }: PhotosGalleryItemProps) {
  return (
    <div
      className={styles.thumb}
      style={{
        backgroundColor: photoEl.avg_color,
        borderColor: photoEl.avg_color,
      }}
    >
      <img src={photoEl.src.original} alt={photoEl.alt} />
    </div>
  );
}
