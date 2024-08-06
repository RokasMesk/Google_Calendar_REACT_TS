import SadFace from '../icons/SadFace';
import styles from './errorMessage.module.css';

interface ErrorMessageProps {
  errorMessage: string;
  handleClick: () => void;
}

function ErrorMessage({ errorMessage, handleClick }: ErrorMessageProps) {
  return (
    <div className={styles.errorMessageContainer}>
      <SadFace width={200} height={200} />
      <p className={styles.errorMessage}>{errorMessage}</p>
      <button className={styles.retryButton} onClick={handleClick}>
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;
