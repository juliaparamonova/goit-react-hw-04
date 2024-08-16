import clsx from 'clsx';
import s from './ImageCard.module.css';

const ImageCard = ({ smallImage, regularImage, alt, handleModalOpen }) => {
  return (
    <div
      className={clsx(s.card)}
      onClick={() => handleModalOpen({ url: regularImage, alt })}
    >
      <img src={smallImage} alt={alt} />
    </div>
  );
};

export default ImageCard;
