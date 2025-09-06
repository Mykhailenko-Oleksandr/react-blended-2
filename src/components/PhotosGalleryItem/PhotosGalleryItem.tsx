import type { Photo } from "../../types/photo";

import styles from "./PhotosGalleryItem.module.css";

export default function PhotosGalleryItem({ avg_color, alt, src }: Photo) {
  return (
    <div
      className={styles.thumb}
      style={{
        backgroundColor: avg_color,
        borderColor: avg_color,
      }}
    >
      <img src={src.original} alt={alt} />
    </div>
  );
}
