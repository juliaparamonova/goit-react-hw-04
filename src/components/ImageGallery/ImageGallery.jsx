import clsx from 'clsx';
import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, handleModalOpen }) => {
  return (
    <ul className={clsx(s.gallery)}>
      {images.map(({ urls: { small, regular }, alt_description, id }) => (
        <li key={id}>
          <ImageCard
            smallImage={small}
            regularImage={regular}
            alt={alt_description}
            handleModalOpen={handleModalOpen}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
