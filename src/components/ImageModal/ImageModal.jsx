import Modal from 'react-modal';
import { FaHeart } from 'react-icons/fa';
import clsx from 'clsx';
import s from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    right: 'auto',
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={clsx(s.modal)}>
          <img src={image.url} alt={image.alt} />
          <FaHeart />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
