import { Event } from '../types';
import styles from './createEventModal.module.css';
import ModalContent from './ModalContent';
import { CreateEventModalProps } from './ModalPropsTypes';

const CreateEventModal = ({
  showModal,
  setShowModal,
  initialDate,
}: CreateEventModalProps) => {
  if (!showModal) {
    return null;
  }
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSaveEvent = (event: Event) => {
    console.log('Event was saved :', event);
    setShowModal(false);
  };
  return (
    <div className={styles.modal} onClick={handleOverlayClick}>
      <ModalContent
        onClose={handleCloseModal}
        onSave={handleSaveEvent}
        initialDate={initialDate}
      />
    </div>
  );
};

export default CreateEventModal;
