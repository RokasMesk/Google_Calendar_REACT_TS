import { Event } from '../types';
import styles from './createEventModal.module.css';
import ModalContent from './ModalContent';
import { CreateEventModalProps } from './modalPropsTypes';

const CreateEventModal = ({
  isOpen,
  closeModal,
  date,
}: CreateEventModalProps) => {
  if (!isOpen) {
    return null;
  }
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  const handleCloseModal = () => {
    closeModal(false);
  };
  const handleSaveEvent = (event: Event) => {
    console.log('Event was saved :', event);
    closeModal(false);
  };
  return (
    <div className={styles.modal} onClick={handleOverlayClick}>
      <ModalContent
        onClose={handleCloseModal}
        onSave={handleSaveEvent}
        initialDate={date}
      />
    </div>
  );
};

export default CreateEventModal;
