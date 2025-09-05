import { createPortal } from "react-dom";
import styled from "./Modal.module.css";
import type { Photo } from "../../types/photo";
import type React from "react";
import { useEffect } from "react";

interface ModalProps {
  photo: Photo;
  onClose: () => void;
}

export default function Modal({ photo, onClose }: ModalProps) {
  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={styled.backdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={styled.modal}>
        <button className={styled.closeButton} aria-label="Close modal">
          &times;
        </button>
        {<img src={photo.src.original} alt={photo.alt} />}
      </div>
    </div>,
    document.body
  );
}
