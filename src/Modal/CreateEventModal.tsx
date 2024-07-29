import { saveEventToServer } from '../services';
import { Event } from '../types';
import styles from './createEventModal.module.css';
import ModalContent from './ModalContent';
import { CreateEventModalProps } from './modalPropsTypes';

const CreateEventModal = ({
  isOpen,
  closeModal,
  date,
  events,
  setEvents,
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
  const handleSaveEvent = async (event: Event) => {
    try {
      const savedEvent = await saveEventToServer(event);
      const updatedEvents = [...events, savedEvent];
      setEvents(updatedEvents);
      
      console.log('Event was saved:', savedEvent);
      closeModal(false);
    } catch (error) {
      console.error('Error saving event:', error);
    }
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
