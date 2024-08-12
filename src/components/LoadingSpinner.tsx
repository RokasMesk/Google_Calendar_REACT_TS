import styles from './loadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer} data-testid="loading-spinner">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
