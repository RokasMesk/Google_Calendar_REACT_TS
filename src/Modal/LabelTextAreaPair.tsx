import styles from './createEventModal.module.css';
import { LabelTextAreaProps } from './modalPropsTypes';

export const LabelTextAreaPair = ({
  labelText,
  textAreaName,
  value,
  onChange,
  textAreaClassName,
}: LabelTextAreaProps) => {
  return (
    <div className={styles.datetime}>
      <label className={styles.eventFormLabel}>{labelText}</label>
      <textarea
        className={textAreaClassName}
        id={textAreaName}
        name={textAreaName}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default LabelTextAreaPair;
