import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { getPhotos } from "../../services/photos";
import { useState } from "react";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import type { Photo } from "../../types/photo";
import Modal from "../Modal/Modal";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  async function onSubmitForm(searchWord: string) {
    try {
      setIsError(false);
      setLoader(true);
      const res = await getPhotos(searchWord);
      console.log(res);
      setPhotos(res);
    } catch {
      setIsError(true);
    } finally {
      setLoader(false);
    }
  }

  function openModal(photo: Photo) {
    setSelectedPhoto(photo);
  }

  function closeModal() {
    setSelectedPhoto(null);
  }

  return (
    <>
      <Section>
        <Container>
          {
            <>
              <Form onSubmit={onSubmitForm} />
              {loader && <Loader />}
              {isError && <Text children="Щось пішло не так... Спробуй ще" />}
              {photos.length > 0 && (
                <PhotosGallery photos={photos} onModalOpen={openModal} />
              )}
              {selectedPhoto && (
                <Modal photo={selectedPhoto} onClose={closeModal} />
              )}
            </>
          }
        </Container>
      </Section>
    </>
  );
}
