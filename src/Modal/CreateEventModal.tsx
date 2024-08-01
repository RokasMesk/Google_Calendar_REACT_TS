import { useDispatch, useSelector } from 'react-redux';
import { saveEventToServer } from '../services';
import { Event } from '../types';
import styles from './createEventModal.module.css';
import ModalContent from './ModalContent';
import { closeModal } from '../store/slices/modalSlice';
import { addEvent, RootState } from '../store';

const CreateEventModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isModalOpen);
  const date = useSelector(
    (state: RootState) => state.modal.initialDateForModal
  );

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const handleSaveEvent = async (event: Event) => {
    await saveEventToServer(event);
    dispatch(addEvent(event));
    dispatch(closeModal());
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
